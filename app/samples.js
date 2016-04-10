System.register(['angular2/core', 'angular2/router', './home/home', './book-monkey/iteration-1/iteration-1.component', './book-monkey/iteration-2/iteration-2.component', './book-monkey/iteration-3/iteration-3.component', './book-monkey/iteration-4/iteration-4.component', './book-monkey/iteration-5/iteration-5.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, home_1, iteration_1_component_1, iteration_2_component_1, iteration_3_component_1, iteration_4_component_1, iteration_5_component_1;
    var SamplesApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            },
            function (iteration_1_component_1_1) {
                iteration_1_component_1 = iteration_1_component_1_1;
            },
            function (iteration_2_component_1_1) {
                iteration_2_component_1 = iteration_2_component_1_1;
            },
            function (iteration_3_component_1_1) {
                iteration_3_component_1 = iteration_3_component_1_1;
            },
            function (iteration_4_component_1_1) {
                iteration_4_component_1 = iteration_4_component_1_1;
            },
            function (iteration_5_component_1_1) {
                iteration_5_component_1 = iteration_5_component_1_1;
            }],
        execute: function() {
            SamplesApp = (function () {
                function SamplesApp(router) {
                    this.router = router;
                }
                SamplesApp = __decorate([
                    core_1.Component({
                        selector: 'samples-app',
                        providers: [],
                        templateUrl: 'app/samples.html',
                        directives: [router_1.ROUTER_DIRECTIVES],
                        pipes: []
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_1.Home,
                            useAsDefault: true
                        },
                        {
                            path: 'iteration-1/...',
                            name: 'Iteration-1',
                            component: iteration_1_component_1.IterationOneComponent
                        },
                        {
                            path: 'iteration-2/...',
                            name: 'Iteration-2',
                            component: iteration_2_component_1.IterationTwoComponent
                        },
                        {
                            path: 'iteration-3/...',
                            name: 'Iteration-3',
                            component: iteration_3_component_1.IterationThreeComponent
                        },
                        {
                            path: 'iteration-4/...',
                            name: 'Iteration-4',
                            component: iteration_4_component_1.IterationFourComponent
                        },
                        {
                            path: 'iteration-5/...',
                            name: 'Iteration-5',
                            component: iteration_5_component_1.IterationFiveComponent
                        }]), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], SamplesApp);
                return SamplesApp;
            }());
            exports_1("SamplesApp", SamplesApp);
        }
    }
});
//# sourceMappingURL=samples.js.map