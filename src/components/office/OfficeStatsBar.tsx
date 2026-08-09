import { ServiceStatsBar } from '@/components/shared/services';

const stats = [
  { value: 1000, suffix: '+', label: 'Premium Products' },
  { value: 500, suffix: '+', label: 'Corporate Clients' },
  { value: 100, suffix: '%', label: 'Reliable Supply' },
  { value: 24, suffix: '/7', label: 'Dedicated Support' },
];

export default function OfficeStatsBar() {
  return <ServiceStatsBar stats={stats} className="office-stats-bar" />;
}
