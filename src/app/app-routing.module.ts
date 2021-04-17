import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { PdfQuizComponent } from './pdf-quiz/pdf-quiz.component';

const routes: Routes = [
  { path: 'quiz', component: QuizComponent },
  { path: 'pdfQuiz', component: PdfQuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
