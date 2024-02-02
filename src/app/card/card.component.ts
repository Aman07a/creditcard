import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() name: string | any;
  @Input() cardNumber: string | any;
  @Input() expiration: string | any;

  constructor() {}

  ngOnInit() {}
}
