import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { NgChartsModule } from 'ng2-charts';
import { ChartSaleEventComponent } from './chart-sale-event.component';
import { EventService } from '../../../core/http/event.service';

describe('ChartSaleEventComponent', () => {
  let eventServiceSpy: jasmine.SpyObj<EventService>;
  let component: ChartSaleEventComponent;
  let fixture: ComponentFixture<ChartSaleEventComponent>;

  beforeEach(async () => {
    eventServiceSpy = jasmine.createSpyObj('EventService', ['generateChartEvent']);

    await TestBed.configureTestingModule({
      declarations: [
        ChartSaleEventComponent
      ],
      imports: [
        NgChartsModule
      ],
      providers: [
        {
          provide: EventService,
          useValue: eventServiceSpy
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    eventServiceSpy.generateChartEvent.and.returnValue(of(undefined));
    fixture = TestBed.createComponent(ChartSaleEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
