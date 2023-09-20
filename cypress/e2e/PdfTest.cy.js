describe('Tasks01: PDF Test', () => {

  /*
  Method Name: beforeEach
  Method Description: Executes a function before each test case in a test suite.
  */
  beforeEach(() => {
    cy.clearCache()
  });

  it.only('Test01: Compare PDF Files', () => {
    cy.task('readPdf', 'cypress/files/Hello01.pdf').then(file01 => {
      cy.task('readPdf', 'cypress/files/Hello02.pdf').then(file02 => {
        expect(file01).to.equal(file02);
      });
    });
  });

  it('Test02: Compare Not Equal files', () => {
    cy.task('readPdf', 'cypress/files/Hello01.pdf').then(file01 => {
      cy.task('readPdf', 'cypress/files/Task01.pdf').then(file02 => {
        expect(file01).to.not.equal(file02);
      });
    });
  })
});
