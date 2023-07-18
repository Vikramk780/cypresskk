describe('testalert',()=>{

    it.skip ('testalert',()=>{


        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

        cy.get('#alertbtn').click()

        cy.on('window:alert',(str)=>{



            
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
           
        })
    })


    it('prompt',()=>{

        cy.visit("https://nxtgenaiacademy.com/alertandpopup/")

        
        cy.window().then(win=>{

        
            cy.stub(win,'prompt').returns("hello values passed form promis")
           

            cy.get("button[name='promptalertbox1234']").click()
           
           
        })
     
      
        cy.wait(2000)
    })
})