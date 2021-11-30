import { PagesRoutingModule } from './pages/pages.routing';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: '**', redirectTo: '/' }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    PagesRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
