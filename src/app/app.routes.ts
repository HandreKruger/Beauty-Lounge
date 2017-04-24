import { RequestComponent } from './request/request.component';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';

export const appRoutes = [
  { path: '', component: HomeComponent },
  { path: 'request', component: RequestComponent },
  { path: 'contactMe', component: ContactMeComponent },
];
