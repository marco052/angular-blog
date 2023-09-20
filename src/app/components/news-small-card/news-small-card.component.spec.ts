import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSmallCardComponent } from './news-small-card.component';

describe('NewsSmallCardComponent', () => {
  let component: NewsSmallCardComponent;
  let fixture: ComponentFixture<NewsSmallCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsSmallCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsSmallCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
