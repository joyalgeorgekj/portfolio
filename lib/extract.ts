import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import { render } from "./render";

export function extractor(path: string) {
    try {
        const md = readFileSync(
            join(cwd(), "/content/markdown", path),
            "utf-8"
        );
        return render(md);
    } catch (error) {
        console.log(`Failed to load markdown\nPath: ${path}`, error);
        return render("");
    }
}
