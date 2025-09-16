
import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { itineraryData } from '../data/itineraryData'; // Adjust path as needed

// --- ICONS (We need new ones for booking) ---
const FlightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);
const HotelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m-1 4h1m6-4h1m-1 4h1m-1-8h1m-1 4h1m-1 4h1" />
    </svg>
);
const ChatbotIcon = () => ( // From your dashboard file
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);
const MapPinIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 inline-block text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);
// --- END ICONS ---


export default function ItineraryDetail() {
    const navigate = useNavigate();
    const { id } = useParams(); // Gets the 'id' from the URL (e.g., '1')
    const itinerary = itineraryData.find(item => item.id === parseInt(id));

    // Animation logic from your dashboard
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
    }, [id]); // Re-run animations if the ID changes

    // Handle case where no itinerary is found
    if (!itinerary) {
        return (
            <>
                <Header />
                <div className="animated-gradient-bg w-screen min-h-screen text-gray-800 overflow-x-hidden flex items-center justify-center">
                    <div className="container mx-auto px-4 sm:px-6 py-24 text-center">
                        <h1 className="text-4xl font-extrabold text-red-600">Itinerary Not Found</h1>
                        <p className="text-xl text-gray-700 mt-4">We couldn't find the itinerary you're looking for.</p>
                        <button
                            onClick={() => navigate('/dashboard')} // Or back to explore
                            className="mt-8 inline-flex items-center justify-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-md"
                        >
                            Back to Dashboard
                        </button>
                    </div>
                </div>
                <Footer />
            </>
        );
    }

    return (
        <>
            <Header />
            
            {/* Re-using your animation styles */}
            <style>{`
                .animated-gradient-bg { background: linear-gradient(-45deg, #fce7d7, #fae1c3, #f6dba6, #fdf1c2); background-size: 400% 400%; animation: gradientBG 15s ease infinite; }
                @keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                .animate-fade-in-down, .animate-fade-in-up, .animate-card-pop-in, .animate-fade-in-left, .animate-fade-in-right { opacity: 0; transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
                .animate-fade-in-down { transform: translateY(-20px); } .animate-fade-in-up { transform: translateY(20px); } .animate-card-pop-in { transform: scale(0.95); } .animate-fade-in-left { transform: translateX(-30px); } .animate-fade-in-right { transform: translateX(30px); }
                .visible { opacity: 1; transform: none; }
            `}</style>

            <div className="animated-gradient-bg w-screen min-h-screen text-gray-800 overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 py-24">

                    {/* --- 1. HERO SECTION --- */}
                    <header className="max-w-4xl mx-auto mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 text-center animate-on-scroll animate-fade-in-down">
                            {itinerary.title}
                        </h1>
                        <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-xl text-gray-700 text-center leading-relaxed animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            {itinerary.description}
                        </p>
                        <p className="text-center text-lg font-bold text-red-900 mt-4 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '500ms' }}>
                            Duration: {itinerary.duration}
                        </p>
                        <img 
                            src={itinerary.heroImage} 
                            alt={itinerary.title} 
                            className="w-full h-64 md:h-96 object-cover rounded-2xl shadow-lg mt-8 animate-on-scroll animate-card-pop-in"
                        />
                    </header>

                    <main className="space-y-16 md:space-y-20">

                        {/* --- 2. BOOKING LINKS SECTION --- */}
                        <section className="animate-on-scroll animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center">Plan Your Trip</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <a
                                    href={itinerary.bookingLinks.flights}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center p-6 bg-amber-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[250px]"
                                >
                                    <FlightIcon />
                                    <span className="font-bold text-lg">Book Flights (Air India)</span>
                                </a>
                                <a
                                    href={itinerary.bookingLinks.hotels}
                                    target="_blank" rel="noopener noreferrer"
                                    className="flex items-center justify-center p-6 bg-amber-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[250px]"
                                >
                                    <HotelIcon />
                                    <span className="font-bold text-lg">Book Hotels (MakeMyTrip)</span>
                                </a>
                            </div>
                        </section>

                        {/* --- 3. ROADMAP / ITINERARY SECTION --- */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">Day-by-Day Roadmap</h2>
                            <div className="max-w-3xl mx-auto space-y-8">
                                {itinerary.roadmap.map((day, index) => (
                                    <div 
                                        key={day.day} 
                                        className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 md:p-8 animate-on-scroll animate-fade-in-left"
                                        style={{ transitionDelay: `${index * 150}ms` }}
                                    >
                                        <h3 className="text-2xl font-bold text-red-900 mb-2">Day {day.day}: {day.title}</h3>
                                        <p className="text-gray-700 leading-relaxed mb-6">{day.details}</p>
                                        
                                        <h4 className="text-lg font-semibold text-red-900 mb-4 border-t border-amber-500/30 pt-4">Key Attractions This Day:</h4>
                                        <div className="space-y-4">
                                            {day.attractions.map(attraction => (
                                                <div key={attraction.name} className="flex items-center space-x-4">
                                                    <img src={attraction.image} alt={attraction.name} className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-lg shadow-md flex-shrink-0" />
                                                    <div>
                                                        <h5 className="font-bold text-gray-800">{attraction.name}</h5>
                                                        <p className="text-sm text-gray-600">{attraction.desc}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* --- 4. INTERACTIVE MAP SECTION --- */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">Trip Map</h2>
                            <div className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-4 animate-on-scroll animate-card-pop-in overflow-hidden">
                                <iframe
                                    src={itinerary.mapEmbedUrl}
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="rounded-lg"
                                ></iframe>
                            </div>
                        </section>

                        {/* --- 5. FOOD GUIDE SECTION --- */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">Local Culinary Guide</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {itinerary.foodGuide.map((food, index) => (
                                    <div key={food.name} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col group animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <div className="relative">
                                            <img src={food.image} alt={food.name} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-red-900 mb-2">{food.name}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                                {food.desc}
                                            </p>
                                            <span className="flex items-center text-amber-600 font-semibold">
                                                <MapPinIcon /> Must try in local eateries
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>

                    </main>
                </div>
            </div>

            <Footer />
        </>
    );
}