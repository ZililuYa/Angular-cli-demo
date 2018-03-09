import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';

export const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent, data: {title: 'home'}},
  {path: 'about', loadChildren: 'app/about/about.module#AboutModule'},
  {path: 'info', loadChildren: 'app/info/info.module#InfoModule'},
]
