import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';

import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { PagesComponent } from './pages.component';
import { ComponentsModule } from '../components/components.module';

@NgModule({
  declarations: [HomeComponent, UserComponent, PagesComponent],
  imports: [CommonModule, RouterModule, ComponentsModule, SharedModule],
})
export class PagesModule {}
