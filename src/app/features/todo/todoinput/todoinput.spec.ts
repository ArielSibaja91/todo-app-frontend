import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Todoinput } from './todoinput';

describe('Todoinput', () => {
  let component: Todoinput;
  let fixture: ComponentFixture<Todoinput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Todoinput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Todoinput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
