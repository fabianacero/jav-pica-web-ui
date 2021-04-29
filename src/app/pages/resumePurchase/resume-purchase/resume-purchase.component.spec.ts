import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumePurchaseComponent } from './resume-purchase.component';

describe('ResumePurchaseComponent', () => {
  let component: ResumePurchaseComponent;
  let fixture: ComponentFixture<ResumePurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumePurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumePurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
