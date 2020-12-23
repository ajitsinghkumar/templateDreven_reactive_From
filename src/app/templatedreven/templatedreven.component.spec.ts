import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplatedrevenComponent } from './templatedreven.component';

describe('TemplatedrevenComponent', () => {
  let component: TemplatedrevenComponent;
  let fixture: ComponentFixture<TemplatedrevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplatedrevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplatedrevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
