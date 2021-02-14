import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultComponent } from './default.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';

import { RouterModule } from '@angular/router';
import { PostsComponent } from 'src/app/modules/posts/posts.component';
import { SharedModule } from 'src/app/shared/shared.module';

import {MatSidenavModule} from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatCardModule } from '@angular/material/card';
import { DashboardService } from 'src/app/modules/dashboard.service';

import { MatTableModule } from '@angular/material/table';

import { MatPaginatorModule } from '@angular/material/paginator';

import { MatTabsModule } from '@angular/material/tabs';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { MatRadioModule } from '@angular/material/radio';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { CustomerComponent } from 'src/app/modules/customer/customer.component';

// import { NgForm } from '@angular/forms';
// import { MatFormField, MatLabel, MatHint, MatError, } from '@angular/material/form-field';

import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

// import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [
    DefaultComponent,
    DashboardComponent,
    PostsComponent,
    CustomerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    FlexLayoutModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSlideToggleModule,
    MatRadioModule,
    MatMenuModule,
    MatButtonModule,

    // MatInput,
    // MatToolbarModule,
 
    // MatTableModule,
    // MatPaginatorModule,
    MatSortModule,
    MatIconModule
  ],
  providers: [
    DashboardService
  ]
})
export class DefaultModule { }
