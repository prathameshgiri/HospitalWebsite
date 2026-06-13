import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Link } from "react-router-dom";
import {
  Heart, Shield, Award, Users, Target, Eye, Clock,
  Calendar, ArrowRight, CheckCircle2, TrendingUp, Sparkles
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
  { name: "Dr. Suresh Agarwal", role: "Chairman & Founder", desc: "30+ years in healthcare management" },
  { name: "Dr. Anita Singh", role: "Medical Director", desc: "MBBS, MD, FRCP — 25+ years experience" },
  { name: "Dr. Ramesh Patel", role: "Chief of Surgery", desc: "Pioneer in minimally invasive surgery" },
  { name: "Ms. Kavita Sharma", role: "Nursing Director", desc: "20+ years of nursing excellence" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-50 via-white to-ocean-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-medical-200/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <Badge className="mb-4 animate-fade-in">About Us</Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight animate-fade-in animation-delay-200">
              25+ Years of <span className="gradient-text">Healing</span> Lives
            </h1>
            <p className="text-lg text-gray-500 mt-6 leading-relaxed animate-fade-in animation-delay-400">
              Since 2001, MediCare Hospital has been a beacon of hope for thousands of families, 
              providing world-class healthcare with a human touch.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover border-l-4 border-l-medical-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-medical-100 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-medical-600" />
                </div>
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Our Mission</h2>
                <p className="text-gray-500 leading-relaxed">
                  To provide accessible, affordable, and high-quality healthcare to every individual, 
                  combining medical expertise with compassion and cutting-edge technology to deliver 
                  the best patient outcomes.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-hover border-l-4 border-l-ocean-500 overflow-hidden">
              <CardContent className="p-8">
                <div className="w-14 h-14 rounded-2xl bg-ocean-100 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-ocean-600" />
                </div>
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-4">Our Vision</h2>
                <p className="text-gray-500 leading-relaxed">
                  To be recognized as the most trusted healthcare institution in the region, 
                  setting new standards in medical excellence, patient satisfaction, and 
                  healthcare innovation.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="emerald" className="mb-4">Our Core Values</Badge>
            <h2 className="section-title">What <span className="gradient-text">Drives</span> Us</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((val, i) => (
              <div key={i} className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-medical-100 to-medical-50 flex items-center justify-center shrink-0">
                  <val.icon className="w-6 h-6 text-medical-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-lg mb-1">{val.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="ocean" className="mb-4">Our Journey</Badge>
            <h2 className="section-title">A Legacy of <span className="gradient-text">Excellence</span></h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-medical-500 to-ocean-500"></div>
              
              {milestones.map((item, i) => (
                <div key={i} className={`relative flex items-center gap-8 mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}>
                  {/* Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-medical-500 rounded-full border-4 border-white shadow-lg -translate-x-1/2 z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                    <span className="inline-block text-medical-600 font-bold text-lg mb-2">{item.year}</span>
                    <h3 className="font-bold text-gray-900 text-xl font-display">{item.title}</h3>
                    <p className="text-gray-500 mt-2">{item.desc}</p>
                  </div>
                  
                  <div className="hidden md:block md:w-[calc(50%-2rem)]"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="coral" className="mb-4">Leadership</Badge>
            <h2 className="section-title">Our <span className="gradient-text">Leadership</span> Team</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((person, i) => (
              <Card key={i} className="card-hover text-center overflow-hidden">
                <CardContent className="p-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-medical-400 to-medical-600 flex items-center justify-center text-white text-2xl font-bold mb-4">
                    {person.name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg font-display">{person.name}</h3>
                  <p className="text-medical-600 font-medium text-sm mt-1">{person.role}</p>
                  <p className="text-gray-500 text-xs mt-2">{person.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-medical-600 to-ocean-600 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
            Experience the MediCare Difference
          </h2>
          <p className="text-medical-100 text-lg max-w-2xl mx-auto mb-10">
            Join thousands of patients who trust us for their healthcare needs.
          </p>
          <Link to="/appointment">
            <Button size="xl" className="bg-white text-medical-600 hover:bg-gray-50 shadow-xl gap-2 group">
              <Calendar className="w-5 h-5" />
              Book Your Appointment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}
