"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var tabs_1 = require("@angular/material/tabs");
var toolbar_1 = require("@angular/material/toolbar");
var expansion_1 = require("@angular/material/expansion");
var card_1 = require("@angular/material/card");
var grid_list_1 = require("@angular/material/grid-list");
var button_1 = require("@angular/material/button");
var progress_bar_1 = require("@angular/material/progress-bar");
var flex_layout_1 = require("@angular/flex-layout");
var quiz_component_1 = require("./quiz/quiz.component");
var sidenav_1 = require("@angular/material/sidenav");
var icon_1 = require("@angular/material/icon");
var angular_particle_effect_button_1 = require("angular-particle-effect-button");
var pdf_quiz_component_1 = require("./pdf-quiz/pdf-quiz.component");
var table_1 = require("@angular/material/table");
var table_2 = require("@angular/cdk/table");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                quiz_component_1.QuizComponent,
                pdf_quiz_component_1.PdfQuizComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                angular_particle_effect_button_1.ParticleEffectButtonModule,
                app_routing_module_1.AppRoutingModule,
                tabs_1.MatTabsModule,
                toolbar_1.MatToolbarModule,
                expansion_1.MatExpansionModule,
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                button_1.MatButtonModule,
                progress_bar_1.MatProgressBarModule,
                flex_layout_1.FlexLayoutModule,
                animations_1.BrowserAnimationsModule,
                sidenav_1.MatSidenavModule,
                icon_1.MatIconModule,
                table_1.MatTableModule,
                table_2.CdkTableModule
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
