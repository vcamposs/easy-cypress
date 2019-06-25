import addContext from 'mochawesome/addContext';

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false;
});

Cypress.on('test:after:run', (test, runnable) => {
	if (test.state == 'failed') {
		addContext({ test }, `./screenshots/${runnable.parent.title} -- ${test.title} (failed).png`);
	}
});