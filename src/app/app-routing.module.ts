import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NewsComponent } from './pages/news/news.component';
import { ProductAndServiceComponent } from './pages/product-and-service/product-and-service.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NewsDetailComponent } from './pages/newsdetail/newsdetail.component';

import { ProductAndServiceDetailsComponent } from './pages/product-and-service-details/product-and-service-details.component';
import { PerformanceDetailsComponent } from './pages/performance-details/performance-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent },
  { path: 'product-and-service', component: ProductAndServiceComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'newsdetail/:code', component: NewsDetailComponent },
  { path: 'product-and-service-details', component: ProductAndServiceDetailsComponent },
  { path: 'performance-details/:code', component: PerformanceDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled', useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
