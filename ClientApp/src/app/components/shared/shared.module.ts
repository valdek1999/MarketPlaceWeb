import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';

//import { MatDividerModule } from '@angular/material/divider';
//import { MatIconModule } from '@angular/material/icon';
//import { MatToolbarModule } from '@angular/material/toolbar';
//import { MatButtonModule } from '@angular/material/button';
//import { MatMenuModule } from '@angular/material/menu';
//import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,    
    FlexLayoutModule,    
    RouterModule
    //MatDividerModule,
    //MatToolbarModule,
    //MatIconModule,
    //MatButtonModule,
    //MatMenuModule,
    //MatListModule,
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ]
})

export class SharedModule { }
