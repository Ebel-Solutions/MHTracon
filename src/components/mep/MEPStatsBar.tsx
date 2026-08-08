import { ServiceStatsBar } from '@/components/shared/services';

const stats = [
  { value: 280, suffix: '+', label: 'MEP Projects Delivered' },
  { value: 12, suffix: '+', label: 'Years of Engineering Excellence' },
  { value: 6, suffix: '', label: 'Core MEP Disciplines' },
  { value: 100, suffix: '%', label: 'Compliance & Safety Record' },
];

export default function MEPStatsBar() {
  return <ServiceStatsBar stats={stats} className="mep-stats-bar" />;
}
