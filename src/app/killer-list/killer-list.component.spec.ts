import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KillerListComponent } from './killer-list.component';

describe('KillerListComponent', () => {
  let component: KillerListComponent;
  let fixture: ComponentFixture<KillerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KillerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KillerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
