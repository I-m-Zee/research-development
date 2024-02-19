import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterWithoutNgrxComponent } from './counter-without-ngrx.component';

describe('CounterWithoutNgrxComponent', () => {
  let component: CounterWithoutNgrxComponent;
  let fixture: ComponentFixture<CounterWithoutNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterWithoutNgrxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CounterWithoutNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
