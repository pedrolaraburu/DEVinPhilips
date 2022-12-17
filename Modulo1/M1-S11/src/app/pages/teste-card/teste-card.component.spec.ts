import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteCardComponent } from './teste-card.component';

describe('TesteCardComponent', () => {
  let component: TesteCardComponent;
  let fixture: ComponentFixture<TesteCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TesteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
