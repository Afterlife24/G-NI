// import React from 'react';
// import { useParams } from 'react-router-dom';
// import Container from '../components/ui/Container';
// import Section from '../components/ui/Section';
// import WaitlistSection from '../components/home/WaitlistSection';
// import { userGroups } from '../data/userGroups';
// import * as LucideIcons from 'lucide-react';

// const ServiceDetails: React.FC = () => {
//   const { groupId } = useParams<{ groupId: string }>();
//   const group = userGroups.find(g => g.id === groupId);

//   // Service category specific images
//   const categoryImages = {
//     students: [
//       "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg",
//       "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg",
//       "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg"
//     ],
//     tourists: [
//       "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg",
//       "https://images.pexels.com/photos/7625042/pexels-photo-7625042.jpeg",
//       "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg"
//     ],
//     business: [
//       "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
//       "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
//       "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
//     ]
//   };

//   if (!group) {
//     return (
//       <Section className="pt-24 bg-blue-950">
//         <Container>
//           <div className="text-center">
//             <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4">
//               Service Not Found
//             </h1>
//             <p className="text-white opacity-90">
//               The requested service category could not be found.
//             </p>
//           </div>
//         </Container>
//       </Section>
//     );
//   }

//   const IconComponent = (LucideIcons as any)[
//     group.icon.charAt(0).toUpperCase() + group.icon.slice(1)
//   ];

//   const images = categoryImages[group.id as keyof typeof categoryImages] || [];

//   return (
//     <>
//       <Section className="pt-24 bg-blue-950">
//         <Container>
//           <div className="max-w-6xl mx-auto">
//             <div className="text-center mb-12">
//               <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
//                 {IconComponent && <IconComponent className="text-yellow-500" size={32} />}
//               </div>
//               <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4">
//                 {group.title}
//               </h1>
//               <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
//                 {group.description}
//               </p>
//             </div>

//             <div className="space-y-16">
//               {group.services.map((service, index) => (
//                 <div 
//                   key={index}
//                   className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
//                 >
//                   <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                     <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
//                       <img 
//                         src={images[index]}
//                         alt={service.title}
//                         className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent" />
//                       <div className="absolute bottom-0 left-0 p-6">
//                         <h2 className="text-2xl font-bold text-yellow-500 mb-2">
//                           {service.title}
//                         </h2>
//                         <p className="text-white text-opacity-90">
//                           {service.description}
//                         </p>
//                       </div>
//                     </div>
                    
//                     <div className="p-6 lg:p-8">
//                       <div className="space-y-6">
//                         <div>
//                           <h3 className="text-xl font-semibold text-yellow-500 mb-4">
//                             What's Included:
//                           </h3>
//                           <div className="grid gap-4">
//                             {service.included.map((item, i) => (
//                               <div 
//                                 key={i} 
//                                 className="flex items-start bg-white/5 p-4 rounded-lg"
//                               >
//                                 <LucideIcons.Check className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
//                                 <span className="text-gray-300">{item}</span>
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-16 text-center">
//               <div className="bg-white/5 p-8 rounded-lg">
//                 <h3 className="text-2xl font-bold text-yellow-500 mb-4">
//                   Ready to Get Started?
//                 </h3>
//                 <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
//                   Contact us today to learn more about our services and how we can help you make the most of your time in the United States.
//                 </p>
//                 <a 
//                   href="/contact" 
//                   className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
//                 >
//                   Contact Us
//                 </a>
//               </div>
//             </div>
//           </div>
//         </Container>
//       </Section>
//       <WaitlistSection />
//     </>
//   );
// };

// export default ServiceDetails;




 


import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/ui/Container';
import Section from '../components/ui/Section';
import WaitlistSection from '../components/home/WaitlistSection';
import { userGroups } from '../data/userGroups';
import * as LucideIcons from 'lucide-react';

const ServiceDetails: React.FC = () => {
  const { groupId } = useParams<{ groupId: string }>();
  const group = userGroups.find(g => g.id === groupId);

  const categoryImages = {
    students: [
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg", // Airport Pickup
      "https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg", // Housing Assistance
      "https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg", // Banking Setup
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg", // Network Support
      "https://images.pexels.com/photos/5325704/pexels-photo-5325704.jpeg",
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"// Local Travel Card
    ],
    tourists: [
      "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg",
      "https://images.pexels.com/photos/7625042/pexels-photo-7625042.jpeg",
      "https://images.pexels.com/photos/2422461/pexels-photo-2422461.jpeg",
      "https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg"
    ],
    business: [
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg",
      "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg"
    ]
  };

  if (!group) {
    return (
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4">
              Service Not Found
            </h1>
            <p className="text-white opacity-90">
              The requested service category could not be found.
            </p>
          </div>
        </Container>
      </Section>
    );
  }

  const IconComponent = (LucideIcons as any)[
    group.icon.charAt(0).toUpperCase() + group.icon.slice(1)
  ];

  const images = categoryImages[group.id as keyof typeof categoryImages] || [];

  return (
    <>
      <Section className="pt-24 bg-blue-950">
        <Container>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="bg-yellow-500/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                {IconComponent && <IconComponent className="text-yellow-500" size={32} />}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-yellow-500 mb-4">
                {group.title}
              </h1>
              <p className="text-lg text-white opacity-90 max-w-3xl mx-auto">
                {group.tagline} {/* Changed from description to tagline */}
              </p>
            </div>

            {group.id === 'students' && (
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-semibold text-yellow-500 mb-2">
                  Choose Your Package
                </h2>
                <p className="text-white opacity-80">
                  <span className="font-bold">3 Wishes:</span> First 3 essential services<br />
                  <span className="font-bold">5 Wishes:</span> All 5 services including extra digital help
                </p>
              </div>
            )}

            <div className="space-y-16">
              {group.services.map((service, index) => {
                const packageLabel =
                  group.id === 'students'
                    ? index < 3
                      ? '3 Wishes'
                      : '5 Wishes'
                    : null;

                return (
                  <div
                    key={index}
                    className="bg-white/5 rounded-lg overflow-hidden border border-white/10"
                  >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                        <img
                          src={images[index]}
                          alt={service.title}
                          className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 p-6">
                          {packageLabel && (
                            <span className="inline-block bg-yellow-500 text-blue-900 text-xs font-semibold px-3 py-1 rounded-full mb-2">
                              {packageLabel}
                            </span>
                          )}
                          <h2 className="text-2xl font-bold text-yellow-500 mb-2">
                            {service.title}
                          </h2>
                          <p className="text-white text-opacity-90">
                            {service.description}
                          </p>
                        </div>
                      </div>

                      <div className="p-6 lg:p-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-semibold text-yellow-500 mb-4">
                              What's Included:
                            </h3>
                            <div className="grid gap-4">
                              {service.included.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start bg-white/5 p-4 rounded-lg"
                                >
                                  <LucideIcons.Check className="text-yellow-500 mt-1 mr-3 flex-shrink-0" size={20} />
                                  <span className="text-gray-300">{item}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 text-center">
              <div className="bg-white/5 p-8 rounded-lg">
                <h3 className="text-2xl font-bold text-yellow-500 mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-white opacity-90 mb-6 max-w-2xl mx-auto">
                  Contact us today to learn more about our services and how we can help you make the most of your time in the United States.
                </p>
                <a
                  href="/contact"
                  className="inline-block bg-yellow-500 text-blue-900 px-8 py-3 rounded-md font-semibold hover:bg-yellow-400 transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <WaitlistSection />
    </>
  );
};

export default ServiceDetails;