import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartCardComponent } from '../../shared/components/chart-card/chart-card.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, ChartCardComponent],
  template: `
    <section>
      <h2>Dashboard</h2>
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;">
        <ui-chart-card title="Yield Forecast" [data]="yieldData">
          <p>Projected yield: 1200 kg/ha</p>
        </ui-chart-card>

        <ui-chart-card title="Soil Moisture" [data]="soilData">
          <p>Avg moisture: 22%</p>
        </ui-chart-card>

        <div style="background:#fff;border-radius:8px;padding:12px;box-shadow:0 1px 2px rgba(0,0,0,0.05);">
          <h3>NDVI Map (placeholder)</h3>
          <div style="height:140px;background:linear-gradient(90deg,#def7ec,#c7f9d0);"></div>
        </div>
      </div>
    </section>
  `
})
export class DashboardComponent {
  yieldData = [10, 12, 14, 18, 17, 20, 22];
  soilData = [30, 28, 26, 24, 22, 20, 18];
}
