import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DetailsComponent } from './pages/details/details.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HostingComponent } from './pages/hosting/hosting.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Detalhes', component: DetailsComponent },
  {path: 'Contato', component: ContactComponent},
  {path: 'Hospedagem', component: HostingComponent},
  {path: '**', redirectTo: '/'}
];
