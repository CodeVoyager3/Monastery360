import React, { useEffect } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';


// --- SVG Icon Components ---
const SecureUploadIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-17.956z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 11v5m0 0l-2-2m2 2l2-2" /></svg>;
const ArchiveIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 7v8a2 2 0 002 2h4a2 2 0 002-2V7a2 2 0 00-2-2h-4a2 2 0 00-2 2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7" /></svg>;
const ManuscriptIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>;
const PhotographyIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const ShieldIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 20.944A12.02 12.02 0 0012 21a12.02 12.02 0 009-17.956z" /></svg>;
const UsersIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21a6 6 0 00-9-5.197M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
const DataVerificationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M8 9l4-4 4 4m0 6l-4 4-4-4" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 17v-6.28A2 2 0 0111.28 9h1.44A2 2 0 0115 10.72V17" /><path strokeLinecap="round" strokeLinejoin="round" d="M3 3v18h18V3H3z" /></svg>;
const ExportToolsIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-amber-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;

// --- Main Research Page Component ---
export default function Research() {
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

    const collaborationFeatures = [
        { icon: <ShieldIcon />, title: "AES-256 Encryption", desc: "Maximum security" },
        { icon: <UsersIcon />, title: "Role-based Access", desc: "Verified researchers" },
        { icon: <DataVerificationIcon />, title: "Data Verification", desc: "Authenticated content" },
        { icon: <ExportToolsIcon />, title: "Export Tools", desc: "Multiple formats" }
    ];

    const recentContributions = [
        {
            title: "Digital Analysis of Thangka Iconography in the Rumtek Monastery Collection",
            authors: "Dr. Anjali Sharma, Dr. Tenzin Dorje",
            date: "August 20, 2025",
            summary: "This study utilizes AI-powered image recognition to categorize and analyze iconographic patterns across 250 digitized Thangka paintings, revealing previously undocumented regional variations.",
            tags: ["Iconography", "AI Analysis", "Thangka Art", "Rumtek"]
        },
        {
            title: "Preservation of Ancient Manuscripts: A Comparative Study of Digital Archiving Techniques",
            authors: "Dr. Kenji Tanaka",
            date: "July 05, 2025",
            summary: "Evaluating the efficacy of various digitization methods, this paper argues for a multi-spectral imaging approach to preserve delicate manuscripts from the Pemayangtse collection.",
            tags: ["Digital Preservation", "Manuscripts", "Archival Science"]
        },
        {
            title: "The Socio-Economic Impact of Virtual Pilgrimage on Local Sikkimese Communities",
            authors: "Priya Singh, Dr. Michael Reid",
            date: "June 12, 2025",
            summary: "An analysis of the growing trend of virtual tourism and its effects on local economies and cultural engagement, based on data collected through the Monastery360 platform.",
            tags: ["Virtual Tourism", "Cultural Impact", "Sikkim"]
        }
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
            
            <div className="animated-gradient-bg -mt-20 w-screen min-h-screen text-gray-800 overflow-x-hidden">
                <div className="container mx-auto px-4 sm:px-6 py-24">
                    
                    <header className="text-center max-w-3xl mx-auto mb-20 md:mb-24">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">
                            Advancing Heritage Research
                        </h1>
                        <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                            <div className="w-16 h-1 bg-amber-500 rounded-full"></div><div className="w-4 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-16 h-1 bg-amber-500 rounded-full"></div>
                        </div>
                        <p className="text-lg text-gray-700 leading-relaxed animate-on-scroll animate-fade-in-up" style={{ transitionDelay: '400ms' }}>
                            Empower your research with secure digital archives, collaborative tools, and AI-assisted analysis. Together, we're building the world's most comprehensive monastery heritage database.
                        </p>
                    </header>
                    
                    <main className="space-y-20 md:space-y-24">
                        
                        <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                            {/* Secure Document Upload Card */}
                            <div className="bg-[#fef8e7] border border-amber-300/50 rounded-2xl p-8 shadow-lg h-full animate-on-scroll animate-fade-in-left">
                                <div className="flex items-start gap-4 mb-4">
                                    <SecureUploadIcon />
                                    <div>
                                        <h3 className="text-2xl font-bold text-red-900">Secure Document Upload</h3>
                                        <p className="text-gray-600 text-sm mt-1">Contribute to heritage preservation by uploading manuscripts, photographs, and cultural documents. Our secure platform ensures data integrity and proper attribution.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-6">
                                    <div className="bg-white/80 p-4 rounded-lg flex items-center gap-4">
                                        <ManuscriptIcon />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Manuscript Upload</h4>
                                            <p className="text-xs text-gray-500">PDF, TIFF, JPG - Max 100MB</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/80 p-4 rounded-lg flex items-center gap-4">
                                        <PhotographyIcon />
                                        <div>
                                            <h4 className="font-semibold text-gray-800">Photography Collection</h4>
                                            <p className="text-xs text-gray-500">High-res images, user captions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Archive Access Card */}
                            <div className="bg-[#fef8e7] border border-amber-300/50 rounded-2xl p-8 shadow-lg h-full flex flex-col animate-on-scroll animate-fade-in-right" style={{transitionDelay: '150ms'}}>
                                <div className="flex items-start gap-4 mb-4">
                                    <ArchiveIcon />
                                    <div>
                                        <h3 className="text-2xl font-bold text-red-900">Archive Access</h3>
                                        <p className="text-gray-600 text-sm mt-1">Access our growing digital archive with advanced search capabilities, AI-powered analysis tools, and collaborative research features. All content is verified and properly documented.</p>
                                    </div>
                                </div>
                                <div className="space-y-4 mt-6 flex-grow">
                                    <div className="bg-white/80 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-semibold text-gray-800 text-sm">Manuscript Collection</h4>
                                            <span className="text-xs font-bold text-red-600">2,847 Items</span>
                                        </div>
                                        <div className="w-full bg-amber-200 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-amber-500 to-red-500 h-2 rounded-full" style={{width: '85%'}}></div>
                                        </div>
                                    </div>
                                     <div className="bg-white/80 p-4 rounded-lg">
                                        <div className="flex justify-between items-center mb-1">
                                            <h4 className="font-semibold text-gray-800 text-sm">Cultural Artifacts</h4>
                                            <span className="text-xs font-bold text-red-600">1,563 Items</span>
                                        </div>
                                        <div className="w-full bg-amber-200 rounded-full h-2">
                                            <div className="bg-gradient-to-r from-amber-500 to-red-500 h-2 rounded-full" style={{width: '60%'}}></div>
                                        </div>
                                    </div>
                                </div>
                                <a href='/login' className="mt-6 w-full bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-red-900 transition-colors duration-300 shadow-md">
                                    Explore the Digital Archive
                                </a>
                            </div>
                        </section>
                        
                        <section>
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 animate-on-scroll animate-fade-in-down">Recent Research Contributions</h2>
                                <div className="flex justify-center my-4 animate-on-scroll animate-fade-in-down" style={{ transitionDelay: '200ms' }}>
                                    <div className="w-12 h-1 bg-amber-500 rounded-full"></div><div className="w-3 h-1 bg-red-600 rounded-full mx-1"></div><div className="w-12 h-1 bg-amber-500 rounded-full"></div>
                                </div>
                            </div>
                            <div className="max-w-4xl mx-auto space-y-6">
                                {recentContributions.map((item, index) => (
                                    <div key={index} className="bg-white/60 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-6 shadow-lg text-left animate-on-scroll animate-fade-in-up" style={{ transitionDelay: `${index * 150}ms`}}>
                                        <h4 className="font-bold text-xl text-red-900">{item.title}</h4>
                                        <p className="text-sm text-gray-500 italic my-2">By {item.authors} - Published on {item.date}</p>
                                        <p className="text-gray-700 mb-4">{item.summary}</p>
                                        <div className="flex flex-wrap gap-2">
                                            {item.tags.map(tag => (
                                                <span key={tag} className="text-xs font-semibold bg-amber-100 text-amber-800 px-3 py-1 rounded-full">{tag}</span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </section>
                        
                        <section className="bg-blue-900/10 rounded-2xl p-8 md:p-12 text-center animate-on-scroll animate-fade-in-up">
                            <h2 className="text-3xl font-bold text-red-600 mb-2">Research Collaboration Features</h2>
                            <p className="text-gray-700 max-w-3xl mx-auto mb-12">Connect with fellow researchers, share insights, and contribute to the global understanding of Himalayan Buddhist heritage.</p>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                                {collaborationFeatures.map((item, index) => (
                                    <div key={item.title} className="bg-white/80 backdrop-blur-sm border border-amber-500/20 p-4 rounded-lg flex flex-col items-center justify-start text-center shadow-lg animate-on-scroll animate-card-pop-in transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: `${index * 150}ms` }}>
                                        {item.icon}
                                        <h4 className="font-bold text-red-600 text-sm">{item.title}</h4>
                                        <p className="text-xs text-gray-600">{item.desc}</p>
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