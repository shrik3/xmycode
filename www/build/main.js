/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "build/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 659);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.2.4.8@@angular/core/index.js'");

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommunityHomepage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CommunityHomepage = (function () {
    function CommunityHomepage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    CommunityHomepage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-communityhomepage',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/communityhomepage/communityhomepage.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n\n\n    <ion-title>\n\n      <!-- {{item.contactname}} -->\n\n      xxx社团主页\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content>\n\n	<!-- {{item.contacttext}} -->\n\n  <ion-card>\n\n\n\n  <ion-item>\n\n    <ion-avatar item-left>\n\n      <img src="assets/images/1.jpg">\n\n    </ion-avatar>\n\n    <h2>Marty McFly</h2>\n\n    <p>November 5, 1955</p>\n\n  </ion-item>\n\n\n\n  <img src="assets/images/7.jpg">\n\n\n\n  <ion-card-content>\n\n    <p>Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.</p>\n\n  </ion-card-content>\n\n\n\n  <ion-row>\n\n    <ion-col>\n\n      <button ion-button icon-left clear small>\n\n        <ion-icon name="thumbs-up"></ion-icon>\n\n        <div>12 Likes</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col>\n\n      <button ion-button icon-left clear small>\n\n        <ion-icon name="text"></ion-icon>\n\n        <div>4 Comments</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col center text-center>\n\n      <ion-note>\n\n        11h ago\n\n      </ion-note>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n</ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/communityhomepage/communityhomepage.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], CommunityHomepage);
    return CommunityHomepage;
}());
//# sourceMappingURL=communityhomepage.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.2.2.0@ionic-angular/index.js'");

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.5.0.1@rxjs/Observable.js'");

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddManage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddManage = (function () {
    function AddManage(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    AddManage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-addmanage',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/addmanage/addmanage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-title>\n\n      建立社团\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/addmanage/addmanage.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], AddManage);
    return AddManage;
}());
//# sourceMappingURL=addmanage.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contactdetails_contactdetails__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manage_manage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popover_popover__ = __webpack_require__(238);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ContactPage = (function () {
    //以上为模拟
    function ContactPage(navCtrl, alertCtrl, toastCtrl, actionSheetCtrl, modalCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.modalCtrl = modalCtrl;
        this.popoverCtrl = popoverCtrl;
        this.friends = "all";
        this.favorites = [];
        this.contacts = [{ contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." },
            { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." },
            { contactid: 3, contactname: "Three", contacttext: "Beauty is to fight for rather than to wait for." }];
    }
    ContactPage.prototype.itemClick = function (event, contact) {
        //点击时加载详细页面
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__contactdetails_contactdetails__["a" /* ContactDetails */]);
    };
    ContactPage.prototype.removeContact = function (contact) {
        var _this = this;
        //请求api删除
        var confirm = this.alertCtrl.create({
            title: '取消关注',
            message: '您真的要取消关注吗？',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        for (var i = 0; i < _this.contacts.length; i++) {
                            if (_this.contacts[i] == contact) {
                                _this.contacts.splice(i, 1);
                            }
                        }
                        var toast = _this.toastCtrl.create({
                            message: '取消关注成功',
                            duration: 1000
                        });
                        toast.present();
                    }
                },
                {
                    text: 'No'
                }
            ]
        });
        confirm.present();
    };
    ContactPage.prototype.hold = function (event, contact) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: "操作列表",
            buttons: [
                {
                    text: '申请管理',
                    handler: function () {
                        //请求api进行管理员身份的申请
                        _this.favorites[_this.favorites.length] = contact;
                        var toast = _this.toastCtrl.create({
                            message: '申请成功',
                            duration: 1000
                        });
                        toast.present();
                    }
                }, {
                    text: '分享',
                    handler: function () {
                    }
                }, {
                    text: '取消关注',
                    role: 'destructive',
                    handler: function () {
                        var confirm = _this.alertCtrl.create({
                            title: '取消关注',
                            message: '您真的要取消关注吗？',
                            buttons: [
                                {
                                    text: 'Yes',
                                    handler: function () {
                                        for (var i = 0; i < _this.contacts.length; i++) {
                                            if (_this.contacts[i] == contact) {
                                                _this.contacts.splice(i, 1);
                                            }
                                        }
                                        var toast = _this.toastCtrl.create({
                                            message: '取消关注成功',
                                            duration: 1000
                                        });
                                        toast.present();
                                    }
                                },
                                {
                                    text: 'No'
                                }
                            ]
                        });
                        confirm.present();
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ContactPage.prototype.doRefresh = function (refresher) {
        this.contacts[3] = { contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." };
        this.contacts[4] = { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." };
        setTimeout(function () {
            refresher.complete();
        }, 1000);
    };
    ContactPage.prototype.openManagePage = function (event, contact) {
        //点击时加载社团管理页面
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__manage_manage__["a" /* ManagePage */]);
    };
    ContactPage.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_4__popover_popover__["a" /* PopoverPage */]);
        popover.present({ ev: event });
    };
    ContactPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contact',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/contact/contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>社团</ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="presentPopover()">\n\n	    <ion-icon name="add"></ion-icon>\n\n	  </button>\n\n    </ion-buttons>\n\n\n\n\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="friends">\n\n      <ion-segment-button value="all">\n\n        特别关注\n\n      </ion-segment-button>\n\n      <ion-segment-button value="favorite">\n\n        我管理的\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n\n  <ion-refresher-content></ion-refresher-content>\n\n</ion-refresher>\n\n  <div [ngSwitch]="friends">\n\n    <ion-list *ngSwitchCase="\'all\'">\n\n      <ion-item-sliding *ngFor="let contact of contacts">\n\n        <ion-item (press)="hold($event,contact)" (click)="itemClick($event,contact)">\n\n          <ion-avatar item-left>\n\n            <img src="assets/images/{{contact.contactid}}.jpg">\n\n          </ion-avatar>\n\n          <h2>{{contact.contactname}}</h2>\n\n          <p>{{contact.contacttext}}</p>\n\n        </ion-item>\n\n\n\n        <ion-item-options>\n\n          <button ion-button color="danger" (click)="removeContact(contact)">\n\n        <ion-icon name="trash"></ion-icon>取消关注</button>\n\n        </ion-item-options>\n\n\n\n\n\n      </ion-item-sliding>\n\n    </ion-list>\n\n\n\n    <ion-list *ngSwitchCase="\'favorite\'">\n\n\n\n        <ion-item *ngFor="let contact of favorites" (click)="openManagePage($event,contact)">\n\n          <ion-avatar item-left>\n\n            <img src="assets/images/{{contact.contactid}}.jpg">\n\n          </ion-avatar>\n\n          <h2>{{contact.contactname}}</h2>\n\n          <p>{{contact.contacttext}}</p>\n\n        </ion-item>\n\n\n\n    </ion-list>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/contact/contact.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], ContactPage);
    return ContactPage;
}());
//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__communityhomepage_communityhomepage__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactDetails; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactDetails = (function () {
    function ContactDetails(params, navCtrl) {
        this.params = params;
        this.navCtrl = navCtrl;
        this.item = this.params.get('item');
    }
    ContactDetails.prototype.openhomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__communityhomepage_communityhomepage__["a" /* CommunityHomepage */]);
    };
    ContactDetails = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-contactdetails',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/contactdetails/contactdetails.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n\n\n    <ion-title>\n\n      <!-- {{item.contactname}} -->\n\n      详细信息\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<!-- {{item.contacttext}} -->\n\n\n\n<ion-list>\n\n  <ion-item>\n\n    <ion-avatar item-left>\n\n      <img src="assets/images/1.jpg">\n\n    </ion-avatar>\n\n    <h2>小米音协会</h2>\n\n    <p>社团账号：6666</p>\n\n  </ion-item>\n\n\n\n     <p> 这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介，这里是社团简介。</p>\n\n\n\n</ion-list>\n\n\n\n\n\n<button ion-button block (click)="openhomepage()">进入社团主页</button>\n\n<button ion-button block >特别关注</button>\n\n<button ion-button block >发送私信</button>\n\n\n\n<!-- <ion-list padding>\n\n\n\n\n\n\n\n    <ion-item (click)="openhomepage()">\n\n      进入社团主页\n\n      <ion-icon name=\'home\' item-left></ion-icon>\n\n      <ion-icon name=\'arrow-forward\' item-right></ion-icon>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n  </ion-list> -->\n\n\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/contactdetails/contactdetails.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], ContactDetails);
    return ContactDetails;
}());
//# sourceMappingURL=contactdetails.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homedetail_homedetail__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__communityhomepage_communityhomepage__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__angular_http__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = (function () {
    function HomePage(navCtrl, menuCtrl, modalCtrl, http) {
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.modalCtrl = modalCtrl;
        this.http = http;
        this.storage = window.localStorage;
        if (this.storage['Logined'] != 'true') {
            var LoginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__login_login__["a" /* LoginPage */]);
            LoginModal.present();
        }
        this.http.get('http://150.95.136.199/community/1').map(function (res) { return res.json(); }).subscribe(function (data) {
            console.log(data);
        });
        this.menuCtrl.enable(true);
        this.passages = [
            {
                id: 1, author: 'Two', img: "assets/images/7.jpg", from: "iPhone 6s", comment: '12', feelgood: '20', time: '1h',
                pimg: "assets/images/2.jpg", content: 'Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.'
            },
            {
                id: 2, author: 'Three', img: "assets/images/8.jpg",
                pimg: "assets/images/3.jpg", from: 'iPhone 6', comment: '24', feelgood: '33', time: '2h',
                content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
            },
            {
                id: 1, author: 'Two', img: "assets/images/2.jpg",
                from: "iPhone 6s", comment: '8', feelgood: '41', time: '3h',
                pimg: "assets/images/1.jpg",
                content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
            }
        ];
    }
    HomePage.prototype.openDetail = function (event, passage) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__homedetail_homedetail__["a" /* HomeDetail */], { item: passage });
    };
    HomePage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.passages.push({
                id: 2, author: 'Three', img: "assets/images/8.jpg",
                pimg: "assets/images/3.jpg", from: 'iPhone 6', comment: '24', feelgood: '33', time: '2h',
                content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
            }, {
                id: 1, author: 'Two', img: "assets/images/2.jpg",
                from: "iPhone 6s", comment: '8', feelgood: '41', time: '3h',
                pimg: "assets/images/1.jpg",
                content: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy."
            });
            infiniteScroll.complete();
        }, 2000);
    };
    HomePage.prototype.openHomepage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__communityhomepage_communityhomepage__["a" /* CommunityHomepage */]);
    };
    HomePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/home/home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>海报栏</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-card *ngFor="let passage of passages">\n\n    <ion-item>\n\n      <ion-avatar item-left (click)=openHomepage()>\n\n        <img src="{{passage.pimg}}">\n\n      </ion-avatar>\n\n      <h2 (click)=openHomepage()>{{passage.author}}</h2>\n\n      <p>来自{{passage.from}}</p>\n\n    </ion-item>\n\n    <img src="{{passage.img}}" (click)="openDetail($event,passage)">\n\n\n\n    <ion-card-content class="nowarp">\n\n      <p>{{passage.content}}</p>\n\n    </ion-card-content>\n\n\n\n    <ion-row>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="thumbs-up"></ion-icon>\n\n          <div>{{passage.feelgood}} 赞</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col>\n\n        <button ion-button icon-left clear small>\n\n          <ion-icon name="text"></ion-icon>\n\n          <div>{{passage.comment}} 评论</div>\n\n        </button>\n\n      </ion-col>\n\n      <ion-col center text-center>\n\n        <ion-note>\n\n          {{passage.time}} ago\n\n        </ion-note>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n\n  <ion-infinite-scroll-content loadingText="正在加载更多"></ion-infinite-scroll-content>\n\n</ion-infinite-scroll>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/home/home.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]])
    ], HomePage);
    return HomePage;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeDetail = (function () {
    function HomeDetail(params) {
        this.params = params;
        this.item = this.params.get('item');
    }
    HomeDetail = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-homedetail',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/homedetail/homedetail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n    <ion-title>\n\n      {{item.author}}\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n	<img src="{{item.img}}">\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/homedetail/homedetail.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], HomeDetail);
    return HomeDetail;
}());
//# sourceMappingURL=homedetail.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManagePage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ManagePage = (function () {
    function ManagePage(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
    }
    ManagePage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-manage',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/manage/manage.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-title>\n\n      xxx社团管理页面\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/manage/manage.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], ManagePage);
    return ManagePage;
}());
//# sourceMappingURL=manage.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageDetail; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessageDetail = (function () {
    function MessageDetail(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.item = this.params.get('item');
    }
    MessageDetail = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-messagedetail',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/messagedetail/messagedetail.html"*/'<ion-header>\n\n\n\n  <ion-navbar>\n\n\n\n\n\n\n\n\n\n    <ion-title>\n\n      {{item.from}}\n\n    </ion-title>\n\n\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding class="backcolor">\n\n\n\n\n\n  <ion-card>\n\n<ion-item>\n\n    <ion-avatar item-left>\n\n      <img src="{{item.img}}">\n\n    </ion-avatar>\n\n    <h2>{{item.from}}</h2>\n\n    <p>管理员1</p>\n\n</ion-item>\n\n  <ion-card-content>\n\n    {{item.text}}\n\n  </ion-card-content>\n\n</ion-card>\n\n\n\n\n\n</ion-content>\n\n\n\n<ion-footer class=\'mes\'>\n\n\n\n  <ion-item>\n\n      <ion-input type="text" value=""></ion-input>\n\n    </ion-item>\n\n  <button ion-button> <ion-icon name="send"></ion-icon></button>\n\n\n\n</ion-footer>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/messagedetail/messagedetail.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], MessageDetail);
    return MessageDetail;
}());
//# sourceMappingURL=messagedetail.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagedetail_messagedetail__ = __webpack_require__(235);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesPage = (function () {
    function MessagesPage(navCtrl, modalCtrl) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.messages = [{ from: 'one', text: '明天专场记得来哦', img: 'assets/images/2.jpg' },
            { from: 'two', text: '明天有活动,晚上七点大活小剧场，乐队专场演出', img: 'assets/images/1.jpg' }];
    }
    MessagesPage.prototype.openMessage = function (event, message) {
        // let messageModal = this.modalCtrl.create(MessageDetail,{item:message});
        // messageModal.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__messagedetail_messagedetail__["a" /* MessageDetail */], { item: message });
    };
    MessagesPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-messages',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/messages/messages.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle icon-only>\n\n        <ion-icon name=\'menu\'></ion-icon>\n\n      </button>\n\n    <ion-title>消息</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n<ion-list>\n\n  <ion-item *ngFor="let message of messages" (click)="openMessage($event,message)">\n\n    <ion-avatar item-left>\n\n      <img src="{{message.img}}">\n\n    </ion-avatar>\n\n    <h2>{{message.from}}</h2>\n\n    <p>{{message.text}}</p>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/messages/messages.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], MessagesPage);
    return MessagesPage;
}());
//# sourceMappingURL=messages.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Organizations; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Organizations = (function () {
    function Organizations(params, viewCtrl) {
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.organizations = [{ contactid: 1, contactname: "One", contacttext: "You are my favorite person in my life." },
            { contactid: 2, contactname: "Two", contacttext: "If you get tired, learn to rest, not to quit." },
            { contactid: 3, contactname: "Three", contacttext: "Beauty is to fight for rather than to wait for." },
            { contactid: 4, contactname: "Four", contacttext: "Always remember the past, but never get stuck." },
            { contactid: 5, contactname: "Five", contacttext: "In fact, each of the road leading to the sun, are full of frustrations." }];
    }
    Organizations = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-organizations',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/organizations/organizations.html"*/'<ion-header>\n\n  <ion-navbar>\n\n\n\n    <ion-title>\n\n      社团列表\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/organizations/organizations.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], Organizations);
    return Organizations;
}());
//# sourceMappingURL=organizations.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__organizations_organizations__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__addmanage_addmanage__ = __webpack_require__(229);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopoverPage = (function () {
    function PopoverPage(viewCtrl, navCtrl, app, modalCtrl) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.app = app;
        this.modalCtrl = modalCtrl;
    }
    PopoverPage.prototype.open = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__organizations_organizations__["a" /* Organizations */]);
        this.viewCtrl.dismiss();
    };
    PopoverPage.prototype.add = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__addmanage_addmanage__["a" /* AddManage */]);
        this.viewCtrl.dismiss();
    };
    PopoverPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-popover',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/popover/popover.html"*/'\n\n  <!-- <ion-list-header>Ionic</ion-list-header> -->\n\n  <button ion-item (click)="open()">查看所有社团</button>\n\n  <button ion-item (click)="add()">创建一个社团</button>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/popover/popover.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], PopoverPage);
    return PopoverPage;
}());
//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Register; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Register = (function () {
    function Register(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    Register.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    Register = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/register/register.html"*/'<ion-header>\n\n  <ion-toolbar color=\'primary\'>\n\n    <ion-title>用户注册</ion-title>\n\n    <button ion-button (click)="dismiss()"><span>取消</span></button>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content></ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/register/register.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], Register);
    return Register;
}());
//# sourceMappingURL=register.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_messages__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__contact_contact__ = __webpack_require__(230);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { UserCenter } from '../usercenter/usercenter';
var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_4__contact_contact__["a" /* ContactPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__messages_messages__["a" /* MessagesPage */];
    }
    TabsPage.prototype.ionViewDidEnter = function () {
        this.tabs.select(0);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('myTabs'), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Tabs"])
    ], TabsPage.prototype, "tabs", void 0);
    TabsPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/tabs/tabs.html"*/'<ion-tabs #myTabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="海报" tabIcon="aperture"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="社团" tabIcon="contacts"  tabBadgeStyle="danger"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="消息" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/tabs/tabs.html"*/
        }), 
        __metadata('design:paramtypes', [])
    ], TabsPage);
    return TabsPage;
}());
//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__useredit_useredit__ = __webpack_require__(242);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserCenter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserCenter = (function () {
    function UserCenter(navCtrl, modalCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.user = {
            username: '',
            password: '',
            headface: 'assets/images/2.jpg'
        };
        this.storage = window.localStorage;
        if (this.storage["Logined"] == "true") {
            //已经登陆的状态，不用跳转，显示用户信息即可
            this.user.headface = "assets/images/" + this.storage["username"] + ".jpg";
        }
        else {
            var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
            loginModal.onDidDismiss(function (data) {
                _this.user.headface = "assets/images/" + data + ".jpg";
            });
            loginModal.present();
        }
    }
    UserCenter.prototype.logout = function () {
        var _this = this;
        this.storage["username"] = "";
        this.storage["Logined"] = "";
        var loginModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        loginModal.onDidDismiss(function (data) {
            _this.user.headface = "assets/images/" + data + ".jpg";
        });
        loginModal.present();
    };
    UserCenter.prototype.edit = function (event) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__useredit_useredit__["a" /* UserEdit */]);
    };
    UserCenter = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-usercenter',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/usercenter/usercenter.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      用户中心\n    </ion-title>\n\n    <ion-buttons end>\n      <button ion-button icon-only (click)="edit($event)">\n      <ion-icon name="brush"></ion-icon>\n    </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="usercenter">\n\n<ion-row>\n	<ion-col class=alignCenter>\n		<img src="{{user.headface}}">\n	</ion-col>\n</ion-row>\n\n\n<ion-list no-border>\n\n   <ion-list-header>\n     个人资料\n   </ion-list-header>\n\n   <ion-item>\n     用户名\n     <ion-note item-right>\n     奋斗的小鸟\n     </ion-note>\n   </ion-item>\n\n   <ion-item>\n     个性签名\n     <ion-note item-right>\n     包子油条胡辣汤\n     </ion-note>\n   </ion-item>\n\n   <ion-item>\n     年龄\n     <ion-note item-right>\n     20\n     </ion-note>\n   </ion-item>\n\n   <ion-item>\n     QQ\n     <ion-note item-right>\n     7638193746\n     </ion-note>\n   </ion-item>\n   <ion-item>\n     WeChat\n     <ion-note item-right>\n     111222333\n     </ion-note>\n   </ion-item>\n\n </ion-list>\n\n\n<button ion-button block (click)= "logout()">注销</button>\n\n</ion-content>\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/usercenter/usercenter.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], UserCenter);
    return UserCenter;
}());
//# sourceMappingURL=usercenter.js.map

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserEdit; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserEdit = (function () {
    function UserEdit(navCtrl) {
        this.navCtrl = navCtrl;
    }
    UserEdit = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-useredit',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/useredit/useredit.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      资料编辑\n\n    </ion-title>\n\n\n\n    <ion-buttons end>\n\n      <button ion-button icon-only (click)="save()">\n\n      <ion-icon name="checkmark"></ion-icon>\n\n    </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="usercenter">\n\n\n\n<ion-row>\n\n	<ion-col class=alignCenter>\n\n		<img src="assets/images/2.jpg">\n\n	</ion-col>\n\n</ion-row>\n\n<ion-list>\n\n\n\n  <ion-item>\n\n    <ion-label floating>用户名</ion-label>\n\n    <ion-input type="text"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label floating>个性签名</ion-label>\n\n    <ion-input type="text"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>年龄</ion-label>\n\n    <ion-input type="text"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>QQ</ion-label>\n\n    <ion-input type="text"></ion-input>\n\n  </ion-item>\n\n  <ion-item>\n\n    <ion-label floating>WeChat</ion-label>\n\n    <ion-input type="text"></ion-input>\n\n  </ion-item>\n\n\n\n</ion-list>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/useredit/useredit.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], UserEdit);
    return UserEdit;
}());
//# sourceMappingURL=useredit.js.map

