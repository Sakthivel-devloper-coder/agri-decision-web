export interface Farm {
  id: string;
  name: string;
  location?: {
    lat: number;
    lng: number;
  };
  areaHectares?: number;
}
