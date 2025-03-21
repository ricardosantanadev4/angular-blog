import { Component } from '@angular/core';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FeaturedArticleComponent } from '../../components/featured-article/featured-article.component';
import { PodcastListComponent } from '../../components/podcast-list/podcast-list.component';
import { CallToActionComponent } from '../../components/call-to-action/call-to-action.component';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, HeaderComponent, FeaturedArticleComponent, PodcastListComponent, 
    CallToActionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
