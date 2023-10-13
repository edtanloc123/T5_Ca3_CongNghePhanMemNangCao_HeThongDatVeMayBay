import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TrangChuComponent } from './components/trangchu/trangchu.component';
import { ThongTinHanhChinhComponent } from './components/thongtinhanhchinh/thongtinhanhchinh.component';
import { DangNhapComponent } from './components/dangnhap/dangnhap.component';

@NgModule({
  declarations: [
    AppComponent,
    TrangChuComponent,
    ThongTinHanhChinhComponent,
    DangNhapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
