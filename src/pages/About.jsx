import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// --- SVG Icons ---
const StoryIcon = () => (
    <div className="bg-amber-500/20 p-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 21l18 0" /><path d="M5 21v-14l8 -4v18" /><path d="M19 21v-10l-6 -4" /><path d="M9 9l0 .01" /><path d="M9 12l0 .01" /><path d="M9 15l0 .01" /><path d="M9 18l0 .01" />
        </svg>
    </div>
);

const MissionIcon = () => (
    <div className="bg-red-600/20 p-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-800" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
    </div>
);

const VisionIcon = () => (
    <div className="bg-amber-500/20 p-4 rounded-full">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" width="44" height="44" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M3.6 9l16.8 0" /><path d="M3.6 15l16.8 0" /><path d="M11.5 3a17 17 0 0 0 0 18" /><path d="M12.5 3a17 17 0 0 1 0 18" />
        </svg>
    </div>
);

const ValueBulletIcon = () => (
    <svg className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
    </svg>
);


const AboutPage = () => {
    const missionData = [
        { icon: <StoryIcon />, title: "Our Story", text: "When ancient manuscripts began fading and sacred stories risked being lost forever, we knew technology could become a bridge between past and future, preserving Sikkim’s monastic treasures for generations to come." },
        { icon: <MissionIcon />, title: "Mission", text: "To digitally preserve, celebrate, and share Sikkim’s monastery heritage through immersive technology, empowering tourists, researchers, and local communities while fostering global cultural understanding." },
        { icon: <VisionIcon />, title: "Vision", text: "To become the world’s premier model for digital heritage preservation, earning UNESCO recognition while inspiring similar initiatives globally and ensuring sacred traditions thrive in the digital age." }
    ];
    
    const valuesData = [
        { title: "Cultural Reverence", description: "We approach every monastery, every artifact, and every tradition with the deepest respect. Our technology serves to honor, not overshadow, the sacred heritage we’re preserving.", points: ["Authentic representation of cultural practices", "Collaboration with local monks and communities", "Respectful documentation and storytelling"], imageUrl: "./himalayas.png", imageSide: "right" },
        { title: "Innovation with Purpose", description: "Every technological choice we make serves the greater purpose of heritage preservation. We embrace cutting-edge solutions while ensuring they enhance rather than complicate the connection between people and sacred spaces.", points: ["User-friendly interfaces for all generations", "Sustainable and environmentally conscious solutions", "Continuous improvement based on community feedback"], imageUrl: "./monks.png", imageSide: "left" }
    ];

    // Data for the journey timeline
    const journeyData = [
        { number: 1, title: "Research & Planning", description: "Extensive collaboration with local communities, monks, and heritage experts to understand preservation needs and cultural sensitivities.", color: "bg-amber-500" },
        { number: 2, title: "Digital Documentation", description: "Created comprehensive 360° virtual tours and began digitizing precious manuscripts, murals, and artifacts using state-of-the-art technology.", color: "bg-amber-500" },
        { number: 3, title: "Global Access", description: "Launched the platform for worldwide access, enabling tourists, researchers, and cultural enthusiasts to experience Sikkim's heritage remotely.", color: "bg-orange-500" }
    ];

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
        
            <div className="min-h-screen animated-gradient-bg -mt-20 py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="container mx-auto max-w-6xl">
                    
                    <section className="text-center mb-24">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Our Sacred Mission</h1>
                        <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll animate-fade-in-up">Born from a deep reverence for Sikkim’s monastic heritage, Monastery360 bridges ancient wisdom with cutting-edge technology to preserve and share sacred traditions with the world.</p>
                    </section>

                    <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
                        {missionData.map((item, index) => (
                            <div key={item.title} className="bg-white/50 border border-amber-500/20 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 200}ms` }}>
                                <div className="flex justify-center mb-4">{item.icon}</div>
                                <h3 className="text-2xl font-bold text-red-600 mb-3">{item.title}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.text}</p>
                            </div>
                        ))}
                    </section>

                    <section className="mb-24">
                        <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Our Values</h2>
                             <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                                <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                            </div>
                        </div>
                        {valuesData.map((value, index) => (
                            <div key={value.title} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20 last:mb-0">
                                <div className={`animate-on-scroll ${index % 2 === 0 ? 'md:order-last animate-fade-in-right' : 'animate-fade-in-left'}`}><img src={value.imageUrl} alt={value.title} className="rounded-2xl shadow-xl w-full h-80 object-cover" /></div>
                                <div className={`animate-on-scroll ${index % 2 === 0 ? 'animate-fade-in-left' : 'animate-fade-in-right'}`}>
                                    <h3 className="text-3xl font-bold text-red-600 mb-4">{value.title}</h3>
                                    <p className="text-gray-600 mb-6 leading-relaxed">{value.description}</p>
                                    <ul className="space-y-3">{value.points.map(point => (<li key={point} className="flex items-start text-gray-700"><ValueBulletIcon /><span>{point}</span></li>))}</ul>
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* --- NEW: Our Journey So Far Section --- */}
                    <section>
                         <div className="text-center mb-16">
                             <h2 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Our Journey So Far</h2>
                              <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                                <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                            </div>
                             <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll animate-fade-in-up">From a small idea to a global movement, see how we're making a difference in heritage preservation one monastery at a time.</p>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                            {journeyData.map((item, index) => (
                                <div key={item.number} className="flex flex-col items-center animate-on-scroll animate-fade-in-up" style={{ transitionDelay: `${index * 200}ms` }}>
                                    <div className={`w-16 h-16 rounded-full ${item.color} flex items-center justify-center text-white text-2xl font-bold shadow-lg mb-4`}>
                                        {item.number}
                                    </div>
                                    <h3 className="text-xl font-bold text-red-600 mb-2">{item.title}</h3>
                                    <p className="text-gray-600 leading-relaxed max-w-xs">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default AboutPage;

