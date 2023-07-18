describe('test',()=>{

    it ('testnewiwndows',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(($el)=>{

            const urlnewtab=$el.prop('href');
            cy.visit(urlnewtab);
            cy.origin(urlnewtab,()=>{

                cy.url().should('include',"qaclickacademy")
            })
        })
    })
})