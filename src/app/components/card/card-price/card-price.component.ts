import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-price',
  templateUrl: './card-price.component.html',
  styleUrls: ['./card-price.component.css']
})
export class CardPriceComponent implements OnInit {

  @Input()
  gametype:string="Dital PS4"
  @Input()
  gameprice:string="R$ 299,99"

  constructor() { }

  ngOnInit(): void {
  }

}
