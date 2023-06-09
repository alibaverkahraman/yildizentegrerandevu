sap.ui.define(["sap/ui/core/mvc/Controller"], function (Controller) {
    "use strict";

    return Controller.extend("com.uisap.randevu.controller.Login", {
        onInit: function () {},
        login(oEvent) {
            const username = this.getView().byId("username").getValue();
            const password = this.getView().byId("password").getValue();
            if (username === "demo" && password === "demo") {
                window.location.href = "#/Reservation";
            } else {
                sap.m.MessageToast.show("Kullanıcı adı veya şifre hatalı");
            }
        },
    });
});
