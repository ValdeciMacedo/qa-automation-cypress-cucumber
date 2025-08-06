describe('Desafio API - Trello', () => {
  it('Deve retornar nome da lista e validar status', () => {
    cy.request('https://api.trello.com/1/actions/592f11060f95a3d3d46a987a').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data.list.name).to.exist;
      cy.log('Nome da lista:', response.body.data.list.name);
    });
  });
});
