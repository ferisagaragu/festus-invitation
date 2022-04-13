import { ChartConfiguration } from 'chart.js';

export const chartOptionFormat: ChartConfiguration['options'] = {
  elements: {
    line: {
      tension: 0.5
    }
  }
};
