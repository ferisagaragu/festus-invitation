import { TestBed } from '@angular/core/testing';
import { ItemEventComponent } from './item-event.component';
import { EventModel } from '../../../core/models/event.model';

describe('ItemEventComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEventComponent ]
    }).compileComponents();
  });

  it('should create', () => {
    let fixture = TestBed.createComponent(ItemEventComponent);
    let component = fixture.componentInstance;
    component.event = new EventModel({
      uuid: '1',
      name: 'fake',
      description: 'fake des',
      price: 1000,
      urlDataBase: 'http://fake-call',
      endPointInvitation: 'http://fake-call',
      primaryColor: '#fff',
      accentColor: '#fff',
      customTicket: false,
      endDate: new Date(),
      createDate: new Date()
    });
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('validate component render', () => {
    let fixture = TestBed.createComponent(ItemEventComponent);
    let component = fixture.componentInstance;
    component.event = new EventModel({
      uuid: '1',
      name: 'fake',
      description: 'fake des',
      price: 1000,
      urlDataBase: 'http://fake-call',
      endPointInvitation: 'http://fake-call',
      primaryColor: '#fff',
      accentColor: '#fff',
      customTicket: false,
      endDate: new Date(),
      createDate: new Date()
    });
    fixture.detectChanges();

    const title = fixture.nativeElement.getElementsByClassName('title')[0];

    expect(title.innerText).toBe('fake');
  });

});
