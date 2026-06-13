import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Heart, Shield, Award, Users, Target, Eye, Clock,
  Calendar, ArrowRight, CheckCircle2, TrendingUp, Sparkles, Medal, Globe, Activity
} from "lucide-react";

const milestones = [
  { year: "2001", title: "Foundation", desc: "MediCare Hospital was established with a vision to provide affordable, quality healthcare." },
  { year: "2005", title: "First Expansion", desc: "Expanded to 200 beds with new cardiology and neurology departments." },
  { year: "2010", title: "NABH Accreditation", desc: "Received NABH accreditation for maintaining highest quality standards." },
  { year: "2015", title: "Advanced Technology", desc: "Introduced robotic surgery, MRI, and advanced diagnostic equipment." },
  { year: "2020", title: "500+ Beds", desc: "Grew to 500+ beds with 30+ departments and 120+ specialist doctors." },
  { year: "2024", title: "Digital Transformation", desc: "Launched digital health records, online appointments, and telemedicine." },
];

const values = [
  { icon: Heart, title: "Compassion", desc: "Treating every patient with empathy, respect, and genuine care." },
  { icon: Shield, title: "Excellence", desc: "Maintaining the highest standards in medical practice and patient safety." },
  { icon: Users, title: "Teamwork", desc: "Collaborating across disciplines to deliver the best outcomes." },
  { icon: Target, title: "Innovation", desc: "Embracing cutting-edge technology and medical advancements." },
  { icon: Eye, title: "Transparency", desc: "Open communication with patients about treatment options and costs." },
  { icon: TrendingUp, title: "Growth", desc: "Continuously learning and improving our skills and services." },
];

const leadership = [
  { name: "Dr. Suresh Agarwal", role: "Chairman & Founder", desc: "30+ years in healthcare management", image: "/images/avatars/doctor_rajesh_1781333787157.png" },
  { name: "Dr. Anita Singh", role: "Medical Director", desc: "MBBS, MD, FRCP — 25+ years experience", image: "/images/avatars/doctor_meera_1781333856877.png" },
  { name: "Dr. Ramesh Patel", role: "Chief of Surgery", desc: "Pioneer in minimally invasive surgery", image: "/images/avatars/doctor_amit_1781333867925.png" },
  { name: "Ms. Kavita Sharma", role: "Nursing Director", desc: "20+ years of nursing excellence", image: "/images/avatars/doctor_kavitha_1781333881064.png" },
];

const awards = [
  { title: "Best Multispecialty Hospital", year: "2023", org: "National Health Excellence" },
  { title: "Excellence in Patient Care", year: "2022", org: "Medical Quality Forum" },
  { title: "Top Robotics Surgery Center", year: "2023", org: "Surgical Innovations Society" },
  { title: "NABH Accredited Facility", year: "Current", org: "Quality Council" },
];

/* ─── Premium Components ─── */

