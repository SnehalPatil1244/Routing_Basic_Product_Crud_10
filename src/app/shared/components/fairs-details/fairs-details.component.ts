import { Component, OnInit } from '@angular/core';
import { Ifairs } from '../../models/fairs';
import { FairsService } from '../../services/fairs.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
  fairsId !: string
  fairsObj !: Ifairs

  constructor(private fairsservice: FairsService,
    private routes: ActivatedRoute
  ) { }

  ngOnInit(): void {

    console.log('snapshot params:', this.routes.snapshot.params);
  this.routes.paramMap.subscribe(res => {
    this.fairsId = res.get('fairsId')!
    console.log(this.fairsId);
    

    if (this.fairsId) {
      this.fairsservice.fetchfairsById(this.fairsId)
        .subscribe({
          next: response => {
            this.fairsObj = response
          },
          error: err => {
            console.log(err);
          }
        })
    }
  })
}

}
