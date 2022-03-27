import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtaiMainNavBottomComponent } from './ltai-main-nav-bottom.component';

describe('LtaiMainNavBottomComponent', () => {
  let component: LtaiMainNavBottomComponent;
  let fixture: ComponentFixture<LtaiMainNavBottomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LtaiMainNavBottomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtaiMainNavBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
