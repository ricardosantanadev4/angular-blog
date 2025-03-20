import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FeaturedArticleComponent } from './components/featured-article/featured-article.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { PodcastListComponent } from './components/podcast-list/podcast-list.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, HeaderComponent, FeaturedArticleComponent,
    PodcastListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-blog';
}
