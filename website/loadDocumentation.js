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

documentation.core_rules = {};
generateContent("core_rules");

function generateContent (directoryName) {
    let directory = path.resolve(__dirname, '..', directoryName);
    fs.readdir(directory, "utf8", (error, files) => {
        if (error) console.error(error);
        else files.forEach(file => {
            console.log(file);
            if (path.extname(file) !== DOCUMENTATION_EXTENSION) return;
            // else if(file !== "02 - traits.md") return;

            fs.readFile(path.join(directory, file), 'utf8', (error, contents) => {
                if (error) console.error(error);
                else {
                    // Turn contents into MD
                    let markdown = toc.insert(contents, {
                        maxdepth: 5,
                        slugify: (header) =>
                        header.toLowerCase().replace(/[^\w]+/g, '-')}
                    );
                    generateMD(markdown, [directoryName]);
                }
            });
        });
    });
}

function generateMD(markdown, depthArray) {
    console.log("\narray:", depthArray, "\n");
    // let contentTitle = depthArray.pop();
    // console.log(contentTitle);

    let documentationPath = documentation;
    depthArray.forEach(item => documentationPath = documentationPath[item]);

    // console.log(markdown);
    let regex = new RegExp(`(^|\n) *#{${depthArray.length}}\\s`, 'g');

    let split = markdown.split(regex);
    if (split.length === 1) return;
    split = split.filter(item => item.trim());
    console.log(split.length);
    console.log(split);
    split.forEach(item => {
        item = item.trim();
        if (!item) {
            return;
        }
        console.log("item:\n", item.trim());
        let title = generatePageName(item.match(/^.*/)[0].trim());
        console.log("title:", title, "\n\n");
        let sectionMD = "";
        for (let i = 0; i < depthArray.length; i++) sectionMD += "#";
        sectionMD += ` ${item}`;

        documentationPath[generatePageName(title)] = {
            "text": marked(sectionMD),
            "title": title
        };
        console.log(documentationPath[generatePageName(title)]);
        // console.log(sectionMD);
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
