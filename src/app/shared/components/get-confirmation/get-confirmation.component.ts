import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirmation',
  templateUrl: './get-confirmation.component.html',
  styleUrls: ['./get-confirmation.component.scss']
})
export class GetConfirmationComponent implements OnInit {
getdata !: string
  constructor(private matref : MatDialogRef<GetConfirmationComponent>,
    @Inject(MAT_DIALOG_DATA) msg : string
  ) { this.getdata = msg}

  ngOnInit(): void {
  }

  onclose(flag : boolean) {
    this.matref.close(flag)

  }

}
