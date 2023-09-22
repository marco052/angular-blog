import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataNews} from '../../data/dataNews'

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit, OnChanges {

  @Input() photoCover: string = "https://pbs.twimg.com/media/F0TBergXwAIg82w.jpg:large"
  @Input() title: string = "PRESIDENTE MARCO LIMA FALA SOBRE PROJETO DO CLUBE PARA NOVA TEMPORADA"
  @Input() description: string = "Marco Lima fala sobre planos e metas do NarkiiN FC para o EA FC 24. Temporada inicia na sexta-feira (22/09)."
  private id: string|null = "0"

  constructor(private route:ActivatedRoute) {

  }

  ngOnChanges(): void{
    console.log("aa")
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe (value =>
      this.id = (value.get("id"))
    )
    this.setComponentValues(this.id)
  }


  setComponentValues(id: string | null){
    const result = dataNews.filter(article => article.id == id)[0]



    this.title = result.title
    this.description = result.description
    this.photoCover = result.photoCover
  }


}
