describe('test', function () {

  it('test_red_3_lowercase', function () {
    cy.visit('http://localhost:8080');
    cy.get('#input').clear().type('f00');
    cy.get('#text_red').should('have.text', 'Красный - 255');
    cy.get('#text_green').should('have.text', 'Зеленый - 0');
    cy.get('#text_blue').should('have.text', 'Синий - 0');
  });
});