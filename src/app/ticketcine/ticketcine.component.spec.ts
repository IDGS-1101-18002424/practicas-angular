import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketcineComponent } from './ticketcine.component';

describe('TicketcineComponent', () => {
  let component: TicketcineComponent;
  let fixture: ComponentFixture<TicketcineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TicketcineComponent]
    });
    fixture = TestBed.createComponent(TicketcineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
