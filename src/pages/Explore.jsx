import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';


const ClockIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1.5 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const StartTourIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);

const CustomRouteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l5.447 2.724A1 1 0 0021 16.382V5.618a1 1 0 00-1.447-.894L15 7m0 10V7m0 10l-6 3" />
    </svg>
);

const BookGuideIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);

const CardIconBase = ({ children }) => (
    <div className="bg-amber-500/20 p-4 rounded-full mb-4 inline-block">
        {children}
    </div>
);
const HeadphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
);

const Enhance360Icon = () => <CardIconBase><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3.25 12.125a8.938 8.938 0 1117.5 0 8.938 8.938 0 01-17.5 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 21.625a8.938 8.938 0 010-17.875c4.125 1.5 6.938 4.5 6.938 8.938s-2.813 7.438-6.938 8.938zM12 21.625a8.938 8.938 0 000-17.875c-4.125 1.5-6.938 4.5-6.938 8.938s2.813 7.438 6.938 8.938z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 12a3 3 0 116 0 3 3 0 01-6 0z" /></svg></CardIconBase>;
const EnhanceRoutesIcon = () => <CardIconBase><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg></CardIconBase>;
const EnhancePlanningIcon = () => <CardIconBase><svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></CardIconBase>;

// --- Main Explore Page Component ---
export default function Explore() {
    const navigate = useNavigate();

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

    const featuredTours = [
        {
            tag: 'Popular',
            tagColor: 'bg-red-600/80',
            image: './rumtek.jpg',
            duration: '45 min tour',
            title: 'Rumtek Monastery',
            description: 'A sprawling complex, home to precious Buddhist relics and stunning traditional architecture.',
            route: '/explore/rumtek-tour'
        },
        {
            tag: 'Scenic',
            tagColor: 'bg-blue-600/80',
            image: './enchy.jpg',
            duration: '30 min tour',
            title: 'Enchey Monastery',
            description: 'Established in 1909, offering panoramic views of Gangtok and the surrounding Himalayan peaks.',
            route: '/explore/enchey-tour'
        },
        {
            tag: 'Historical',
            tagColor: 'bg-amber-600/80',
            image: './pemayangatse.png',
            duration: '60 min tour',
            title: 'Pemayangtse Monastery',
            description: 'One of Sikkim\'s oldest and most significant monasteries, featuring exquisite murals and ancient scriptures.',
            route: '/explore/pemayangtse-tour'
        },
    ];

    const handleStartTour = (route) => {
        navigate(route);
    };

    const handleFirstTourClick = () => {
        navigate('/explore/rumtek-tour');
    };

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
                <div className="container mx-auto px-4 sm:px-6 py-24">

                    <header className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">
                            Your Journey Begins Here
                        </h1>
                        <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            Discover Sikkim's most sacred spaces through our curated collection of virtual experiences. Each monastery tells a unique story waiting to touch your heart.
                        </p>
                    </header>

                    <main className="space-y-20 md:space-y-24">

                        <section>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Featured Monastery Tours</h2>
                                <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                                    <div className="w-12 h-1 bg-amber-500 rounded-full"></div><div className="w-3 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {featuredTours.map((tour, index) => (
                                    <div key={tour.title} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col group animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <div className="relative">
                                            <img src={tour.image} alt={tour.title} className="w-full h-56 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                                            <span className={`absolute top-4 left-4 text-xs font-bold text-white px-3 py-1 rounded-full ${tour.tagColor}`}>{tour.tag}</span>
                                            <span className="absolute top-4 right-4 text-xs font-semibold text-white bg-black/40 px-3 py-1 rounded-full flex items-center"><ClockIcon /> {tour.duration}</span>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-2xl font-bold text-red-900 mb-2">{tour.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow">{tour.description}</p>
                                            <button 
                                                onClick={() => handleStartTour(tour.route)}
                                                className="w-full flex items-center justify-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 transform group-hover:scale-105 shadow-md"
                                            >
                                                <StartTourIcon /> Start Virtual Tour
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                            <div className="text-center lg:text-left animate-on-scroll animate-fade-in-left">
                                <h2 className="text-3xl font-bold text-red-600 mb-4">Plan Your Sacred Journey</h2>
                                <p className="text-gray-700 mb-8 leading-relaxed">Let us guide you through Sikkim's spiritual landscape with personalized recommendations, cultural insights, and practical travel information.</p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                    <button className="bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center"><CustomRouteIcon /> Custom Monastery Route</button>
                                    <button className="bg-white/80 border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-500 hover:text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"><BookGuideIcon /> Book Guided Tour</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 animate-on-scroll animate-fade-in-right">
                                <div className="bg-white/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 text-center shadow-lg">
                                    <p className="text-4xl font-extrabold text-red-600">50+</p>
                                    <p className="text-gray-600">Monasteries</p>
                                </div>
                                <div className="bg-white/80 backdrop-blur-sm border border-amber-500/30 rounded-2xl p-6 text-center shadow-lg">
                                    <p className="text-4xl font-extrabold text-red-600">25+</p>
                                    <p className="text-gray-600">Virtual Tours</p>
                                </div>
                            </div>
                        </section>

                        <section className="text-center">
                            <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Enhance Your Experience</h2>
                            <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                                <div className="w-12 h-1 bg-amber-500 rounded-full"></div><div className="w-3 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
                                {[
                                    { icon: <Enhance360Icon />, title: "360° Immersive Tours", desc: "Experience every corner of sacred spaces with ultra-high-resolution virtual reality tours.", buttonText: "Learn More", buttonColor: "bg-amber-500" },
                                    { icon: <EnhanceRoutesIcon />, title: "Cultural Routes", desc: "Discover connected monasteries and create meaningful spiritual journeys across Sikkim.", buttonText: "Explore Routes", buttonColor: "bg-amber-500" },
                                    { icon: <EnhancePlanningIcon />, title: "Visit Planning", desc: "Get personalized recommendations for physical visits, including timing and cultural events.", buttonText: "Plan Visit", buttonColor: "bg-amber-500" }
                                ].map((item, index) => (
                                    <div key={item.title} className="bg-white/50 border border-amber-500/20 rounded-2xl p-8 shadow-lg flex flex-col items-center animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                        {item.icon}
                                        <h3 className="font-bold text-xl text-red-600 mb-2">{item.title}</h3>
                                        <p className="text-sm text-gray-600 leading-relaxed mb-6 flex-grow">{item.desc}</p>
                                        <button className={`${item.buttonColor} text-white font-bold py-2 px-8 rounded-lg hover:bg-opacity-80 transition-all duration-300 shadow-md`}>{item.buttonText}</button>
                                    </div>
                                ))}
                            </div>
                        </section>
                        <section className="text-center max-w-2xl mx-auto pt-12">
                            <h2 className="text-4xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-up">Ready to Begin Your Virtual Pilgrimage?</h2>
                            <p className="text-lg text-gray-700 leading-relaxed my-6 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '200ms' }}>
                                Join thousands of cultural explorers who have discovered the beauty and wisdom of Sikkim's monasteries from anywhere in the world.
                            </p>
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                                <button 
                                    onClick={handleFirstTourClick}
                                    className="bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center"
                                >
                                    <HeadphoneIcon /> Start Your First Tour
                                </button>
                                <button className="bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center">
                                    Learn About Our Technology
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