/***/ }),

/***/ 303:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.2.4.1@ionic-native/dist/esm/index.js'");

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.2.4.8@@angular/http/index.js'");

/***/ }),

/***/ 511:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_usercenter_usercenter__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_homedetail_homedetail__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_contactdetails_contactdetails__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_messagedetail_messagedetail__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_organizations_organizations__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_addmanage_addmanage__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_useredit_useredit__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_communityhomepage_communityhomepage__ = __webpack_require__(142);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_usercenter_usercenter__["a" /* UserCenter */],
                __WEBPACK_IMPORTED_MODULE_13__pages_organizations_organizations__["a" /* Organizations */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homedetail_homedetail__["a" /* HomeDetail */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contactdetails_contactdetails__["a" /* ContactDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_messagedetail_messagedetail__["a" /* MessageDetail */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__["a" /* ManagePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addmanage_addmanage__["a" /* AddManage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_useredit_useredit__["a" /* UserEdit */],
                __WEBPACK_IMPORTED_MODULE_18__pages_communityhomepage_communityhomepage__["a" /* CommunityHomepage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */], {
                    tabsHideOnSubPages: 'true' //隐藏全部子页面tabs
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_3__pages_usercenter_usercenter__["a" /* UserCenter */],
                __WEBPACK_IMPORTED_MODULE_13__pages_organizations_organizations__["a" /* Organizations */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_messages_messages__["a" /* MessagesPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_homedetail_homedetail__["a" /* HomeDetail */],
                __WEBPACK_IMPORTED_MODULE_9__pages_contactdetails_contactdetails__["a" /* ContactDetails */],
                __WEBPACK_IMPORTED_MODULE_10__pages_messagedetail_messagedetail__["a" /* MessageDetail */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* Register */],
                __WEBPACK_IMPORTED_MODULE_14__pages_manage_manage__["a" /* ManagePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_addmanage_addmanage__["a" /* AddManage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_useredit_useredit__["a" /* UserEdit */],
                __WEBPACK_IMPORTED_MODULE_18__pages_communityhomepage_communityhomepage__["a" /* CommunityHomepage */]
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] }]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 512:
/***/ (function(module, __webpack_exports__) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.2.4.8@@angular/platform-browser-dynamic/index.js'");

/***/ }),

/***/ 513:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_native__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_usercenter_usercenter__ = __webpack_require__(241);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, actionSheetCtrl) {
        this.platform = platform;
        this.actionSheetCtrl = actionSheetCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_3__pages_tabs_tabs__["a" /* TabsPage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: '用户中心', component: __WEBPACK_IMPORTED_MODULE_5__pages_usercenter_usercenter__["a" /* UserCenter */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["StatusBar"].styleDefault();
            __WEBPACK_IMPORTED_MODULE_2_ionic_native__["Splashscreen"].hide();
            //重写推出按钮******start
            document.addEventListener('backbutton', function () {
                var activeVC = _this.nav.getActive();
                var page = activeVC.instance;
                //
                // if((page instanceof AddManage)||(page instanceof Organizations)){
                //   return this.nav.pop();
                // }
                // if (!(page instanceof TabsPage)) {
                //   if (!this.nav.canGoBack()) {
                //     //检测到在根视图点击了返回按钮。
                //     return this.platform.exitApp();
                //   }
                //   //检测到在子路径中点击了返回按钮。
                //   return this.nav.pop();
                // }
                var tabs = page.tabs;
                var activeNav = tabs.getSelected();
                // if (!activeNav.canGoBack()) {
                //   //检测到在 tab 页面的顶层点击了返回按钮。
                //   return this.platform.exitApp();
                // }
                if (page instanceof __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]) {
                    _this.platform.exitApp();
                }
                //检测到当前 tab 弹出层的情况下点击了返回按钮。
                // return activeNav.pop();
                // if(page instanceof LoginPage){
                //   return this.platform.exitApp();
                // }
            }, false);
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]), 
        __metadata('design:type', __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/langjunman/xmycode/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>菜单</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div class="usercenter">\n      <ion-row>\n        <ion-col>\n          <img src="assets/images/2.jpg">\n        </ion-col>\n      </ion-row>\n    </div>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n      <button ion-item>\n  我的收藏\n</button>\n      <button ion-item>\n  我的分享\n</button>\n    </ion-list>\n  </ion-content>\n\n  <ion-footer class="footcolor">\n    <button ion-button icon-only color=\'light\'><ion-icon  name="cog"></ion-icon>设置</button>\n  </ion-footer>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #Nav #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/app/app.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ActionSheetController"]])
    ], MyApp);
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 648:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__(20);
var map_1 = __webpack_require__(651);
Observable_1.Observable.prototype.map = map_1.map;
//# sourceMappingURL=map.js.map

