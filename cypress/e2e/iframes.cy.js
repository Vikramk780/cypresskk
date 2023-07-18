describe('testnew',()=>{

    it ('test',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('courses-iframe')

        cy.iframe().find('.login-btn>a').click()
    })
})