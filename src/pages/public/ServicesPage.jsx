import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Siren, Microscope, HeartPulse, Scissors, Baby, Dumbbell,
  Stethoscope, Brain, Eye, Bone, Pill, Thermometer,
  ArrowRight, Calendar, CheckCircle2, Zap, Activity,
  Shield, TrendingUp
} from "lucide-react";
import { SERVICES } from "../../lib/constants";

const allServices = [
  ...SERVICES,
  {
    id: 7,
    title: "Neurosciences",
    description: "Comprehensive neurology and neurosurgery services including stroke management, epilepsy treatment, and brain tumor surgery.",
    icon: "Brain",
    features: ["Brain Surgery", "Stroke Care", "Epilepsy", "Spine Surgery"],
  },
  {
    id: 8,
    title: "Orthopedic Excellence",
    description: "Full spectrum of orthopedic services from joint replacement to sports medicine, spinal surgery, and trauma management.",
    icon: "Bone",
    features: ["Joint Replacement", "Sports Medicine", "Fracture Care", "Spine Surgery"],
  },
  {
    id: 9,
    title: "Eye Care Center",
    description: "Advanced ophthalmology center offering LASIK, cataract surgery, retina treatment, glaucoma management, and pediatric eye care.",
    icon: "Eye",
    features: ["LASIK Surgery", "Cataract Surgery", "Retina Care", "Glaucoma"],
  },
  {
    id: 10,
    title: "Pharmacy & Medicine",
    description: "24/7 in-house pharmacy with complete range of medicines, surgical supplies, and medical equipment at competitive prices.",
    icon: "Pill",
    features: ["24/7 Available", "All Medicines", "Home Delivery", "Generic Options"],
  },
  {
    id: 11,
    title: "Health Checkups",
    description: "Comprehensive health screening packages for individuals and corporates with detailed reports and doctor consultations.",
    icon: "Thermometer",
    features: ["Full Body Checkup", "Cardiac Screening", "Cancer Screening", "Corporate Plans"],
  },
  {
    id: 12,
    title: "Telemedicine",
    description: "Virtual consultations with our specialist doctors from the comfort of your home via video call and online prescriptions.",
    icon: "Stethoscope",
    features: ["Video Consult", "Online Prescription", "Follow-up Care", "24/7 Available"],
  },
];

const iconMap = {
  Siren: Zap,
  Microscope: Activity,
  HeartPulse: HeartPulse,
  Scissors: Shield,
  Baby: Baby,
  Dumbbell: TrendingUp,
  Brain: Brain,
  Bone: Bone,
  Eye: Eye,
  Pill: Pill,
  Thermometer: Thermometer,
  Stethoscope: Stethoscope,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-ocean-50 via-white to-medical-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Badge variant="ocean" className="mb-4 animate-fade-in">Our Services</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight animate-fade-in animation-delay-200">
            Comprehensive <span className="gradient-text">Medical</span> Services
          </h1>
          <p className="text-sm md:text-lg text-gray-500 mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            From routine checkups to complex surgeries, our comprehensive range of services 
            ensures all your healthcare needs are met under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {allServices.map((service, i) => {
              const IconComp = iconMap[service.icon] || Stethoscope;
              const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
              return (
                <Link to={`/services/${createSlug(service.title)}`} key={service.id} className="block h-full outline-none group">
                  <Card
                    className="overflow-hidden bg-white hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)] hover:-translate-y-2 rounded-[2rem] transition-all duration-500 relative flex flex-col h-full border border-gray-100/80 shadow-md"
                  >
                    {/* Ambient Glow Backdrop */}
                    <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-medical-500/10 to-ocean-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:scale-125"></div>
                    
                    <CardContent className="p-6 sm:p-8 flex flex-col h-full justify-between relative z-10">
                      <div>
                        {/* Floating Icon Container */}
                        <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-sm relative overflow-hidden bg-gradient-to-br from-medical-50 to-ocean-50/50 text-medical-600 group-hover:scale-110 group-hover:from-medical-500 group-hover:to-ocean-500 group-hover:text-white group-hover:shadow-lg group-hover:shadow-medical-500/25">
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                          <IconComp className="w-7 h-7 transition-colors duration-500 relative z-10" />
                        </div>
                        
                        <h3 className="text-lg md:text-xl font-bold font-display transition-colors duration-300 mb-2 text-gray-900 group-hover:text-medical-600">
                          {service.title}
                        </h3>
                        
                        <p className="text-gray-500 text-xs sm:text-sm leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div>
                        {/* Features Grid */}
                        <div className="grid grid-cols-2 gap-2 mt-auto">
                          {service.features.map((feat) => (
                            <div key={feat} className="flex items-center gap-2 text-xs font-semibold px-3 py-2.5 rounded-xl transition-all duration-300 border border-gray-100/50 text-gray-600 bg-gray-50/80 group-hover:bg-medical-50/80 group-hover:text-medical-700 group-hover:border-medical-100/50">
                              <CheckCircle2 className="w-3.5 h-3.5 shrink-0 text-medical-500 group-hover:text-medical-600" />
                              <span className="truncate">{feat}</span>
                            </div>
                          ))}
                        </div>

                        {/* Explore Link */}
                        <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">
                          <span className="text-xs font-bold transition-colors duration-300 text-gray-400 group-hover:text-medical-600">
                            View Details
                          </span>
                          <div className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 transform shadow-sm bg-gray-50 group-hover:bg-medical-50 text-gray-400 group-hover:text-medical-600 group-hover:translate-x-1">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-ocean-600 to-medical-600 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-6">
            Need a Consultation?
          </h2>
          <p className="text-ocean-100 text-lg max-w-2xl mx-auto mb-10">
            Our specialists are ready to help. Book an appointment or call for more information.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/appointment">
              <Button size="xl" className="bg-white text-medical-600 hover:bg-gray-50 shadow-xl gap-2 group">
                <Calendar className="w-5 h-5" />
                Book Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
