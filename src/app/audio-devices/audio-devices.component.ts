import { Component, OnInit, OnDestroy } from '@angular/core';
import {AudioDevicesService} from "./audio-devices.service";
import {IAudioDevice} from "../interfaces/IAudioDevice";
import { Observable } from "rxjs";
import { IntervalObservable } from "rxjs/observable/IntervalObservable";
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/takeWhile';
@Component({
  selector: 'app-audio-devices',
  templateUrl: './audio-devices.component.html',
  styleUrls: ['./audio-devices.component.css']
})
export class AudioDevicesComponent implements OnInit, OnDestroy {
  private audioDevices: IAudioDevice[];
  private alive: boolean; // used to unsubscribe from the IntervalObservable when OnDestroy is called.
  constructor(private audioDevicesService: AudioDevicesService) {
   this.alive = true;
  }
  ngOnInit() {
   this.audioDevicesService.getAudioDevices().first().subscribe(devices => {
   		this.audioDevices = devices;
   }, err => this.logError(err));
    // get our data every subsequent 2 seconds
    IntervalObservable.create(2000)
      .takeWhile(() => this.alive) // only fires when component is alive
      .subscribe(() => {
         this.audioDevicesService.getAudioDevices()
          .subscribe(devices => {
			for(const newDevice of devices) {
			    for(const currentDevice of this.audioDevices){
			       if(currentDevice.id == newDevice.id && currentDevice.active==!newDevice.active){
   					const message =  newDevice.name + " " + (newDevice.active?"branché" :"debranché");
   					alert(message);
   					break;
			       }
			    }
			}
			this.audioDevices = devices;
  			  
  			
          }, err => this.logError(err));
      });
  }
   logError(err: any) {
        console.log(err);
    }
	ngOnDestroy() {
	   this.alive =false;
	}
}
