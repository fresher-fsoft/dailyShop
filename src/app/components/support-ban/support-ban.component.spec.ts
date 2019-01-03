import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportBanComponent } from './support-ban.component';

describe('SupportBanComponent', () => {
  let component: SupportBanComponent;
  let fixture: ComponentFixture<SupportBanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportBanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportBanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
