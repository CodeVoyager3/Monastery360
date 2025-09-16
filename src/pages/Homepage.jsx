import React, { useState, useEffect, useRef } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ExploreIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-9-5.197" />
    </svg>
);
const HeartIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
);
const UsersIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const LeafIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>);
const BookIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>);
const CommunityIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-8 sm:w-8 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>);
const TouristIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 21l18 0M5 21v-14l8-4v18M19 21v-10l-6-4M9 9l0 .01M9 12l0 .01M9 15l0 .01M9 18l0 .01" /></svg>);
const ResearcherIcon = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>);
const CommunityIconCard = () => (<svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 sm:h-10 sm:w-10 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5"><path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>);
const CheckIcon = () => (<svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 text-amber-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>);


const useCountUp = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    let start = 0;
                    const stepTime = Math.abs(Math.floor(duration / end));
                    const timer = setInterval(() => {
                        start += 1;
                        setCount(start);
                        if (start === end) {
                            clearInterval(timer);
                        }
                    }, stepTime);
                    observer.unobserve(ref.current);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => observer.disconnect();
    }, [end, duration]);

    return [count, ref];
};

const AnimatedStat = ({ value, suffix, text, icon }) => {
    const [count, ref] = useCountUp(value);
    return (
        <div ref={ref} className="text-center animate-on-scroll animate-fade-in-up px-2">
            <div className="flex justify-center mb-2">{icon}</div>
            <p className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400">
                {count}{suffix}
            </p>
            <p className="text-xs sm:text-sm md:text-base text-amber-400">{text}</p>
        </div>
    );
};


