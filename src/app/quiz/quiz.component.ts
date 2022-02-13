import { Component, OnInit } from '@angular/core';
import { Question } from './question';
import {Key} from './key';
import percentagequiz1 from '../../assets/Json/percentages1.json';
import ratioquiz from '../../assets/Json/ratioandproportion.json';
import ratioquiz1 from '../../assets/Json/ratioProportion1.json';
import profitLoss1 from '../../assets/Json/profitloss1.json';
import profitLoss2 from '../../assets/Json/profitloss2.json';
import profitLoss3 from '../../assets/Json/profitloss3.json';
import profitLoss4 from '../../assets/Json/profitloss4.json';
import pipeAndCistern from '../../assets/Json/pipeandcistern.json';
import generalAwareness from '../../assets/Json/generalawareness.json';
import mixtureAllegation from '../../assets/Json/mixtureAlligation.json';
import { PausableObservable, pausable } from 'rxjs-pausable';
import { Subject, interval, from } from 'rxjs';
import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { trigger, state, style, animate, transition } from '@angular/animations';
import indianHistory1 from '../../assets/Json/indianhistory.json';
import constitution from '../../assets/Json/constitution.json';
import constitutionkey from '../../assets/Json/constitutionanswers.json';
import speedtime from '../../assets/Json/speedtimeanddistance.json';
import speedtimeKey from '../../assets/Json/speedtimeandistandkey.json';
import indianEconomy from '../../assets/Json/indianeconomy.json';
import indianEconomyKey from '../../assets/Json/indianeconomykey.json';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.sass'],
  animations:
     [
    //   trigger('triggerQuestionChange',
    //     [
    //       state('enter', style({ 'opacity': '1' })),
    //       state('leave', style({ 'opacity': '0' })),
    //       transition('enter => leave', animate('700ms ease-in')),
    //       transition('leave => enter', animate('700ms ease-out'))

    //     ])
      // trigger('triggerQuestionChange', [
      //   transition('enter => leave', [
      //     style({ opacity: 0, transform: 'scale(0.5) translateY(50px)' }),
      //     animate(
      //       '750ms',
      //       keyframes([
      //         style({ opacity: 1, offset: 0.3 }),
      //         style({ transform: 'translateY(0)', offset: 0.6 }),
      //         style({ transform: 'scale(1)', offset: 1 }),
      //       ])
      //     ),
      //   ]),
      // ])
    ]
})
export class QuizComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // this.pausable = interval(300)
    //   .pipe(pausable()) as PausableObservable<number>;
    // this.pausable.subscribe(this.shoot.bind(this));
    // this.pausable.pause();
    this.audioCorrect = new Audio();
    this.audioCorrect.src = "./assets/audio/correct.mp3";
    this.audioWrong = new Audio();
    this.audioWrong.src = "./assets/audio/MarioDeath.mp3";
    this.interval;
  }

  
  selectedOptionNumber: number = 0;
  index: number = 0;
  progress: number = 0;
  timeTaken: number = 0;
  public questionsList: Question[] = speedtime;
  public keyList: Key[] = speedtimeKey;
  answeredRight: number = 0;
  answeredWrong: number = 0 ;
  timeLeft: number = 90;
  transition: string = 'enter';
  hidden1: boolean = false;
  completed:boolean = false;
  audioCorrect;
  audioWrong;
  answered;
  timeDifference;
  averageTime: number;
  public question: Question = this.questionsList[this.index];
  public key: Key = this.keyList[this.index];
 //correctAnswerOption = this.question.correctOption;
  correctAnswerOption = this.key.answer;
  paused = true;
  time = new Date();
  initialTime = new Date();
  finalTime;
  pausable: PausableObservable<number>;
  displayedColumns: string[] = ['QuestionNumber', 'CorrectOption', 'colourCode', 'timeTaken'];


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
      this.question = this.questionsList[this.index];
      //this.key = this.keyList[this.index];
    }
    this.time = new Date();
  }, 1000)

  async hiding() {
    await this.delay(1000);
    this.hidden1 = true;

  }

  async selectedOption(x: number) {
    
    this.selectedOptionNumber = x;
    if (x == this.correctAnswerOption) {
     // this.audioCorrect.load();
      //this.audioCorrect.play();
      //this.shoot();
      this.answeredRight++;
      this.questionsList[this.index].colourCode = "#5162fa";
      this.questionsList[this.index].result = "Correct";
    }
    else {
     // this.audioWrong.load();
      //this.audioWrong.play();
      this.answeredWrong++;
      this.questionsList[this.index].colourCode = "#faa340";
      this.questionsList[this.index].result = "Wrong";
      await this.delay(2000);
    }
    this.questionsList[this.index].timeTaken = this.timeTaken;
    this.questionsList[this.index].QuestionNumber = this.index+1;
    await this.delay(1000);
    this.hidden1 = true;
    this.index++;
    this.selectedOptionNumber = 0;

    this.question = this.questionsList[this.index];
    this.key = this.keyList[this.index];
    //this.correctAnswerOption = this.question.correctOption;
    this.correctAnswerOption = this.key.answer;
    await this.delay(1000);
    this.timeLeft = 90;
    this.timeTaken = 0;
    this.progress = (this.index * 100) / this.questionsList.length;
    if (this.index == this.questionsList.length){
      this.completed = true; 
      console.log("the questions are copleted");
    }
    this.interval;
  }

  indexChange(y :number){
    this.index = y ;
    this.question=this.questionsList[y];
    this.key = this.keyList[y];
    //this.correctAnswerOption = this.question.correctOption;
    this.correctAnswerOption = this.key.answer;
    this.timeLeft= 90;
    this.timeTaken=0;

  }
  complete(){
      this.completed = true;
      this.finalTime = new Date();
      this.timeDifference = this.finalTime.getTime() - this.initialTime.getTime();
      this.timeDifference = this.timeDifference/1000;
      this.answered = this.answeredRight+ this.answeredWrong;
      console.log("the answered questions are",this.answered);
      this.averageTime = this.timeDifference/this.answered;
      console.log("the average time per questions are",this.averageTime);
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
