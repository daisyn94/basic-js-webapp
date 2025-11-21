(() => {
	// Cached references to frequently-accessed DOM elements
	let incBtn;
	let resetBtn;
	let display;

	// Simple numeric state for the counter
	let count = 0;

	// update(): render the current `count` value into the DOM
	function update() {
		if (display) display.textContent = count;
	}

	// increment(): increase the count and refresh the UI
	function increment() {
		count += 1;
		update();
	}

	// reset(): reset the count back to zero and refresh the UI
	function reset() {
		count = 0;
		update();
	}

	// Wait for DOMContentLoaded to ensure the elements exist before
	// calling `document.getElementById` and attaching event listeners.
	document.addEventListener('DOMContentLoaded', () => {
		// Cache frequently-accessed elements after the DOM is ready
		incBtn = document.getElementById('btnIncrement');
		resetBtn = document.getElementById('btnReset');
		display = document.getElementById('counterDisplay');

		// Attach event listeners if elements were found
		if (incBtn) incBtn.addEventListener('click', increment);
		if (resetBtn) resetBtn.addEventListener('click', reset);

		// Initialize UI now that the DOM is available
		update();
	});
})();

