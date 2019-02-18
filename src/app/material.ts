import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

import { NgModule } from '@angular/core';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatToolbarModule,MatIconModule,MatMenuModule,MatSidenavModule,MatListModule,MatCardModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule, MatIconModule,MatMenuModule,MatSidenavModule,MatListModule,MatCardModule],
})
export class MaterialModule { }