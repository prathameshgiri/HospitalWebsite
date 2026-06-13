import { Badge } from "../../components/ui/badge";
import { Star, Quote } from "lucide-react";
import { TESTIMONIALS } from "../../lib/constants";

export default function TestimonialsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-medical-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Badge variant="emerald" className="mb-4 animate-fade-in">Patient Feedback</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight animate-fade-in animation-delay-200">
            What Our <span className="gradient-text">Patients</span> Say
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Read all the real stories from real patients who trusted us with their health.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {TESTIMONIALS.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="bg-gradient-to-br from-white to-medical-50/50 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow border border-medical-200 card-hover"
              >
                <div className="flex items-center gap-1 mb-5">
                  {[...Array(Math.floor(testimonial.rating))].map((_, idx) => (
                    <Star key={idx} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                  {testimonial.rating % 1 !== 0 && (
                     <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 opacity-50" />
                  )}
                </div>
                
                <p className="text-gray-700 text-base md:text-lg leading-relaxed italic mb-6 min-h-[120px]">
                  "{testimonial.content}"
                </p>
                
                <hr className="border-medical-200 mb-6" />
                
                <h4 className="font-bold font-display text-gray-900 text-lg">{testimonial.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
