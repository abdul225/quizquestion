"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.PdfQuizComponent = void 0;
var core_1 = require("@angular/core");
var _16novAnswer_json_1 = require("../../assets/Json/16novAnswer.json");
var PdfQuizComponent = /** @class */ (function () {
    function PdfQuizComponent() {
        var _this = this;
        this.displayedColumns = ['QuestionNumber', 'CorrectOption', 'timeTaken', 'colourCode'];
        this.selectedOptionNumber = 0;
        this.index = 0;
        this.progress = 0;
        this.timeTaken = 0;
        this.timeLeft = 90;
        this.answersList = _16novAnswer_json_1["default"];
        this.answeredRight = 0;
        this.answeredWrong = 0;
        this.transition = 'enter';
        this.hidden1 = false;
        this.completed = false;
        this.answer = this.answersList[this.index];
        this.paused = true;
        this.time = new Date();
        this.interval = setInterval(function () {
            _this.timeTaken++;
            if (_this.timeLeft > 0) {
                _this.timeLeft--;
            }
            else {
                _this.timeLeft = 90;
                _this.timeTaken = 0;
                _this.index++;
                _this.answer = _this.answersList[_this.index];
            }
            _this.time = new Date();
        }, 1000);
    }
    PdfQuizComponent.prototype.ngOnInit = function () {
        // this.pausable = interval(300)
        //   .pipe(pausable()) as PausableObservable<number>;
        // this.pausable.subscribe(this.shoot.bind(this));
        // this.pausable.pause();
        //this.audioCorrect = new Audio();
        //this.audioCorrect.src = "./assets/audio/correct.mp3";
        //this.audioWrong = new Audio();
        // this.audioWrong.src = "./assets/audio/MarioDeath.mp3";
        this.interval;
    };
    PdfQuizComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) { return setTimeout(resolve, ms); });
    };
    PdfQuizComponent.prototype.hiding = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.delay(2000)];
                    case 1:
                        _a.sent();
                        this.hidden1 = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfQuizComponent.prototype.selectedOption = function (x) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
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
                        return [4 /*yield*/, this.delay(1000)];
                    case 1:
                        _a.sent();
                        this.hidden1 = true;
                        this.index++;
                        this.selectedOptionNumber = 0;
                        this.answer = this.answersList[this.index];
                        return [4 /*yield*/, this.delay(1000)];
                    case 2:
                        _a.sent();
                        this.timeLeft = 91;
                        this.timeTaken = -1;
                        this.progress = (this.index * 100) / this.answersList.length;
                        if (this.index == this.answersList.length) {
                            this.completed = true;
                        }
                        this.interval;
                        return [2 /*return*/];
                }
            });
        });
    };
    PdfQuizComponent.prototype.shoot = function () {
        try {
            this.confetti({
                angle: 80,
                spread: this.random(10, 50),
                particleCount: 100,
                origin: {
                    y: 0.6
                }
            });
        }
        catch (e) {
            // noop, confettijs may not be loaded yet
        }
    };
    PdfQuizComponent.prototype.random = function (min, max) {
        return Math.random() * (max - min) + min;
    };
    PdfQuizComponent.prototype.confetti = function (args) {
        return window['confetti'].apply(this, arguments);
    };
    PdfQuizComponent = __decorate([
        core_1.Component({
            selector: 'app-pdf-quiz',
            templateUrl: './pdf-quiz.component.html',
            styleUrls: ['./pdf-quiz.component.sass']
        })
    ], PdfQuizComponent);
    return PdfQuizComponent;
}());
exports.PdfQuizComponent = PdfQuizComponent;
