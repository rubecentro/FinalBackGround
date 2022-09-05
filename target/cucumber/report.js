$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/Background.feature");
formatter.feature({
  "line": 2,
  "name": "change Backgroung Color",
  "description": "",
  "id": "change-backgroung-color",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Feature1"
    }
  ]
});
formatter.before({
  "duration": 7927990100,
  "status": "passed"
});
formatter.scenario({
  "line": 6,
  "name": "Sky Blue Background",
  "description": "",
  "id": "change-backgroung-color;sky-blue-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "Set SkyBlue Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I click on the button",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the background color will change to sky blue",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.set_skyBlue_background_button_exists()"
});
formatter.result({
  "duration": 263621300,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_click_on_the_button()"
});
formatter.result({
  "duration": 3132401400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.the_background_color_will_change_to_sky_blue()"
});
formatter.result({
  "duration": 1363292300,
  "status": "passed"
});
formatter.before({
  "duration": 3611899800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Sky white Background",
  "description": "",
  "id": "change-backgroung-color;sky-white-background",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "Set SkyWhite Background button exists",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "I clicked on the button",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "the background color will change to sky white",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsDefinition.set_skyWhite_background_button_exists()"
});
formatter.result({
  "duration": 38500,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.i_clicked_on_the_button()"
});
formatter.result({
  "duration": 3141873400,
  "status": "passed"
});
formatter.match({
  "location": "StepsDefinition.the_background_color_will_change_to_sky_white()"
});
formatter.result({
  "duration": 1182922700,
  "status": "passed"
});
});