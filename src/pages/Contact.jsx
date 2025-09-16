import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

// --- SVG Icon Components ---
const EmailIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const PhoneIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const LocationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const SendIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
const HeartIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const PartnershipIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.104 0 2.104.448 2.828 1.172l1.415-1.415a6 6 0 10-8.486 8.486l1.415-1.415A4.002 4.002 0 0112 8zm0 0v.01" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 16c-1.104 0-2.104-.448-2.828-1.172l-1.415 1.415a6 6 0 108.486-8.486l-1.415 1.415A4.002 4.002 0 0112 16zm0 0v-.01" /></svg>;
const ResearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" /></svg>;
const CommunityIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>;

const contactDetails = [
    { icon: <EmailIcon />, title: 'Email Us', detail: 'contact@monastery360.org' },
    { icon: <PhoneIcon />, title: 'Call Us', detail: '+91 825 543 230' },
    { icon: <LocationIcon />, title: 'Visit Us', detail: 'Gangtok, Sikkim, India' },
];


export default function Contact() {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };
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

    const waysToHelp = [
        { icon: <PartnershipIcon />, title: "Partnership Opportunities", description: "Collaborate with us on tourism development, technology innovation, or cultural preservation initiatives.", points: ["Tourism industry partnerships", "Technology development collaboration", "Corporate social responsibility", "Educational program partnerships"] },
        { icon: <ResearchIcon />, title: "Research Contribution", description: "Share your research, manuscripts, photographs, or cultural knowledge to enrich our digital archive.", points: ["Academic research papers", "Historical photographs", "Cultural documentation", "Oral history recordings"] },
        { icon: <CommunityIcon />, title: "Community Support", description: "Join our community of heritage enthusiasts, volunteers, and advocates working to preserve sacred traditions.", points: ["Volunteer opportunities", "Community outreach programs", "Sponsor a digitization project", "Heritage awareness campaigns"] },
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

            <div className="animated-gradient-bg w-screen -mt-20 min-h-screen text-gray-800 overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 py-24">

                    <header className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">
                            Join Our Sacred Mission
                        </h1>
                        <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            Whether you're a researcher, tourism partner, technology collaborator, or cultural enthusiast, there's a place for you in preserving Sikkim's monastery heritage.
                        </p>
                    </header>

                    <main className="space-y-20 md:space-y-24">

                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                            {/* Left Column: Get In Touch */}
                            <div className="animate-on-scroll animate-fade-in-left">
                                <h2 className="text-3xl font-bold text-red-900 mb-2">Get In Touch</h2>
                                <p className="text-gray-700 mb-8">Ready to be part of something meaningful? Let's work together to preserve and share Sikkim's sacred heritage with the world.</p>

                                <div className="space-y-6">
                                    {contactDetails.map(item => (
                                        <div key={item.title} className="flex items-center gap-4">
                                            <div className="bg-white/70 backdrop-blur-sm p-3 rounded-full text-red-600 shadow-sm">{item.icon}</div>
                                            <div>
                                                <h4 className="font-bold text-gray-800">{item.title}</h4>
                                                <p className="text-amber-700 font-semibold">{item.detail}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-10 flex flex-wrap gap-4">
                                    <button className="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors shadow-lg">Partner With Us</button>
                                    <button className="bg-red-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-900 transition-colors shadow-lg">Submit Research</button>
                                    <button className="bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors shadow-lg">Join Community</button>
                                </div>
                            </div>

                            {/* Right Column: Send Us a Message Form */}
                            <div id='mission-section' className="bg-white/60 backdrop-blur-sm border border-amber-500/50 rounded-2xl p-8 shadow-xl animate-on-scroll animate-fade-in-right" style={{ transitionDelay: '150ms' }}>
                                <h2 className="text-3xl font-bold text-red-900 mb-6">Send Us a Message</h2>
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <label htmlFor="full-name" className="block text-sm font-semibold text-gray-700 mb-1">Full Name</label>
                                        <input type="text" name="full-name" id="full-name" placeholder="Your full name" className="block w-full px-4 py-3 rounded-lg bg-white/80 border-gray-300 focus:border-amber-500 focus:ring-amber-500 shadow-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1">Email Address</label>
                                        <input type="email" name="email" id="email" placeholder="your-email@example.com" className="block w-full px-4 py-3 rounded-lg bg-white/80 border-gray-300 focus:border-amber-500 focus:ring-amber-500 shadow-sm" />
                                    </div>
                                    <div>
                                        <label htmlFor="contribute" className="block text-sm font-semibold text-gray-700 mb-1">How would you like to contribute?</label>
                                        <select id="contribute" name="contribute" className="block w-full px-4 py-3 rounded-lg bg-white/80 border-gray-300 focus:border-amber-500 focus:ring-amber-500 shadow-sm">
                                            <option>Select an option</option>
                                            <option>Partnership</option>
                                            <option>Research Submission</option>
                                            <option>Volunteering</option>
                                            <option>General Inquiry</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                        <textarea id="message" name="message" rows="4" placeholder="Tell us about your interest in monastery heritage preservation..." className="block w-full px-4 py-3 rounded-lg bg-white/80 border-gray-300 focus:border-amber-500 focus:ring-amber-500 shadow-sm"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full flex items-center justify-center bg-amber-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 shadow-lg"><SendIcon /> Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </section>

                        <section>
                            <div className="text-center mb-16">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Ways to Make a Difference</h2>
                                <p className="text-lg text-gray-700 max-w-3xl mx-auto mt-4 animate-on-scroll animate-fade-in-up">Every contribution, no matter how small, helps preserve Sikkim's rich monastic heritage for future generations.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {waysToHelp.map((item, index) => (
                                    <div key={item.title} className="bg-[#fef8e7] border border-amber-300/50 rounded-2xl p-8 shadow-lg flex flex-col animate-on-scroll animate-card-pop-in" style={{ transitionDelay: `${index * 150}ms` }}>
                                        <div className="flex justify-center mb-4">
                                            <div className="bg-white p-3 rounded-full shadow-md">{item.icon}</div>
                                        </div>
                                        <h3 className="text-xl font-bold text-red-900 text-center mb-2">{item.title}</h3>
                                        <p className="text-gray-600 text-sm text-center leading-relaxed mb-6 flex-grow">{item.description}</p>
                                        <ul className="space-y-2 text-sm text-left">
                                            {item.points.map(point => (
                                                <li key={point} className="flex items-start">
                                                    <span className="text-amber-500 mr-2 mt-1">&#10003;</span>
                                                    <span>{point}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </section>


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
                                <button onClick={() => scrollToSection('mission-section')} className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center">
                                    <SendIcon /> Get Started Today
                                </button>
                                <Link
                                    to="/about"
                                    className="bg-amber-400 hover:bg-amber-500 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 shadow-md flex items-center justify-center"
                                >
                                    <HeartIcon /> Learn About Our Mission
                                </Link>
                            </div>
                        </section>

                    </main>
                </div>
            </div>

            <Footer />
        </>
    );
}