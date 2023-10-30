sap.ui.define([
	"sap/ui/core/ComponentContainer"
], (ComponentContainer) => {
	"use strict";

	new ComponentContainer({
		name: "project1",
		settings : {
			id : "walkthrough"
		},
		async: true
	}).placeAt("content");
});