import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloSundarComponent } from './hello-sundar.component';

describe('HelloSundarComponent', () => {
  let component: HelloSundarComponent;
  let fixture: ComponentFixture<HelloSundarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloSundarComponent]
    });
    fixture = TestBed.createComponent(HelloSundarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
