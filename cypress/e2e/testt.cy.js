describe('newtest',()=>{

    it('testt',()=>{

        Cypress.config('defaultCommadTimeout',700)


        cy.visit(Cypress.env('url')+"/seleniumPractise/#/")

      
        cy.get(".search-keyword").type('ca')
        cy.wait(3000)

        cy.fixture('example').then((data)=>{

            data.nameofproduct.forEach((elel)=>{
                cy.clickLink(elel);

            })
            

        })
       
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();

        var sum =0;

        cy.get('tbody>tr>td:nth-child(4)').each(($kl,index,$list)=>{

            let textt=$kl.text();

            sum=Number(sum)+Number(textt)
         
        }).then(()=>{
            cy.log(sum)
        })
        cy.get(':nth-child(14)').click();
    })
})