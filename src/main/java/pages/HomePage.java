package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import junit.framework.Assert;

public class HomePage {
	public HomePage(WebDriver driver) {
		this.driver = driver;
	}

	WebDriver driver;
	
	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Set SkyBlue Background')]")
	WebElement SKYE_BLUE_BACKGROUND_ELEMENT;
	@FindBy(how = How.XPATH, using = "//button[contains(text(),'Set White Background')]")
	WebElement SKYE_WHITE_BACKGROUND_ELEMENT;
	
	public void userShouldBeAbleTosetSkyBackgroundBlue() {
		SKYE_BLUE_BACKGROUND_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	public void userShouldBeAbleTosetSkyBackgroundWhite() {
		SKYE_WHITE_BACKGROUND_ELEMENT.click();
		try {
			Thread.sleep(3000);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
	}
	
	
}
