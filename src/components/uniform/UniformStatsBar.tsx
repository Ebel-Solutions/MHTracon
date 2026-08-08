import { ServiceStatsBar } from '@/components/shared/services';

const stats = [
  { value: 500, suffix: '+', label: 'Corporate Clients Served' },
  { value: 10, suffix: '+', label: 'Years of Excellence' },
  { value: 50000, suffix: '+', label: 'Uniforms Delivered' },
  { value: 15, suffix: ' Days', label: 'Avg. Turnaround Time' },
];

export default function UniformStatsBar() {
  return <ServiceStatsBar stats={stats} className="uniform-stats-bar" />;
}
