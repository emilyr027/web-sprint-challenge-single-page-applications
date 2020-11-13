describe('Lambda Eats App', () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza");
    })

    // const userName = () => cy.get('input[name="name"]');
    // const email = () => cy.get('input[name="email"]');
    // const size = () => cy.get('input[name="size"]');
    // const toppings = () => cy.get('select[name="toppings"]');
    // const specialInstructions = () => cy.get('input[name="specialInstructions"]');


    it('can input a name', () => {
        cy.get('input[name="name"]')
            .type('Maggie Grace')
            .should('have.value', 'Maggie Grace')
    })

    it('can input an email', () => {
        cy.get('input[name="email"]')
            .type('maggie12345@gmail.com')
            .should('have.value', 'maggie12345@gmail.com')
    })

    it('can select a size', () => {
        cy.get('select[name="size"]')
            .select('mini')
    })

    it('can select toppings', () => {
        cy.get('[type="checkbox"]').check()
    })

    it('can submit special instructions', () => {
        cy.get('input[name="specialInstructions"]')
            .type('please cook for an extra 3 minutes for a crisp crust')
    })

    it('can submit order', () => {
        cy.get('button').click()
    })

});
