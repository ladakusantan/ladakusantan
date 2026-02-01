
import React from 'react';
import { Project, Testimonial, Service } from './types';
import {
  Shield,
  Terminal,
  Brain,
  Layout,
  Search,
  Smartphone,
  Lock,
  Cpu,
  Globe
} from 'lucide-react';

export const SERVICES: Service[] = [
  { label: 'Cloud Security', icon: 'Shield' },
  { label: 'Penetration Testing', icon: 'Terminal' },
  { label: 'Vulnerability Analysis', icon: 'Search' },
  { label: 'Network Protection', icon: 'Lock' },
  { label: 'Security Architecture', icon: 'Cpu' },
  { label: 'OSINT Investigation', icon: 'Globe' },
  { label: 'App Security', icon: 'Smartphone' },
  { label: 'Threat Intelligence', icon: 'Brain' }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Zero-Trust Protocol V2',
    category: 'Architecture',
    description: 'A custom implementation of Zero-Trust security model for distributed enterprise systems.',
    image: 'https://picsum.photos/800/600?random=1',
    video: '/vid/grok-video-1.mp4',
    tags: ['Go', 'Kubernetes', 'gRPC']
  },
  {
    id: '2',
    title: 'Deep Packet Inspector',
    category: 'Network Security',
    description: 'High-performance real-time network traffic analysis using eBPF and XDP.',
    image: 'https://picsum.photos/800/600?random=2',
    video: '/vid/grok-video-2.mp4',
    tags: ['C++', 'Rust', 'Linux Kernel']
  },
  {
    id: '3',
    title: 'Biometric Auth Shield',
    category: 'Application Security',
    description: 'Multi-factor authentication system with behavioral biometrics integration.',
    image: 'https://picsum.photos/800/600?random=3',
    video: '/vid/grok-video-3.mp4',
    tags: ['Python', 'PyTorch', 'React']
  },
  {
    id: '4',
    title: 'Quantum-Resistant Vault',
    category: 'Cryptography',
    description: 'Storage encryption solution leveraging lattice-based cryptography standards.',
    image: 'https://picsum.photos/800/600?random=4',
    video: '/vid/grok-video-4.mp4',
    tags: ['Rust', 'NIST Standards']
  },
  {
    id: '5',
    title: 'Neural Network Sentry',
    category: 'AI Security',
    description: 'Adversarial attack detection system for large-scale language model deployments.',
    image: 'https://picsum.photos/800/600?random=5',
    video: '/vid/grok-video-5.mp4',
    tags: ['TensorFlow', 'Python', 'AWS']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Thomas Cruz',
    role: 'CTO, CyberNode',
    content: 'Daf_4fk is a real gem! He completely changed the way we approach our security infrastructure. Highly recommended for any high-stakes projects.',
    avatar: 'https://picsum.photos/100/100?random=10'
  },
  {
    id: '2',
    name: 'Patrick Martin',
    role: 'Head of Ops, VaultBase',
    content: 'The level of detail in the penetration reports was staggering. We discovered vulnerabilities we never even suspected existed.',
    avatar: 'https://picsum.photos/100/100?random=11'
  },
  {
    id: '3',
    name: 'Gregory Wallace',
    role: 'Security Engineer',
    content: 'An elite professional. His deep understanding of network security and kernel internals is truly impressive.',
    avatar: 'https://picsum.photos/100/100?random=12'
  },
  {
    id: '4',
    name: 'Sarah Chen',
    role: 'Lead Developer',
    content: 'Seamless integration with our dev team. Daf_4fk doesn\'t just find bugs; he helps us build better, more resilient systems.',
    avatar: 'https://picsum.photos/100/100?random=13'
  }
];
