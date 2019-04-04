import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AudioDevicesComponent } from './audio-devices/audio-devices.component';
import {AudioDevicesService} from './audio-devices/audio-devices.service';

@NgModule({
  declarations: [
    AppComponent,
    AudioDevicesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AudioDevicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
