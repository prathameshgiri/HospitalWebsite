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
  const [selectedService, setSelectedService] = useState(null);

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
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            From routine checkups to complex surgeries, our comprehensive range of services 
            ensures all your healthcare needs are met under one roof.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, i) => {
              const IconComp = iconMap[service.icon] || Stethoscope;
              return (
                <Card
                  key={service.id}
                  className="card-hover group overflow-hidden cursor-pointer"
                  onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                >
                  <CardContent className="p-7">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-medical-100 to-ocean-50 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:from-medical-500 group-hover:to-ocean-500 transition-all duration-300">
                      <IconComp className="w-7 h-7 text-medical-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <h3 className="text-xl font-bold font-display text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feat) => (
                        <span key={feat} className="inline-flex items-center gap-1 text-xs font-medium text-medical-600 bg-medical-50 px-2.5 py-1 rounded-lg">
                          <CheckCircle2 className="w-3 h-3" />
                          {feat}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
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
