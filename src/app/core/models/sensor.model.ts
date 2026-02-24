export interface Sensor {
  id: string;
  type: string;
  lastSeen?: string; // ISO timestamp
  value?: number;
}
