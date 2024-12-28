import { Code, Wrench, Search } from 'lucide-react';
import type { Service } from '../types/service';

export const services: Service[] = [
  {
    icon: Code,
    title: 'Website Design',
    description: 'Custom designs that reflect your brand and engage your audience.',
  },
  {
    icon: Wrench,
    title: 'Website Maintenance',
    description: 'Keep your website up-to-date and running smoothly.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: "Improve your website's ranking and visibility on search engines.",
  },
];