LITI YARN CALCULATOR — INSTALLABLE WEB APP PACKAGE

Files:
- index.html: calculator
- manifest.webmanifest: install metadata
- sw.js: offline cache
- icons/: app icons

IMPORTANT:
For iPhone installation as a home-screen app, this package must be hosted on an HTTPS website.
Opening index.html as a local file will run the calculator but will NOT enable iPhone PWA installation/offline service-worker caching.

Quick test on a laptop:
1. Extract the ZIP.
2. Double-click index.html (or open it in Chrome/Edge).

To install on iPhone:
1. Publish the complete folder to an HTTPS host (for example, your own domain or a static hosting service).
2. Open the HTTPS address in Safari.
3. Tap Share > Add to Home Screen > Add.

Data currently saves in that browser/device's local storage. It does not automatically sync between iPhone and laptop.
