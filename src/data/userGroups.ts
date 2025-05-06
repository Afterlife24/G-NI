import { UserGroup } from '../types';

export const userGroups: UserGroup[] = [
  {
    id: 'students',
    title: 'International Students',
    description: 'Comprehensive support services for students transitioning to study in the United States, from arrival assistance to campus life setup.',
    icon: 'graduationCap',
    services: [
      {
        title: 'Airport Pickup',
        description: 'Direct transportation from airport to your accommodation',
        included: ['24/7 arrival monitoring', 'Luggage assistance', 'Welcome package']
      },
      {
        title: 'Housing Assistance',
        description: 'Find and secure suitable student accommodation',
        included: ['Campus proximity options', 'Lease review', 'Utility setup']
      },
      {
        title: 'Banking Setup',
        description: 'Assistance with U.S. banking system navigation',
        included: ['Account opening support', 'Mobile banking setup', 'Financial guidance']
      }
    ]
  },
  {
    id: 'tourists',
    title: 'Tourists',
    description: 'Tailored travel services for visitors exploring the United States, ensuring a comfortable and memorable experience from arrival to departure.',
    icon: 'plane',
    services: [
      {
        title: 'Travel Planning',
        description: 'Customized itinerary creation and booking assistance',
        included: ['Attraction recommendations', 'Local transport passes', 'Guided tours']
      },
      {
        title: 'Accommodation Booking',
        description: 'Find and book suitable hotels or vacation rentals',
        included: ['Location scouting', 'Price comparison', 'Booking management']
      },
      {
        title: 'Local Experience',
        description: 'Access to authentic local experiences and activities',
        included: ['Cultural events', 'Restaurant recommendations', 'Hidden gems']
      }
    ]
  },
  {
    id: 'business',
    title: 'Business Professionals',
    description: 'Professional relocation and setup services for business travelers and expatriates moving to the United States.',
    icon: 'briefcase',
    services: [
      {
        title: 'Corporate Housing',
        description: 'Premium accommodation solutions for business stays',
        included: ['Location consulting', 'Lease negotiation', 'Move-in coordination']
      },
      {
        title: 'Business Setup',
        description: 'Office and workspace arrangement services',
        included: ['Workspace solutions', 'Equipment setup', 'Administrative support']
      },
      {
        title: 'Transportation',
        description: 'Professional transportation and logistics support',
        included: ['Airport transfers', 'Car service', 'Travel arrangements']
      }
    ]
  }
];