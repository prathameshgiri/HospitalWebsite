import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Badge } from "../../components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import {
  Heart, ArrowRight, Phone, Calendar, Shield, Award, Users, Clock,
  Stethoscope, HeartPulse, Brain, Baby, Bone, Eye,
  Star, Quote, ChevronLeft, ChevronRight, Activity,
  CheckCircle2, Sparkles, Zap, TrendingUp
} from "lucide-react";
import { STATS, SERVICES, DOCTORS, TESTIMONIALS, FAQ_DATA, HOSPITAL_EMERGENCY } from "../../lib/constants";

/* ─── Animated Counter Hook ─── */
function useCounter(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = target / (duration / 16);
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return [count, ref];
}

/* ─── Scroll Animation Hook ─── */
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
}

/* ─── Hero Section ─── */
function HeroSection() {
  return (
    <section className="relative min-h-[80vh] lg:min-h-[92vh] pt-8 pb-16 lg:py-0 flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-medical-50/30 to-ocean-50/20"></div>
      <div className="absolute inset-0 bg-hero-pattern"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-medical-200/30 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-ocean-200/20 rounded-full blur-3xl animate-float animation-delay-1000"></div>
      <div className="absolute top-40 left-1/3 w-48 h-48 bg-emerald-200/20 rounded-full blur-3xl animate-float animation-delay-600"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-medical-100/80 backdrop-blur-sm text-medical-700 px-4 py-2 rounded-full text-sm font-semibold animate-fade-in">
              <Sparkles className="w-4 h-4" />
              #1 Multi-Specialty Hospital
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-display text-gray-900 leading-[1.1] tracking-tight animate-fade-in animation-delay-200">
              Your Health
              <br />
              <span className="gradient-text">Our Priority</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-500 max-w-lg leading-relaxed animate-fade-in animation-delay-400">
              Experience world-class healthcare with compassionate doctors, 
              cutting-edge technology, and personalized care for you and your family.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-600">
              <Link to="/appointment">
                <Button size="xl" className="h-auto py-3 px-6 md:py-4 md:px-8 text-sm md:text-base gap-2 group">
                  <Calendar className="w-4 h-4 md:w-5 md:h-5" />
                  Book Appointment
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <a href={`tel:${HOSPITAL_EMERGENCY}`}>
                <Button size="xl" variant="outline" className="h-auto py-3 px-6 md:py-4 md:px-8 text-sm md:text-base gap-2">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                  Emergency Call
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4 animate-fade-in animation-delay-800">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((num) => (
                    <img key={num} src={`/images/avatars/patient_avatar_${num}_17813337${num === 1 ? '22701' : num === 2 ? '35851' : num === 3 ? '48535' : '62450'}.png`} alt={`Patient ${num}`} className="w-10 h-10 rounded-full border-2 border-white object-cover" />
                  ))}
                </div>
                <div className="text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500">50,000+ Happy Patients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Stats Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-5 animate-fade-in-right animation-delay-400">
            {[
              { icon: Shield, label: "Trusted Care", desc: "25+ Years of Excellence", color: "medical" },
              { icon: Users, label: "Expert Team", desc: "120+ Specialist Doctors", color: "ocean" },
              { icon: Award, label: "Accredited", desc: "NABH & JCI Certified", color: "emerald" },
              { icon: Zap, label: "Advanced Tech", desc: "State-of-the-Art Equipment", color: "coral" },
            ].map((item, i) => (
              <div
                key={i}
                className={`glass rounded-2xl p-6 card-hover group cursor-default ${
                  i === 1 ? "translate-y-6" : i === 3 ? "translate-y-6" : ""
                }`}
              >
                <div className={`w-12 h-12 rounded-xl bg-${item.color}-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{item.label}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Stats Section ─── */
function StatsSection() {
  return (
    <section className="relative -mt-1 z-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="bg-gradient-to-r from-medical-600 via-medical-500 to-ocean-600 rounded-2xl shadow-2xl shadow-medical-500/20 py-5 px-4 md:p-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {STATS.map((stat, i) => {
              const [count, ref] = useCounter(stat.value);
              return (
                <div key={i} ref={ref} className="text-center">
                  <div className="stat-number text-white">
                    {count.toLocaleString()}{stat.suffix}
                  </div>
                  <p className="text-medical-100 mt-0.5 md:mt-1 text-xs md:text-base font-medium">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Services Section ─── */
function ServicesSection() {
  const [ref, isVisible] = useScrollAnimation();
  const serviceIcons = {
    "Siren": Zap,
    "Microscope": Activity,
    "HeartPulse": HeartPulse,
    "Scissors": Shield,
    "Baby": Baby,
    "Dumbbell": TrendingUp,
  };

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="section-title">
            Comprehensive <span className="gradient-text">Healthcare</span> Services
          </h2>
          <p className="section-subtitle">
            From emergency care to advanced surgeries, we provide a complete range of 
            medical services under one roof.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, i) => {
            const IconComp = serviceIcons[service.icon] || Stethoscope;
            return (
              <Card
                key={service.id}
                className={`group overflow-hidden border border-gray-100/80 bg-white hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)] hover:-translate-y-2 rounded-[2rem] transition-all duration-500 relative flex flex-col h-full ${
                  isVisible ? "animate-slide-up opacity-0" : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {/* Ambient Glow Backdrop */}
                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-gradient-to-br from-medical-500/10 to-ocean-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700 pointer-events-none group-hover:scale-125"></div>
                
                <CardContent className="p-6 sm:p-8 flex flex-col h-full justify-between relative z-10">
                  <div>
                    {/* Floating Icon Container */}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-medical-50 to-ocean-50/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:from-medical-500 group-hover:to-ocean-500 transition-all duration-500 shadow-sm group-hover:shadow-lg group-hover:shadow-medical-500/25 relative overflow-hidden">
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <IconComp className="w-7 h-7 text-medical-600 group-hover:text-white transition-colors duration-500 relative z-10" />
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold font-display text-gray-900 group-hover:text-medical-600 transition-colors duration-300 mb-2">
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
                        <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-gray-600 bg-gray-50/80 hover:bg-medical-50/80 hover:text-medical-700 px-3 py-2.5 rounded-xl transition-all duration-300 border border-gray-100/50 hover:border-medical-100/50">
                          <CheckCircle2 className="w-3.5 h-3.5 text-medical-500 shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>

                    {/* Explore Link */}
                    <Link 
                      to={`/services/${service.title.toLowerCase().replace(/[^a-z0-9]+/g, '')}`}
                      className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between group/link"
                    >
                      <span className="text-xs font-bold text-gray-400 group-hover:text-medical-600 transition-colors duration-300">Explore Service</span>
                      <div className="w-8 h-8 rounded-full bg-gray-50 group-hover:bg-medical-50 text-gray-400 group-hover:text-medical-600 flex items-center justify-center transition-all duration-300 transform group-hover:translate-x-1 shadow-sm">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link to="/services">
            <Button size="lg" variant="outline" className="h-auto py-2.5 px-5 md:py-3 md:px-8 text-xs md:text-sm gap-2 group">
              View All Services
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Doctors Section ─── */
function DoctorsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className={`relative bg-ocean-500 rounded-2xl md:rounded-[2rem] px-8 md:px-16 pt-12 pb-0 lg:py-20 shadow-xl overflow-visible flex flex-col lg:flex-row items-center justify-between ${
          isVisible ? "animate-fade-in opacity-0" : "opacity-0"
        }`}>
          
          {/* Text Content */}
          <div className="relative z-10 lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-display text-white mb-4">
              Meet Our Specialist Doctors
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-8 font-medium">
              Our Experienced Medical Team: Your Partners in Health
            </p>
            <Link to="/doctors">
              <Button className="bg-white text-medical-600 hover:bg-gray-50 text-base md:text-lg px-8 py-6 rounded-xl font-bold shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
                <span className="text-red-600">Meet Our Team</span>
              </Button>
            </Link>
          </div>
          
          {/* Image */}
          <div className="lg:absolute lg:bottom-0 lg:right-4 w-full lg:w-1/2 max-w-lg mx-auto pointer-events-none flex justify-center lg:block mt-8 lg:mt-0">
            <img 
              src="/images/doctors_team_cutout.png" 
              alt="Specialist Doctors Team" 
              className="w-full h-auto object-contain drop-shadow-2xl lg:scale-[1.2] origin-bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Testimonials Section ─── */
function TestimonialsSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <Badge variant="emerald" className="mb-4">Testimonials</Badge>
          <h2 className="section-title">
            What Our <span className="gradient-text">Patients</span> Say
          </h2>
          <p className="section-subtitle">
            Real stories from real patients who trusted us with their health.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {TESTIMONIALS.slice(0, 4).map((testimonial, i) => (
            <div 
              key={testimonial.id} 
              className={`bg-gradient-to-br from-white to-medical-50/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-medical-200 ${
                isVisible ? "animate-scale-in opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-1 mb-5">
                {[...Array(Math.floor(testimonial.rating))].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                   <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 opacity-50" />
                )}
              </div>
              
              <p className="text-gray-700 text-sm md:text-lg leading-relaxed italic mb-6 min-h-[120px]">
                "{testimonial.content}"
              </p>
              
              <hr className="border-medical-200 mb-6" />
              
              <h4 className="font-bold font-display text-gray-900 text-lg">{testimonial.name}</h4>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/testimonials">
            <Button size="lg" variant="outline" className="h-auto py-2.5 px-5 md:py-3 md:px-8 text-xs md:text-sm gap-2 group shadow-sm bg-white hover:bg-gray-50">
              View More Feedback
              <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─── Why Choose Us Section ─── */
function WhyChooseSection() {
  const [ref, isVisible] = useScrollAnimation();
  const reasons = [
    { icon: Shield, title: "Trusted by 50,000+", desc: "Patients trust us for quality healthcare and compassionate service." },
    { icon: Award, title: "NABH Accredited", desc: "Highest quality standards in patient safety and healthcare delivery." },
    { icon: Clock, title: "24/7 Emergency", desc: "Round-the-clock emergency services with rapid response time." },
    { icon: Users, title: "120+ Specialists", desc: "Expert doctors across 30+ departments and specializations." },
    { icon: HeartPulse, title: "Advanced Technology", desc: "State-of-the-art equipment including robotic surgery and AI diagnostics." },
    { icon: Stethoscope, title: "Personalized Care", desc: "Individual treatment plans tailored to each patient's unique needs." },
  ];

  return (
    <section ref={ref} className="section-padding relative overflow-hidden bg-gray-50">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -right-[5%] w-[40%] h-[40%] bg-gradient-to-br from-medical-100/40 to-ocean-100/40 rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-[10%] -left-[5%] w-[40%] h-[40%] bg-gradient-to-tr from-coral-100/30 to-medical-100/30 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="coral" className="mb-4">Why Choose Us</Badge>
          <h2 className="section-title">
            Why <span className="gradient-text">MediCare</span> Hospital?
          </h2>
          <p className="section-subtitle">
            We combine medical excellence with compassionate care to deliver 
            the best healthcare experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, i) => (
            <div
              key={i}
              className={`group cursor-pointer rounded-[2rem] bg-white p-8 border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(13,148,136,0.12)] hover:-translate-y-2 transition-all duration-500 overflow-hidden relative ${
                isVisible ? "animate-fade-in opacity-0" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Internal Ambient Glow */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br from-medical-400/10 to-ocean-400/10 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

              {/* Number Watermark */}
              <div className="absolute -bottom-4 -right-2 text-[8rem] leading-none font-black text-gray-50/80 group-hover:text-medical-50/50 transition-colors duration-500 pointer-events-none select-none font-display">
                {(i + 1).toString().padStart(2, '0')}
              </div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center shrink-0 mb-6 group-hover:from-medical-50 group-hover:to-ocean-50 transition-colors duration-500 shadow-sm border border-gray-100/50 group-hover:border-medical-100">
                <reason.icon className="w-7 h-7 text-gray-400 group-hover:text-medical-600 group-hover:rotate-6 transition-all duration-500" />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2 md:mb-3 group-hover:text-medical-700 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-sm md:text-base leading-relaxed group-hover:text-gray-600 transition-colors duration-300">
                  {reason.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── FAQ Section ─── */
function FAQSection() {
  const [ref, isVisible] = useScrollAnimation();

  return (
    <section ref={ref} className="section-padding bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={isVisible ? "animate-fade-in-left opacity-0" : "opacity-0"}>
            <Badge className="mb-4">FAQ</Badge>
            <h2 className="section-title mb-4">
              Frequently Asked<br />
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-lg leading-relaxed mb-8">
              Find answers to common questions about our hospital, services, 
              appointments, and more. Can't find what you're looking for? Contact us directly.
            </p>
            <Link to="/contact">
              <Button size="lg" className="gap-2 group">
                Contact Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>

          <div className={isVisible ? "animate-fade-in-right opacity-0" : "opacity-0"}>
            <Accordion type="single" collapsible className="bg-white rounded-2xl shadow-sm p-6">
              {FAQ_DATA.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-left text-gray-900">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}



/* ─── Main HomePage ─── */
export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <ServicesSection />
      <DoctorsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <FAQSection />
    </>
  );
}
