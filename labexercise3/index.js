import fs from "fs";
import path from "path";

const source = path.join(process.cwd(), "source");
const target = path.join(process.cwd(), "target");

if (!fs.existsSync(target)) {
    fs.mkdirSync(target);
}

fs.readdir(source, (err, files) => {
    if (err) {
        console.log("Source folder read nahi ho raha");
        return;
    }

    files.forEach(file => {
        const srcFile = path.join(source, file);
        const destFile = path.join(target, file);

        fs.copyFile(srcFile, destFile, (err) => {
            if (err) {
                console.log("Copy error:", file);
            } else {
                console.log("Copied:", file);
            }
        });
    });
});
