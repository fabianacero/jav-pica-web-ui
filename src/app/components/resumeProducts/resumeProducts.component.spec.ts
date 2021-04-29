import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { resumeProductsComponent } from './resumeProducts.component';

describe('resumeProductsComponent', () => {
  let component: resumeProductsComponent;
  let fixture: ComponentFixture<resumeProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ resumeProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(resumeProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
