webpackJsonp([21,31],{"/I2J":function(l,n,u){"use strict";var t=u("2NJR"),e=u("mscR");u.d(n,"a",function(){return i});var i=([{path:"",component:t.a,children:e.a}],function(){function l(){}return l}())},"0Jx9":function(l,n,u){"use strict";var t=u("ZIf2");u.d(n,"b",function(){return t.a}),u.d(n,"a",function(){return e});var e=function(){function l(l,n,u,t,e,i,o,r){this.isbn=l,this.title=n,this.authors=u,this.published=t,this.subtitle=e,this.rating=i,this.thumbnails=o,this.description=r}return l}()},"1BuQ":function(l,n,u){"use strict";var t=u("b5V/");u.d(n,"a",function(){return e});var e=function(){function l(l){this.bs=l}return l.prototype.ngOnInit=function(){this.books=this.bs.getAll()},l.ctorParameters=function(){return[{type:t.a}]},l}()},"2JBC":function(l,n,u){"use strict";var t=u("5oXY"),e=u("b5V/");u.d(n,"a",function(){return i});var i=function(){function l(l,n){this.bs=l,this.route=n}return l.prototype.ngOnInit=function(){var l=this.route.snapshot.params;this.book=this.bs.getSingle(l.isbn)},l.prototype.getRating=function(l){return new Array(l)},l.ctorParameters=function(){return[{type:e.a},{type:t.v}]},l}()},"2NJR":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},"F+Ij":function(l,n,u){"use strict";function t(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,0,"img",[["class","ui tiny image"]],[[8,"src",4]],null,null,null,null))],null,function(l,n){var u=n.component,t=u.book.thumbnails[0].url;l(n,0,0,t)})}function e(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),a["ɵted"](null,[", "]))],null,null)}function i(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,4,"span",[],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n      ",""])),(l()(),a["ɵand"](8388608,null,null,1,null,e)),a["ɵdid"](8192,null,0,c.i,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["ɵted"](null,["\n    "]))],function(l,n){var u=!n.context.last;l(n,3,0,u)},function(l,n){var u=n.context.$implicit;l(n,1,0,u)})}function o(l){return a["ɵvid"](0,[(l()(),a["ɵand"](8388608,null,null,1,null,t)),a["ɵdid"](8192,null,0,c.i,[a.ViewContainerRef,a.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),a["ɵted"](null,["\n"])),(l()(),a["ɵeld"](0,null,null,16,"div",[["class","content"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵeld"](0,null,null,1,"div",[["class","header"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["",""])),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵeld"](0,null,null,1,"div",[["class","description"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["",""])),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵeld"](0,null,null,4,"div",[["class","metadata"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["\n    "])),(l()(),a["ɵand"](8388608,null,null,1,null,i)),a["ɵdid"](401408,null,0,c.j,[a.ViewContainerRef,a.TemplateRef,a.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵted"](null,["\n  "])),(l()(),a["ɵeld"](0,null,null,1,"div",[["class","extra"]],null,null,null,null,null)),(l()(),a["ɵted"](null,["ISBN ",""])),(l()(),a["ɵted"](null,["\n"])),(l()(),a["ɵted"](null,["\n"]))],function(l,n){var u=n.component,t=u.book.thumbnails;l(n,1,0,t);var e=u.book.authors;l(n,14,0,e)},function(l,n){var u=n.component,t=u.book.title;l(n,6,0,t);var e=u.book.subtitle;l(n,9,0,e);var i=u.book.isbn;l(n,18,0,i)})}function r(l){return a["ɵvid"](0,[(l()(),a["ɵeld"](0,null,null,1,"a",[["class","bm-book-list-item"]],null,null,null,o,f)),a["ɵdid"](24576,null,0,d.a,[],null,null)],null,null)}var a=u("3j3K"),c=u("2Je8"),d=u("iQBC");u.d(n,"b",function(){return f}),n.a=o;var s=[],f=a["ɵcrt"]({encapsulation:2,styles:s,data:{}});a["ɵccf"]("a.bm-book-list-item",d.a,r,{book:"book"},{},[])},"GEF/":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},Qeu5:function(l,n,u){"use strict";function t(l){return i["ɵvid"](0,[(l()(),i["ɵted"](null,["\n  "])),(l()(),i["ɵeld"](0,null,null,13,"div",[["class","ui container"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n    "])),(l()(),i["ɵeld"](0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["Home"])),(l()(),i["ɵted"](null,["\n    "])),(l()(),i["ɵeld"](0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i["ɵted"](null,["Das ist der BookMonkey."])),(l()(),i["ɵted"](null,["\n    "])),(l()(),i["ɵeld"](0,null,null,4,"a",[["class","ui red button"],["routerLink","../books"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){var e=i["ɵnov"](l,10).onClick(u.button,u.ctrlKey,u.metaKey)!==!1;t=e&&t}return t},null,null)),i["ɵdid"](335872,null,0,o.y,[o.j,o.v,r.f],{routerLink:[0,"routerLink"]},null),(l()(),i["ɵted"](null,["\n      Buchliste ansehen\n      "])),(l()(),i["ɵeld"](0,null,null,0,"i",[["class","right arrow icon"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n    "])),(l()(),i["ɵted"](null,["\n  "])),(l()(),i["ɵted"](null,["\n  "]))],function(l,n){var u="../books";l(n,10,0,u)},function(l,n){var u=i["ɵnov"](n,10).target,t=i["ɵnov"](n,10).href;l(n,9,0,u,t)})}function e(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,1,"bm-home",[],null,null,null,t,d)),i["ɵdid"](24576,null,0,a.a,[],null,null)],null,null)}var i=u("3j3K"),o=u("5oXY"),r=u("2Je8"),a=u("a/of");u.d(n,"a",function(){return s});var c=[],d=i["ɵcrt"]({encapsulation:2,styles:c,data:{}}),s=i["ɵccf"]("bm-home",a.a,e,{},{},[])},"V/Me":function(l,n,u){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=u("3j3K"),e=u("GEF/"),i=u("2Je8"),o=u("5oXY"),r=u("/I2J"),a=u("b5V/"),c=u("oBWA"),d=u("Qeu5"),s=u("c6wM"),f=u("d9FM"),v=u("2NJR"),h=u("a/of"),p=u("1BuQ"),b=u("2JBC");u.d(n,"AppModuleNgFactory",function(){return g});var m=this&&this.__extends||function(l,n){function u(){this.constructor=l}for(var t in n)n.hasOwnProperty(t)&&(l[t]=n[t]);l.prototype=null===n?Object.create(n):(u.prototype=n.prototype,new u)},k=function(l){function n(n){return l.call(this,n,[c.a,d.a,s.a,f.a],[c.a])||this}return m(n,l),Object.defineProperty(n.prototype,"_NgLocalization_5",{get:function(){return null==this.__NgLocalization_5&&(this.__NgLocalization_5=new i.a(this._LOCALE_ID_4)),this.__NgLocalization_5},enumerable:!0,configurable:!0}),Object.defineProperty(n.prototype,"_BookStoreService_7",{get:function(){return null==this.__BookStoreService_7&&(this.__BookStoreService_7=new a.a),this.__BookStoreService_7},enumerable:!0,configurable:!0}),n.prototype.createInternal=function(){return this._CommonModule_0=new i.b,this._RouterModule_1=new o.q(this.parent.get(o.r,null),this.parent.get(o.j,null)),this._AppRoutingModule_2=new r.a,this._AppModule_3=new e.a,this._LOCALE_ID_4="en",this._ROUTES_6=[[{path:"",component:v.a,children:[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:h.a},{path:"books",component:p.a},{path:"books/:isbn",component:b.a}]}]],this._TRANSLATIONS_FORMAT_8="xtb",this._AppModule_3},n.prototype.getInternal=function(l,n){return l===i.b?this._CommonModule_0:l===o.q?this._RouterModule_1:l===r.a?this._AppRoutingModule_2:l===e.a?this._AppModule_3:l===t.LOCALE_ID?this._LOCALE_ID_4:l===i.g?this._NgLocalization_5:l===o.u?this._ROUTES_6:l===a.a?this._BookStoreService_7:l===t.TRANSLATIONS_FORMAT?this._TRANSLATIONS_FORMAT_8:n},n.prototype.destroyInternal=function(){},n}(t["ɵNgModuleInjector"]),g=new t.NgModuleFactory(k,e.a)},ZIf2:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(l,n){this.url=l,this.title=n}return l}()},"a/of":function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},"b5V/":function(l,n,u){"use strict";var t=u("0Jx9");u.d(n,"a",function(){return e});var e=function(){function l(){this.books=[new t.a("9783864903571","Angular",["Johannes Hoppe","Danny Koppenhagen","Ferdinand Malcher","Gregor Woiwode"],new Date(2017,3,1),"Einstieg in die komponentenbasierte Entwicklung von Web- und Mobile-Anwendungen",5,[new t.b("https://ng-buch.de/cover2.jpg","Buchcover")],"Mit Angular setzen Sie auf ein modernes und modulares..."),new t.a("9783864901546","AngularJS",["Philipp Tarasiewicz","Robin Böhm"],new Date(2014,5,29),"Eine praktische Einführung",5,[new t.b("https://ng-buch.de/cover1.jpg","Buchcover")],"Dieses Buch führt Sie anhand eines zusammenhängenden Beispielprojekts...")]}return l.prototype.getAll=function(){return this.books},l.prototype.getSingle=function(l){return this.books.find(function(n){return n.isbn===l})},l.ctorParameters=function(){return[]},l}()},c6wM:function(l,n,u){"use strict";function t(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,2,"a",[["class","bm-book-list-item item"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){var e=o["ɵnov"](l,1).onClick(u.button,u.ctrlKey,u.metaKey)!==!1;t=e&&t}return t},r.a,r.b)),o["ɵdid"](335872,null,0,a.y,[a.j,a.v,c.f],{routerLink:[0,"routerLink"]},null),o["ɵdid"](24576,null,0,d.a,[],{book:[0,"book"]},null)],function(l,n){var u=n.context.$implicit.isbn;l(n,1,0,u);var t=n.context.$implicit;l(n,2,0,t)},function(l,n){var u=o["ɵnov"](n,1).target,t=o["ɵnov"](n,1).href;l(n,0,0,u,t)})}function e(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,4,"div",[["class","ui middle aligned selection divided list"]],null,null,null,null,null)),(l()(),o["ɵted"](null,["\n  "])),(l()(),o["ɵand"](8388608,null,null,1,null,t)),o["ɵdid"](401408,null,0,c.j,[o.ViewContainerRef,o.TemplateRef,o.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),o["ɵted"](null,["\n"])),(l()(),o["ɵted"](null,["\n"]))],function(l,n){var u=n.component,t=u.books;l(n,3,0,t)},null)}function i(l){return o["ɵvid"](0,[(l()(),o["ɵeld"](0,null,null,1,"bm-book-list",[],null,null,null,e,h)),o["ɵdid"](57344,null,0,s.a,[f.a],null,null)],function(l,n){l(n,1,0)},null)}var o=u("3j3K"),r=u("F+Ij"),a=u("5oXY"),c=u("2Je8"),d=u("iQBC"),s=u("1BuQ"),f=u("b5V/");u.d(n,"a",function(){return p});var v=[],h=o["ɵcrt"]({encapsulation:2,styles:v,data:{}}),p=o["ɵccf"]("bm-book-list",s.a,i,{},{},[])},d9FM:function(l,n,u){"use strict";function t(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"span",[],null,null,null,null,null)),(l()(),d["ɵted"](null,[", "]))],null,null)}function e(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,4,"span",[],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n          ",""])),(l()(),d["ɵand"](8388608,null,null,1,null,t)),d["ɵdid"](8192,null,0,s.i,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵted"](null,["\n        "]))],function(l,n){var u=!n.context.last;l(n,3,0,u)},function(l,n){var u=n.context.$implicit;l(n,1,0,u)})}function i(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,0,"i",[["class","yellow star icon"]],null,null,null,null,null))],null,null)}function o(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,0,"img",[],[[8,"src",4]],null,null,null,null))],null,function(l,n){var u=n.context.$implicit.url;l(n,0,0,u)})}function r(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,65,"div",[["class","ui grid"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,null,3,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,0,"img",[["class","ui large image"]],[[8,"src",4]],null,null,null,null)),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,null,42,"div",[["class","twelve wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,1,"h1",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["",""])),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,1,"h3",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["",""])),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,0,"div",[["class","ui divider"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,31,"div",[["class","ui grid"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵeld"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Autoren"])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵand"](8388608,null,null,1,null,e)),d["ɵdid"](401408,null,0,s.j,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵeld"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["ISBN"])),(l()(),d["ɵted"](null,["\n        ","\n      "])),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵeld"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Erschienen"])),(l()(),d["ɵted"](null,["\n        ","\n      "])),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","four wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵeld"](0,null,null,1,"h4",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Rating"])),(l()(),d["ɵted"](null,["\n        "])),(l()(),d["ɵand"](8388608,null,null,1,null,i)),d["ɵdid"](401408,null,0,s.j,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","sixteen wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,1,"h3",[["class","ui header"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["Beschreibung"])),(l()(),d["ɵted"](null,["\n    ","\n  "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵeld"](0,null,null,7,"div",[["class","sixteen wide column"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵeld"](0,null,null,4,"div",[["class","ui small images"]],null,null,null,null,null)),(l()(),d["ɵted"](null,["\n      "])),(l()(),d["ɵand"](8388608,null,null,1,null,o)),d["ɵdid"](401408,null,0,s.j,[d.ViewContainerRef,d.TemplateRef,d.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(l()(),d["ɵted"](null,["\n    "])),(l()(),d["ɵted"](null,["\n  "])),(l()(),d["ɵted"](null,["\n"]))],function(l,n){var u=n.component,t=u.book.authors;l(n,25,0,t);var e=u.getRating(u.book.rating);l(n,46,0,e);var i=u.book.thumbnails;l(n,62,0,i)},function(l,n){var u=n.component,t=(null==u.book?null:u.book.thumbnails)&&(null==u.book?null:u.book.thumbnails[0].url);l(n,4,0,t);var e=u.book.title;l(n,10,0,e);var i=u.book.subtitle;l(n,13,0,i);var o=u.book.isbn;l(n,32,0,o);var r=u.book.published;l(n,38,0,r);var a=u.book.description;l(n,55,0,a)})}function a(l){return d["ɵvid"](0,[(l()(),d["ɵand"](8388608,null,null,1,null,r)),d["ɵdid"](8192,null,0,s.i,[d.ViewContainerRef,d.TemplateRef],{ngIf:[0,"ngIf"]},null),(l()(),d["ɵted"](null,["\n"]))],function(l,n){var u=n.component,t=u.book;l(n,1,0,t)},null)}function c(l){return d["ɵvid"](0,[(l()(),d["ɵeld"](0,null,null,1,"bm-book-details",[],null,null,null,a,b)),d["ɵdid"](57344,null,0,f.a,[v.a,h.v],null,null)],function(l,n){l(n,1,0)},null)}var d=u("3j3K"),s=u("2Je8"),f=u("2JBC"),v=u("b5V/"),h=u("5oXY");u.d(n,"a",function(){return m});var p=[],b=d["ɵcrt"]({encapsulation:2,styles:p,data:{}}),m=d["ɵccf"]("bm-book-details",f.a,c,{},{},[])},iQBC:function(l,n,u){"use strict";u.d(n,"a",function(){return t});var t=function(){function l(){}return l}()},mscR:function(l,n,u){"use strict";var t=u("a/of"),e=u("1BuQ"),i=u("2JBC");u.d(n,"a",function(){return o});var o=[{path:"",redirectTo:"home",pathMatch:"full"},{path:"home",component:t.a},{path:"books",component:e.a},{path:"books/:isbn",component:i.a}];(function(){function l(){}return l})()},oBWA:function(l,n,u){"use strict";function t(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,15,"div",[["class","ui two item tabs menu"]],null,null,null,null,null)),(l()(),i["ɵted"](null,["\n  "])),(l()(),i["ɵeld"](0,null,null,5,"a",[["class","item"],["routerLink","home"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){var e=i["ɵnov"](l,3).onClick(u.button,u.ctrlKey,u.metaKey)!==!1;t=e&&t}return t},null,null)),i["ɵdid"](335872,[[2,4]],0,o.y,[o.j,o.v,r.f],{routerLink:[0,"routerLink"]},null),i["ɵdid"](860160,null,2,o.z,[o.j,i.ElementRef,i.Renderer,i.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),i["ɵqud"](301989888,1,{links:1}),i["ɵqud"](301989888,2,{linksWithHrefs:1}),(l()(),i["ɵted"](null,["Home"])),(l()(),i["ɵted"](null,["\n  "])),(l()(),i["ɵeld"](0,null,null,5,"a",[["class","item"],["routerLink","books"],["routerLinkActive","active"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var t=!0;if("click"===n){var e=i["ɵnov"](l,10).onClick(u.button,u.ctrlKey,u.metaKey)!==!1;t=e&&t}return t},null,null)),i["ɵdid"](335872,[[4,4]],0,o.y,[o.j,o.v,r.f],{routerLink:[0,"routerLink"]},null),i["ɵdid"](860160,null,2,o.z,[o.j,i.ElementRef,i.Renderer,i.ChangeDetectorRef],{routerLinkActive:[0,"routerLinkActive"]},null),i["ɵqud"](301989888,3,{links:1}),i["ɵqud"](301989888,4,{linksWithHrefs:1}),(l()(),i["ɵted"](null,["Bücher"])),(l()(),i["ɵted"](null,["\n"])),(l()(),i["ɵted"](null,["\n"])),(l()(),i["ɵeld"](8388608,null,null,1,"router-outlet",[],null,null,null,null,null)),i["ɵdid"](73728,null,0,o.A,[o.l,i.ViewContainerRef,i.ComponentFactoryResolver,[8,null]],null,null),(l()(),i["ɵted"](null,["\n"]))],function(l,n){var u="home";l(n,3,0,u);var t="active";l(n,4,0,t);var e="books";l(n,10,0,e);var i="active";l(n,11,0,i)},function(l,n){var u=i["ɵnov"](n,3).target,t=i["ɵnov"](n,3).href;l(n,2,0,u,t);var e=i["ɵnov"](n,10).target,o=i["ɵnov"](n,10).href;l(n,9,0,e,o)})}function e(l){return i["ɵvid"](0,[(l()(),i["ɵeld"](0,null,null,1,"bm-root",[],null,null,null,t,d)),i["ɵdid"](24576,null,0,a.a,[],null,null)],null,null)}var i=u("3j3K"),o=u("5oXY"),r=u("2Je8"),a=u("2NJR");u.d(n,"a",function(){return s});var c=[],d=i["ɵcrt"]({encapsulation:2,styles:c,data:{}}),s=i["ɵccf"]("bm-root",a.a,e,{},{},[])}});