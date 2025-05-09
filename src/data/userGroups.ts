import { UserGroup } from '../types';

export const userGroups: UserGroup[] = [
  {
    id: 'students',
    title: 'International Students',
    tagline: "At G-NI, our goal is to provide students with a safe and seamless relocation experience to international study destinations.",
    description: "Smart Support. Instant Start.Arriving in a new country comes with challenges—G-NI makes sure you're never alone. Our student packages take care of every essential, from airport pickup and local SIM cards to banking and accommodation support.\n\nPowered by AI, our platform delivers personalized insights based on your university and field of study—connecting you with the right student groups, local resources, and your rights as an international student.\n\n**Settle in faster. Start smarter.**",
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
    tagline: "G-NI makes exploring unfamiliar destinations effortless, ensuring tourists feel confident, informed, and supported every step of the way",
    description: "Travel Smarter. Explore Freely.Make every trip unforgettable with G-NI as your trusted local partner. Our tourist support packages go beyond basic guidance—offering personalized insights powered by AI to help you navigate transportation, discover local gems, stay safe, and connect to real-time updates.Whether it's your first visit or your fifth, we make sure every moment counts—with confidence, comfort, and 24/7 smart assistance.",
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
        title: "AI Travel Planner",
        description: "Smart itinerary generator for personalized trips",
        included: ["Route optimization", "Real-time weather updates", "Budget tracking", "Local cuisine suggestions"]
      }
    ]
  },
  {
    id: 'business',
    title: 'Business Professionals',
    tagline: "G-NI provides tailored services for business travelers whether you're relocating for a new role, attending an international conference, or managing a cross-border project.",
    description: "Streamlined Travel. Focused Results.Whether you're flying in for a conference, negotiating deals, or relocating for a new role, G-NI ensures a frictionless experience from the moment you land. Our business travel packages are powered by AI to offer real-time support, curated local insights, and smart logistics tailored to your agenda.Stay productive, protected, and prepared—so you can focus on what matters most: business without borders.",
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