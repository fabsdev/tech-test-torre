import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, UserComponent, PagesComponent],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    SharedModule,
    MatIconModule,
  ],
})
export class PagesModule {}
