import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { GraduationCap, Globe2 } from 'lucide-react'; // assuming you're using lucide-react

const appModules = [
  {
    title: 'Campus Companion',
    benefits: [
      "Instantly surfaces a student’s visa rules, work-hour limits and institutional policies—custom-mapped to their specific university.",
      "Connects each newcomer to the largest verified peer communities by campus, degree and field of study."
    ]
  },
  {
    title: 'Dynamic Travel Planner',
    benefits: [
      "Builds door-to-door itineraries with real-time housing, transit and activity updates.",
      "Adapts plans on the fly when flights change or local events pop up."
    ]
  },
  {
    title: 'Proactive Logistics Engine',
    benefits: [
      "Automates SIM activation, banking, transit cards and compliance checklists within 24 h of arrival.",
      "Pushes time-critical reminders (orientation, registration, visa renewals) directly to the app."
    ]
  }
];

const AppFeatures: React.FC = () => {
  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white text-gray-800 py-16">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-blue-950 tracking-tight">
            ✦ What the New App Delivers
          </h2>
        </div>

        {/* Highlight Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-100 text-blue-700 p-3 rounded-full mr-4">
                <GraduationCap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                AI Assistant for Students
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              A 24/7 personalized AI Assistant revolutionizes academic support with tailored assistance, resource management,
              and instant query resolution. It improves efficiency and mirrors benefits seen in leading educational platforms.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-green-100 text-green-700 p-3 rounded-full mr-4">
                <Globe2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">
                Inbuilt AI Planner for Tourists
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              The planner creates personalized itineraries and provides real-time updates on local attractions and events—streamlining travel and enhancing satisfaction.
            </p>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-200 rounded-xl bg-white shadow-md text-sm md:text-base">
            <thead className="bg-blue-50 text-blue-900">
              <tr>
                <th className="py-4 px-5 font-semibold border-b border-gray-200 w-1/3">AI Module</th>
                <th className="py-4 px-5 font-semibold border-b border-gray-200">Benefits for Users</th>
              </tr>
            </thead>
            <tbody>
              {appModules.map((module, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-4 px-5 font-medium text-gray-900 align-top border-b border-gray-100">
                    {module.title}
                  </td>
                  <td className="py-4 px-5 text-gray-700 border-b border-gray-100">
                    <ul className="list-disc ml-5 space-y-2">
                      {module.benefits.map((benefit, i) => (
                        <li key={i}>{benefit}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Container>
    </Section>
  );
};

export default AppFeatures;
