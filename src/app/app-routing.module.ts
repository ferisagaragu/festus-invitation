import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BASE_ROUTES } from './core/routes/base.routes';
import { AUTH_ROUTING } from './core/routes/auth.routes';
import { EVENT_ROUTING } from './core/routes/event.routes';

const routes: Routes = [
  ...BASE_ROUTES,
  ...AUTH_ROUTING,
  ...EVENT_ROUTING
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
