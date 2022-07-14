import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LtaiMainNavComponent } from './ltai-main-nav.component';

describe('LtaiMainNavComponent', () => {
  let component: LtaiMainNavComponent;
  let fixture: ComponentFixture<LtaiMainNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LtaiMainNavComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LtaiMainNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
