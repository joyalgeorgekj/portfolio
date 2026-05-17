import { readFileSync } from "node:fs";
import { join } from "node:path";
import { cwd } from "node:process";
import { render } from "./render";

export function extractor(path: string) {
    console.log("Path: ", path);

    const md = readFileSync(join(cwd(), "content/markdown/", path), {
        encoding: "utf-8",
    });
    return render(md);
}
