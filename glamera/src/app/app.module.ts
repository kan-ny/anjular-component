import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [

  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  
  {path: 'products', children:[
    {path: 'list', component:ProductsListComponent, children:[
        {path: 'detail/:name', component: ProductsComponent},
        {path: '**',redirectTo: '/products/list', pathMatch:'full' }
    ]},

  ]},

  {path: '', redirectTo: '/home', pathMatch:'full' },
  {path: '**',redirectTo: '/home', pathMatch:'full' }

]


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    ProductsListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
