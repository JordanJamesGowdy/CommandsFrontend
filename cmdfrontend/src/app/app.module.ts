import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Form, FormsModule } from "@angular/forms"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NpmcommandsComponent } from './npmcommands/npmcommands.component';
import { DotnetcommandsComponent } from './dotnetcommands/dotnetcommands.component';
import { DotnetcommanddetailsComponent } from './dotnetcommanddetails/dotnetcommanddetails.component';
import { NpmcommanddetailsComponent } from './npmcommanddetails/npmcommanddetails.component';
import { NpmcommandlistComponent } from './npmcommandlist/npmcommandlist.component';
import { NgcommandDetailService } from './shared/ngcommand-detail.service';
import {HttpClientModule} from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    NpmcommandsComponent,
    DotnetcommandsComponent,
    DotnetcommanddetailsComponent,
    NpmcommanddetailsComponent,
    NpmcommandlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [NgcommandDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
