import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ProductDetailsComponent } from './shop/product-details/product-details.component';
import { TestErrorsComponent } from './core/test-errors/test-errors.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'test-error', component: TestErrorsComponent},
  { path: 'server-error', component: ServerErrorComponent},
  { path: 'not-found', component: NotFoundComponent},
  { path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule)},
  { path: '', redirectTo: '', pathMatch: 'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
