import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuizComponent } from './quiz/quiz.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ParticleEffectButtonModule } from "angular-particle-effect-button";
import { PdfQuizComponent } from './pdf-quiz/pdf-quiz.component';
import { MatTableModule } from '@angular/material/table';
import {CdkTableModule} from '@angular/cdk/table';
@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    PdfQuizComponent
  ],
  imports: [
    BrowserModule,
    ParticleEffectButtonModule,
    AppRoutingModule,
    MatTabsModule,
    MatToolbarModule,
    MatExpansionModule,
    MatCardModule,
    MatGridListModule,
    MatButtonModule,
    MatProgressBarModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    CdkTableModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }