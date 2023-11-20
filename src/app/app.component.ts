import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, CourseCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Curso de Angular';
  Paragraph = 'Entendiendo Angular';

  data = {
    dataTitle: 'Angular Core Deep Dive',
  };

  onLogoClicked() {
    alert('hello world');
  }

  onKeyUp(newTitle: string) {
    this.data.dataTitle = newTitle;
  }
}
