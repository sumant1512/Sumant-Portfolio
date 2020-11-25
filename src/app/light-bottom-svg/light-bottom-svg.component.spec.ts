import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightBottomSvgComponent } from './light-bottom-svg.component';

describe('LightBottomSvgComponent', () => {
  let component: LightBottomSvgComponent;
  let fixture: ComponentFixture<LightBottomSvgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LightBottomSvgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LightBottomSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
