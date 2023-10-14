import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  gamecover:string=""
  @Input()
//label dinamico //
  gamelabel:string=""
  @Input()
  gametype:string="Dital PS4"
  @Input()
  gameprice:string="R$ 299,99"

  constructor() { }

  ngOnInit(): void {
  }

}
