webpackJsonp([21,31],{"/I2J":function(n,l,e){"use strict";var t=e("2NJR"),u=e("mscR");e.d(l,"a",function(){return i});var i=([{path:"",component:t.a,children:u.a}],function(){function n(){}return n}())},"0Jx9":function(n,l,e){"use strict";var t=e("ZIf2");e.d(l,"b",function(){return t.a}),e.d(l,"a",function(){return u});var u=function(){function n(n,l,e,t,u,i,o,r){this.isbn=n,this.title=l,this.authors=e,this.published=t,this.subtitle=u,this.rating=i,this.thumbnails=o,this.description=r}return n}()},"1BuQ":function(n,l,e){"use strict";var t=e("b5V/");e.d(l,"a",function(){return u});var u=function(){function n(n){this.bs=n}return n.prototype.ngOnInit=function(){this.books=this.bs.getAll()},n.ctorParameters=function(){return[{type:t.a}]},n}()},"2JBC":function(n,l,e){"use strict";var t=e("5oXY"),u=e("b5V/");e.d(l,"a",function(){return i});var i=function(){function n(n,l){this.bs=n,this.route=l}return n.prototype.ngOnInit=function(){var n=this.route.snapshot.params;this.book=this.bs.getSingle(n.isbn)},n.prototype.getRating=function(n){return new Array(n)},n.ctorParameters=function(){return[{type:u.a},{type:t.t}]},n}()},"2NJR":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},"F+Ij":function(n,l,e){"use strict";function t(){return a["ɵviewDef"](0,[a["ɵelementDef"](0,null,null,0,"img",[["class","ui tiny image"]],[[3,"src",4]],null,null,null,null)],null,function(n,l){var e=l.component,t=e.book.thumbnails[0].url;n(l,0,0,t)})}function u(){return a["ɵviewDef"](0,[a["ɵelementDef"](0,null,null,1,"span",[],null,null,null,null,null),a["ɵtextDef"](null,[", "])],null,null)}function i(){return a["ɵviewDef"](0,[a["ɵelementDef"](0,null,null,4,"span",[],null,null,null,null,null),a["ɵtextDef"](null,["\n      ",""]),a["ɵanchorDef"](256,null,null,1,null,u),a["ɵdirectiveDef"](0,null,0,f.i,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),a["ɵtextDef"](null,["\n    "])],function(n,l){var e=(l.component,!l.context.last);n(l,3,0,e)},function(n,l){var e=(l.component,l.context.$implicit);n(l,1,0,e)})}function o(){return a["ɵviewDef"](0,[a["ɵanchorDef"](256,null,null,1,null,t),a["ɵdirectiveDef"](0,null,0,f.i,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),a["ɵtextDef"](null,["\n"]),a["ɵelementDef"](0,null,null,16,"div",[["class","content"]],null,null,null,null,null),a["ɵtextDef"](null,["\n  "]),a["ɵelementDef"](0,null,null,1,"div",[["class","header"]],null,null,null,null,null),a["ɵtextDef"](null,["",""]),a["ɵtextDef"](null,["\n  "]),a["ɵelementDef"](0,null,null,1,"div",[["class","description"]],null,null,null,null,null),a["ɵtextDef"](null,["",""]),a["ɵtextDef"](null,["\n  "]),a["ɵelementDef"](0,null,null,4,"div",[["class","metadata"]],null,null,null,null,null),a["ɵtextDef"](null,["\n    "]),a["ɵanchorDef"](256,null,null,1,null,i),a["ɵdirectiveDef"](12,null,0,f.j,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),a["ɵtextDef"](null,["\n  "]),a["ɵtextDef"](null,["\n  "]),a["ɵelementDef"](0,null,null,1,"div",[["class","extra"]],null,null,null,null,null),a["ɵtextDef"](null,["ISBN ",""]),a["ɵtextDef"](null,["\n"]),a["ɵtextDef"](null,["\n"])],function(n,l){var e=l.component,t=e.book.thumbnails;n(l,1,0,t);var u=e.book.authors;n(l,14,0,u)},function(n,l){var e=l.component,t=e.book.title;n(l,6,0,t);var u=e.book.subtitle;n(l,9,0,u);var i=e.book.isbn;n(l,18,0,i)})}function r(){return a["ɵviewDef"](0,[a["ɵelementDef"](0,null,null,1,"a",[["class","bm-book-list-item"]],null,null,null,o,D),a["ɵdirectiveDef"](1024,null,0,c.a,[],null,null)],null,null)}var a=e("3j3K"),f=e("2Je8"),c=e("iQBC");e.d(l,"b",function(){return D}),l.a=o;var s=[],D=a["ɵcreateRendererTypeV2"]({encapsulation:2,styles:s,data:{animation:[]}});a["ɵcreateRendererTypeV2"]({encapsulation:2,styles:[],data:{animation:[]}}),a["ɵcreateComponentFactory"]("a.bm-book-list-item",c.a,r)},"GEF/":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},Qeu5:function(n,l,e){"use strict";function t(){return i["ɵviewDef"](0,[i["ɵtextDef"](null,["\n  "]),i["ɵelementDef"](0,null,null,13,"div",[["class","ui container"]],null,null,null,null,null),i["ɵtextDef"](null,["\n    "]),i["ɵelementDef"](0,null,null,1,"h1",[],null,null,null,null,null),i["ɵtextDef"](null,["Home"]),i["ɵtextDef"](null,["\n    "]),i["ɵelementDef"](0,null,null,1,"p",[],null,null,null,null,null),i["ɵtextDef"](null,["Das ist der BookMonkey."]),i["ɵtextDef"](null,["\n    "]),i["ɵelementDef"](0,null,null,4,"a",[["class","ui red button"],["routerLink","../books"]],[[0,"target",0],[3,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;n.component;if("click"===l){var u=i["ɵnodeValue"](n,10).onClick(e.button,e.ctrlKey,e.metaKey)!==!1;t=u&&t}return t},null,null),i["ɵdirectiveDef"](10,null,0,r.w,[r.m,r.t,a.g],{routerLink:[0,"routerLink"]},null),i["ɵtextDef"](null,["\n      Buchliste ansehen\n      "]),i["ɵelementDef"](0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null),i["ɵtextDef"](null,["\n    "]),i["ɵtextDef"](null,["\n  "]),i["ɵtextDef"](null,["\n  "])],function(n,l){var e=(l.component,"../books");n(l,10,0,e)},function(n,l){var e=(l.component,i["ɵnodeValue"](l,10).target),t=i["ɵnodeValue"](l,10).href;n(l,9,0,e,t)})}function u(){return i["ɵviewDef"](0,[i["ɵelementDef"](0,null,null,1,"bm-home",[],null,null,null,t,c),i["ɵdirectiveDef"](1024,null,0,o.a,[],null,null)],null,null)}var i=e("3j3K"),o=e("a/of"),r=e("5oXY"),a=e("2Je8");e.d(l,"a",function(){return s});var f=[],c=i["ɵcreateRendererTypeV2"]({encapsulation:2,styles:f,data:{animation:[]}}),s=(i["ɵcreateRendererTypeV2"]({encapsulation:2,styles:[],data:{animation:[]}}),i["ɵcreateComponentFactory"]("bm-home",o.a,u))},"V/Me":function(n,l,e){"use strict";Object.defineProperty(l,"__esModule",{value:!0});var t=e("3j3K"),u=e("GEF/"),i=e("2Je8"),o=e("5oXY"),r=e("/I2J"),a=e("b5V/"),f=e("oBWA"),c=e("Qeu5"),s=e("c6wM"),D=e("d9FM"),m=e("2NJR"),d=e("a/of"),p=e("1BuQ"),v=e("2JBC");e.d(l,"AppModuleNgFactory",function(){return _});var h=this&&this.__extends||function(n,l){function e(){this.constructor=n}for(var t in l)l.hasOwnProperty(t)&&(n[t]=l[t]);n.prototype=null===l?Object.create(l):(e.prototype=l.prototype,new e)},b=function(n){function l(l){return n.call(this,l,[f.a,c.a,s.a,D.a],[f.a])||this}return h(l,n),Object.defineProperty(l.prototype,"_LOCALE_ID_4",{get:function(){return null==this.__LOCALE_ID_4&&(this.__LOCALE_ID_4="en"),this.__LOCALE_ID_4},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new i.a(this._LOCALE_ID_4)),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_ROUTES_6",{get:function(){return null==this.__ROUTES_6&&(this.__ROUTES_6=[[{path:"",component:m.a,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:d.a},{path:"books",component:p.a},{path:"books/:isbn",component:v.a}]}]]),this.__ROUTES_6},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_BookStoreService_7",{get:function(){return null==this.__BookStoreService_7&&(this.__BookStoreService_7=new a.a),this.__BookStoreService_7},enumerable:!0,configurable:!0}),Object.defineProperty(l.prototype,"_TRANSLATIONS_FORMAT_8",{get:function(){return null==this.__TRANSLATIONS_FORMAT_8&&(this.__TRANSLATIONS_FORMAT_8="xtb"),this.__TRANSLATIONS_FORMAT_8},enumerable:!0,configurable:!0}),l.prototype.createInternal=function(){return this._CommonModule_0=new i.e,this._RouterModule_1=new o.n(this.parent.get(o.p,null)),this._AppRoutingModule_2=new r.a,this._AppModule_3=new u.a,this._AppModule_3},l.prototype.getInternal=function(n,l){return n===i.e?this._CommonModule_0:n===o.n?this._RouterModule_1:n===r.a?this._AppRoutingModule_2:n===u.a?this._AppModule_3:n===t.LOCALE_ID?this._LOCALE_ID_4:n===i.f?this._NgLocalization_5:n===o.s?this._ROUTES_6:n===a.a?this._BookStoreService_7:n===t.TRANSLATIONS_FORMAT?this._TRANSLATIONS_FORMAT_8:l},l.prototype.destroyInternal=function(){},l}(t["ɵNgModuleInjector"]),_=new t.NgModuleFactory(b,u.a)},ZIf2:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(n,l){this.url=n,this.title=l}return n}()},"a/of":function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},"b5V/":function(n,l,e){"use strict";var t=e("0Jx9");e.d(l,"a",function(){return u});var u=function(){function n(){this.books=[new t.a("9783864903571","Angular",["Johannes Hoppe","Danny Koppenhagen","Ferdinand Malcher","Gregor Woiwode"],new Date(2017,3,1),"Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen",5,[new t.b("https://ng-buch.de/cover2.jpg","Buchcover")],"Mit Angular setzen Sie auf ein modernes und modulares..."),new t.a("9783864901546","AngularJS",["Philipp Tarasiewicz","Robin Böhm"],new Date(2014,5,29),"Eine praktische Einführung",5,[new t.b("https://ng-buch.de/cover1.jpg","Buchcover")],"Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...")]}return n.prototype.getAll=function(){return this.books},n.prototype.getSingle=function(n){return this.books.find(function(l){return l.isbn===n})},n.ctorParameters=function(){return[]},n}()},c6wM:function(n,l,e){"use strict";function t(){return o["ɵviewDef"](0,[o["ɵelementDef"](0,null,null,2,"a",[["class","bm-book-list-item item"]],[[0,"target",0],[3,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;n.component;if("click"===l){var u=o["ɵnodeValue"](n,1).onClick(e.button,e.ctrlKey,e.metaKey)!==!1;t=u&&t}return t},r.a,r.b),o["ɵdirectiveDef"](10,null,0,a.w,[a.m,a.t,f.g],{routerLink:[0,"routerLink"]},null),o["ɵdirectiveDef"](1024,null,0,c.a,[],{book:[0,"book"]},null)],function(n,l){var e=(l.component,l.context.$implicit.isbn);n(l,1,0,e);var t=l.context.$implicit;n(l,2,0,t)},function(n,l){var e=(l.component,o["ɵnodeValue"](l,1).target),t=o["ɵnodeValue"](l,1).href;n(l,0,0,e,t)})}function u(){return o["ɵviewDef"](0,[o["ɵelementDef"](0,null,null,4,"div",[["class","ui middle aligned selection divided list"]],null,null,null,null,null),o["ɵtextDef"](null,["\n  "]),o["ɵanchorDef"](256,null,null,1,null,t),o["ɵdirectiveDef"](12,null,0,f.j,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),o["ɵtextDef"](null,["\n"]),o["ɵtextDef"](null,["\n"])],function(n,l){var e=l.component,t=e.books;n(l,3,0,t)},null)}function i(){return o["ɵviewDef"](0,[o["ɵelementDef"](0,null,null,1,"bm-book-list",[],null,null,null,u,d),o["ɵdirectiveDef"](1025,null,0,s.a,[D.a],null,null)],function(n,l){n(l,1,0)},null)}var o=e("3j3K"),r=e("F+Ij"),a=e("5oXY"),f=e("2Je8"),c=e("iQBC"),s=e("1BuQ"),D=e("b5V/");e.d(l,"a",function(){return p});var m=[],d=o["ɵcreateRendererTypeV2"]({encapsulation:2,styles:m,data:{animation:[]}}),p=(o["ɵcreateRendererTypeV2"]({encapsulation:2,styles:[],data:{animation:[]}}),o["ɵcreateComponentFactory"]("bm-book-list",s.a,i))},d9FM:function(n,l,e){"use strict";function t(){return c["ɵviewDef"](0,[c["ɵelementDef"](0,null,null,1,"span",[],null,null,null,null,null),c["ɵtextDef"](null,[", "])],null,null)}function u(){return c["ɵviewDef"](0,[c["ɵelementDef"](0,null,null,4,"span",[],null,null,null,null,null),c["ɵtextDef"](null,["\n          ",""]),c["ɵanchorDef"](256,null,null,1,null,t),c["ɵdirectiveDef"](0,null,0,s.i,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),c["ɵtextDef"](null,["\n        "])],function(n,l){var e=(l.component,!l.context.last);n(l,3,0,e)},function(n,l){var e=(l.component,l.context.$implicit);n(l,1,0,e)})}function i(){return c["ɵviewDef"](0,[c["ɵelementDef"](0,null,null,0,"i",[["class","yellow star icon"]],null,null,null,null,null)],null,null)}function o(){return c["ɵviewDef"](0,[c["ɵelementDef"](0,null,null,0,"img",[],[[3,"src",4]],null,null,null,null)],null,function(n,l){var e=(l.component,l.context.$implicit.url);n(l,0,0,e)})}function r(){return c["ɵviewDef"](0,[c["ɵelementDef"](0,null,null,65,"div",[["class","ui grid"]],null,null,null,null,null),c["ɵtextDef"](null,["\n  "]),c["ɵelementDef"](0,null,null,3,"div",[["class","four wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,0,"img",[["class","ui large image"]],[[3,"src",4]],null,null,null,null),c["ɵtextDef"](null,["\n  "]),c["ɵtextDef"](null,["\n  "]),c["ɵelementDef"](0,null,null,42,"div",[["class","twelve wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,1,"h1",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["",""]),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,1,"h3",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["",""]),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,31,"div",[["class","ui grid"]],null,null,null,null,null),c["ɵtextDef"](null,["\n      "]),c["ɵelementDef"](0,null,null,7,"div",[["class","four wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n        "]),c["ɵelementDef"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["Autoren"]),c["ɵtextDef"](null,["\n        "]),c["ɵanchorDef"](256,null,null,1,null,u),c["ɵdirectiveDef"](12,null,0,s.j,[c.ViewContainerRef,c.TemplateRef,c.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),c["ɵtextDef"](null,["\n      "]),c["ɵtextDef"](null,["\n      "]),c["ɵelementDef"](0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n        "]),c["ɵelementDef"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["ISBN"]),c["ɵtextDef"](null,["\n        ","\n      "]),c["ɵtextDef"](null,["\n      "]),c["ɵelementDef"](0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n        "]),c["ɵelementDef"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["Erschienen"]),c["ɵtextDef"](null,["\n        ","\n      "]),c["ɵtextDef"](null,["\n      "]),c["ɵelementDef"](0,null,null,7,"div",[["class","four wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n        "]),c["ɵelementDef"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["Rating"]),c["ɵtextDef"](null,["\n        "]),c["ɵanchorDef"](256,null,null,1,null,i),c["ɵdirectiveDef"](12,null,0,s.j,[c.ViewContainerRef,c.TemplateRef,c.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),c["ɵtextDef"](null,["\n      "]),c["ɵtextDef"](null,["\n    "]),c["ɵtextDef"](null,["\n  "]),c["ɵtextDef"](null,["\n  "]),c["ɵelementDef"](0,null,null,4,"div",[["class","sixteen wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,1,"h3",[["class","ui header"]],null,null,null,null,null),c["ɵtextDef"](null,["Beschreibung"]),c["ɵtextDef"](null,["\n    ","\n  "]),c["ɵtextDef"](null,["\n  "]),c["ɵelementDef"](0,null,null,7,"div",[["class","sixteen wide column"]],null,null,null,null,null),c["ɵtextDef"](null,["\n    "]),c["ɵelementDef"](0,null,null,4,"div",[["class","ui small images"]],null,null,null,null,null),c["ɵtextDef"](null,["\n      "]),c["ɵanchorDef"](256,null,null,1,null,o),c["ɵdirectiveDef"](12,null,0,s.j,[c.ViewContainerRef,c.TemplateRef,c.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),c["ɵtextDef"](null,["\n    "]),c["ɵtextDef"](null,["\n  "]),c["ɵtextDef"](null,["\n"])],function(n,l){var e=l.component,t=e.book.authors;n(l,25,0,t);var u=e.getRating(e.book.rating);n(l,46,0,u);var i=e.book.thumbnails;n(l,62,0,i)},function(n,l){var e=l.component,t=(null==e.book?null:e.book.thumbnails)&&(null==e.book?null:e.book.thumbnails[0].url);n(l,4,0,t);var u=e.book.title;n(l,10,0,u);var i=e.book.subtitle;n(l,13,0,i);var o=e.book.isbn;n(l,32,0,o);var r=e.book.published;n(l,38,0,r);var a=e.book.description;n(l,55,0,a)})}function a(){return c["ɵviewDef"](0,[c["ɵanchorDef"](256,null,null,1,null,r),c["ɵdirectiveDef"](0,null,0,s.i,[c.ViewContainerRef,c.TemplateRef],{ngIf:[0,"ngIf"]},null),c["ɵtextDef"](null,["\n"])],function(n,l){var e=l.component,t=e.book;n(l,1,0,t)},null)}function f(){return c["ɵviewDef"](0,[c["ɵelementDef"](0,null,null,1,"bm-book-details",[],null,null,null,a,v),c["ɵdirectiveDef"](1025,null,0,D.a,[m.a,d.t],null,null)],function(n,l){n(l,1,0)},null)}var c=e("3j3K"),s=e("2Je8"),D=e("2JBC"),m=e("b5V/"),d=e("5oXY");e.d(l,"a",function(){return h});var p=[],v=c["ɵcreateRendererTypeV2"]({encapsulation:2,styles:p,data:{animation:[]}}),h=(c["ɵcreateRendererTypeV2"]({encapsulation:2,styles:[],data:{animation:[]}}),c["ɵcreateComponentFactory"]("bm-book-details",D.a,f))},iQBC:function(n,l,e){"use strict";e.d(l,"a",function(){return t});var t=function(){function n(){}return n}()},mscR:function(n,l,e){"use strict";var t=e("a/of"),u=e("1BuQ"),i=e("2JBC");e.d(l,"a",function(){return o});var o=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:t.a},{path:"books",component:u.a},{path:"books/:isbn",component:i.a}];(function(){function n(){}return n})()},oBWA:function(n,l,e){"use strict";function t(){return i["ɵviewDef"](0,[i["ɵelementDef"](0,null,null,15,"div",[["class","ui two item tabs menu"]],null,null,null,null,null),i["ɵtextDef"](null,["\n  "]),i["ɵelementDef"](0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[0,"target",0],[3,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;n.component;if("click"===l){var u=i["ɵnodeValue"](n,3).onClick(e.button,e.ctrlKey,e.metaKey)!==!1;t=u&&t}return t},null,null),i["ɵdirectiveDef"](10,[[2,4]],0,r.w,[r.m,r.t,a.g],{routerLink:[0,"routerLink"]},null),i["ɵdirectiveDef"](26,null,2,r.x,[r.m,i.ElementRef,i.Renderer,i.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),i["ɵqueryDef"](10240,1,{links:1}),i["ɵqueryDef"](10240,2,{linksWithHrefs:1}),i["ɵtextDef"](null,["Home"]),i["ɵtextDef"](null,["\n  "]),i["ɵelementDef"](0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[0,"target",0],[3,"href",4]],[[null,"click"]],function(n,l,e){var t=!0;n.component;if("click"===l){var u=i["ɵnodeValue"](n,10).onClick(e.button,e.ctrlKey,e.metaKey)!==!1;t=u&&t}return t},null,null),i["ɵdirectiveDef"](10,[[4,4]],0,r.w,[r.m,r.t,a.g],{routerLink:[0,"routerLink"]},null),i["ɵdirectiveDef"](26,null,2,r.x,[r.m,i.ElementRef,i.Renderer,i.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),i["ɵqueryDef"](10240,3,{links:1}),i["ɵqueryDef"](10240,4,{linksWithHrefs:1}),i["ɵtextDef"](null,["Bücher"]),i["ɵtextDef"](null,["\n"]),i["ɵtextDef"](null,["\n"]),i["ɵelementDef"](256,null,null,1,"router-outlet",[],null,null,null,null,null),i["ɵdirectiveDef"](2,null,0,r.y,[r.e,i.ViewContainerRef,i.ComponentFactoryResolver,[8,null]],null,null),i["ɵtextDef"](null,["\n"])],function(n,l){var e=(l.component,"home");n(l,3,0,e);var t="active";n(l,4,0,t);var u="books";n(l,10,0,u);var i="active";n(l,11,0,i)},function(n,l){var e=(l.component,i["ɵnodeValue"](l,3).target),t=i["ɵnodeValue"](l,3).href;n(l,2,0,e,t);var u=i["ɵnodeValue"](l,10).target,o=i["ɵnodeValue"](l,10).href;n(l,9,0,u,o)})}function u(){return i["ɵviewDef"](0,[i["ɵelementDef"](0,null,null,1,"bm-root",[],null,null,null,t,c),i["ɵdirectiveDef"](1024,null,0,o.a,[],null,null)],null,null)}var i=e("3j3K"),o=e("2NJR"),r=e("5oXY"),a=e("2Je8");e.d(l,"a",function(){return s});var f=[],c=i["ɵcreateRendererTypeV2"]({encapsulation:2,styles:f,data:{animation:[]}}),s=(i["ɵcreateRendererTypeV2"]({encapsulation:2,styles:[],data:{animation:[]}}),i["ɵcreateComponentFactory"]("bm-root",o.a,u))}});