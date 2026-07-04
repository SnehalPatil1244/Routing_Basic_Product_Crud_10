import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private Matsnackbar: MatSnackBar) { }

  opensnackbar(msg: string) {
    this.Matsnackbar.open(msg, "close", {
      duration: 3000,
      horizontalPosition: 'left',
      verticalPosition: 'top'
    })
  }
}
