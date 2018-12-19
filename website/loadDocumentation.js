const fs = require('fs');
const marked = require('marked');
const path = require('path');
const toc = require('markdown-toc');

const DOCUMENTATION_EXTENSION = '.md';
const DOCUMENTATION_DIRECTORIES = ["core_rules", "weapons_&_equipment", "arcane_powers_&_themes"];
const documentation = {
    "text": "# Table of Contents"
};

DOCUMENTATION_DIRECTORIES.forEach(directoryName => {
    let safeDirectoryName = generateName(directoryName);
    documentation[safeDirectoryName.simpleName] = {"topLevelDirectory": true};
    documentation.text += `\n<h2 class="chapterTitles"><a href="document/${safeDirectoryName.url}"> ${safeDirectoryName.title}</a></h2>`;
    generateContent(directoryName);
});

documentation.text = marked(documentation.text);

function generateContent (directoryName) {
    let directory = path.resolve(__dirname, '..', directoryName);
    let files = fs.readdirSync(directory, "utf8");
    if (!files) console.error(`No files found in ${directoryName}.`);
    files.forEach(file => {
        if (path.extname(file) !== DOCUMENTATION_EXTENSION) return;
        let contents = fs.readFileSync(path.join(directory, file), 'utf8');

        // Turn contents into MD
        let markdown = toc.insert(contents, {
            maxdepth: 5,
            slugify: (header) =>
            header.toLowerCase().replace(/[^\w]+/g, '-')}
        );
        generateMD(markdown, [generateName(directoryName)]);

    });
}

function generateMD(markdown, depthArray) {
    let documentationPath = documentation;
    let latestLink = "/document/";
    let linkMD = "[documentation](/document)/";

    depthArray.forEach(item => {
        documentationPath = documentationPath[item.simpleName];
        latestLink += `${item.url}/`;
        linkMD += `[${item.simpleName}](${latestLink})/`;
    });

    if (depthArray.length === 1) {
        let firstLevelCatigory = documentation[depthArray[0].simpleName];
        if (!firstLevelCatigory.text) firstLevelCatigory.text = "";

        firstLevelCatigory.text += marked(markdown.replace(/(#+ )(.+)/g, (match, hashes, text) => {
            return `${hashes}[${text}](/document/${generateName(text).url}/)`;
        }));
    }
    let headerSize = depthArray.length;
    let split;
    while ((!split || split.length <= 1) && headerSize <= 6) {
        let regex = new RegExp(`(^|\n) *#{${headerSize}}\\s`, 'g');
        split = markdown.split(regex);
        if (split.length === 1) headerSize++;
    }
    if (!split || split.length === 1) return;

    split = split.filter(item => item.trim());
    split.forEach(item => {
        item = item.trim();
        if (!item || item.match(/^\s*#.+/)) {
            return;
        }
        let title = generateName(item.match(/^.*/)[0].trim());
        if (depthArray.length === 1) documentation.text += `\n<h4 class="chapterTitles">- <a href="/document/${title.url}/">${title.title}</a></h4>`;

        let sectionMD = linkMD + `[${title.simpleName}]()\n\n`;
        for (let i = 0; i < depthArray.length; i++) sectionMD += "#";
        sectionMD += ` ${item}`;

        let finishedSection = {
            "text": marked(sectionMD.replace(/(#+ )(.+)/g, (match, hashes, text) => {
                return `${hashes}[${text}](/document/${generateName(text).url}/)`;
            })),
            "title": title.title,
            "path": documentationPath
        };
        documentationPath[title.simpleName] = finishedSection;
        documentation[title.simpleName] = documentationPath[title.simpleName];
        
        let newDepthArray = depthArray.slice();
        newDepthArray.push(title);
        generateMD(sectionMD.replace(/^.*/, ""), newDepthArray);
    });
}

function generateName(name) {
    let formattedName = {
        simpleName: name.replace(/_/gi, ' ').replace(/\.md$|[^a-z0-9& -]/gi, '').trim().toLowerCase()
    };
    formattedName.url = formattedName.simpleName.replace(/ /g, "%20");
    formattedName.title = formattedName.simpleName.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
    return formattedName;
}

module.exports = documentation;
