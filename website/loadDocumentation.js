const fs = require('fs');
const marked = require('marked');
const path = require('path');
const toc = require('markdown-toc');

const DOCUMENTATION_EXTENSION = '.md';
// const DOCUMENTATION_DIRECTORIES = ["core_rules", "weapons_&_equipment", "magic"];
const documentation = {};

// DOCUMENTATION_DIRECTORIES.forEach(directoryName => {
//     documentation[directoryName] = new Map();
//     generateContent(directoryName);
//     console.log('done generating content');
// });

documentation["core rules"] = {};
generateContent("core_rules");

function generateContent (directoryName) {
    let directory = path.resolve(__dirname, '..', directoryName);
    fs.readdir(directory, "utf8", (error, files) => {
        if (error) console.error(error);
        else files.forEach(file => {
            if (path.extname(file) !== DOCUMENTATION_EXTENSION) return;
            // else if(file !== "02 - traits.md") return;

            let contents = fs.readFileSync(path.join(directory, file), 'utf8');

            // Turn contents into MD
            let markdown = toc.insert(contents, {
                maxdepth: 5,
                slugify: (header) =>
                header.toLowerCase().replace(/[^\w]+/g, '-')}
            );
            generateMD(markdown, [generatePageName(directoryName)]);

            });
        });
}

function generateMD(markdown, depthArray) {
    let documentationPath = documentation;
    let latestLink = "/document/";
    let linkMD = "[documentation](/document)/";
    depthArray.forEach(item => {
        documentationPath = documentationPath[item];
        latestLink += `${generatePageName(item).replace(/ /g, "%20")}/`;
        linkMD += `[${item}](${latestLink})/`;
    });
    if (depthArray.length === 1) {
        let firstLevelCatigory = documentation[depthArray[0]];
        if (!firstLevelCatigory.text) firstLevelCatigory.text = "";

        firstLevelCatigory.text += marked(markdown.replace(/(#+ )(.+)/g, (match, hashes, text) => {
            return `${hashes}[${text}](/document/${generatePageName(text).replace(/ /g, "%20")}/)`;
        }));
    }
    let regex = new RegExp(`(^|\n) *#{${depthArray.length}}\\s`, 'g');

    let split = markdown.split(regex);
    if (split.length === 1) return;
    split = split.filter(item => item.trim());
    split.forEach(item => {
        item = item.trim();
        if (!item) {
            return;
        }
        let title = generatePageName(item.match(/^.*/)[0].trim());
        let sectionMD = linkMD + `[${title}]()\n\n`;

        for (let i = 0; i < depthArray.length; i++) sectionMD += "#";
        sectionMD += ` ${item}`;
        documentationPath[generatePageName(title)] = {
            "text": marked(sectionMD.replace(/(#+ )(.+)/g, (match, hashes, text) => {
                return `${hashes}[${text}](/document/${generatePageName(text).replace(/ /g, "%20")}/)`;
            })),
            "title": title
        };
        documentation[generatePageName(title)] = {
            "text": marked(sectionMD.replace(/(#+ )(.+)/g, (match, hashes, text) => {
                return `${hashes}[${text}](/document/${generatePageName(text).replace(/ /g, "%20")}/)`;
            })),
            "title": title,
            "path": documentationPath
        };
        let newDepthArray = depthArray.slice();
        newDepthArray.push(title);
        // if (depthArray.length > 3) return;
        generateMD(sectionMD.replace(/^.*/, ""), newDepthArray);
    });

}

function generatePageName(filename) {
    return filename.replace(/_/gi, ' ').replace(/\.md$|[^a-z0-9& -]/gi, '').toLowerCase();
}

module.exports = documentation;
