describe('Desafio Web - Automation Practice', () => {
  it('Login com sucesso', () => {
    cy.visit('http://automationpractice.com/index.php?controller=authentication');
    cy.get('#email').type('teste2021@teste.com.br');
    cy.get('#passwd').type('teste');
    cy.get('#SubmitLogin').click();
    cy.contains('Welcome to your account').should('exist');
  });

  it('Busca produto', () => {
    cy.get('#search_query_top').type('dress');
    cy.get('button[name="submit_search"]').click();
    cy.contains('results have been found').should('exist');
  });

  it('Adiciona produto ao carrinho', () => {
    cy.get('.product-container').first().trigger('mouseover');
    cy.get('.ajax_add_to_cart_button').first().click();
    cy.contains('Product successfully added to your shopping cart').should('exist');
  });

  it('Valida produto no checkout', () => {
    cy.get('.button-container a[href$="order"]').click();
    cy.get('#cart_summary').should('exist');
  });
});
