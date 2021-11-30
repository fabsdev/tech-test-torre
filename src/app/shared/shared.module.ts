import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { ComponentsModule } from './../components/components.module';
import { NavbarComponent } from './navbar/navbar.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DialogDetailsSkillComponent } from './dialog-details-skill/dialog-details-skill.component';

@NgModule({
  declarations: [
    NavbarComponent,
    SpinnerComponent,
    DialogDetailsSkillComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    ComponentsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  exports: [NavbarComponent, SpinnerComponent, DialogDetailsSkillComponent],
})
export class SharedModule {}
