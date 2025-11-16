import { NCLEXCategory } from '@/app/types';

export const nclexCategories: NCLEXCategory[] = [
  {
    id: 'safe-effective-care',
    title: 'Safe and Effective Care Environment',
    description: 'Management of care, safety, and infection control',
    percentage: '26-38%',
    color: 'bg-blue-500',
    subcategories: [
      {
        id: 'management-of-care',
        title: 'Management of Care',
        topics: [
          'Advance Directives',
          'Client Rights & Advocacy',
          'Ethical Practice',
          'Informed Consent',
          'Establishing Priorities'
        ]
      },
      {
        id: 'safety-infection-control',
        title: 'Safety and Infection Control',
        topics: [
          'Infection Control & Asepsis',
          'Standard & Transmission-Based Precautions',
          'Accident & Error Prevention',
          'Safe Use of Equipment'
        ]
      }
    ]
  },
  {
    id: 'health-promotion',
    title: 'Health Promotion and Maintenance',
    description: 'Growth, development, and disease prevention',
    percentage: '6-12%',
    color: 'bg-green-500',
    subcategories: [
      {
        id: 'health-promotion-topics',
        title: 'Health Promotion Topics',
        topics: [
          'Aging Process',
          'Developmental Stages',
          'Health Screening & Prevention',
          'Maternal & Newborn Care',
          'Physical Assessment Techniques'
        ]
      }
    ]
  },
  {
    id: 'psychosocial-integrity',
    title: 'Psychosocial Integrity',
    description: 'Mental health, coping, and therapeutic communication',
    percentage: '6-12%',
    color: 'bg-purple-500',
    subcategories: [
      {
        id: 'psychosocial-topics',
        title: 'Psychosocial Topics',
        topics: [
          'Therapeutic Communication',
          'Mental Health Concepts',
          'Coping & Stress Management',
          'Crisis Intervention',
          'Grief and Loss',
          'Abuse and Neglect',
          'Cultural & Spiritual Influences'
        ]
      }
    ]
  },
  {
    id: 'physiological-integrity',
    title: 'Physiological Integrity',
    description: 'Physical care, pharmacology, and physiological adaptation',
    percentage: '38-62%',
    color: 'bg-red-500',
    subcategories: [
      {
        id: 'basic-care-comfort',
        title: 'Basic Care and Comfort',
        topics: [
          'Nutrition and Hydration',
          'Mobility and Immobility',
          'Elimination',
          'Rest and Sleep',
          'Personal Hygiene'
        ]
      },
      {
        id: 'pharmacological-therapies',
        title: 'Pharmacological and Parenteral Therapies',
        topics: [
          'Medication Administration',
          'Dosage Calculations',
          'Pharmacology Basics',
          'IV Therapy',
          'Blood Products'
        ]
      },
      {
        id: 'reduction-risk',
        title: 'Reduction of Risk Potential',
        topics: [
          'Laboratory Values',
          'Diagnostic Tests',
          'Vital Signs',
          'Potential Complications'
        ]
      },
      {
        id: 'physiological-adaptation',
        title: 'Physiological Adaptation',
        topics: [
          'Fluid and Electrolyte Imbalances',
          'Medical Emergencies',
          'Pathophysiology',
          'Alterations in Body Systems'
        ]
      }
    ]
  }
];

export function getCategoryById(id: string): NCLEXCategory | undefined {
  return nclexCategories.find(cat => cat.id === id);
}

export function getCategoryColor(categoryTitle: string): string {
  const category = nclexCategories.find(cat =>
    cat.title.toLowerCase().includes(categoryTitle.toLowerCase())
  );
  return category?.color || 'bg-gray-500';
}
