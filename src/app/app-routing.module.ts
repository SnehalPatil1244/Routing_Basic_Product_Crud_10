import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './shared/components/home/home.component';
import { UsersComponent } from './shared/components/users/users.component';
import { ProductDashBoardComponent } from './shared/components/product-dash-board/product-dash-board.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductsComponent } from './shared/components/products/products.component';
import { FairsComponent } from './shared/components/fairs/fairs.component';
import { UsersDashBoardComponent } from './shared/components/users-dash-board/users-dash-board.component';
import { UserFormComponent } from './shared/components/user-form/user-form.component';
import { HomepageComponent } from './shared/components/homepage/homepage.component';
import { FairsDashBoardComponent } from './shared/components/fairs-dash-board/fairs-dash-board.component';
import { FairsDetailsComponent } from './shared/components/fairs-details/fairs-details.component';
import { AuthComponent } from './shared/components/auth/auth.component';
import { AuthGuard } from './shared/services/Auth.Guard';
import { canDeactivatecomponent } from './shared/services/canDeactive.Guard';
import { userRoleGuard } from './shared/services/userRole.Guard';
import { productResolver } from './shared/services/product.Resolver';
import { singleproductResolver } from './shared/services/singleProduct.Resolver';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent
  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [AuthGuard, userRoleGuard],
    data: {
      userRole: ['buyer', 'admin', 'superAdmin']
    }
  },
  {
    path: 'users',
    component: UsersDashBoardComponent,
    canActivate: [AuthGuard, userRoleGuard],
    data: {
      userRole: ['admin', 'superAdmin']
    },
    children: [
      {
        path: 'adduser',
        component: UserFormComponent
      },
      {
        path: ':userId',
        component: UsersComponent
      },
      {
        path: ':userId/edit',
        component: UserFormComponent,
        canDeactivate: [canDeactivatecomponent]
      },
    ]
  },

  {
    path: 'products',
    component: ProductDashBoardComponent,
    canActivate: [AuthGuard, userRoleGuard],
    data: {
      userRole: ['buyer', 'admin', 'superAdmin']
    },
    resolve: {
      products: productResolver
    },
    children: [
      {
        path: 'addproduct',
        component: ProductFormComponent
      },
      {
        path: ':productId',
        component: ProductsComponent,
        resolve: {
          products : singleproductResolver
        }
      },
      {
        path: ':productId/edit',
        component: ProductFormComponent,
        canDeactivate: [canDeactivatecomponent]
      },
    ]
  },

  {
    path: 'fairs',
    component: FairsDashBoardComponent,
    canActivate: [AuthGuard, userRoleGuard],
    data: {
      userRole: ['superAdmin']
    },
    children: [
      {
        path: ':fairsId',
        component: FairsDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
