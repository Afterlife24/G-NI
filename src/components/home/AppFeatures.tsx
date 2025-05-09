import React from 'react';
import Container from '../ui/Container';
import Section from '../ui/Section';
import { GraduationCap, Globe2, Sparkles, Zap, Clock, CheckCircle } from 'lucide-react';

const AppFeatures: React.FC = () => {
  return (
    <Section className="bg-blue-950 text-white py-16">
      <Container>
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
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
              Our smart AI Assistant is designed to help international students seamlessly integrate into local life. It provides essential insights on student rights, campus-specific guidance, and helps students connect with others from the same university and field of study—building community, confidence, and support from day one.
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

        {/* Feature Paragraph with Icons */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Seamless Integration & Smart Assistance
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 text-purple-600 p-2 rounded-lg">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Instant Policy Mapping:</span> Surfaces visa rules and institutional policies custom-mapped to each student's specific university.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 text-blue-600 p-2 rounded-lg">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Peer Community:</span> Connects newcomers to verified peer communities by campus, degree and field of study.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 text-green-600 p-2 rounded-lg">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Smart Itineraries:</span> Builds door-to-door plans with real-time updates on housing, transit and activities.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-yellow-100 text-yellow-600 p-2 rounded-lg">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Adaptive Planning:</span> Adjusts instantly when flights change or local events pop up.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-red-100 text-red-600 p-2 rounded-lg">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Automated Setup:</span> Handles SIM activation, banking, transit cards and checklists within 24h of arrival.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-indigo-100 text-indigo-600 p-2 rounded-lg">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Smart Reminders:</span> Pushes time-critical alerts for orientation, registration and visa renewals.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-blue-50 rounded-xl p-6 border border-blue-100">
            <p className="text-blue-900 text-center italic">
              "Our AI-powered platform combines all essential services into one seamless experience, 
              eliminating the stress of international transitions while maximizing opportunities 
              for connection and discovery."
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AppFeatures;