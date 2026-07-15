import { CheckCircle } from 'lucide-react';
import type { Feature } from '@/types';

interface FeatureItemProps {
  feature: Feature;
}

export default function FeatureItem({ feature }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3 py-3 px-4 bg-white/5 rounded hover:bg-white/10 transition-colors">
      <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
      <h6 className="text-white font-heading font-medium text-sm">{feature.title}</h6>
    </div>
  );
}
