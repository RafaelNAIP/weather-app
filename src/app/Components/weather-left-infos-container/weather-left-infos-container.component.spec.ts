import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherLeftInfosContainerComponent } from './weather-left-infos-container.component';

describe('WeatherLeftInfosContainerComponent', () => {
  let component: WeatherLeftInfosContainerComponent;
  let fixture: ComponentFixture<WeatherLeftInfosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherLeftInfosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherLeftInfosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
