import { promises as fs } from "fs";
import * as path from "path";

async function createNewBlogPost() {
    const date = new Date();
    const isoDate = date.toISOString();
    const dirName = 'placeholder-title';
    const dir = path.join(process.cwd(), 'blog', dirName);

    try {
        // create a new directory
        await fs.mkdir(dir, { recursive: true });

        // create a new markdown file with frontmatter
        const frontmatter = `---\ntitle: ${dirName}\ndate: ${isoDate}\n---\n`;
        await fs.writeFile(path.join(dir, "index.md"), frontmatter);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

createNewBlogPost();
