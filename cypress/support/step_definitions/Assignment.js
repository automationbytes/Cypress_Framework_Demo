import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("I navigate to the website", () => {
  cy.visit("https://damian-events.coursedog.com/");
  cy.reload()
});

When("I select a {string} date from the calendar", (date) => {
  var datemonth = date.split("-")
  cy.log(datemonth[2])
  cy.log(datemonth[0])
  cy.log(datemonth[1])
  
  
  cy.get(".vc-title").click({force:true})
  cy.xpath("(//span[@role='button'])[2]").then(function(elem) {
    cy.log(elem.text())
})
cy.xpath("(//span[@role='button'])[2]").click()
cy.get('span[aria-label="'+datemonth[2]+'"]').click({force:true})
cy.wait(1000)
cy.xpath('//span[text()[normalize-space()="'+datemonth[1]+'"]]').click({force:true})
cy.wait(1000)
cy.xpath('(//span[text()[normalize-space()="'+datemonth[0]+'"]])[1]').click({force:true})

});

When("I verify {string} events on that day", (events) => {

  cy.xpath("//*[contains(text(),'"+events+"')]").then(function(elem) {
    cy.log(elem.text())
    
})
cy.xpath("//*[contains(text(),'"+events+"')]").should('include.text',events)
})


When("I verify {string} events on that phrase", (events) => {

  cy.xpath("(//a[contains(@aria-label,'Event name')])[1]").then(function(elem) {
    cy.log(elem.text())
    
})
cy.xpath("(//a[contains(@aria-label,'Event name')])[1]").should('include.text',events)
})

When("I enter {string} keyword in navigation bar", (events) => {

cy.get('input[title="Events search"]').type(events)
})

When("I select {string} organization from FilterbyOrganization dropdown", (events) => {

  cy.get('#orgSelect').select(events,{ force: true })

})

When("I verify {string} organized by organization", (events) => {

  cy.get('#orgSelect').select(events,{ force: true })

})

When("I verify {string} count", (events) => {

  cy.get('p[role="status"]').should('include.text',events)
})

When("I click on Today Events", () => {

  cy.get('[href="/today"]').click()
})


When("I click on Featured Events", () => {

  cy.get('[href="/featured"]').click()
})

When("I click on Future Events", () => {

  cy.get('input[role="search"]').type('{enter}')
})

And("I click on first Test Event", () => {

  cy.xpath("(//a[contains(@aria-label,'Event name')])[1]").click()
})

Then("I verify {string} in Add to calendar link", (str) => {

  cy.xpath("(//button[contains(@class,'btn btn-secondary')])[1]").should('include.text',str)
})


Then("I verify {string} in Add to Google calendar link", (str) => {

  cy.xpath("(//button[contains(@class,'btn btn-secondary')])[2]").should('include.text',str)
})

Then("I verify {string} Event Type text", (str) => {

  cy.xpath("(//label[contains(@class,'block mt-1')])[1]").should('include.text',str)
})
Then("I verify {string} Organized by text", (str) => {

  cy.xpath("(//label[contains(@class,'block mt-1')])[3]").should('include.text',str)
})

Then("I verify {string} Contacts text", (str) => {

  cy.xpath("(//label[contains(@class,'block mt-1')])[2]").should('include.text',str)
})
Then("I verify {string} Event Description text", (str) => {

  cy.xpath("//h3").should('include.text',str)
})
   
