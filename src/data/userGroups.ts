import { UserGroup } from '../types';

export const userGroups: UserGroup[] = [
  {
    id: 'students',
    title: 'International Students',
    tagline:"At G-NI, our goal is to provide students with a safe and seamless relocation experience to international study destinations. ",
    description: "Our student packages are designed to handle the logistics. Whether you're starting a degree or joining an exchange program, we're here every step of the way",
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
      },

       {
        title: 'Network Support',
        description: 'Help with getting connected to mobile and internet services',
        included: ['SIM card procurement', 'Mobile plan selection', 'Wi-Fi setup assistance']
      },
      {
        title: 'Local Travel Card',
        description: 'Assistance in obtaining and using a local transit pass',
        included: ['Transit card registration', 'Route guidance', 'Reload and usage help']
      },
            {
        title: 'G-NI Personalized AI Assistant',
        description: 'An in-app AI assistant tailored to your preferences and needs',
        included: ['Customized recommendations', 'Voice/text interaction', 'Real-time notifications']
      }

      
    ]
  },
  {
    id: 'tourists',
    title: 'Tourists',
    description: "Explore new destinations with confidence knowing that you have a trusted partner by your side. Our tourist packages offer guidance on transportation, local experiences, safety tips, and 24/7 support — so you can make the most of every adventure.",
    tagline:"G-NI makes exploring unfamiliar destinations effortless, ensuring tourists feel confident, informed, and supported every step of the way",
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
      },
      {
  "title": "AI Travel Planner",
  "description": "Smart itinerary generator for personalized trips",
  "included": ["Route optimization", "Real-time weather updates", "Budget tracking", "Local cuisine suggestions"]
}
    ]
  },
  {
    id: 'business',
    title: 'Business Professionals',
    tagline:"G-NI provides tailored services for business travelers and whether you’re relocating for a new role, attending an international conference, or managing a cross-border project. ",
    description: "Whether you're attending a conference, closing deals abroad, or relocating for a new role, our business packages provide tailored support – from accommodation to local networking insights.",
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