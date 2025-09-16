import Footer from '../components/Footer';
import Header from '../components/Header';

import React, { useEffect } from 'react';


const CheckCircleIcon = () => (
  <svg className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
);

const AiIcon = () => (
  <div className="bg-amber-500/20 p-2 rounded-full mr-3">
    <svg xmlns="http://www.w.org/2000/svg" className="h-6 w-6 text-amber-500" viewBox="0 0 20 20" fill="currentColor">
      <path d="M10 3.5a1.5 1.5 0 013 0V4a1 1 0 001 1h.5a1.5 1.5 0 010 3H14a1 1 0 00-1 1v.5a1.5 1.5 0 01-3 0V9a1 1 0 00-1-1h-.5a1.5 1.5 0 010-3H9a1 1 0 001-1v-.5z" />
      <path d="M10 12a4 4 0 100 8 4 4 0 000-8zM7 16a3 3 0 116 0 3 3 0 01-6 0z" />
    </svg>
  </div>
);

const ToursIcon = () => (
  <div className="bg-amber-500/20 p-2 rounded-full mr-3">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  </div>
);


const CardIconBase = ({ children }) => (
  <div className="bg-amber-500/20 p-4 rounded-full mb-4 inline-block">
    {children}
  </div>
);

const SmartAudioIcon = () => <CardIconBase><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg></CardIconBase>;
const DigitalArchiveIcon = () => <CardIconBase><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg></CardIconBase>;
const SmartNavigationIcon = () => <CardIconBase><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></CardIconBase>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-17.956z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const DataVerificationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6.28A2 2 0 0111.28 9h1.44A2 2 0 0115 10.72V17" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18V3H3z" /></svg>;
const CameraIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// --- Main App Component ---
export default function Features() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />

      <style>{`
        .animated-gradient-bg { background: linear-gradient(-45deg, #fce7d7, #fae1c3, #f6dba6, #fdf1c2); background-size: 400% 400%; animation: gradientBG 15s ease infinite; }
        @keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        .animate-fade-in-down, .animate-fade-in-up, .animate-card-pop-in, .animate-fade-in-left, .animate-fade-in-right { opacity: 0; transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
        .animate-fade-in-down { transform: translateY(-20px); } .animate-fade-in-up { transform: translateY(20px); } .animate-card-pop-in { transform: scale(0.95); } .animate-fade-in-left { transform: translateX(-30px); } .animate-fade-in-right { transform: translateX(30px); }
        .visible { opacity: 1; transform: none; }
      `}</style>

      <div className="animated-gradient-bg w-screen -mt-20 min-h-screen text-gray-800 overflow-x-hidden">
        <div className="container mx-auto px-6 py-24">

          <header className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
            <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">
              Sacred Technology Meets Ancient Wisdom
            </h1>
            <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
              <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
              Every feature is thoughtfully designed to honor tradition while embracing innovation, creating meaningful connections between past and present.
            </p>
          </header>

          <main className="space-y-20  md:space-y-24">

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div className="md:order-last animate-on-scroll animate-fade-in-right">
                <img src="./monastery360.png" alt="Monastery360 Logo" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
              </div>
              <div className="animate-on-scroll animate-fade-in-left flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 flex items-center">
                  <ToursIcon /> 360° Virtual Tours
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Step inside sacred halls from anywhere in the world. Our immersive tours capture every detail—allowing you to experience the spiritual atmosphere as if you were there.
                </p>
                <ul className="space-y-3 mb-8 text-gray-700">
                  <li className="flex items-start text-sm md:text-base">
                    <CheckCircleIcon />
                    <span>Ultra high-resolution 360° photography</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <CheckCircleIcon />
                    <span>Interactive hotspots with cultural insights</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <CheckCircleIcon />
                    <span>Compatible across all devices</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
              <div className="animate-on-scroll animate-fade-in-left">
                <img src="./folkdance.png" alt="AI Storytelling showcase" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
              </div>
              <div className="animate-on-scroll animate-fade-in-right flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-4 flex items-center">
                  <AiIcon /> AI-Powered Storytelling
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm md:text-base">
                  Listen to the stories that walls could tell. Our AI creates compelling narratives that bring monastery history to life, adapting to your interests and preferred language.
                </p>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start text-sm md:text-base">
                    <CheckCircleIcon />
                    <span>Available in English, Hindi, Nepali, and Sikkimese</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <CheckCircleIcon />
                    <span>Culturally sensitive context generation</span>
                  </li>
                  <li className="flex items-start text-sm md:text-base">
                    <CheckCircleIcon />
                    <span>Personalized learning experiences</span>
                  </li>
                </ul>
              </div>
            </section>

            <section className="text-center">
              <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Complete Digital Heritage Solution</h2>
              <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 text-center">
                {[
                  { icon: <SmartAudioIcon />, title: "Smart Audio Guide", desc: "Offline-ready storytelling that works anywhere, bringing monastery tales to your personal journey." },
                  { icon: <DigitalArchiveIcon />, title: "Digital Archive", desc: "Secure cloud storage for precious manuscripts, murals, and documents with AES-256 encryption." },
                  { icon: <SmartNavigationIcon />, title: "Smart Navigation", desc: "Google Maps integration with cultural routes and intelligent navigation to sacred destinations." }
                ].map((item, index) => (
                  <div key={item.title} className="bg-white/50 border border-amber-500/20 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                    {item.icon}
                    <h3 className="font-bold text-xl text-red-600 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Technical Excellence</h2>
              <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                Built with enterprise-grade security and performance to ensure reliable access to cultural heritage for researchers and enthusiasts worldwide.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-16">
                {[
                  { icon: <ShieldIcon />, title: "AES-256 Encryption", desc: "Maximum security" },
                  { icon: <UsersIcon />, title: "Role-Based Access", desc: "Verified researchers" },
                  { icon: <DataVerificationIcon />, title: "Data Verification", desc: "Authenticated content" },
                  { icon: <CameraIcon />, title: "4K+ Resolution", desc: "Ultra-high quality" }
                ].map((item, index) => (
                  <div key={item.title} className="bg-white/50 border border-amber-500/20 p-4 rounded-lg flex flex-col items-center justify-center text-center shadow-lg animate-on-scroll animate-card-pop-in transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: `${index * 150}ms` }}>
                    {item.icon}
                    <h4 className="font-bold text-red-600">{item.title}</h4>
                    <p className="text-xs text-gray-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="text-center max-w-xl mx-auto pt-12">
              <h2 className="text-4xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-up">Ready to Experience These Features?</h2>
              <p className="text-lg text-gray-700 leading-relaxed my-4 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '200ms' }}>
                Join our community and start exploring Sikkim’s sacred heritage with cutting-edge technology designed for cultural preservation.
              </p>
              <div className="flex justify-center items-center gap-4 mt-8 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                <button className="bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg">
                  Start Exploring
                </button>
                <button className="bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg">
                  Access Research Portal
                </button>
              </div>
            </section>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}

