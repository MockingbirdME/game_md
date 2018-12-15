const fs = require('fs');
const Marked = require('marked');
const path = require('path');
const toc = require('markdown-toc');


const DOCUMENTATION_DIRECTORY = path.resolve(__dirname, '..', 'core_rules');
const DOCUMENTATION_EXTENSION = '.md';
const documentation = {};


fs.readdir(DOCUMENTATION_DIRECTORY, "utf8", (error, files) => {
    if (error) console.error(error);
    else files.forEach(file => {
        if (path.extname(file) !== DOCUMENTATION_EXTENSION) return;
        fs.readFile(path.join(DOCUMENTATION_DIRECTORY, file), 'utf8', (error, contents) => {
            if (error) console.error(error);
            else {
                // noinspection JSUnusedGlobalSymbols
                let markdown = toc.insert(contents, {
                    maxdepth: 5,
                    slugify: (header) =>
                       header.toLowerCase().replace(/[^\w]+/g, '-')}
                );
                documentation[generatePageName(file)] = Marked(markdown);
            }
        });
    });
});

function generatePageName(filename) {
    return filename.replace(/_/gi,' ').replace(/\.md$|[^a-z0-9& -]/gi,'').toLowerCase();
}

module.exports = documentation;
