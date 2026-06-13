import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Phone, Mail, MapPin, Clock, Send, CheckCircle,
  MessageSquare, ArrowRight
} from "lucide-react";
import { HOSPITAL_PHONE, HOSPITAL_EMAIL, HOSPITAL_ADDRESS, HOSPITAL_EMERGENCY } from "../../lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    { icon: Phone, label: "Phone", value: HOSPITAL_PHONE, href: `tel:${HOSPITAL_PHONE}`, color: "medical" },
    { icon: Phone, label: "Emergency", value: HOSPITAL_EMERGENCY, href: `tel:${HOSPITAL_EMERGENCY}`, color: "coral" },
    { icon: Mail, label: "Email", value: HOSPITAL_EMAIL, href: `mailto:${HOSPITAL_EMAIL}`, color: "ocean" },
    { icon: MapPin, label: "Address", value: HOSPITAL_ADDRESS, href: "#map", color: "emerald" },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-50 via-white to-ocean-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Badge className="mb-4 animate-fade-in">Contact Us</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight animate-fade-in animation-delay-200">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Have a question or need assistance? We're here to help. Reach out to us through 
            any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactInfo.map((info, i) => (
              <a key={i} href={info.href} className="block">
                <Card className="card-hover h-full">
                  <CardContent className="p-6 text-center">
                    <div className={`w-14 h-14 mx-auto rounded-2xl bg-${info.color}-100 flex items-center justify-center mb-4`}>
                      <info.icon className={`w-7 h-7 text-${info.color}-600`} />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-500 text-sm">{info.value}</p>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
                Send Us a Message
              </h2>
              <p className="text-gray-500 mb-8">
                Fill out the form and our team will get back to you within 24 hours.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-8 text-center">
                  <CheckCircle className="w-16 h-16 text-emerald-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                  <p className="text-gray-500">Thank you for reaching out. We'll respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <Input
                        name="name"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Subject *</label>
                      <Input
                        name="subject"
                        placeholder="How can we help?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <Textarea
                      name="message"
                      placeholder="Write your message here..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="min-h-[150px]"
                    />
                  </div>
                  <Button type="submit" size="lg" className="w-full md:w-auto gap-2">
                    <Send className="w-4 h-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>

            {/* Map */}
            <div id="map" className="space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-2">
                Find Us
              </h2>
              <p className="text-gray-500 mb-4">
                Visit us at our main campus in Healthcare City.
              </p>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.0!2d72.8777!3d19.0760!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA0JzMzLjYiTiA3MsKwNTInMzkuNyJF!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Hospital Location"
                ></iframe>
              </div>

              {/* Working Hours */}
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-medical-600" />
                    <h3 className="font-semibold text-gray-900 text-lg">Working Hours</h3>
                  </div>
                  <div className="space-y-3 text-sm">
                    {[
                      { day: "Monday - Friday", hours: "8:00 AM - 10:00 PM" },
                      { day: "Saturday", hours: "8:00 AM - 8:00 PM" },
                      { day: "Sunday", hours: "9:00 AM - 2:00 PM" },
                      { day: "Emergency", hours: "24/7 Open", highlight: true },
                    ].map((item, i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0">
                        <span className="text-gray-600 font-medium">{item.day}</span>
                        <span className={item.highlight ? "text-emerald-600 font-semibold" : "text-gray-500"}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
