describe('Navigation Test', () => {
	it('Visits the More page and then clicks the Home button', () => {
		cy.visit('http://localhost:3000');
		cy.contains('More').click();
		cy.url().should('include', '/overview');
		cy.contains('Home').click();
		cy.url().should('eq', 'http://localhost:3000/');
	});
});

describe('Topics Page', () => {
	it('Clicks the Save Icon and then navigates to Your Favorites', () => {
		cy.visit('http://localhost:3000');
		cy.get('img[alt="Save Icon"]').first().click();
		cy.contains('Your favorites').click();
		cy.url().should('include', '/favorite');
		cy.get('img[alt="Delete icon"]').first().click();
	});
});

describe('Pagination Test', () => {
	it('Checks the pagination functionality', () => {
		cy.visit('http://localhost:3000');
		cy.contains('2').click();
		cy.get('img[alt="shape"]').click();
	});
});

describe('Search Functionality Test', () => {
	it('Checks the search functionality', () => {
		cy.visit('http://localhost:3000');
		cy.get('input[placeholder="Search Art"]').type('Interior{enter}');
	});
});
