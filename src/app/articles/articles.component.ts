import { Component, OnInit, Input} from '@angular/core';
import { Article} from '../article';
import { ARTICLES } from '../mock-article';


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {


  articles = ARTICLES;
 // @Input() article : Article;
  constructor() { }

  ngOnInit() {
  }

}

