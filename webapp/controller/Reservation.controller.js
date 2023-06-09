// @ts-nocheck
sap.ui.define(
    ["./BaseController", "sap/ui/model/json/JSONModel", "sap/ui/Device"],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, JSONModel, Device) {
        "use strict";

        var navAction = {
            go: function () {},
            title: "Geri",
            device: Device.system,
            detailShowHeader: Device.system.desktop,
            mainShowHeader: false,
            msgType: "Information",
            actionBar: Device.system.desktop || Device.system.tablet,
            footerAction: false,
            message: true,
            browserWidth: Device.resize.width,
            browserHeight: Device.resize.height,
            showInfo: false,
        };
        // var rList = [
        //     {
        //         id: 1,
        //         number_plate: "34 ABC 34",
        //         name: "Ahmet",
        //         surname: "Yılmaz",
        //         phone: "0532 123 45 67",
        //         date: "10.06.2023",
        //         time: "10:00",
        //         status: "Acil",
        //         statusType: "Error",
        //         statusIcon: "sap-icon://alert",
        //         location: "UZUNBEY TESİSİ",
        //         plug_no: "Fiş no : " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 2,
        //         number_plate: "34 EC 2344",
        //         name: "Mehmet",
        //         surname: "Yılmaz",
        //         phone: "0532 343 17 34",
        //         date: "10.06.2023",
        //         time: "12:10",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "BAŞİSKELE LİMAN",
        //         plug_no: "Fiş no : " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 3,
        //         number_plate: "12 AA 344",
        //         name: "Kemal",
        //         surname: "Aydın",
        //         phone: "0532 132 33 55",
        //         date: "10.06.2023",
        //         time: "12:30",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "KUTLUKENT TESİSİ",
        //         plug_no: "Fiş no : " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 4,
        //         number_plate: "44 DA 556",
        //         name: "Gülsüm",
        //         surname: "Hacıoğlu",
        //         phone: "0532 877 26 33",
        //         date: "10.06.2023",
        //         time: "10:10",
        //         status: "Yüksek",
        //         statusType: "Warning",
        //         statusIcon: "sap-icon://alert",
        //         location: "AKDENİZ SERBESTBÖLGE",
        //         plug_no: "Fiş no : " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 5,
        //         number_plate: "16 XYZ 78",
        //         name: "Ayşe",
        //         surname: "Demir",
        //         phone: "0532 555 99 11",
        //         date: "10.06.2023",
        //         time: "14:20",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "UZUNBEY TESİSİ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 6,
        //         number_plate: "06 LMN 123",
        //         name: "Ali",
        //         surname: "Kaya",
        //         phone: "0532 987 65 43",
        //         date: "10.06.2023",
        //         time: "16:40",
        //         status: "Acil",
        //         statusType: "Error",
        //         statusIcon: "sap-icon://alert",
        //         location: "BAŞİSKELE TUTKAL",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 7,
        //         number_plate: "35 SDG 567",
        //         name: "Fatma",
        //         surname: "Akar",
        //         phone: "0532 246 80 12",
        //         date: "10.06.2023",
        //         time: "18:15",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "BAŞİSKELE LİMAN",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 8,
        //         number_plate: "07 JKL 432",
        //         name: "Hasan",
        //         surname: "Öztürk",
        //         phone: "0532 777 22 44",
        //         date: "10.06.2023",
        //         time: "20:30",
        //         status: "Yüksek",
        //         statusType: "Warning",
        //         statusIcon: "sap-icon://alert",
        //         location: "KÜTAHYA TESİSİ ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 9,
        //         number_plate: "67 QWE 908",
        //         name: "Zeynep",
        //         surname: "Şahin",
        //         phone: "0532 321 65 87",
        //         date: "10.06.2023",
        //         time: "09:45",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "KUTLUKENT TESİSİ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 10,
        //         number_plate: "16 ASB 567",
        //         name: "Emre",
        //         surname: "Kılıç",
        //         phone: "0532 444 88 77",
        //         date: "10.06.2023",
        //         time: "13:55",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "MUDURNU TESİSİ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 11,
        //         number_plate: "35 ZXC 321",
        //         name: "Selin",
        //         surname: "Arslan",
        //         phone: "0532 999 11 22",
        //         date: "10.06.2023",
        //         time: "15:30",
        //         status: "Yüksek",
        //         statusType: "Warning",
        //         statusIcon: "sap-icon://alert",
        //         location: "AKHİSAR TESİSİ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 12,
        //         number_plate: "07 QAZ 789",
        //         name: "Ayhan",
        //         surname: "Koç",
        //         phone: "0532 666 33 99",
        //         date: "10.06.2023",
        //         time: "17:10",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "AKDENİZ TESİSİ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 13,
        //         number_plate: "61 BNM 123",
        //         name: "Deniz",
        //         surname: "Demir",
        //         phone: "0532 888 77 11",
        //         date: "10.06.2023",
        //         time: "19:20",
        //         status: "Acil",
        //         statusType: "Error",
        //         statusIcon: "sap-icon://alert",
        //         location: "ALİKAHYA TESİSİ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        //     {
        //         id: 14,
        //         number_plate: "16 TYU 789",
        //         name: "Gökhan",
        //         surname: "Yıldız",
        //         phone: "0532 222 33 44",
        //         date: "10.06.2023",
        //         time: "11:45",
        //         status: "Normal",
        //         statusType: "Information",
        //         statusIcon: "",
        //         location: "MASSTAŞ",
        //         plug_no: "Fiş no: " + Math.floor(Math.random() * 10000000000).toString(),
        //     },
        // ];
        return Controller.extend("com.uisap.randevu.controller.Reservation", {
            onInit: function () {
                // Navigation modeli
                this.getView().setModel(new JSONModel(navAction), "parameters");
                this.getView().setModel(new JSONModel({}), "selectedReservation");

                // Resize event
                window.addEventListener("resize", () => {
                    this.resizeWindow();
                });

                this.resizeWindow();

                function generateFakeData(count) {
                    var rList = [];

                    var usedPlates = new Set();

                    var names = ["Ahmet", "Mehmet", "Kemal", "Gülsüm", "Ayşe", "Ali", "Fatma", "Hasan", "Zeynep", "Emre", "Selin", "Ayhan", "Deniz", "Gökhan"];
                    var surnames = ["Yılmaz", "Aydın", "Hacıoğlu", "Demir", "Kaya", "Akar", "Öztürk", "Şahin", "Kılıç", "Arslan", "Koç", "Yıldız"];
                    var facilities = [
                        {
                            code: "2110",
                            name: "KARTEPE TESİSİ",
                            zipCode: "41285",
                            city: "Kartepe",
                            province: "Kocaeli",
                            address: "YE TR KARTEPE TESİSİ",
                        },
                        {
                            code: "2115",
                            name: "UZUNBEY TESİSİ",
                            zipCode: "41180",
                            city: "Kartepe",
                            province: "Kocaeli",
                            address: "YE TR UZUNBEY TESİSİ",
                        },
                        {
                            code: "2120",
                            name: "BAŞİSKELE TUTKAL",
                            zipCode: "KOCAELİ",
                            city: "Başiskele",
                            province: "Kocaeli",
                            address: "YE TR BAŞİSKELE TESİSİ",
                        },
                        {
                            code: "2125",
                            name: "BAŞİSKELE LİMAN",
                            zipCode: "BAŞİSKELE",
                            city: "Başiskele",
                            province: "Kocaeli",
                            address: "YE TR BAŞİSKELE LİMAN",
                        },
                        {
                            code: "2130",
                            name: "KÜTAHYA TESİSİ",
                            zipCode: "Kütahya",
                            city: "Kütahya",
                            province: "Kütahya",
                            address: "KÜTAHYA TESİSİ (ESKİ)",
                        },
                        {
                            code: "2140",
                            name: "KUTLUKENT TESİSİ",
                            zipCode: "Tekkeköy",
                            city: "Samsun",
                            province: "Samsun",
                            address: "YE TR KUTLUKENT TESİSİ",
                        },
                        {
                            code: "2160",
                            name: "MUDURNU TESİSİ",
                            zipCode: "Mudurnu",
                            city: "Bolu",
                            province: "Bolu",
                            address: "YE TR MUDURNU TESİSİ",
                        },
                        {
                            code: "2170",
                            name: "AKHİSAR TESİSİ",
                            zipCode: "41285",
                            city: "Manisa",
                            province: "Manisa",
                            address: "YE TR AKHİSAR TESİSİ",
                        },
                        {
                            code: "2180",
                            name: "AKDENİZ TESİSİ",
                            zipCode: "33040",
                            city: "İçel",
                            province: "İçel",
                            address: "YE TR AKDENİZ TESİSİ",
                        },
                        {
                            code: "2195",
                            name: "ALİKAHYA TESİSİ",
                            zipCode: "41285",
                            city: "Kartepe",
                            province: "Kocaeli",
                            address: "YE TR ALİKAHYA TESİSİ",
                        },
                        {
                            code: "2210",
                            name: "ALİKAHYA TESİSİ",
                            zipCode: "41310",
                            city: "İzmit",
                            province: "Kocaeli",
                            address: "YE TR ALİKAHYA TESİSİ",
                        },
                        {
                            code: "2310",
                            name: "MASSTAŞ",
                            zipCode: "Mudurnu",
                            city: "Bolu",
                            province: "Bolu",
                            address: "MASSTAŞ",
                        },
                        {
                            code: "2410",
                            name: "AKDENİZ SERBESTBÖLGE",
                            zipCode: "Mersin",
                            city: "Mersin",
                            province: "Mersin",
                            address: "AKDENİZ SERBEST BÖLGE",
                        },
                    ];

                    for (var i = 0; i < count; i++) {
                        var facilityIndex = Math.floor(Math.random() * facilities.length);
                        var facility = facilities[facilityIndex];

                        var id = i + 1;
                        var number_plate = generateUniquePlate(usedPlates);
                        var name = getRandomElement(names);
                        var surname = getRandomElement(surnames);
                        var phone = generateRandomPhone();
                        var date = generateRandomDate();
                        var time = generateRandomTime();
                        var status = generateRandomStatus();
                        var statusType = getStatusType(status);
                        var statusIcon = getStatusIcon(statusType);
                        var location = facility.name;
                        var location_data = facility;
                        var plug_no = Math.floor(Math.random() * 10000000000).toString();

                        var data = {
                            id: id,
                            number_plate: number_plate,
                            name: name,
                            surname: surname,
                            phone: phone,
                            date: date,
                            time: time,
                            status: status,
                            statusType: statusType,
                            statusIcon: statusIcon,
                            location: location,
                            location_data: location_data,
                            plug_no: plug_no,
                        };

                        rList.push(data);
                    }

                    return rList;
                }

                function generateUniquePlate(usedPlates) {
                    var plate = generatePlate();
                    while (usedPlates.has(plate)) {
                        plate = generatePlate();
                    }
                    usedPlates.add(plate);
                    return plate;
                }

                function generatePlate() {
                    var numbers = "0123456789";
                    var letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

                    var plate = "";

                    for (var i = 0; i < 2; i++) {
                        plate += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    }

                    plate += " ";

                    for (var j = 0; j < 2; j++) {
                        plate += letters.charAt(Math.floor(Math.random() * letters.length));
                    }

                    plate += " ";

                    for (var k = 0; k < 4; k++) {
                        plate += numbers.charAt(Math.floor(Math.random() * numbers.length));
                    }

                    return plate;
                }

                function getRandomElement(array) {
                    return array[Math.floor(Math.random() * array.length)];
                }

                function generateRandomPhone() {
                    var phone = "0532 ";
                    for (var i = 0; i < 7; i++) {
                        phone += Math.floor(Math.random() * 10).toString();
                        if (i === 2 || i === 4) {
                            phone += " ";
                        }
                    }
                    return phone;
                }

                function generateRandomDate() {
                    var day = Math.floor(Math.random() * 30) + 1; // Random day between 1 and 30
                    var month = Math.floor(Math.random() * 12) + 1; // Random month between 1 and 12
                    var year = 2023; // Fixed year
                    return padNumber(day) + "." + padNumber(month) + "." + year;
                }

                function padNumber(number) {
                    return number.toString().padStart(2, "0");
                }

                function generateRandomTime() {
                    var hour = Math.floor(Math.random() * 24); // Random hour between 0 and 23
                    var minute = Math.floor(Math.random() * 60); // Random minute between 0 and 59
                    return padNumber(hour) + ":" + padNumber(minute);
                }

                function generateRandomStatus() {
                    var statuses = ["Acil", "Normal", "Yüksek"];
                    return getRandomElement(statuses);
                }

                function getStatusType(status) {
                    switch (status) {
                        case "Acil":
                            return "Error";
                        case "Normal":
                            return "Information";
                        case "Yüksek":
                            return "Warning";
                        default:
                            return "";
                    }
                }

                function getStatusIcon(statusType) {
                    switch (statusType) {
                        case "Error":
                            return "sap-icon://alert";
                        case "Warning":
                            return "sap-icon://alert";
                        default:
                            return "";
                    }
                }

                // Örnek kullanım:
                var rList = generateFakeData(20);

                this.getView().setModel(new JSONModel(rList), "Reservation");
                this.getView().getModel("selectedReservation").setData(rList[0]);
                this.byId("ReservationList").getItems()[0].setHighlight("Information");
            },

            resizeWindow: function () {
                let width = window.innerWidth;
                let height = window.innerHeight;

                if (width < height && Device.system.desktop) {
                    navAction.detailShowHeader = true;
                } else navAction.detailShowHeader = false;
                this.getView().getModel("parameters").setProperty("/browserWidth", width);
                this.getView().getModel("parameters").setProperty("/browserHeight", height);
                this.getView().getModel("parameters").refresh(true);
            },

            // ******************* NAVIGATION  *******************
            getSplitAppObj: function () {
                var result = this.byId("__app");
                if (!result) {
                    console.log("SplitApp object can't be found");
                }
                return result;
            },

            navButtonPress: function () {
                const _this = this;
                let title = this.getView().getModel("parameters").getData().title;
                if (title != "Geri" && Device.system.phone) {
                    navAction.title = "Geri";
                    navAction.mainShowHeader = false;
                    navAction.footerAction = false;
                } else
                    navAction.go = function () {
                        const oRouter = sap.ui.core.UIComponent.getRouterFor(_this);
                        oRouter.navTo("Home");
                    };

                let back = this.getView().getModel("parameters").getData().go;
                back();
                this.getView().getModel("parameters").refresh(true);
            },
            // ******************* NAVIGATION END  *******************

            onListItemPress: async function (oEvent) {
                const _this = this;
                this.byId("detailPage").scrollTo(0);
                navAction.go = function () {
                    _this.getSplitAppObj().backMaster(null, null);
                };
                Device.system.phone ? ((navAction.title = "Liste"), (navAction.mainShowHeader = true), (navAction.footerAction = true)) : "Geri";
                this.getSplitAppObj().toDetail(this.createId("detailPage"), "slide", null, null);
                this.getSplitAppObj().hideMaster();
                this.getView().getModel("parameters").refresh(true);

                let selectedItem = oEvent.getSource().getBindingContext("Reservation").getObject();
                let selectedReservation = this.getView().getModel("selectedReservation");
                selectedReservation.setData(selectedItem);
                selectedReservation.refresh(true);

                let items = oEvent.getSource().getList().getItems();
                items.forEach((item) => {
                    item.setHighlight("None");
                });
                oEvent.getSource().setHighlight("Information");
            },
        });
    }
);
