import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioDevicesComponent } from './audio-device.component';

describe('AudioDevicesComponent', () => {
  let component: AudioDevicesComponent;
  let fixture: ComponentFixture<AudioDevicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioDevicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioDevicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
