const fs = require('fs');
const path = require('path');

describe('Simple Button App', () => {
  beforeEach(() => {
    // Reset modules so script.js can be required fresh each test
    jest.resetModules();

    // Load the page HTML into the JSDOM document body
    const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8');
    document.documentElement.innerHTML = html;
  });

  test('clicking the increment button updates the counter display', () => {
    // Require the script after the DOM is set up; it will attach a DOMContentLoaded listener
    require(path.resolve(__dirname, '..', 'script.js'));

    // Fire DOMContentLoaded so script initializes and wires listeners
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const btn = document.getElementById('btnIncrement');
    const display = document.getElementById('counterDisplay');

    // initial value should be "0"
    expect(display.textContent).toBe('0');

    // simulate a user click
    btn.click();

    // the displayed text should update to "1"
    expect(display.textContent).toBe('1');
  });

  test('clicking reset sets the counter back to zero', () => {
    require(path.resolve(__dirname, '..', 'script.js'));
    document.dispatchEvent(new Event('DOMContentLoaded'));

    const btn = document.getElementById('btnIncrement');
    const reset = document.getElementById('btnReset');
    const display = document.getElementById('counterDisplay');

    // increment twice
    btn.click();
    btn.click();
    expect(display.textContent).toBe('2');

    // reset should bring it back to 0
    reset.click();
    expect(display.textContent).toBe('0');
  });
});
