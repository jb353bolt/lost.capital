import React from 'react';
import { ExternalLink } from 'lucide-react';
import CartoonAvatar from './CartoonAvatar';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Profile Section */}
          <div className="relative">
            <div className="sticky top-8">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                <div className="relative h-64 bg-gradient-to-r from-indigo-500 to-purple-500">
                  <div className="absolute -bottom-20 left-1/2 -translate-x-1/2">
                    <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden bg-white">
                      <CartoonAvatar />
                    </div>
                  </div>
                </div>
                <div className="pt-24 pb-8 px-8 text-center">
                  <h2 className="text-3xl font-bold mb-2">Jamie Beaumont</h2>
                  <p className="text-gray-600 mb-4">Founder & Entrepreneur</p>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Achievements</h3>
                  <a
                    href="https://techcrunch.com/2022/06/23/uk-based-playter-closes-55m-round-for-its-bnpl-platform-aimed-at-smes/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Featured in TechCrunch
                  </a>
                  <div className="mt-2 space-y-2">
                    <a
                      href="https://www.londondaily.news/founder-spotlight-jamie-beaumont-revolutionising-fintech-with-playter-40-under-40-series/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      40 under 40
                    </a>
                    <div>
                      <a
                        href="https://businesscloud.co.uk/news/tech-nation-unveils-35-upscale-cohort-companies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Part of TechNation Upscale Accelerator
                      </a>
                    </div>
                    <div>
                      <a
                        href="https://techround.co.uk/fintech50-2022/8-playter-pay/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        #8 Top Startups in FinTech
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold mb-4">About Me</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                I'm a Founder and Operator with deep expertise in taking startups from zero to one—and scaling them beyond. Having navigated both the exhilarating highs and the painful lows of building businesses, I've made my fair share of mistakes, many of them costly.
              </p>
              <p className="text-gray-600 leading-relaxed">
                These lessons, both the wins and the missteps, have become the foundation of how I help others build their vision.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Why Work With Me?</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                AI has revolutionised the way MVPs are built. What used to take months and cost six figures can now be delivered at hyper speed for a fraction of the price.
              </p>
              <div className="space-y-4">
                {[
                  "Clear Focus on Your Use Case",
                  "Hands-On Development",
                  "Go-to-Market Support",
                  "Speed to Market"
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-4 h-4 mt-1.5 rounded-full bg-indigo-600 flex-shrink-0" />
                    <p className="ml-4 text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Proven Track Record</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                As a founder, I've raised over $50 million in equity and debt, scaling my own business to a high 8-figure valuation. My journey has been featured in TechCrunch, where they highlighted my ability to transform ideas into reality and create value in the competitive world of startups.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Build Your Vision</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Whether you're at the idea stage or ready to bring your concept to life, I can help you create an MVP that's lean, efficient, and built for success. Thanks to AI, what used to cost £100k can now cost £20k or less.
              </p>
              <a 
                href="mailto:jamie@lost.capital?subject=I want to build an MVP"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full hover:bg-indigo-700 transition-colors"
              >
                Let's Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;