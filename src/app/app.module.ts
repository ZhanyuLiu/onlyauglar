import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HoeComponent } from './components/hoe/hoe.component';
import { NewsComponent } from './components/news/news.component';

//引入自定义模块
import { UserModule } from "./module/user/user.module";

@NgModule({
  declarations: [
    AppComponent,
    HoeComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
