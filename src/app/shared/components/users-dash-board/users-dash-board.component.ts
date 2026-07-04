import { Component, OnInit } from '@angular/core';
import { Iuser } from '../../models/users';
import { UsersService } from '../../services/users.service';
import { AppRoutingModule } from "src/app/app-routing.module";
import { MatButtonModule } from "@angular/material/button";
import { OverlayModule } from "@angular/cdk/overlay";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: 'app-users-dash-board',
  templateUrl: './users-dash-board.component.html',
  styleUrls: ['./users-dash-board.component.scss'],
  
})
export class UsersDashBoardComponent implements OnInit {
  UsersArr: Array<Iuser> = [

  ]
  constructor(private userservice: UsersService) { }

  ngOnInit(): void {
    this.fetchusers()

  }
  fetchusers() {
    this.userservice.fetchusers().subscribe({
      next: res => {
        this.UsersArr = res
      },
      error: err => {
        console.log(err);

      }
    })
  }

}