/***/ }),

/***/ 651:
/***/ (function(module, exports) {

"use strict";
throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/Users/langjunman/xmycode/node_modules/.5.0.1@rxjs/operator/map.js'");

/***/ }),

/***/ 659:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(512);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(511);


__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["platformBrowserDynamic"])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__register_register__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native__ = __webpack_require__(303);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_native___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ionic_native__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, loadingCtrl, alertCtrl, toastCtrl, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.user = {
            username: '',
            password: '',
            headface: 'assets/images/2.jpg'
        };
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.user.username == '') {
            //使用Toast控件进行提示
            var toast = this.toastCtrl.create({
                message: "您输入的用户名格式不正确!",
                duration: 2000,
                position: 'middle'
            });
            toast.present();
        }
        else {
            //alert(this.user.username);
            //console.log(this.user.password);
            var loading_1 = this.loadingCtrl.create({
                content: 'Please wait...',
                spinner: "dots",
                duration: 3000
            });
            loading_1.present();
            //真实的逻辑应该是：去请求登陆的API，返回结果后，进行loading
            //	setTimeout(() => {
            // 		loading.dismiss();
            //}, 5000);
            //}
            //这里模拟了登陆，如果密码为123456，登陆成功，进行相关的保存动作
            if (this.user.password == "123456") {
                var storage = window.localStorage;
                storage["username"] = this.user.username;
                storage["Logined"] = "true";
                setTimeout(function () {
                    loading_1.dismiss();
                    _this.viewCtrl.dismiss(_this.user.username);
                }, 1000);
            }
            else {
                setTimeout(function () {
                    loading_1.dismiss();
                }, 1000);
                var toast = this.toastCtrl.create({
                    message: "密码错误!",
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
            }
        }
    };
    //打开注册窗口
    LoginPage.prototype.openRegisterPage = function () {
        var registerModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_1__register_register__["a" /* Register */]);
        registerModal.present();
    };
    //用户上传头像图片
    LoginPage.prototype.uploadImage = function () {
        var _this = this;
        var opt = { maxImagesCount: 1, width: 100, height: 100, quality: 50 };
        __WEBPACK_IMPORTED_MODULE_3_ionic_native__["ImagePicker"].getPictures(opt).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                _this.user.headface = results[i];
            }
        });
    };
    LoginPage = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/langjunman/xmycode/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      登陆\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div class="logo">\n\n		<img src="assets/images/2.jpg" alt="Ionic logo">\n\n	</div>\n\n <ion-list>\n\n  <ion-item>\n\n    <ion-label floating>用户名</ion-label>\n\n    <ion-input type="text" value="" [(ngModel)] = "user.username"></ion-input>\n\n  </ion-item>\n\n\n\n   <ion-item>\n\n    <ion-label >密码</ion-label>\n\n    <ion-input type="password" value="" [(ngModel)]="user.password"></ion-input>\n\n  </ion-item>\n\n </ion-list>\n\n\n\n<button ion-button block (click)= "login()">登录</button>\n\n<ion-grid>\n\n  <ion-row>\n\n    <ion-col>\n\n      <div class="textAlignRight marginTop10">\n\n        <button ion-button outline (click)="openRegisterPage()">还没有账号？点击注册</button>\n\n      </div>\n\n    </ion-col>\n\n  </ion-row>\n\n\n\n<!--   <ion-row>\n\n    <img src="{{user.headface}}"  (click)="uploadImage()"/>\n\n  </ion-row> -->\n\n</ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/langjunman/xmycode/src/pages/login/login.html"*/
        }), 
        __metadata('design:paramtypes', [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["LoadingController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["AlertController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ToastController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ModalController"], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["ViewController"]])
    ], LoginPage);
    return LoginPage;
}());
//# sourceMappingURL=login.js.map

/***/ })

/******/ });
//# sourceMappingURL=main.js.map