export enum TicketStatus {
  PENDING = 'Pendiente',
  IN_PROGRESS = 'En Curso',
  RESOLVED = 'Resuelto'
}

export enum TruckStatus {
  ACTIVE = 'En Recorrido',
  MAINTENANCE = 'Mantenimiento',
  IDLE = 'En Base'
}

export interface Truck {
  id: string;
  plate: string;
  driver: string;
  status: TruckStatus;
  location: string;
  fuelLevel: number;
}

export interface Claim {
  id: string;
  type: string;
  address: string;
  date: string;
  status: TicketStatus;
}

export interface Employee {
  id: string;
  name: string;
  role: 'Chofer' | 'Recolector' | 'Mecánico' | 'Administrativo';
  status: 'Activo' | 'Licencia' | 'Vacaciones';
  shift: 'Mañana' | 'Tarde' | 'Noche';
  photoUrl?: string;
}

export interface StatMetric {
  label: string;
  value: string;
  change: string;
  positive: boolean;
}