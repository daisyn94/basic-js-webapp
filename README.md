# basic-js-webapp
A minimal web app that demonstrates a clickable counter with a reset button. It includes a small automated test suite using Jest and jsdom.

**Features**
- Click the **Click me** button to increment the counter.
- Click **Reset** to set the counter back to zero.
- Simple, accessible HTML and small JavaScript module.
- Automated tests using Jest + `jest-environment-jsdom`.

**Files**
- `index.html` — the page markup and UI.
- `script.js` — application logic
- `test/app.test.js` — Jest tests that simulate user clicks.
- `package.json` — test script and Jest configuration.

Getting started
---------------

Requirements
- Node.js and npm (for running tests).

Install dependencies

```powershell
npm install
```

Run the app locally
--------------------

Option 1.
You can open `index.html` directly in your browser by double-clicking it.


Option 2.
```powershell
# Using Python's simple server (if Python is installed). From the project root:
python -m http.server 8000

# then open http://localhost:8000 in your browser
'http://localhost:8000'
```

Option 3.
```powershell
# Install http-server if you don't have it
npm install -g http-server

# From the project root:
http-server .

# then open http://localhost:8000 in your browser
'http://localhost:8000'
```

Run tests
---------

This project uses Jest for automated testing.

```powershell
npm test
```

Notes about the test environment
- `testEnvironment` is set to `jsdom` in `package.json` and `jest-environment-jsdom` is installed as a dev dependency.
- The test loads `index.html` into the test DOM, requires `script.js`, dispatches a `DOMContentLoaded` event so the app initializes, simulates clicks with `button.click()`, and asserts the `counterDisplay` value.

