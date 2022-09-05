package tests;

import org.openqa.selenium.support.PageFactory;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pages.BrowserFactory;
import pages.HomePage;

public class StepsDefinition extends BrowserFactory {
	
	HomePage homePage;
	
	@Before
	public void base()  {
		init();		
		homePage= PageFactory.initElements(driver, HomePage.class);		
	}	
	@Given("^Set SkyBlue Background button exists$")
	public void set_skyBlue_background_button_exists() {
	   
	}
	@When("^I click on the button$")
	public void i_click_on_the_button() {
		homePage.userShouldBeAbleTosetSkyBackgroundBlue();
		
	}
	@Then("^the background color will change to sky blue$")
	public void the_background_color_will_change_to_sky_blue(){
		tearDown();
	}
	@Given("^Set SkyWhite Background button exists$")
	public void set_skyWhite_background_button_exists() {
	   
	}
	@When("^I clicked on the button$")
	public void i_clicked_on_the_button() {
		homePage.userShouldBeAbleTosetSkyBackgroundWhite();
		
	}
	@Then("^the background color will change to sky white$")
	public void the_background_color_will_change_to_sky_white(){
		
		tearDown();
	}


}
