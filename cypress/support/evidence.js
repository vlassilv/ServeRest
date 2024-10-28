function collectEvidence(testTitle, testState) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const date = new Date().toISOString().split('T')[0];
    // Define o caminho das pastas com base na data atual
    const screenshotFolder = `cypress/evidence/screenshots/${date}`;
    const logFolder = `cypress/evidence/logs/${date}`;
    // Cria as pastas se não existirem
    cy.task('mkdir', screenshotFolder);
    cy.task('mkdir', logFolder);
    // Captura de screenshot
    cy.screenshot(`${screenshotFolder}/screenshot-${testTitle}-${timestamp}`);
    // Log de teste com informações sobre o resultado
    const logData = {
        testTitle: testTitle,
        state: testState,
        timestamp: timestamp,
    };
    // Salva o log em um arquivo JSON
    cy.writeFile(`${logFolder}/log-${timestamp}.json`, logData);
}
export default collectEvidence;