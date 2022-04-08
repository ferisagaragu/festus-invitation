import { TestBed } from '@angular/core/testing';
import { MatMenuModule } from '@angular/material/menu';
import { ItemEventComponent } from './item-event.component';
import { EventModel } from '../../../core/models/event.model';

const eventResp = {
  uuid: "e7aabf2d-721b-45a4-ac9b-cc50cf20af19",
  firstCoupleName: 'Fernando',
  secondCoupleName: 'Alejandra',
  description: 'description',
  providerUrl: 'https://fake.com',
  providerType: 'firebase',
  endPointInvitation: 'https://fake.com',
  primaryColor: '#EABE3F',
  secondaryColor: '#5e2129',
  customTicket: true,
  price: '$1,000.00 MNX',
  endDate: '2022-06-01T05:00:00.000+00:00',
  eventDate: '2022-08-01T05:00:00.000+00:00',
  createDate: '2022-04-06T04:22:59.432+00:00',
  delete: false,
  missingDay: 54,
  percentage: 4,
  unformatPrice: 1000,
  remainingDay: 56,
  name: 'Fernando & Alejandra'
}

describe('ItemEventComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEventComponent ],
      imports: [
        MatMenuModule
      ]
    }).compileComponents();
  });

  it(`should create`, () => {
    let fixture = TestBed.createComponent(ItemEventComponent);
    let component = fixture.componentInstance;
    component.event = new EventModel(eventResp);
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it(`validate component render`, () => {
    let fixture = TestBed.createComponent(ItemEventComponent);
    let component = fixture.componentInstance;
    component.event = new EventModel(eventResp);
    component.showDone = true;
    fixture.detectChanges();

    const title = fixture.nativeElement.getElementsByClassName('title')[0];
    expect(title.innerText).toBe('Fernando & Alejandra 🎫');
  });

});
