import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnregisteredBusinessComponent } from './unregistered-business.component';

describe('UnregisteredBusinessComponent', () => {
  let component: UnregisteredBusinessComponent;
  let fixture: ComponentFixture<UnregisteredBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnregisteredBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnregisteredBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
