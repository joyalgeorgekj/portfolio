import MarkdownIt from "markdown-it";

const renderer = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true,
});

export function render(md: string) {
    return renderer.render(md);
}
