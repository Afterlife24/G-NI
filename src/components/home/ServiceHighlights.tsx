// import React from 'react';
// import Container from '../ui/Container';
// import Section from '../ui/Section';
// import { services } from '../../data/services';
// import * as LucideIcons from 'lucide-react';

// const ServiceHighlights: React.FC = () => {
//   return (
//     <Section className="bg-white">
//       <Container>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive support services designed specifically for international students
//             arriving in the United States.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service) => {
//             const IconComponent = (LucideIcons as any)[
//               service.icon.charAt(0).toUpperCase() + service.icon.slice(1)
//             ];
            
//             return (
//               <div 
//                 key={service.id}
//                 className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
//               >
//                 <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
//                   {IconComponent && <IconComponent className="text-blue-900" size={24} />}
//                 </div>
//                 <h3 className="text-xl font-semibold text-blue-900 mb-2">
//                   {service.title}
//                   {service.isOptional && (
//                     <span className="ml-2 text-sm font-normal text-gray-500">(Optional)</span>
//                   )}
//                 </h3>
//                 <p className="text-gray-600">{service.description}</p>
//               </div>
//             );
//           })}
//         </div>
        
//         <div className="text-center mt-10">
//           <a href="/services">
//             <button className="text-blue-900 font-medium hover:text-blue-700 transition-colors">
//               View All Services →
//             </button>
//           </a>
//         </div>
//       </Container>
//     </Section>
//   );
// };

// export default ServiceHighlights;



// import React from 'react';
// import Container from '../ui/Container';
// import Section from '../ui/Section';
// import { userGroups } from '../../data/userGroups';
// import * as LucideIcons from 'lucide-react';

// const ServiceHighlights: React.FC = () => {
//   return (
//     <Section className="bg-white">
//       <Container>
//         <div className="text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
//           <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//             Comprehensive support services tailored for different needs in the United States.
//           </p>
//         </div>
        
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {userGroups.map((group) => {
//             const IconComponent = (LucideIcons as any)[
//               group.icon.charAt(0).toUpperCase() + group.icon.slice(1)
//             ];
            
//             const genieImage = {
//               students: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//               tourists: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//               business: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
//             }[group.id];
            
//             return (
//               <a 
//                 key={group.id}
//                 href={`/services/${group.id}`}
//                 className="group relative"
//               >
//                 <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
//                   {/* Genie Image Container */}
//                   <div className="absolute inset-x-0 top-0 h-32 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
//                     <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-transparent z-10" />
//                     <img
//                       src={genieImage}
//                       alt={`${group.title} illustration`}
//                       className="w-full h-full object-cover object-center"
//                     />
//                   </div>
                  
//                   {/* Content with padding-top for image space */}
//                   <div className="relative z-20 group-hover:translate-y-32 transition-transform duration-300 ease-in-out">
//                     <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
//                       {IconComponent && (
//                         <IconComponent 
//                           className="text-blue-900 group-hover:text-yellow-500 transition-colors" 
//                           size={24} 
//                         />
//                       )}
//                     </div>
//                     <h3 className="text-xl font-semibold text-blue-900 mb-2">
//                       {group.title}
//                     </h3>
//                     <p className="text-gray-600 flex-grow">
//                       {group.description}
//                     </p>
//                     <div className="mt-4 text-yellow-500 font-medium flex items-center">
//                       Learn More 
//                       <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             );
//           })}
//         </div>
//       </Container>
//     </Section>
//   );
// };

// export default ServiceHighlights;




import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { userGroups } from '../../data/userGroups';
import * as LucideIcons from 'lucide-react';

const ServiceHighlights: React.FC = () => {
  return (
    <Section id="services" className="bg-white">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive support services tailored for different needs in the United States.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {userGroups.map((group) => {
            const IconComponent = (LucideIcons as any)[
              group.icon.charAt(0).toUpperCase() + group.icon.slice(1)
            ];
            
            const genieImage = {
              students: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              tourists: "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              business: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            }[group.id];
            
            return (
              <a 
                key={group.id}
                href={`/services/${group.id}`}
                className="group relative"
              >
                <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                  {/* Genie Image Container - Increased height to h-48 (12rem/192px) */}
                  <div className="absolute inset-x-0 top-0 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-transparent z-10" />
                    <img
                      src={genieImage}
                      alt={`${group.title} illustration`}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                  
                  {/* Content adjusted with pt-48 to match new image height */}
                  <div className="relative z-20 pt-12 group-hover:pt-48 transition-all duration-300 ease-in-out">
                    <div className="bg-blue-100 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-yellow-100 transition-colors">
                      {IconComponent && (
                        <IconComponent 
                          className="text-blue-900 group-hover:text-yellow-500 transition-colors" 
                          size={24} 
                        />
                      )}
                    </div>
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">
                      {group.title}
                    </h3>
                    <p className="text-gray-600 flex-grow">
                      {group.description}
                    </p>
                    <div className="mt-4 text-yellow-500 font-medium flex items-center">
                      Learn More 
                      <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default ServiceHighlights;