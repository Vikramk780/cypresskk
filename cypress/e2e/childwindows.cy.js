describe('test',()=>{


    it ('test child windows',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click();
    })
})