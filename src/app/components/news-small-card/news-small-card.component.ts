import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-small-card',
  templateUrl: './news-small-card.component.html',
  styleUrls: ['./news-small-card.component.css']
})
export class NewsSmallCardComponent implements OnInit {

  @Input() photo: string = "";
  @Input() title: string = "";
  @Input() id: string = "";
  @Input() description: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
