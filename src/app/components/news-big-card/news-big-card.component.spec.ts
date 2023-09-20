import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsBigCardComponent } from './news-big-card.component';

describe('NewsBigCardComponent', () => {
  let component: NewsBigCardComponent;
  let fixture: ComponentFixture<NewsBigCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsBigCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsBigCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
