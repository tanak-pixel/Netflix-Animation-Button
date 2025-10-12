# Netflix Animation Button

A small static demo that shows a Netflix-style animated button using only HTML, CSS and JavaScript.

## Features

- Centered, stylized button that animates vertical red bars on hover.
- No build tools or dependencies — open `index.html` in a browser to run.
- Bars are generated dynamically by `script.js` to match the button width.

## Project files

- `index.html` — Demo page with the button markup.
- `style.css` — Styles for layout, button, and the animated bars.
- `script.js` — Generates `.bar` spans and controls the hover animation via transitions.
- `README.md` — This file.

## How to run

1. Clone or download the repository.
2. Open the project folder and double-click `index.html`, or open it from PowerShell:

```powershell
start index.html
```

3. Hover the button to see the animated bars.

## Development & Notes

- The button element uses the `btn` class. The span containing the label uses `button-text`.
- `script.js` appends multiple `<span class="bar">` elements inside `.btn`. Those are absolutely positioned and animated using transform (scaleY) so they do not affect the button's text layout.
- If you change the button width, the script will regenerate the number of bars to fill that width when the page loads.

## Troubleshooting

- Label truncated or only part of the text shows:
	- Verify `style.css` is loaded (check head link). Ensure `.button-text` has `white-space: nowrap` and `overflow: visible`.
	- Make sure the button element has class `btn` and the label is inside a `.button-text` span.

- Animation doesn't run:
	- Open DevTools (F12) -> Console. Look for JS errors (path typos, missing files).
	- Confirm `script.js` is included at the bottom of `index.html`.

## License
Use this project for learning and demonstration. No license is attached.