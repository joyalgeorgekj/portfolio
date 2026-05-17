import MarkdownIt from "markdown-it";

const renderer = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
});

export function render(md: string) {
    console.log("Markdown: ", md);
    
    return renderer.render(md);
}