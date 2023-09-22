import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-big-card',
  templateUrl: './news-big-card.component.html',
  styleUrls: ['./news-big-card.component.css']
})
export class NewsBigCardComponent implements OnInit {

  @Input() photo: string = "";
  @Input() title: string = "";
  @Input() description: string = "";
  @Input() id: string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
