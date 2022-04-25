// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: gray; icon-glyph: magic;
let widget = new ListWidget();
let padding = 22;
widget.setPadding(padding, padding, padding, padding);

// Adjust these URLs. "url" is the enpoint of your storjWidget-exporter and widget.url will be opened when you click on the widget on your homescreen.
// widget.url = "http://my-grafana-dashboard.com";
let url = "http://my-storjWidget-exporter.com:3123/bandwidth";

let apiResponse = await loadData();
console.log(apiResponse);

let fontsize = 12;

let vStack = widget.addStack();
vStack.layoutHorizontally();

//Bandwidth today
let viewStackBandwidth = vStack.addStack();
viewStackBandwidth.layoutVertically();
let labelIn = viewStackBandwidth.addText("IN"); 
labelIn.font = Font.mediumSystemFont(fontsize);
let valueIn = viewStackBandwidth.addText(apiResponse.ingress);
valueIn.font = Font.mediumSystemFont(fontsize);
valueIn.textColor = Color.green();
viewStackBandwidth.addSpacer();
let labelOut = viewStackBandwidth.addText("OUT"); 
labelOut.font = Font.mediumSystemFont(fontsize);
let valueOut = viewStackBandwidth.addText(apiResponse.egress);
valueOut.font = Font.mediumSystemFont(fontsize);
valueOut.textColor = Color.green();
viewStackBandwidth.addSpacer();
let calc = (100 / apiResponse.spaceAvailable) * apiResponse.spaceUsed
let calcFormatted = calc.toFixed(2) + " %"
let labelSpaceUsed = viewStackBandwidth.addText("SPACE"); 
labelSpaceUsed.font = Font.mediumSystemFont(fontsize);
let valueSpaceUsed = viewStackBandwidth.addText(calcFormatted);
valueSpaceUsed.font = Font.mediumSystemFont(fontsize);
valueSpaceUsed.textColor = Color.green();

vStack.addSpacer();

//Payout
let viewStackPayout = vStack.addStack();
viewStackPayout.layoutVertically();
let labelPayoutToday = viewStackPayout.addText("TODAY"); 
labelPayoutToday.font = Font.mediumSystemFont(fontsize);
let valuePayoutToday = viewStackPayout.addText(apiResponse.estimatedPayoutToday.toFixed(2) + " $");
valuePayoutToday.font = Font.mediumSystemFont(fontsize);
valuePayoutToday.textColor = Color.green();
viewStackPayout.addSpacer();
let labelPayoutMonth = viewStackPayout.addText("MONTH"); 
labelPayoutMonth.font = Font.mediumSystemFont(fontsize);
let valuePayoutMonth = viewStackPayout.addText(apiResponse.estimatedPayoutTotal.toFixed(2) + " $");
valuePayoutMonth.font = Font.mediumSystemFont(fontsize);
valuePayoutMonth.textColor = Color.green();
viewStackPayout.addSpacer();


let labelTimestamp = viewStackPayout.addText("TIME"); 
labelTimestamp.font = Font.mediumSystemFont(fontsize);
let valueTimestamp = viewStackPayout.addText(getDate());
valueTimestamp.font = Font.mediumSystemFont(fontsize);
valueTimestamp.textColor = Color.green();



Script.setWidget(widget);
Script.complete();
widget.presentMedium();

function getDate() {
  let date = new Date();
  return formatTime(String(date.getHours())) + ":" + formatTime(String(date.getMinutes()));
}

function formatTime(time) {
  if(time.length <= 1) {
    return "0" + time;
    } else {
      return time
    }
}

async function loadData() {
  let req = new Request(url);
  let json = await req.loadJSON();
  return json;
}
