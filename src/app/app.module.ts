import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloSundarComponent } from './hello-sundar/hello-sundar.component';
import { DateComponent } from './date/date.component';
import { AdressCardComponent } from './adress-card/adress-card.component';
import { FormsModule } from '@angular/forms';
import { ViewModule } from './view/view.module';
import { TestService } from './test.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HelloSundarComponent,
    DateComponent,
    AdressCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ViewModule,
    
  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
