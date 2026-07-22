import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { GetConfirmationComponent } from './shared/components/get-confirmation/get-confirmation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { ProductDashBoardComponent } from './shared/components/product-dash-board/product-dash-board.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { OverlayModule } from "@angular/cdk/overlay";
import { UsersDashBoardComponent } from './shared/components/users-dash-board/users-dash-board.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { HomepageComponent } from './shared/components/homepage/homepage.component';
import { FairsCardComponent } from './shared/components/fairs-card/fairs-card.component';
import { FairsDetailsComponent } from './shared/components/fairs-details/fairs-details.component';
import { FairsDashBoardComponent } from './shared/components/fairs-dash-board/fairs-dash-board.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UsersComponent,
    ProductsComponent,
    FairsComponent,
    GetConfirmationComponent,
    NavBarComponent,
    ProductDashBoardComponent,
    ProductFormComponent,
    UsersDashBoardComponent,
    UserFormComponent,
    HomepageComponent,
    FairsCardComponent,
    FairsDetailsComponent,
    FairsDashBoardComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatSnackBarModule,
    MatIconModule,
    MatDialogModule,
    MatChipsModule,
    OverlayModule,
    HttpClientModule
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
