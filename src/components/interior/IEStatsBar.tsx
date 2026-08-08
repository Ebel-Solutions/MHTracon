import { ServiceStatsBar } from '@/components/shared/services';

const stats = [
  { value: 350, suffix: '+', label: 'Projects Completed' },
  { value: 12, suffix: '+', label: 'Years of Expertise' },
  { value: 9, suffix: '', label: 'Service Specialisations' },
  { value: 100, suffix: '%', label: 'Turnkey Delivery' },
];

export default function IEStatsBar() {
  return <ServiceStatsBar stats={stats} className="ie-stats-bar" />;
}
