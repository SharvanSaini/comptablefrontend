import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule,Routes} from '@angular/router';
import { DetailformComponent } from './detailform/detailform.component';
import { RecordService } from './record.service';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RecordlistComponent } from './recordlist/recordlist.component';
import{NgxPaginationModule} from 'ngx-pagination'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    DetailformComponent,
    RecordlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    MatInputModule,
    RouterModule.forRoot([
      
      {  path:'record',component:RecordlistComponent },
      
  
    ])
  ],
  entryComponents:[
    DetailformComponent
    
    ],
  providers: [RecordService],
  bootstrap: [AppComponent]
})
export class AppModule { }
