import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [{
  path: "", component: HomeComponent
}, {
  path: "about", component: AboutComponent
},{
  path: "products", component: ProductsComponent
},{
  path: "cart", component: CartComponent
},{
  path: "product/:indexFromRouting", component: ProductDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
