import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LtaiMainNavComponent } from './ltai-main-nav/ltai-main-nav.component';
import { LtaiMainNavBottomComponent } from './ltai-main-nav-bottom/ltai-main-nav-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    LtaiMainNavComponent,
    LtaiMainNavBottomComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
