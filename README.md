# Help Tech

Live website: https://assohelptech.org

Help Tech is a static website for a non-profit digital support association based in Montreal. The site promotes free tech assistance for individuals and small organizations, including in-person help, remote support, and website creation services.

## Overview

This repository contains the landing page and related informational pages for Help Tech, including:

- the main homepage
- English and French legal/usage pages
- email contact form integration
- responsive styling and JavaScript behavior

## Project structure

- `index.html` — main French homepage
- `index-en.html` — English homepage
- `cgu.html` — French terms and legal notice
- `cgu-en.html` — English terms and legal notice
- `cgv.html` — French general sales conditions
- `cgv-en.html` — English general sales conditions
- `merci.html` / `thanks.html` — thank-you pages after form submission
- `style.css` — site styling
- `script.js` — navigation and page behavior
- `Logo principal-selection.png` — brand/logo asset

## Local preview

Because this is a static website, there is no build step required.

Option 1: open the HTML files directly in a browser.

Option 2: run a local web server from the project folder:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Contact form

The contact form is connected to a Web3Forms endpoint via the `action` attribute in the HTML form. If you want to change the form recipient or integration, update the relevant form fields in `index.html` and `index-en.html`.

## Notes

- The site is designed for a simple, accessible presentation.
- All pages are static and lightweight, so deployment is easy on any basic web hosting service.
- The content is focused on free digital help, practical guidance, and domain/website support.

## License

This project is provided for the Help Tech website and does not include a separate project license unless otherwise stated by the organization.
