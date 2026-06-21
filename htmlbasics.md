# HTML Basics — Quick Reference

## Document skeleton
```html
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Page title</title>
    <link rel="stylesheet" href="styles.css" />
</head>
<body>
    <!-- content -->
    <script src="script.js"></script>
</body>
</html>
```

## Important concepts
- Doctype: `<!doctype html>` enables standards mode (HTML5).
- Root: `<html lang="...">` — declare language for accessibility/SEO.
- Meta charset: `utf-8`.
- Responsive: viewport meta required for mobile layouts.

## Common elements
- Headings: `<h1>` ... `<h6>`
- Paragraph: `<p>`
- Links: `<a href="url" target="_blank" rel="noopener">text</a>`
- Images: `<img src="img.jpg" alt="description" />`
- Lists: `<ul>`, `<ol>`, `<li>`
- Tables: `<table>`, `<thead>`, `<tbody>`, `<tr>`, `<td>`, `<th>`
- Forms: `<form>`, `<input>`, `<textarea>`, `<select>`, `<button>`

## Input types (examples)
- text, password, email, url, tel, number, checkbox, radio, file, date, submit

## Semantic elements
- Use semantic tags for structure and accessibility:
    - `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`

## Attributes & selectors
- id vs class: `id` unique, `class` reusable
- data attributes: `data-*` for custom data
- global attributes: `title`, `hidden`, `aria-*`, `role`

## Accessibility & SEO
- Provide meaningful `alt` text for images.
- Use proper heading order (single `<h1>` per page preferred).
- Use `aria-*` roles for dynamic widgets when necessary.

## Linking CSS & JS
- CSS: `<link rel="stylesheet" href="styles.css">`
- Inline CSS (avoid for large projects): `<style>...</style>`
- JS: place `<script>` before `</body>` for faster rendering or use `defer`.

## Comments
- `<!-- This is a comment -->`

## Best practices
- Keep HTML semantic and minimal.
- Separate concerns: HTML for structure, CSS for presentation, JS for behavior.
- Validate with the W3C validator.
- Use HTTPS for external resources and add `rel="noopener noreferrer"` when opening new tabs.

## Small examples
- Accessible image:
```html
<img src="avatar.jpg" alt="Profile photo of Jane Doe">
```
- Link opening in new tab safely:
```html
<a href="https://example.com" target="_blank" rel="noopener noreferrer">Visit</a>
```

Keep this as a cheat-sheet while learning and building pages.

# HTML Basics Notes

## What is HTML?
HTML stands for HyperText Markup Language.

## Important Tags
- h1 to h6
- p
- a
- img
- ul, ol, li
- table
- form

## Key Learnings
- HTML provides structure to web pages.
- Semantic tags improve accessibility.