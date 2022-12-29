import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeachClientComponent } from './seach-client.component';

describe('SeachClientComponent', () => {
  let component: SeachClientComponent;
  let fixture: ComponentFixture<SeachClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeachClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeachClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
