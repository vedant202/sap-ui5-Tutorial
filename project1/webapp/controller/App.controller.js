sap.ui.define(
    [
        "sap/ui/core/mvc/Controller",
        "sap/m/MessageToast",
        "sap/ui/model/json/JSONModel",
        "sap/ui/model/resource/ResourceModel"
    ],
    function(Controller,MessageToast,JSONModel,ResourceModel) {
      "use strict";
  
      return Controller.extend("ui5.walkthrouh.controller.App", {
        onInit() {
          const oData = {
            receipent:{
              name:"Eorld"
            }
          }

          const oModel = new JSONModel(oData)
          this.getView().setModel(oModel)

          const i18Model = new ResourceModel({
            bundleName:"ui5.walkthrough.i18n.i18n"
          })
          this.getView().setModel(i18Model,"i18n")
        },

        onShowHello(){
          // alert("Hello world")
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sReceipent = this.getView().getModel().getProperty("/receipent/name")
          const sMsg = oBundle.getText("helloMsg", [sReceipent]);

          MessageToast.show(sMsg)
        }
      });
    }
  );
  