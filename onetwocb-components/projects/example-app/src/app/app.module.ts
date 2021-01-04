import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { OnetwocbComponentsModule } from 'projects/onetwocb-components/src/public-api';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, OnetwocbComponentsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
