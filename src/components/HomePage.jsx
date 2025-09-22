import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import LandingPage from './LandingPage'
import {FaArrowRightLong} from 'react-icons/fa6'
import { FaStopwatch,  FaArrowRight,  FaLightbulb, FaRocket, FaShieldAlt } from "react-icons/fa";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <LandingPage/>
      
      {/* Hero Section */}
      

      {/* Clients/Trust Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Trusted by Industry Leaders</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center justify-items-center opacity-70">
            {[1, 2, 3, 4, 5].map((item) => (
              <div key={item} className="h-12 w-32 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-500 font-bold">Client {item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our <span className="text-[#382775]">Services</span></h2>
            <p className="text-xl text-gray-600">We offer end-to-end technology solutions tailored to your business needs</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <FaLightbulb className="text-4xl text-[#ff7c5b]" />, 
                title: "Custom Software Development", 
                description: "Tailor-made applications designed to solve your unique business challenges and drive growth." 
              },
              { 
                icon: <FaRocket className="text-4xl text-[#382775]" />, 
                title: "Cloud Solutions", 
                description: "Scalable cloud infrastructure and migration services to optimize your operations and reduce costs." 
              },
              { 
                icon: <FaShieldAlt className="text-4xl text-[#4d359c]" />, 
                title: "Cybersecurity", 
                description: "Comprehensive security solutions to protect your data and systems from evolving threats." 
              }
            ].map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="mb-6">{service.icon}</div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <button className="flex items-center text-[#382775] font-semibold hover:text-[#ff7c5b] transition-colors">
                  Learn more <FaArrowRight className="ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gradient-to-r from-[#f5f3fc] to-[#eef2ff]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="aspect-w-9 aspect-h-16 rounded-xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80" 
                    alt="Success Story" 
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
                <div className="flex gap-4 mt-6 justify-center">
                  {['Finance', 'Healthcare', 'Retail'].map((industry) => (
                    <button key={industry} className="bg-gray-100 hover:bg-[#382775] hover:text-white py-2 px-4 rounded-full text-sm font-medium transition-colors">
                      {industry}
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Driving <span className="text-[#382775]">Digital Transformation</span></h2>
              <p className="text-xl text-gray-600 mb-8">
                See how we helped a leading financial institution streamline their operations with our custom software solutions, resulting in a 40% increase in efficiency.
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-[#382775]">40%</p>
                  <p className="text-gray-600">Efficiency Gain</p>
                </div>
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <p className="text-3xl font-bold text-[#382775]">$2.5M</p>
                  <p className="text-gray-600">Annual Savings</p>
                </div>
              </div>
              
              <button className="bg-gradient-to-r from-[#382775] to-[#4d359c] hover:from-[#4d359c] hover:to-[#382775] text-white font-bold py-3 px-8 rounded-full transition-all duration-300 flex items-center">
                View Case Study <FaArrowRightLong className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="w-full md:w-2/5">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Frequently Asked <span className="text-[#382775]">Questions</span></h2>
              <p className="text-xl text-gray-600 mb-8">
                Find answers to common questions about our services, process, and how we can help your business.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Our Process', 'Technologies', 'Pricing', 'Support'].map((topic) => (
                  <button key={topic} className="bg-[#382775] text-white py-2 px-5 rounded-full text-sm font-medium">
                    {topic}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-3/5">
              {[
                {
                  question: "How long does a typical software development project take?",
                  answer: "Project timelines vary based on complexity, but most projects range from 3 to 9 months."
                },
                {
                  question: "Do you provide ongoing support after project completion?",
                  answer: "Yes, we offer comprehensive support and maintenance packages to ensure your solution continues to perform optimally."
                },
                {
                  question: "What industries do you specialize in?",
                  answer: "We have experience across multiple industries including finance, healthcare, retail, and manufacturing."
                }
              ].map((faq, index) => (
                <div key={index} className="border-b border-gray-200 py-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#382775] to-[#4d359c] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl max-w-2xl mx-auto mb-10">
            Let's discuss how our technology solutions can drive growth and efficiency for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#382775] hover:bg-gray-100 font-bold py-4 px-10 rounded-full transition-all duration-300">
              Schedule a Consultation
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-[#382775] font-bold py-4 px-10 rounded-full transition-all duration-300">
              View Our Services
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default HomePage