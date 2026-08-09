import { ServiceStatsBar } from '@/components/shared/services';

const stats = [
  { value: 450, suffix: '+', label: 'Security Systems Installed' },
  { value: 24, suffix: '/7', label: 'Monitoring & Support' },
  { value: 100, suffix: '%', label: 'Regulatory Compliance' },
  { value: 15, suffix: '+', label: 'Years of Security Expertise' },
];

export default function SecurityStatsBar() {
  return <ServiceStatsBar stats={stats} className="security-stats-bar" />;
}
