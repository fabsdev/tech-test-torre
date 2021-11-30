import { ComponentsModule } from './../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [NavbarComponent, SpinnerComponent],
  exports: [NavbarComponent, SpinnerComponent],
  imports: [CommonModule, RouterModule, ComponentsModule],
})
export class SharedModule {}
