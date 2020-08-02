import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoeComponent } from './hoe.component';

describe('HoeComponent', () => {
  let component: HoeComponent;
  let fixture: ComponentFixture<HoeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
