sap.ui.define([
    "sap/m/Text",
    "sap/ui/core/mvc/XMLView"

], (Text,XMLView) => {
	"use strict";
	alert("UI5 is ready");

    // new Text({
    //     text:"Hello World1"
    // }).placeAt("content");

    XMLView.create({
        viewName:"ui5.walkthrough.view.App"
    }).then((oView)=>oView.placeAt("content"))
});