import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { chartConfigurationFormat } from '../../../core/formats/chart-configuration.format';
import { chartOptionFormat } from '../../../core/formats/chart-option.format';
import { EventService } from '../../../core/http/event.service';

@Component({
  selector: 'app-chart-sale-event',
  templateUrl: './chart-sale-event.component.html',
  styleUrls: ['./chart-sale-event.component.scss']
})
export class ChartSaleEventComponent implements OnInit {

  chartData: ChartConfiguration['data'];
  optionFormat: ChartConfiguration['options'];

  constructor(private eventService: EventService) {
    this.chartData = chartConfigurationFormat;
    this.optionFormat = chartOptionFormat;
  }

  ngOnInit(): void {
    this.eventService.generateChartEvent().subscribe(resp => {
      this.chartData = chartConfigurationFormat.datasets = resp;
    });
  }

}
