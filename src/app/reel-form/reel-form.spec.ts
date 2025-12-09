import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelForm } from './reel-form';

describe('ReelForm', () => {
  let component: ReelForm;
  let fixture: ComponentFixture<ReelForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReelForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
