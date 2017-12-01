import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppGlobalService } from './app.global.service';
import { OwnerComponent } from './owner/owner.component';
import { OwnerService } from './owner/owner.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    OwnerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AppGlobalService,
    OwnerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
