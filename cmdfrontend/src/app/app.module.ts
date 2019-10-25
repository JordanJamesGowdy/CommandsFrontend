import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NpmcommandsComponent } from './npmcommands/npmcommands.component';
import { DotnetcommandsComponent } from './dotnetcommands/dotnetcommands.component';

@NgModule({
  declarations: [
    AppComponent,
    NpmcommandsComponent,
    DotnetcommandsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
