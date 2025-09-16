import React, { useEffect, useState } from 'react';
import AudioPlayer from '../../components/AudioPlayer';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const BackIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>;
const LocationPinIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ClockIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-9-5.197" /></svg>;
const TravelGuideIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>;
const ContactIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const Start360Icon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const AudioGuideIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.636 5.636a9 9 0 0112.728 0M18.364 18.364A9 9 0 015.636 5.636" /></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const featureIcons = {
    immersion: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.063 12.001a7.937 7.937 0 0115.874 0c0 4.387-3.55 7.937-7.937 7.937s-7.937-3.55-7.937-7.937z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.063c-4.125 1.5-6.937 4.5-6.937 8.938s2.812 7.438 6.937 8.938" /></svg>,
    narratives: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M12 18a6 6 0 100-12 6 6 0 000 12z" /></svg>,
    hotspots: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657l-4.243-4.243M12 12h.01" /></svg>,
    context: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 5h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z" /></svg>,
};

// --- Main Tour Page Component ---
export default function Rumtek() {
    const [show360, setShow360] = useState(false);
    const [isAudioPlayerVisible, setIsAudioPlayerVisible] = useState(false);
    
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

    const tourFeatures = [
        { icon: featureIcons.immersion, title: '360° Immersion', description: 'Ultra-high-resolution virtual reality experience' },
        { icon: featureIcons.narratives, title: 'Audio Narratives', description: 'AI-powered storytelling in multiple languages' },
        { icon: featureIcons.hotspots, title: 'Interactive Hotspots', description: 'Detailed information on artifacts and architecture' },
        { icon: featureIcons.context, title: 'Cultural Context', description: 'Historical background and spiritual significance' },
    ];

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

            <div className="animated-gradient-bg -mt-20 min-h-screen text-gray-800 font-serif overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 pt-28 pb-16">

                    <a href="/explore" className="inline-flex items-center text-red-600 font-semibold mb-8 hover:underline animate-on-scroll animate-fade-in-down"><BackIcon /> Back to Tours</a>

                    <main>
                        {/* --- Hero Section --- */}
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-start mb-20">
                            <div className="animate-on-scroll animate-fade-in-left">
                                <div className="flex items-center gap-4 mb-4">
                                    <span className="bg-amber-100 text-amber-800 text-sm font-bold px-4 py-1 rounded-full">Featured</span>
                                    <span className="text-gray-500 text-sm font-medium">45 min tour</span>
                                </div>
                                <h1 className="text-5xl md:text-6xl font-extrabold text-red-900 leading-tight">Rumtek Monastery</h1>
                                <div className="flex items-center text-gray-600 mt-4"><LocationPinIcon /> East Sikkim</div>
                                <p className="mt-6 text-lg text-gray-700 leading-relaxed">The largest monastery in Sikkim, home to precious Buddhist relics and stunning traditional architecture.</p>
                                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                                    <button
                                        onClick={() => setShow360(true)}
                                        className="bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-lg flex items-center justify-center">
                                        <Start360Icon /> Start 360° Tour
                                    </button>
                                    <button
                                        onClick={() => setIsAudioPlayerVisible(!isAudioPlayerVisible)}
                                        className="bg-white/80 border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-500 hover:text-white py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center">
                                        <AudioGuideIcon /> {isAudioPlayerVisible ? "Close Audio Guide" : "Audio Guide"}
                                    </button>
                                </div>
                            </div>

                            {/* Preview / Street View Embed */}
                            <div className="relative w-full h-80 lg:h-96 rounded-2xl shadow-2xl overflow-hidden animate-on-scroll animate-fade-in-right">
                                {show360 ? (
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!4v1757875015734!6m8!1m7!1sCAoSFkNJSE0wb2dLRUlDQWdJQzRfdGI5Qnc.!2m2!1d27.28854528167496!2d88.56161848386864!3f13.910554311543315!4f-4.987231938940852!5f0.7820865974627469"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0 }}
                                        allowFullScreen
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Rumtek Street View"
                                        allow="fullscreen"
                                    ></iframe>
                                ) : (
                                    <>
                                        <img src="/rumtek.jpg" alt="360 Preview of Rumtek Monastery" className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                                            <button
                                                onClick={() => setShow360(true)}
                                                className="bg-white/80 text-gray-800 font-bold py-3 px-6 rounded-lg backdrop-blur-sm hover:bg-white transition-colors flex items-center shadow-lg">
                                                <Start360Icon /> 360° Preview
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        </section>

                        {/* --- Main Content & Sidebar --- */}
                        <section className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                            {/* Left: Main Content */}
                            <div className="lg:col-span-2 space-y-12">
                                <div className="animate-on-scroll animate-fade-in-up">
                                    <h2 className="text-3xl font-bold text-red-900 mb-6">About Rumtek Monastery</h2>
                                    <div className="bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-2xl p-8 shadow-lg">
                                        <h3 className="text-2xl font-bold text-red-800">History & Significance</h3>
                                        <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-amber-500 my-3 rounded-full"></div>
                                        <p className="text-gray-700 leading-relaxed mb-4">Rumtek Monastery stands as one of Sikkim's most significant spiritual centers, embodying centuries of Buddhist tradition and cultural heritage. This sacred space has been a beacon of wisdom and peace, offering visitors a glimpse into the profound spiritual practices that have shaped the region.</p>
                                        <p className="text-gray-700 leading-relaxed">The monastery's architecture reflects traditional Himalayan design principles, with intricate woodwork, vibrant murals, and sacred symbols that tell stories of Buddhist philosophy and local traditions. Each element has been carefully preserved to maintain its authentic character.</p>
                                    </div>
                                </div>
                                <div className="animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '150ms' }}>
                                    <div className="bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-2xl p-8 shadow-lg">
                                        <h3 className="text-2xl font-bold text-red-800 mb-6">Virtual Tour Features</h3>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                            {tourFeatures.map(feature => (
                                                <div key={feature.title} className="flex items-start gap-4">
                                                    <div className="bg-white p-3 rounded-full shadow-md">{feature.icon}</div>
                                                    <div>
                                                        <h4 className="font-bold text-gray-800">{feature.title}</h4>
                                                        <p className="text-sm text-gray-600">{feature.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right: Sidebar */}
                            <aside className="space-y-8 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '300ms' }}>
                                <div className="bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-red-900 mb-4">Visit Information</h3>
                                    <ul className="space-y-3 text-gray-700">
                                        <li className="flex items-center"><LocationPinIcon /> East Sikkim</li>
                                        <li className="flex items-center"><ClockIcon /> 45 minute virtual tour</li>
                                        <li className="flex items-center"><CalendarIcon /> Available 24/7</li>
                                        <li className="flex items-center"><UsersIcon /> All experience levels welcome</li>
                                    </ul>
                                </div>
                                <div className="bg-white/50 backdrop-blur-sm border border-amber-300/50 rounded-2xl p-6 shadow-lg">
                                    <h3 className="text-xl font-bold text-red-900 mb-2">Plan Your Visit</h3>
                                    <p className="text-sm text-gray-600 mb-6">Interested in visiting this monastery in person? Get travel recommendations and cultural insights.</p>
                                    <div className="space-y-3">
                                        <a href='/login' className="w-full bg-amber-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-colors shadow-md flex items-center justify-center"><TravelGuideIcon /> Travel Guide</a>
                                        <a href='/contact' className="w-full bg-white/80 border-2 border-amber-500 text-amber-600 font-bold hover:bg-amber-500 hover:text-white py-3 px-4 rounded-lg transition-colors flex items-center justify-center"><ContactIcon /> Contact Monastery</a>
                                    </div>
                                </div>
                            </aside>
                        </section>

                        {/* New Section: Explore More Sacred Spaces */}
                        <section className="text-center pt-20 animate-on-scroll animate-fade-in-up">
                            <h2 className="text-4xl font-extrabold text-red-900">Explore More Sacred Spaces</h2>
                            <div className="flex justify-center items-center gap-1.5 my-4">
                                <div className="w-10 h-1.5 bg-red-500 rounded-full"></div>
                                <div className="w-4 h-1.5 bg-amber-500 rounded-full"></div>
                                <div className="w-4 h-1.5 bg-blue-500 rounded-full"></div>
                                <div className="w-4 h-1.5 bg-green-500 rounded-full"></div>
                            </div>
                            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
                                Continue your spiritual journey with other remarkable monasteries in Sikkim.
                            </p>
                            <a href='/login' className="bg-amber-400 hover:bg-amber-500 text-amber-900 font-bold py-3 px-8 rounded-lg transition-colors duration-300 shadow-md">
                                View All Virtual Tours
                            </a>
                        </section>
                    </main>
                </div>

                {/* --- Final CTA Section --- */}
                <div className="py-20">
                    <section className="bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto shadow-xl animate-on-scroll animate-fade-in-up">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4 animate-on-scroll animate-fade-in-down">
                            Ready to Preserve Sacred Heritage Together?
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '200ms' }}>
                            Your involvement can help ensure that Sikkim's monastery traditions
                            continue to inspire and educate people around the world for
                            generations to come.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            <a href='/login' className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center">
                                <SendIcon /> Get Started Today
                            </a>
                            <a href='/about' className="bg-white border border-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md flex items-center justify-center">
                                <HeartIcon /> Learn About Our Mission
                            </a>
                        </div>
                    </section>
                </div>
                
                <AudioPlayer 
                    isVisible={isAudioPlayerVisible}
                    onClose={() => setIsAudioPlayerVisible(false)}
                    audioSrc="/audio/rumtek-guide.mp3"
                    title="Rumtek Monastery"
                />
            </div>
            <Footer />
        </>
    );
}