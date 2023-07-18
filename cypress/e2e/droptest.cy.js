describe('drops',()=>{


    it.skip('drops',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#checkBoxOption1').check().should("be.checked")
    })

    it('dynamic drops',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#dropdown-class-example').select('option1')

        cy.get('#autocomplete').type('ind')
        cy.wait(2000)

        cy.get(".ui-menu-item").each(($el,index,$list)=>{
          const inputtname =  $el.text();

          if(inputtname=='India'){
            cy.wrap($el).click()
          }
        })
    })
})