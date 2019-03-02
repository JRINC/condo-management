import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { CondoComponent } from './condo/condo.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    CondoComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
