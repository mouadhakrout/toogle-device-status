import {Injectable} from '@angular/core'
import { HttpClient } from '@angular/common/http';
import {IAudioDevice} from "../interfaces/IAudioDevice";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import "rxjs/add/observable/of";
import {environment} from '../../environments/environment';
@Injectable()
export class AudioDevicesService {
  constructor(private http: HttpClient) { }
   getAudioDevices(): Observable<IAudioDevice[]> {
    return this.http.get<IAudioDevice[]>(environment.devices,{observe: 'response'}).map(res =>{
      if(res.status==200){
        return(res.body);
      }
    });
   }
}