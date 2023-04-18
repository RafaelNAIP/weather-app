import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherRightInfosContainerComponent } from './weather-right-infos-container.component';

describe('WeatherRightInfosContainerComponent', () => {
  let component: WeatherRightInfosContainerComponent;
  let fixture: ComponentFixture<WeatherRightInfosContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherRightInfosContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeatherRightInfosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
