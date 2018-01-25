import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillActionComponent } from './kill-action.component';

describe('KillActionComponent', () => {
  let component: KillActionComponent;
  let fixture: ComponentFixture<KillActionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillActionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
