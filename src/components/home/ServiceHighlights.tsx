import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { userGroups } from '../../data/userGroups';
import * as LucideIcons from 'lucide-react';

// Import local images
import studentImage from '../../assets/images/students.jpg';
import touristImage from '../../assets/images/tourists.jpeg';
import businessImage from '../../assets/images/bussiess.jpg';

const ServiceHighlights: React.FC = () => {
  // Image mapping object
  const genieImages = {
    students: studentImage,
    tourists: touristImage,
    business: businessImage
  };

  return (
    <Section id="services" className="bg-blue-950">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-white max-w-2xl mx-auto">
            Personalized Packages for Every Purpose – We've Got You Covered.
          </p>
        </div>

        <div className="grid gap-8">
          {/* Student Card - Full Width */}
          {userGroups
            .filter((group) => group.id === 'students')
            .map((group) => {
              // Use the same icon as tourist card by finding tourist group's icon
              const touristGroup = userGroups.find(g => g.id === 'students');
              const IconComponent = (LucideIcons as any)[
                touristGroup?.icon.charAt(0).toUpperCase() + touristGroup?.icon.slice(1)
              ];

              return (
                <a
                  key={group.id}
                  href={`/services/${group.id}`}
                  className="group relative"
                >
                  <div className="p-6 rounded-2xl bg-white  shadow-2xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                    <div className="absolute inset-x-0 top-0 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-transparent z-10" />
                      <img
                        src={genieImages[group.id]}
                        alt={`${group.title} illustration`}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                    <div className="relative z-20 pt-12 group-hover:pt-48 transition-all duration-300 ease-in-out">
                    <div className="bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ">
                    {IconComponent && (
                          <IconComponent
                            className="text-blue-90"
                            size={24}
                          />
                        )}
                      </div>
                      <span className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2 shadow-md animate-pulse">                        ✨  For Students
                      </span>
                      <h3 className="text-xl font-semibold text-blue-900 mb-2">
                        {group.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {group.description}
                      </p>
                      <div className="mt-4 text-black font-medium flex items-center">
                        Learn More
                        <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </a>
              );
            })}

          {/* Remaining Cards in 2-column grid on md+ */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {userGroups
              .filter((group) => group.id !== 'students')
              .map((group) => {
                const IconComponent = (LucideIcons as any)[
                  group.icon.charAt(0).toUpperCase() + group.icon.slice(1)
                ];

                return (
                  <a
                    key={group.id}
                    href={`/services/${group.id}`}
                    className="group relative"
                  >
                    <div className="p-6 rounded-lg bg-white border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full flex flex-col relative overflow-hidden">
                      <div className="absolute inset-x-0 top-0 h-48 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 to-transparent z-10" />
                        <img
                          src={genieImages[group.id]}
                          alt={`${group.title} illustration`}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                      <div className="relative z-20 pt-12 group-hover:pt-48 transition-all duration-300 ease-in-out">
                        <div className="bg-blue-900 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4 ">
                          {IconComponent && (
                            <IconComponent
                              className="text-blue-90"
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
                        <div className="mt-4 text-black font-medium flex items-center">
                          Learn More
                          <LucideIcons.ArrowRight className="ml-2 w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </a>
                );
              })}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ServiceHighlights;