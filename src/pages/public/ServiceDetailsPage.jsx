import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import {
  Siren, Microscope, HeartPulse, Scissors, Baby, Dumbbell,
  Stethoscope, Brain, Eye, Bone, Pill, Thermometer,
  ArrowLeft, ArrowRight, Calendar, CheckCircle2, Zap, Activity,
  Shield, TrendingUp, Clock, ClipboardList, ActivitySquare, HeartHandshake,
  PhoneCall
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

const processSteps = [
  { icon: Clock, title: "Initial Consultation", desc: "Meet with our specialists to discuss your symptoms and medical history in detail." },
  { icon: ActivitySquare, title: "Advanced Diagnostics", desc: "State-of-the-art testing and imaging to accurately identify the underlying cause." },
  { icon: ClipboardList, title: "Customized Treatment Plan", desc: "A personalized roadmap designed specifically for your condition and lifestyle." },
  { icon: HeartHandshake, title: "Recovery & Follow-up", desc: "Continuous monitoring and support to ensure a smooth and complete recovery." }
];

export default function ServiceDetailsPage() {
  const { id: slug } = useParams();
  const navigate = useNavigate();
  
  const createSlug = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, '');
  const service = allServices.find(s => createSlug(s.title) === slug) || allServices[0];
  const IconComp = iconMap[service.icon] || Stethoscope;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-bold">Service not found</h1>
        <Button onClick={() => navigate('/services')} className="ml-4">Go Back</Button>
      </div>
    );
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      
      {/* Premium Hero Section */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[url('/images/grid-pattern.svg')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-medical-500/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-ocean-500/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/services" className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-8 text-sm font-semibold animate-fade-in">
            <ArrowLeft className="w-4 h-4" /> Back to all services
          </Link>
          
          <div className="animate-fade-in animation-delay-200">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-center">
              <div className="w-16 h-16 md:w-24 md:h-24 rounded-2xl md:rounded-3xl bg-gradient-to-br from-medical-500 to-ocean-500 flex items-center justify-center shadow-2xl shadow-medical-500/30 shrink-0">
                <IconComp className="w-8 h-8 md:w-12 md:h-12 text-white" />
              </div>
              <div className="max-w-3xl">
                <Badge className="bg-white/10 text-medical-300 hover:bg-white/20 mb-3 md:mb-4 border border-white/20 backdrop-blur-md text-xs md:text-sm">
                  Specialized Department
                </Badge>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white leading-tight mb-2 md:mb-4 tracking-tight md:tracking-normal">
                  {service.title}
                </h1>
                <p className="text-sm md:text-xl text-slate-300 leading-relaxed font-medium">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 -mt-10 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Details & Step by Step */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            
            {/* Features Glass Card */}
            <div className="bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 animate-fade-in animation-delay-300">
              <h2 className="text-lg md:text-2xl font-bold font-display text-gray-900 mb-4 md:mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-medical-500" /> Key Features & Treatments
              </h2>
              <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                {service.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 md:gap-3 p-3 md:p-4 rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 hover:bg-medical-50 hover:border-medical-100 transition-colors">
                    <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 text-medical-500 shrink-0 mt-0.5" />
                    <span className="font-semibold text-slate-700 text-xs md:text-base">{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Step by Step Process */}
            <div className="bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 animate-fade-in animation-delay-500">
              <h2 className="text-lg md:text-2xl font-bold font-display text-gray-900 mb-1 md:mb-2">How It Works</h2>
              <p className="text-xs md:text-base text-slate-500 mb-6 md:mb-8 font-medium">Our streamlined process ensures you receive the best care seamlessly.</p>
              
              <div className="relative">
                {/* Vertical Line */}
                <div className="absolute left-[27px] top-4 bottom-4 w-1 bg-gradient-to-b from-medical-500 to-ocean-500 rounded-full hidden md:block"></div>
                
                <div className="space-y-4 md:space-y-6">
                  {processSteps.map((step, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row gap-3 md:gap-6 relative group">
                      {/* Step Number / Icon */}
                      <div className="w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-white border-2 border-medical-500 shadow-lg shadow-medical-500/20 flex items-center justify-center shrink-0 relative z-10 group-hover:scale-110 transition-transform duration-300">
                        <step.icon className="w-4 h-4 md:w-6 md:h-6 text-medical-600" />
                      </div>
                      
                      {/* Step Content */}
                      <div className="bg-slate-50 rounded-xl md:rounded-2xl p-4 md:p-6 border border-slate-100 flex-1 group-hover:bg-medical-50/50 group-hover:border-medical-100 transition-colors duration-300">
                        <div className="text-xs md:text-sm font-bold text-medical-500 mb-1">Step {idx + 1}</div>
                        <h3 className="text-base md:text-xl font-bold text-gray-900 mb-1 md:mb-2 font-display">{step.title}</h3>
                        <p className="text-xs md:text-base text-slate-600 font-medium">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Sticky Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              
              {/* CTA Card */}
              <div className="bg-gradient-to-br from-medical-600 to-ocean-600 rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-2xl shadow-medical-500/20 text-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-10 mix-blend-overlay"></div>
                <div className="relative z-10">
                  <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4 md:mb-6 backdrop-blur-md border border-white/20">
                    <Calendar className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-lg md:text-2xl font-bold font-display text-white mb-2">Book a Session</h3>
                  <p className="text-xs md:text-base text-medical-100 mb-6 md:mb-8 font-medium">Schedule your appointment with our {service.title.toLowerCase()} specialists today.</p>
                  
                  <Link to="/appointment" className="block w-full">
                    <Button size="xl" className="w-full text-sm md:text-base bg-white text-medical-600 hover:bg-gray-50 shadow-xl font-bold group py-2 md:py-3">
                      Get Appointment
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Contact Help */}
              <div className="bg-white rounded-2xl md:rounded-[2rem] p-5 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 text-center">
                <PhoneCall className="w-6 h-6 md:w-8 md:h-8 text-slate-400 mx-auto mb-3 md:mb-4" />
                <h4 className="font-bold text-sm md:text-base text-gray-900 mb-1">Need Help?</h4>
                <p className="text-xs md:text-sm text-slate-500 mb-3 md:mb-4 font-medium">Call our 24/7 support line for immediate assistance.</p>
                <a href="tel:+18001234567" className="inline-flex items-center justify-center w-full py-2 md:py-3 rounded-xl bg-slate-50 text-medical-600 text-sm md:text-base font-bold hover:bg-slate-100 transition-colors">
                  1-800-123-4567
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
