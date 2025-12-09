import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReelList } from './reel-list';

describe('ReelList', () => {
  let component: ReelList;
  let fixture: ComponentFixture<ReelList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReelList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReelList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
