describe('test',()=>{

    it ('test',()=>{


        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#mousehover').trigger('mouseover')
        cy.get("a[href='#top'").click({force:true})
    })
})