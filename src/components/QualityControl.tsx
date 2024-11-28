import React from 'react';
import { 
  TestTube2, 
  ShieldCheck, 
  Microscope, 
  Droplets, 
  Award, 
  CheckCircle2 
} from 'lucide-react';

const qualityTests = [
  {
    icon: TestTube2,
    title: 'Chemical Analysis',
    description: 'Regular testing of pH levels, mineral content, and chemical composition'
  },
  {
    icon: Microscope,
    title: 'Microbiological Testing',
    description: 'Comprehensive screening for bacteria and microorganisms'
  },
  {
    icon: ShieldCheck,
    title: 'Safety Standards',
    description: 'Adherence to Nigerian and international water safety guidelines'
  }
];

const certifications = [
  'NAFDAC Registered',
  'SON Certified (NIS 306:2008)',
  'ISO 9001:2015 Certified',
  'MANCAP Certified'
];

export default function QualityControl() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Quality Control</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every drop of Jazmyne water undergoes rigorous quality testing to ensure the highest standards of purity and safety according to Nigerian regulations.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {qualityTests.map((test, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6 mx-auto">
                <test.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
                {test.title}
              </h3>
              <p className="text-gray-600 text-center">
                {test.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-blue-600 rounded-2xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="text-3xl font-bold mb-6">
                Our Quality Assurance Process
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <span>NAFDAC-compliant hourly testing during production</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <span>SON-approved filtration and purification systems</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <span>State-of-the-art quality control laboratory</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="h-6 w-6 flex-shrink-0 mt-1" />
                  <span>Continuous monitoring as per Nigerian standards</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Award className="h-6 w-6 text-blue-600" />
                <h4 className="text-xl font-semibold">Nigerian Certifications</h4>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {certifications.map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-gray-700"
                  >
                    <Droplets className="h-4 w-4 text-blue-500" />
                    <span className="text-sm">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}