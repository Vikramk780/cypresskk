describe('test',()=>{

    it ('hello',()=>{

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

       const lent= cy.get('table>thead>tr>th').its('length')
       const row =cy.get('div[class="tableFixHead"] tbody>tr').its('length')

       var name ='hello';
       nameofvalue(name);
       function nameofvalue(name ){

        for(let i=1; i<=9; i++){
            for(let j=1; j<=4; j++){

                cy.log('the row is ==>'+(i)+"The coloumn is==>"+(j))

                cy.get("div[class='tableFixHead'] tbody>tr:nth-child("+i+")>td:nth-child("+j+")").then((getname)=>{

                    const nameoftablevalue= getname.text();
                    if(nameoftablevalue=="Ronaldo"){
                        console.log(nameoftablevalue)
                        cy.log(nameoftablevalue)
                        cy.log('the row isk ==>'+(i)+"The coloumn isk==>"+(j))
                    }
                   
                })

            }
        }

       


       }
    })
})