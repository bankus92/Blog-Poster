# Blog Poster (Writer)

A tiny in-browser writing tool I’m building for my personal blog workflow.

I write posts in raw HTML, and this app helps me draft text normally (title + body) and preview it in the format I use on my site, without hand-writing a bunch of HTML every time.

## What it does (right now)

- Title input + body textarea
- “Post” button that outputs:
  - the title into an `<h1>`
  - the body into a `<p>` preview
- Preserves line breaks/indentation in the preview via CSS
- Supports `Tab` indentation inside the textarea (inserts spaces instead of switching focus)

## What it will do next

- Convert body text into blog-ready HTML blocks (paragraphs, link callouts, etc.)
- Add a copy-to-clipboard button for the generated HTML
- Keep the output aligned with the exact structure I use on my blog templates

## How to run it

No build tools, no dependencies.

1. Clone the repo
2. Open the HTML file in your browser (double-click it)

If you want to run it through a local server (optional):

- VS Code: install “Live Server” and click **Go Live**
- Or use any simple static server you like

## Notes

- This is a personal tool, built from scratch as a learning project.
- Some small behavior blocks (like Tab indentation in textarea) are adapted from public references; I’m leaving source links in comments for traceability.

## License

MIT
