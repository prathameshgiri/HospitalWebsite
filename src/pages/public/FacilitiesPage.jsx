import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  BedDouble, Monitor, Scissors, Pill, Microscope, Droplets,
  Ambulance, UtensilsCrossed, Wifi, ShieldCheck, AirVent, Sparkles,
  Calendar, ArrowRight, CheckCircle2
} from "lucide-react";
import { FACILITIES } from "../../lib/constants";

const iconMap = {
  BedDouble, Monitor, Scissors, Pill, Microscope, Droplets,
  Ambulance, UtensilsCrossed,
};

const highlights = [
  { icon: ShieldCheck, label: "NABH Accredited", desc: "Highest safety standards" },
  { icon: Wifi, label: "Free WiFi", desc: "Stay connected" },
  { icon: AirVent, label: "Climate Controlled", desc: "Comfortable environment" },
  { icon: Sparkles, label: "Hygienic", desc: "Sterilized regularly" },
];

export default function FacilitiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-coral-50 via-white to-medical-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Badge variant="coral" className="mb-4 animate-fade-in">Our Facilities</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight animate-fade-in animation-delay-200">
            World-Class <span className="gradient-text">Infrastructure</span>
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            State-of-the-art facilities designed for patient comfort, safety, and the most 
            advanced medical treatments.
          </p>
        </div>
      </section>

      {/* Highlights Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-gray-50">
                <div className="w-10 h-10 rounded-lg bg-medical-100 flex items-center justify-center shrink-0">
                  <item.icon className="w-5 h-5 text-medical-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{item.label}</p>
                  <p className="text-gray-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {FACILITIES.map((facility, i) => {
              const IconComp = iconMap[facility.icon] || BedDouble;
              return (
                <Card key={facility.id} className="card-hover group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row">
                      {/* Icon Area */}
                      <div className="md:w-48 h-40 md:h-auto bg-gradient-to-br from-medical-100 via-ocean-50 to-medical-50 flex items-center justify-center shrink-0">
                        <IconComp className="w-16 h-16 text-medical-500 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      {/* Content */}
                      <div className="p-6 flex-1">
                        <h3 className="text-xl font-bold font-display text-gray-900 mb-2">{facility.name}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{facility.description}</p>
                        <div className="mt-4 flex items-center gap-2 text-medical-600 font-medium text-sm">
                          <CheckCircle2 className="w-4 h-4" />
                          Available 24/7
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gradient-to-r from-medical-600 to-ocean-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            {[
              { value: "500+", label: "Bed Capacity" },
              { value: "10", label: "Operation Theaters" },
              { value: "50+", label: "ICU Beds" },
              { value: "200+", label: "Parking Spots" },
            ].map((stat, i) => (
              <div key={i}>
                <div className="text-4xl md:text-5xl font-bold font-display">{stat.value}</div>
                <p className="text-medical-100 mt-2 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="section-padding bg-white text-center">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="section-title mb-4">
            Want to <span className="gradient-text">Visit</span> Us?
          </h2>
          <p className="section-subtitle mb-10">
            Schedule a visit or contact us for more information about our facilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button size="lg" className="gap-2 group">
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Link to="/appointment">
              <Button size="lg" variant="outline" className="gap-2">
                <Calendar className="w-4 h-4" />
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
