import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SnackbarService } from '../../services/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmationComponent } from '../get-confirmation/get-confirmation.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  UsersDetails !: Iuser
  UserId !: string

  constructor(private userservice: UsersService,
    private snackbar: SnackbarService,
    private router: Router,
    private matdialog: MatDialog,
    private Routes: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.Routes.params.subscribe((param: Params) => {
      this.UserId = param['userId']
      if (this.UserId) {
        this.userservice.fetchUsersById(this.UserId)
          .subscribe({
            next: data => {
              this.UsersDetails = data
            },
            error: err => {
              console.log(err);

            }
          })
      }
    })

  }

  onremove() {
    let config = new MatDialogConfig()
    config.width = '300px'
    config.disableClose = true
    config.data = `Are You Sure ? You Want To Remove This Id ${this.UserId}`
    let matref = this.matdialog.open(GetConfirmationComponent, config)
    matref.afterClosed().subscribe(res => {
      if (res) {
        this.userservice.onRemoveuser(this.UsersDetails.userId)
          .subscribe({
            next: res => {
              this.snackbar.opensnackbar(res.msg)
              this.userservice.fetchusers().subscribe({
                next: res => {
                  this.router.navigate(['/users', res[0].userId])
                }
              })
            }
          })
      }
    })

  }

}
