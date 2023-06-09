// @ts-nocheck
sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel", "sap/ui/core/Fragment", "sap/ui/Device", "sap/ui/core/UIComponent", "sap/m/Button"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Fragment, Device, UIComponent, Button, formatter) {
        "use strict";

        let app = {
            showNavButton: false,
        };
        return Controller.extend("com.uisap.randevu.controller.MainView", {
            onInit: async function () {
                const _this = this;
                const router = this.getOwnerComponent().getRouter();
                router.attachRoutePatternMatched(this.onRoutePatternMatched, this);
                this.getOwnerComponent().setModel(new JSONModel(app), "App");

                // login modeli
                this.getOwnerComponent().setModel(
                    new JSONModel({
                        busy: false,
                    }),
                    "login"
                );
                this.getOwnerComponent().setModel(
                    new JSONModel({
                        hideMobile: Device.system.tablet || Device.system.desktop ? true : false,
                        small: false,
                        large: true,
                        welcomeMsg: "Hoşgeldin",
                        bgImg: "",
                        bgColor: "#1d2d3e",
                    }),
                    "Properties"
                );

                this.resize();
            },

            resize: function () {
                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty("--vh", `${vh}px`);
                if (window.innerWidth < 600) {
                    this.getOwnerComponent().getModel("Properties").setProperty("/hideMobile", false);
                } else this.getOwnerComponent().getModel("Properties").setProperty("/hideMobile", true);
                if (window.innerHeight < 930) {
                    this.getOwnerComponent().getModel("Properties").setProperty("/small", true);
                    this.getOwnerComponent().getModel("Properties").setProperty("/large", false);
                } else {
                    this.getOwnerComponent().getModel("Properties").setProperty("/small", false);
                    this.getOwnerComponent().getModel("Properties").setProperty("/large", true);
                }
            },

            homeIconPress: function () {
                window.location.href = "#/Reservation";
            },

            onRoutePatternMatched: async function (event) {
                const _this = this;
                const currentRouteName = event.getParameter("name");

                let vh = window.innerHeight * 0.01;
                document.documentElement.style.setProperty("--vh", `${vh}px`);

                if (currentRouteName !== "Login") {
                    let app = _this.getOwnerComponent().getModel("App").getData();
                    currentRouteName != "" ? (app.showNavButton = true) : (app.showNavButton = false);

                    _this.getOwnerComponent().getModel("App").setData(app);
                    _this.getOwnerComponent().getModel("App").refresh();
                }
            },

            navButtonPress: function () {
                const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.navTo("Home");
            },
        });
    }
);
