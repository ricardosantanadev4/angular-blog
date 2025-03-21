import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FeaturedArticleComponent,
    PodcastListComponent, CallToActionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
}
