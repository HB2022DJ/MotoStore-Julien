import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotoPharesComponent } from './moto-phares.component';

describe('MotoPharesComponent', () => {
  let component: MotoPharesComponent;
  let fixture: ComponentFixture<MotoPharesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotoPharesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotoPharesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
