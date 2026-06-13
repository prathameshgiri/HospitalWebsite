import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import {
  Phone, Siren, Ambulance, Clock, MapPin, AlertTriangle,
  Heart, Shield, ArrowRight, PhoneCall, Zap
} from "lucide-react";
import { HOSPITAL_EMERGENCY, HOSPITAL_PHONE, HOSPITAL_ADDRESS } from "../../lib/constants";

const emergencyNumbers = [
  { label: "Hospital Emergency", number: "+91 98765 00000", icon: Siren, color: "red", primary: true },
  { label: "Ambulance Service", number: "+91 98765 00001", icon: Ambulance, color: "coral" },
  { label: "Hospital Reception", number: "+91 98765 43210", icon: Phone, color: "medical" },
  { label: "Police Control Room", number: "100", icon: Shield, color: "ocean" },
  { label: "Fire Brigade", number: "101", icon: AlertTriangle, color: "coral" },
  { label: "National Emergency", number: "112", icon: PhoneCall, color: "red" },
];

const emergencyServices = [
  {
    title: "Trauma Center",
    desc: "24/7 Level-1 trauma center with specialized trauma surgeons, equipped for all types of injuries and emergencies.",
  },
  {
    title: "Cardiac Emergency",
    desc: "Immediate cardiac care with catheterization lab, defibrillators, and round-the-clock cardiologists.",
  },
  {
    title: "Stroke Unit",
    desc: "Dedicated stroke unit with neurologists available 24/7 for time-critical stroke management.",
  },
  {
    title: "Pediatric Emergency",
    desc: "Specialized pediatric emergency with child-friendly environment and pediatric intensivists.",
  },
  {
    title: "Burn Unit",
    desc: "Advanced burn care facility with dedicated burn surgeons and specialized ICU.",
  },
  {
    title: "Poison Control",
    desc: "Toxicology experts available for all types of poisoning, overdose, and snake bite cases.",
  },
];

export default function EmergencyPage() {
  return (
    <>
      {/* Hero - Urgent Red Theme */}
      <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-br from-red-600 via-red-500 to-red-700">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-6 animate-pulse-soft">
            <Siren className="w-4 h-4" />
            EMERGENCY - 24/7 AVAILABLE
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight">
            Emergency & Critical Care
          </h1>
          <p className="text-red-100 text-lg mt-6 max-w-2xl mx-auto">
            Our emergency department is staffed with experienced physicians and nurses, 
            ready to handle any medical emergency around the clock.
          </p>
          <div className="mt-10">
            <a href={`tel:${HOSPITAL_EMERGENCY}`}>
              <Button size="xl" className="bg-white text-red-600 hover:bg-gray-50 shadow-2xl gap-3 text-xl px-10 py-6 animate-pulse-soft">
                <Phone className="w-6 h-6" />
                Call Emergency: {HOSPITAL_EMERGENCY}
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Numbers Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {emergencyNumbers.map((item, i) => (
              <a key={i} href={`tel:${item.number}`} className="block">
                <Card className={`card-hover h-full ${item.primary ? "border-red-200 bg-red-50" : ""}`}>
                  <CardContent className="p-6 flex items-center gap-4">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${
                      item.color === "red" ? "bg-red-100" :
                      item.color === "coral" ? "bg-coral-100" :
                      item.color === "medical" ? "bg-medical-100" :
                      "bg-ocean-100"
                    }`}>
                      <item.icon className={`w-7 h-7 ${
                        item.color === "red" ? "text-red-600" :
                        item.color === "coral" ? "text-coral-600" :
                        item.color === "medical" ? "text-medical-600" :
                        "text-ocean-600"
                      }`} />
                    </div>
                    <div>
                      <p className="text-gray-500 text-sm font-medium">{item.label}</p>
                      <p className="text-xl font-bold text-gray-900 font-display">{item.number}</p>
                    </div>
                    <PhoneCall className="w-5 h-5 text-gray-400 ml-auto" />
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Services */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <Badge variant="destructive" className="mb-4">Emergency Services</Badge>
            <h2 className="section-title">
              Our <span className="text-red-600">Emergency</span> Services
            </h2>
            <p className="section-subtitle">
              Equipped to handle any medical emergency with specialized units and expert teams.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {emergencyServices.map((service, i) => (
              <Card key={i} className="card-hover">
                <CardContent className="p-6">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center mb-4">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <h3 className="text-lg font-bold font-display text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What To Do */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="section-title">
              What to Do in an <span className="text-red-600">Emergency</span>
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { step: "1", title: "Stay Calm", desc: "Take a deep breath. Panic can worsen the situation for everyone involved." },
              { step: "2", title: "Call Emergency", desc: "Dial our emergency number immediately. Our team will guide you through." },
              { step: "3", title: "Provide Information", desc: "Tell us the patient's condition, location, and any known medical history." },
              { step: "4", title: "Follow Instructions", desc: "Our emergency team will provide first-aid instructions until help arrives." },
              { step: "5", title: "Reach the Hospital", desc: "If possible, bring the patient to our emergency department. Ambulance is also available." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-5 p-5 rounded-2xl hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center shrink-0 text-red-600 font-bold text-lg">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  <p className="text-gray-500 mt-1">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location CTA */}
      <section className="section-padding bg-red-600 text-center">
        <div className="container mx-auto px-4 md:px-6">
          <Siren className="w-16 h-16 text-white/30 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-white font-display mb-4">
            Don't Hesitate, Call Now
          </h2>
          <p className="text-red-100 text-lg max-w-xl mx-auto mb-8">
            Every second counts in an emergency. Our team is available 24/7 to save lives.
          </p>
          <div className="flex items-center justify-center gap-3 text-white mb-8">
            <MapPin className="w-5 h-5" />
            <span>{HOSPITAL_ADDRESS}</span>
          </div>
          <a href={`tel:${HOSPITAL_EMERGENCY}`}>
            <Button size="xl" className="bg-white text-red-600 hover:bg-gray-50 shadow-2xl gap-3 text-lg">
              <Phone className="w-6 h-6" />
              {HOSPITAL_EMERGENCY}
            </Button>
          </a>
        </div>
      </section>
    </>
  );
}
