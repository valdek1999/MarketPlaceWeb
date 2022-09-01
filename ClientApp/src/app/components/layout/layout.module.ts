import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
//import { MatSidenavModule } from '@angular/material/sidenav';
//import { MatDividerModule } from '@angular/material/divider';
//import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from "../../../material.module";
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from './layout.component';

@NgModule({
  declarations: [
    LayoutComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,    
    FlexLayoutModule,    
    MaterialModule,
    FormsModule
    //MatSidenavModule,
    //MatDividerModule,
    //MatCardModule,
  ],
  providers: [
    
  ]
})

export class DefaultModule { }
