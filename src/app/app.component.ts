import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  title = 'quiz-app';
  navLinks: any[];
  activeLinkIndex = -1; 
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'home',
        link: './home',
        index: 0
    },
        {
            label: 'quiz',
            link: './quiz',
            index: 1
        }, {
            label: 'pdf quiz',
            link: './pdfQuiz',
            index: 2
        },
    ];
}
ngOnInit(): void {
  this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(this.navLinks.find(tab => tab.link === '.' + this.router.url));
  });
}
}
