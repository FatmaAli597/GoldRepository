import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from'@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NIDDirective } from './Directives/nid.directive';
import { NIDPipe } from './Pipes/nid.pipe';
import { CartIDPipe } from './Pipes/cart-id.pipe';
import { TableComponent } from './component/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    NIDDirective,
    NIDPipe,
    CartIDPipe,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