const HomePage = () => {
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
            <Header className="fixed top-0 left-0 w-full z-50" />
            <style>{`
                /* Hero Animations */
                @keyframes heroFadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
                @keyframes heroFadeInRight { from { opacity: 0; transform: translateX(-30px); } to { opacity: 1; transform: translateX(0); } }
                .animate-hero-fade-in-up { animation: heroFadeInUp 1s ease-out forwards; }
                .animate-hero-fade-in-right { animation: heroFadeInRight 1s ease-out forwards; }

                /* Scroll Animations */
                .animated-gradient-bg { background: linear-gradient(-45deg, #fce7d7, #fae1c3, #f6dba6, #fdf1c2); background-size: 400% 400%; animation: gradientBG 15s ease infinite; }
                @keyframes gradientBG { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
                .animate-on-scroll { opacity: 0; transition: opacity 0.8s ease-out, transform 0.8s ease-out; }
                .animate-fade-in-up { transform: translateY(30px); }
                .visible { opacity: 1; transform: none; }
            `}</style>

            {/* Hero Section */}
            <section className="relative min-h-screen -mt-16 sm:-mt-20 w-screen flex items-center justify-center overflow-hidden" style={{ color: "#d83832" }}>
                <video autoPlay loop muted playsInline className="absolute opacity-55 z-0 w-full h-full object-cover min-w-full min-h-full max-w-none">
                    <source src="/monasteryvideo1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className="absolute z-10 w-full h-full bg-gradient-to-r"></div>
                <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                        <div className="text-center md:text-left">
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight animate-hero-fade-in-up"
                                style={{ animationDelay: '0.2s', color: "#f2aa24", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
                                Preserve Sacred<br />Heritage Forever
                            </h1>
                            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl font-extrabold max-w-lg mx-auto md:mx-0 animate-hero-fade-in-up"
                                style={{ animationDelay: '0.4s', color: "#f2aa24", textShadow: "2px 2px 8px rgba(0,0,0,0.6)" }}>
                                <b>Experience Sikkim's timeless monasteries through immersive 360° virtual tours, AI-powered storytelling, and secure digital preservation that connects hearts across the globe.</b>
                            </p>
                            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 animate-hero-fade-in-up justify-center md:justify-start"
                                style={{ animationDelay: '0.6s' }}>
                                <a href="/explore" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-amber-800 bg-amber-500 hover:bg-amber-800 transition-transform transform hover:scale-105">
                                    <ExploreIcon />Explore Monasteries Now
                                </a>
                                <a href="/contact" className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-full text-amber-800 bg-amber-500 hover:bg-amber-800 transition-transform transform hover:scale-105">
                                    <HeartIcon />Join the Movement
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Gradient Transition */}
            <div className="bg-gradient-to-b from-transparent to-[#ffdbc0] h-16 sm:h-24"></div>

            {/* Main Content Section */}
            <section className="relative overflow-hidden animated-gradient-bg py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
                <div aria-hidden="true" className="absolute inset-0 opacity-5 pointer-events-none">
                    <svg className="absolute top-0 left-0 w-full h-full" xmlns='http://www.w3.org/2000/svg'>
                        <defs>
                            <pattern id='a' patternUnits='userSpaceOnUse' width='20' height='20' patternTransform='scale(2) rotate(0)'>
                                <rect x='0' y='0' width='100%' height='100%' fill='hsla(0,0%,100%,0)' />
                                <path d='M10-5a15 15 0 010 30' strokeWidth='0.5' stroke='hsla(190, 78%, 63%, 0.29)' fill='none' />
                            </pattern>
                        </defs>
                        <rect width='800%' height='800%' transform='translate(0,0)' fill='url(#a)' />
                    </svg>
                </div>

                <div className="relative container mx-auto max-w-6xl">
                    {/* Enhanced Stats Section */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-16 sm:mb-20 md:mb-24">
                        <div className="md:border-r md:border-amber-500/20"><AnimatedStat value={50} suffix="K+" text="Global Visitors" icon={<UsersIcon />} /></div>
                        <div className="md:border-r md:border-amber-500/20"><AnimatedStat value={75} suffix="%" text="Carbon Footprint Reduction" icon={<LeafIcon />} /></div>
                        <div className="md:border-r md:border-amber-500/20"><AnimatedStat value={200} suffix="+" text="Research Collaborations" icon={<BookIcon />} /></div>
                        <div><AnimatedStat value={95} suffix="%" text="Community Support" icon={<CommunityIcon />} /></div>
                    </div>

                    {/* Title Section */}
                    <div className="text-center mb-12 sm:mb-14 md:mb-16">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-red-950 animate-on-scroll animate-fade-in-up">
                            Why Choose Monastery360
                        </h2>
                        <div className="flex justify-center my-3 sm:my-4 animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '100ms' }}>
                            <div className="w-12 sm:w-16 h-1 bg-amber-500 rounded-full"></div>
                            <div className="w-3 sm:w-4 h-1 bg-red-600 rounded-full mx-1"></div>
                            <div className="w-12 sm:w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-700 max-w-3xl mx-auto animate-on-scroll animate-fade-in-up px-4"
                            style={{ transitionDelay: '200ms' }}>
                            Experience the perfect blend of ancient heritage and modern technology, creating meaningful connections across cultures and generations.
                        </p>
                    </div>

                    {/* Interactive Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20 md:mb-24">
                        {/* Card 1 */}
                        <div className="group relative animate-on-scroll animate-fade-in-up">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-500 to-red-600 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-transparent rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                                <TouristIcon />
                                <h3 className="text-xl sm:text-2xl font-bold text-red-950 my-3 sm:my-4">For Tourists</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
                                    <li className="flex items-start"><CheckIcon /><span>Immersive cultural tours from anywhere</span></li>
                                    <li className="flex items-start"><CheckIcon /><span>Intelligent navigation and route planning</span></li>
                                    <li className="flex items-start"><CheckIcon /><span>Easy booking and travel assistance</span></li>
                                </ul>
                                <a href="/explore" className="inline-block w-full text-center bg-amber-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-opacity-90 transition-colors text-sm sm:text-base">
                                    Start Exploring
                                </a>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '200ms' }}>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 to-red-950 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-transparent rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                                <ResearcherIcon />
                                <h3 className="text-xl sm:text-2xl font-bold text-red-950 my-3 sm:my-4">For Researchers</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
                                    <li className="flex items-start"><CheckIcon /><span>Secure, AI-powered digital archives</span></li>
                                    <li className="flex items-start"><CheckIcon /><span>Global collaboration platform</span></li>
                                    <li className="flex items-start"><CheckIcon /><span>Data authenticity and verification</span></li>
                                </ul>
                                <a href="/research" className="inline-block w-full text-center bg-red-950 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-opacity-90 transition-colors text-sm sm:text-base">
                                    Explore Archives
                                </a>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-white/80 backdrop-blur-sm border border-transparent rounded-2xl p-6 sm:p-8 h-full flex flex-col">
                                <CommunityIconCard />
                                <h3 className="text-xl sm:text-2xl font-bold text-red-950 my-3 sm:my-4">For Communities</h3>
                                <ul className="space-y-2 sm:space-y-3 text-gray-600 mb-4 sm:mb-6 flex-grow text-sm sm:text-base">
                                    <li className="flex items-start"><CheckIcon /><span>Cultural pride and heritage preservation</span></li>
                                    <li className="flex items-start"><CheckIcon /><span>Tourism growth and job creation</span></li>
                                    <li className="flex items-start"><CheckIcon /><span>UNESCO heritage recognition pathway</span></li>
                                </ul>
                                <a href="/contact" className="inline-block w-full text-center bg-orange-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:bg-orange-600 transition-colors text-sm sm:text-base">
                                    Join Community
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Final CTA Section */}
                    <div className="text-center">
                        <h3 className="text-2xl sm:text-3xl font-bold text-red-950 mb-3 sm:mb-4 animate-on-scroll animate-fade-in-up px-4">
                            Ready to Begin Your Sacred Journey?
                        </h3>
                        <p className="text-base sm:text-lg text-black max-w-2xl mx-auto mb-6 sm:mb-8 animate-on-scroll animate-fade-in-up px-4"
                            style={{ transitionDelay: '200ms' }}>
                            Join thousands of heritage enthusiasts, researchers, and cultural explorers who are preserving and experiencing Sikkim's monastic treasures.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4 animate-on-scroll animate-fade-in-up px-4"
                            style={{ transitionDelay: '400ms' }}>
                            <a href="/explore" id='buttons' className="inline-flex items-center bg-red-950 justify-center px-6 sm:px-8 py-2 sm:py-3 border-2 border-red-950 text-sm sm:text-base font-medium rounded-full text-red-950  hover:bg-red-400 hover:text-amber-500 transition-colors">
                                Start Virtual Tour
                            </a>
                            <a href="/about" id='buttons' className="inline-flex items-center justify-center px-6 sm:px-8 py-2 sm:py-3 border-2 border-red-950 text-sm sm:text-base font-medium rounded-full text-red-950 bg-red-950 hover:bg-red-400 hover:text-amber-500 transition-colors">
                                Learn Our Story
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default HomePage;