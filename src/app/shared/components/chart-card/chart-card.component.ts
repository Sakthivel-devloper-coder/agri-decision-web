import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-chart-card',
  standalone: true,
  template: `
    <div class="chart-card">
      <h3>{{ title }}</h3>
      <div class="chart-placeholder">
        <!-- Placeholder: integrate Chart.js or other library -->
        <svg width="100%" height="140" viewBox="0 0 200 140" preserveAspectRatio="none">
          <polyline [attr.points]="points" fill="none" stroke="#2e7d32" stroke-width="3"></polyline>
        </svg>
      </div>
      <div class="meta"><ng-content></ng-content></div>
    </div>
  `,
  styles: [
    `
      .chart-card { background: #fff; border-radius: 8px; padding: 12px; box-shadow: 0 1px 2px rgba(0,0,0,0.05);} 
      .chart-placeholder { margin-top: 8px; }
    `
  ]
})
export class ChartCardComponent {
  @Input() title = '';
  @Input() set data(v: number[]) {
    this.points = v.map((n, i) => `${(i / Math.max(1, v.length - 1)) * 200},${140 - (n / Math.max(...v)) * 120}`).join(' ');
  }
  points = '';
}
