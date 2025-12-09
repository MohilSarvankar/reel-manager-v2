import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelBox } from './reel-box';

describe('ReelBox', () => {
  let component: ReelBox;
  let fixture: ComponentFixture<ReelBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReelBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