function HeroSection() {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-32 overflow-hidden">
      {/* Background Gradients like HomePage */}
      <div className="absolute inset-0 bg-gradient-to-br from-medical-50 via-white to-ocean-50/30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-medical-200/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ocean-200/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-1.5 md:gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full bg-medical-50 border border-medical-100 text-medical-600 font-medium mb-6 md:mb-8 animate-fade-in backdrop-blur-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4 shrink-0" />
            <span className="text-[10px] sm:text-xs md:text-sm whitespace-nowrap">Setting the Standard in Healthcare Since 2001</span>
          </div>
          <h1 className="text-[22px] sm:text-3xl md:text-4xl lg:text-5xl font-bold font-display text-gray-900 mb-6 animate-fade-in animation-delay-200 md:whitespace-nowrap leading-snug">
            A Legacy of <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-ocean-500">Excellence &</span>
            <span className="hidden md:inline"> </span>
            <br className="block md:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-ocean-500">Compassion</span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 font-medium mb-10 md:mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-400">
            We are more than just a hospital. We are a community of dedicated professionals committed to your health and well-being.
          </p>
          
          {/* Stats Floating Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 animate-fade-in animation-delay-600">
            {[
              { label: "Years Experience", value: "25+", icon: Clock },
              { label: "Specialist Doctors", value: "120+", icon: Users },
              { label: "Happy Patients", value: "1M+", icon: Heart },
              { label: "Global Awards", value: "50+", icon: Award },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white/80 backdrop-blur-md shadow-xl border border-gray-100 rounded-xl md:rounded-2xl p-4 md:p-6 text-center hover:-translate-y-1 transition-all duration-300">
                <stat.icon className="w-6 h-6 md:w-8 md:h-8 text-medical-600 mx-auto mb-2 md:mb-4" />
                <div className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-1 font-display">{stat.value}</div>
                <div className="text-[10px] md:text-sm text-gray-500 font-medium leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MissionVisionBento() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-50"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className={`grid lg:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          
          {/* Mission Card - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-3xl p-10 md:p-14 shadow-xl border border-gray-100 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-medical-50 rounded-full blur-3xl -mr-10 -mt-10 transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-medical-500 text-white flex items-center justify-center mb-8 shadow-lg shadow-medical-500/30">
                <Target className="w-8 h-8" />
              </div>
              <h2 className="text-4xl font-bold font-display text-gray-900 mb-6">Our Mission</h2>
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-medium">
                To provide accessible, affordable, and highest-quality healthcare to every individual. We combine unparalleled medical expertise with deep compassion and cutting-edge technology to deliver outcomes that matter.
              </p>
            </div>
          </div>

          {/* Vision Card - Spans 1 column */}
          <div className="bg-gradient-to-br from-slate-900 to-ocean-900 rounded-3xl p-10 shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-ocean-500/30 rounded-full blur-3xl transition-transform group-hover:scale-150 duration-700"></div>
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm text-ocean-300 flex items-center justify-center border border-white/20 mb-8">
                <Eye className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-4xl font-bold font-display text-white mb-6">Our Vision</h2>
                <p className="text-lg text-slate-300 leading-relaxed font-medium">
                  To be the global benchmark in healthcare, setting new standards for medical excellence, patient satisfaction, and continuous innovation.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function CoreValues() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="medical" className="mb-4">Core Principles</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Values that <span className="text-transparent bg-clip-text bg-gradient-to-r from-medical-600 to-ocean-500">Drive Us</span></h2>
          <p className="text-lg text-gray-500 font-medium">These fundamental beliefs guide our every action and decision, ensuring you always receive the best care.</p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {values.map((val, i) => (
            <div key={i} className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-medical-500/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-medical-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-gray-100 text-gray-700 flex items-center justify-center mb-6 group-hover:bg-medical-500 group-hover:text-white group-hover:border-medical-500 transition-colors duration-500">
                  <val.icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold font-display text-gray-900 mb-3 group-hover:text-medical-600 transition-colors">{val.title}</h3>
                <p className="text-gray-600 leading-relaxed font-medium">{val.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-pattern opacity-10"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 text-center lg:text-left">
            <Badge className="bg-white/10 text-medical-300 hover:bg-white/20 mb-4 border border-white/20">Recognition</Badge>
            <h2 className="text-4xl md:text-5xl font-bold font-display text-white mb-6">Award Winning Care</h2>
            <p className="text-slate-400 text-lg mb-8 font-medium">
              Our commitment to excellence has been recognized by leading health organizations worldwide.
            </p>
          </div>
          
          <div className="lg:w-2/3 grid sm:grid-cols-2 gap-4 w-full">
            {awards.map((award, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-medical-500/20 text-medical-400 flex items-center justify-center border border-medical-500/30">
                    <Medal className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-slate-300 border border-white/5">{award.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-display">{award.title}</h3>
                <p className="text-sm text-slate-400 font-medium">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineJourney() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <Badge variant="ocean" className="mb-4">Our Journey</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Milestones of <span className="text-transparent bg-clip-text bg-gradient-to-r from-ocean-600 to-medical-500">Progress</span></h2>
        </div>
        
        <div className={`relative max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Glowing Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gray-100 -translate-x-1/2 rounded-full"></div>
          <div className="absolute left-6 md:left-1/2 top-0 h-3/4 w-1 bg-gradient-to-b from-medical-500 to-ocean-500 -translate-x-1/2 rounded-full blur-[2px]"></div>
          
          {milestones.map((item, i) => (
            <div key={i} className={`relative flex items-center gap-8 mb-16 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
              {/* Dot */}
              <div className="absolute left-6 md:left-1/2 w-8 h-8 bg-white rounded-full border-4 border-medical-500 shadow-[0_0_15px_rgba(14,165,233,0.5)] -translate-x-1/2 z-10 flex items-center justify-center">
                <div className="w-2 h-2 bg-ocean-500 rounded-full"></div>
              </div>
              
              {/* Content Card */}
              <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                  <span className="inline-block px-4 py-1.5 rounded-full bg-medical-50 text-medical-600 font-bold text-sm mb-4">{item.year}</span>
                  <h3 className="text-2xl font-bold text-gray-900 font-display mb-3">{item.title}</h3>
                  <p className="text-gray-600 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </div>
              
              <div className="hidden md:block md:w-[calc(50%-3rem)]"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LeadershipTeam() {
  const [ref, isVisible] = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <Badge variant="coral" className="mb-4">The Visionaries</Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 mb-4">Leadership <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-400">Team</span></h2>
          <p className="text-lg text-gray-500 font-medium">Meet the brilliant minds guiding our commitment to world-class healthcare.</p>
        </div>
        
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          {leadership.map((person, i) => (
            <div key={i} className="group relative rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 h-[400px]">
              {/* Abstract Background Top */}
              <div className={`absolute top-0 left-0 right-0 h-48 bg-gradient-to-br ${i%2===0 ? 'from-medical-400 to-ocean-500' : 'from-ocean-400 to-medical-600'} opacity-80 group-hover:opacity-100 transition-opacity`}></div>
              
              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="w-28 h-28 mx-auto rounded-full bg-white shadow-xl flex items-center justify-center border-4 border-white z-10 mb-[-30px] group-hover:-translate-y-4 transition-transform duration-500 overflow-hidden">
                  <img src={person.image} alt={person.name} className="w-full h-full object-cover" />
                </div>
                <div className="bg-white pt-12 pb-4 px-4 rounded-2xl text-center group-hover:-translate-y-4 transition-transform duration-500">
                  <h3 className="font-bold text-gray-900 text-xl font-display">{person.name}</h3>
                  <p className="text-medical-600 font-bold text-sm mt-1">{person.role}</p>
                  <p className="text-gray-500 text-sm mt-3 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500">{person.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <MissionVisionBento />
      <CoreValues />
      <AwardsSection />
      <TimelineJourney />
      <LeadershipTeam />
    </>
  );
}
