import { Component, Input, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairs';

@Component({
  selector: 'app-fairs-card',
  templateUrl: './fairs-card.component.html',
  styleUrls: ['./fairs-card.component.scss']
})
export class FairsCardComponent implements OnInit {
@Input() fairsObj !: Ifairs
  constructor() { }

  ngOnInit(): void {
  }

}
