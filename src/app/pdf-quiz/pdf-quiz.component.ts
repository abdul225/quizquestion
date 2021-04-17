import { Component, OnInit } from '@angular/core';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { Subject, interval, from } from 'rxjs';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Answer } from './answer';
import Answer18 from '../../assets/Json/answers18.json';
import TrigoAns1 from '../../assets/Json/trigo1answers.json';
import CompAns from '../../assets/Json/compoundinterestanswers.json';
@Component({
  selector: 'app-pdf-quiz',
  templateUrl: './pdf-quiz.component.html',
  styleUrls: ['./pdf-quiz.component.sass']
})
export class PdfQuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.pausable = interval(300)
    //   .pipe(pausable()) as PausableObservable<number>;
    // this.pausable.subscribe(this.shoot.bind(this));
    // this.pausable.pause();
    //this.audioCorrect = new Audio();
    //this.audioCorrect.src = "./assets/audio/correct.mp3";
    //this.audioWrong = new Audio();
   // this.audioWrong.src = "./assets/audio/MarioDeath.mp3";
    this.interval;
  }
  displayedColumns: string[] = ['QuestionNumber', 'CorrectOption', 'timeTaken', 'colourCode'];

  correctAnswerOption: number;
  selectedOptionNumber: number = 0;
  index: number = 0;
  progress: number = 0;
  timeTaken: number = 0;  
  timeLeft: number = 90;
  public answersList: Answer[] = CompAns;
  answeredRight: number =0;
  answeredWrong: number =0;
  answered:number;
  transition: string = 'enter';
  hidden1: boolean = false;
  audioCorrect;
  audioWrong;
  completed:boolean = false;
  public answer: Answer = this.answersList[this.index];
  paused = true;
  time = new Date();
  pausable: PausableObservable<number>;


  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  interval = setInterval(() => {
    this.timeTaken++;
    if (this.timeLeft > 0) {
      this.timeLeft--;
    } else {
      this.timeLeft = 90;
      this.timeTaken = 0;
      this.index++;
      this.answer = this.answersList[this.index];
    }
    this.time = new Date();
  }, 1000)

  async hiding() {
    await this.delay(2000);
    this.hidden1 = true;

  }
  async selectedOption(x: number) {
    this.correctAnswerOption = this.answer.CorrectOption;
    this.selectedOptionNumber = x;
    if (x == this.correctAnswerOption) {
     // this.audioCorrect.load();
      //this.audioCorrect.play();
      this.shoot();
      this.answeredRight++;
      this.answersList[this.index].colourCode = "#5162fa";
      this.answersList[this.index].result = "correct";
    }
    else {
     // this.audioWrong.load();
      //this.audioWrong.play();
      this.answeredWrong++;
      this.answersList[this.index].colourCode = "#faa340";
      this.answersList[this.index].result = "wrong";
    }
    this.answersList[this.index].timeTaken = this.timeTaken;
    await this.delay(1000);
    this.hidden1 = true;
    this.index++;
    this.selectedOptionNumber = 0;

    this.answer = this.answersList[this.index];
    await this.delay(1000);
    this.timeLeft = 91;
    this.timeTaken = -1;
    this.progress = (this.index * 100) / this.answersList.length;
    if (this.index == this.answersList.length){
      this.completed = true;
    }
    this.interval;
  }

  shoot() {
    try {
      this.confetti({
        angle: 80,
        spread: this.random(10, 50),
        particleCount: 100,
        origin: {
          y: 0.6
        }
      });
    } catch (e) {
      // noop, confettijs may not be loaded yet
    }
  }

  random(min: number, max: number) {
    return Math.random() * (max - min) + min;
  }

  confetti(args: any) {
    return window['confetti'].apply(this, arguments);
  }

}
