import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header'; // Added Header
import Footer from '../../components/Footer'; 

// --- ALL ICONS (Including ChatbotIcon from your original file) ---
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
// Using this as a "Calendar" icon for events
const BookGuideIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
);
const HeadphoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
    </svg>
);
const ChatbotIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);
const DownloadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
);
const ProfileIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
const BookmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    </svg>
);
// --- END ICONS ---


export default function Tourist() {
    const navigate = useNavigate();

    // Re-using your animation logic
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

    // --- EXPANDED SAMPLE DATA ---
    const savedItineraries = [
        {
            id: 1,
            title: 'Sikkim\'s Spiritual Circuit',
            monasteries: ['Rumtek', 'Enchey', 'Pemayangtse'],
            duration: '2 days',
            image: '/rumtek.jpg', 
            route: '/explore/my-itinerary/1' 
        },
        {
            id: 2,
            title: 'Himalayan Foothills Tour',
            monasteries: ['Phodong', 'Tashiding'],
            duration: '1 day',
            image: '/phodong.jpg', 
            route: '/explore/my-itinerary/2' 
        },
        {
            id: 3,
            title: 'Ancient Capitals Trail',
            monasteries: ['Dubdi', 'Rabdentse Ruins'],
            duration: '1 day',
            image: '/dubdi.jpg', 
            route: '/explore/my-itinerary/3' 
        },
    ];

    const bookmarkedMonasteries = [
        { id: 1, name: 'Rumtek Monastery', route: '/explore/rumtek-tour' },
        { id: 2, name: 'Dubdi Monastery', route: '/explore/dubdi-tour' },
        { id: 3, name: 'Rabdentse Ruins', route: '/explore/rabdentse-ruins' },
        { id: 4, name: 'Enchey Monastery', route: '/explore/enchey-tour' },
        { id: 5, name: 'Tashiding Monastery', route: '/explore/tashiding-tour' },
    ];
    // --- END EXPANDED SAMPLE DATA ---

    // --- NEW FEATURE DATA ---
    const recommendedTours = [
        {
            id: 1,
            title: 'Discover Enchey',
            description: 'Based on your interest in monasteries near Gangtok, discover Enchey Monastery.',
            duration: '30 min tour',
            image: '/enchy.jpg',
            route: '/explore/enchey-tour'
        },
        {
            id: 2,
            title: 'The Solitude of Tashiding',
            description: 'Explore one of the most sacred monasteries in Sikkim, known for its serene location.',
            duration: '45 min tour',
            image: '/tashiding.jpg',
            route: '/explore/tashiding-tour'
        },
    ];

    const upcomingEvents = [
        { id: 1, name: 'Losoong Festival at Rumtek', date: 'Dec 18, 2025', route: 'https://www.tourmyindia.com/states/sikkim/losoong-festival.html' },
        { id: 2, name: 'Saga Dawa at Gangtok', date: 'Jun 4, 2026', route: 'https://www.tourmyindia.com/states/sikkim/saga-dawa-festival.html' },
        { id: 3, name: 'Annual Cham Dance at Enchey', date: 'Jan 10, 2026', route: 'https://en.wikipedia.org/wiki/Cham_dance' },
    ];
    // --- END NEW FEATURE DATA ---


    const handleStartTour = (route) => {
        navigate(route);
    };

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

                    <header className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">
                            Welcome Back, [Tourist Name]!
                        </h1>
                        <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        
                        {/* --- ENHANCEMENT: PERSONALIZED SUMMARY --- */}
                        <p className="text-xl text-gray-700 leading-relaxed animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            You have <strong>{savedItineraries.length} saved itineraries</strong> and <strong>{bookmarkedMonasteries.length} bookmarked monasteries</strong>.
                        </p>
                        {/* --- END ENHANCEMENT --- */}

                    </header>

                    <main className="space-y-16 md:space-y-20">

                        {/* Quick Actions Section (Unchanged) */}
                        <section className="animate-on-scroll grid justify-center items-center animate-fade-in-up">
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center">Quick Actions</h2>
                            <div className="flex flex-wrap justify-center gap-6">
                                <button
                                    onClick={() => navigate('/explore/plan-trip')} 
                                    className="flex flex-col items-center justify-center p-6 bg-amber-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px]"
                                >
                                    <CustomRouteIcon className="w-8 h-8 mb-2" />
                                    <span className="font-bold text-lg">Plan a New Trip</span>
                                </button>
                                <button
                                    onClick={() => navigate('/offline-guides')} 
                                    className="flex flex-col items-center justify-center p-6 bg-amber-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px]"
                                >
                                    <DownloadIcon className="w-8 h-8 mb-2" />
                                    <span className="font-bold text-lg">Offline Audio Guides</span>
                                </button>
                                <button
                                    onClick={() => navigate('/profile')} 
                                    className="flex flex-col items-center justify-center p-6 bg-amber-500 text-white rounded-xl shadow-lg hover:bg-red-600 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 min-w-[200px]"
                                >
                                    <ProfileIcon className="w-8 h-8 mb-2" />
                                    <span className="font-bold text-lg">Manage Profile</span>
                                </button>
                            </div>
                        </section>

                        {/* My Saved Itineraries (Now renders 3) */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">My Saved Itineraries</h2>
                            {savedItineraries.length > 0 ? (
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                    {savedItineraries.map((itinerary, index) => (
                                        <div key={itinerary.id} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col group animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                            <div className="relative">
                                                <img src={itinerary.image} alt={itinerary.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                                                <span className="absolute top-4 right-4 text-xs font-semibold text-white bg-black/40 px-3 py-1 rounded-full flex items-center">
                                                    <ClockIcon /> {itinerary.duration}
                                                </span>
                                            </div>
                                            <div className="p-6 flex flex-col flex-grow">
                                                <h3 className="text-xl font-bold text-red-900 mb-2">{itinerary.title}</h3>
                                                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                                    Monasteries: {itinerary.monasteries.join(', ')}
                                                </p>
                                                <button
                                                    onClick={() => handleStartTour(itinerary.route)}
                                                    className="w-full flex items-center justify-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 transform group-hover:scale-105 shadow-md"
                                                >
                                                    <StartTourIcon /> View Itinerary
                                                </button>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-600 text-lg animate-on-scroll animate-fade-in-up">
                                    You haven't saved any itineraries yet. Start planning your journey!
                                </p>
                            )}
                        </section>

                        {/* --- NEW FEATURE: RECOMMENDED TOURS --- */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">Recommended For You</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                                {recommendedTours.map((tour, index) => (
                                    <div key={tour.id} className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden flex flex-col group animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <div className="relative">
                                            <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                                            <span className="absolute top-4 right-4 text-xs font-semibold text-white bg-black/40 px-3 py-1 rounded-full flex items-center">
                                                <ClockIcon /> {tour.duration}
                                            </span>
                                        </div>
                                        <div className="p-6 flex flex-col flex-grow">
                                            <h3 className="text-xl font-bold text-red-900 mb-2">{tour.title}</h3>
                                            <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow">
                                                {tour.description}
                                            </p>
                                            <button
                                                onClick={() => handleStartTour(tour.route)}
                                                className="w-full flex items-center justify-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-all duration-300 transform group-hover:scale-105 shadow-md"
                                            >
                                                <StartTourIcon /> Start Tour
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* --- END NEW FEATURE --- */}


                        {/* Continue Exploring 360° Tours (Unchanged) */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">Continue Exploring</h2>
                            <div className="max-w-xl mx-auto bg-white/60 backdrop-blur-sm rounded-2xl shadow-lg p-6 flex items-center space-x-4 animate-on-scroll animate-fade-in-up">
                                <img src="./rumtek.jpg" alt="Rumtek Monastery" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                                <div className="flex-grow">
                                    <p className="text-sm text-gray-500">Last viewed:</p>
                                    <h3 className="text-xl font-bold text-red-900 mb-2">Rumtek Monastery Virtual Tour</h3>
                                    <button
                                        onClick={() => handleStartTour('/explore/rumtek-tour')}
                                        className="flex items-center text-amber-600 hover:text-red-600 font-semibold transition-colors duration-200"
                                    >
                                        <StartTourIcon /> Resume Tour
                                    </button>
                                </div>
                            </div>
                        </section>
                        
                        {/* Bookmarked Monasteries (Now renders 5) */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">My Bookmarked Monasteries</h2>
                            {bookmarkedMonasteries.length > 0 ? (
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {bookmarkedMonasteries.map((monastery, index) => (
                                        <div key={monastery.id} className="bg-white/50 border border-amber-500/20 rounded-xl p-5 flex items-center justify-between shadow-md animate-on-scroll animate-fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
                                            <div className="flex items-center">
                                                <BookmarkIcon className="text-amber-500 mr-3" />
                                                <span className="text-lg font-semibold text-red-900">{monastery.name}</span>
                                            </div>
                                            <button
                                                onClick={() => navigate(monastery.route)}
                                                className="bg-amber-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                                            >
                                                View
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <p className="text-center text-gray-600 text-lg animate-on-scroll animate-fade-in-up">
                                    You haven't bookmarked any monasteries yet.
                                </p>
                            )}
                        </section>

                        {/* --- NEW FEATURE: UPCOMING EVENTS --- */}
                        <section>
                            <h2 className="text-2xl md:text-3xl font-bold text-red-600 mb-8 text-center animate-on-scroll animate-fade-in-down">Upcoming Cultural Events</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                {upcomingEvents.map((event, index) => (
                                    <div key={event.id} className="bg-white/50 border border-amber-500/20 rounded-xl p-5 flex items-center justify-between shadow-md animate-on-scroll animate-fade-in-up" style={{ transitionDelay: `${index * 100}ms` }}>
                                        <div className="flex items-center">
                                            <BookGuideIcon className="text-amber-500 mr-3" />
                                            <div>
                                                <span className="text-lg font-semibold text-red-900">{event.name}</span>
                                                <p className="text-sm text-gray-600">{event.date}</p>
                                            </div>
                                        </div>
                                        <a href={event.route} target="_blank" 
                                            className="bg-amber-500 text-white text-sm px-4 py-2 rounded-lg hover:bg-red-600 transition-colors duration-300"
                                        >
                                            Details
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </section>
                        {/* --- END NEW FEATURE --- */}


                    </main>
                </div>
            </div>

            <Footer />
        </>
    );
}