import { useState } from "react";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Textarea } from "../../components/ui/textarea";
import {
  Calendar, Clock, User, Phone, Mail, ArrowRight, ArrowLeft,
  CheckCircle, Stethoscope, CalendarDays, FileText
} from "lucide-react";
import { DOCTORS, DEPARTMENTS } from "../../lib/constants";

const timeSlots = [
  "09:00 AM", "09:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM", "02:00 PM",
  "02:30 PM", "03:00 PM", "03:30 PM", "04:00 PM",
  "04:30 PM", "05:00 PM", "05:30 PM", "06:00 PM",
];

const steps = [
  { id: 1, title: "Department", icon: Stethoscope },
  { id: 2, title: "Doctor", icon: User },
  { id: 3, title: "Date & Time", icon: CalendarDays },
  { id: 4, title: "Details", icon: FileText },
];

export default function AppointmentPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    department: "", doctor: "", date: "", time: "",
    name: "", phone: "", email: "", reason: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const filteredDoctors = formData.department
    ? DOCTORS.filter((d) => d.specialization === formData.department || formData.department === "")
    : DOCTORS;

  const getTomorrow = () => {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return d.toISOString().split("T")[0];
  };

  if (submitted) {
    return (
      <section className="min-h-[70vh] flex items-center justify-center py-20">
        <div className="text-center max-w-lg mx-auto px-4 animate-scale-in">
          <div className="w-24 h-24 mx-auto rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <CheckCircle className="w-12 h-12 text-emerald-500" />
          </div>
          <h1 className="text-3xl font-bold font-display text-gray-900 mb-4">
            Appointment Booked!
          </h1>
          <p className="text-gray-500 text-lg mb-4">
            Your appointment has been submitted successfully. Our reception team will 
            confirm it shortly.
          </p>
          <Card className="text-left mb-8">
            <CardContent className="p-6 space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-gray-500">Department</span><span className="font-medium">{formData.department}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Doctor</span><span className="font-medium">{formData.doctor || "Any Available"}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Date</span><span className="font-medium">{formData.date}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Time</span><span className="font-medium">{formData.time}</span></div>
              <div className="flex justify-between"><span className="text-gray-500">Patient</span><span className="font-medium">{formData.name}</span></div>
            </CardContent>
          </Card>
          <Button onClick={() => { setSubmitted(false); setCurrentStep(1); setFormData({ department: "", doctor: "", date: "", time: "", name: "", phone: "", email: "", reason: "" }); }} variant="outline">
            Book Another Appointment
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-20 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-medical-50 via-white to-ocean-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Badge className="mb-4">Appointment</Badge>
          <h1 className="text-3xl md:text-5xl font-bold font-display text-gray-900 leading-tight">
            Book Your <span className="gradient-text">Appointment</span>
          </h1>
          <p className="text-sm md:text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            Schedule a visit with our specialist doctors in just a few simple steps.
          </p>
        </div>
      </section>

      {/* Multi-Step Form */}
      <section className="section-padding bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-3xl">
          {/* Step Indicator */}
          <div className="flex items-center justify-between mb-12">
            {steps.map((step, i) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 md:w-12 md:h-12 rounded-lg md:rounded-xl flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    currentStep >= step.id
                      ? "bg-gradient-to-br from-medical-500 to-medical-600 text-white shadow-lg shadow-medical-500/25"
                      : "bg-gray-100 text-gray-400"
                  }`}>
                    {currentStep > step.id ? (
                      <CheckCircle className="w-4 h-4 md:w-6 md:h-6" />
                    ) : (
                      <step.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                    )}
                  </div>
                  <span className={`text-[10px] md:text-xs mt-1 md:mt-2 font-medium hidden sm:block ${
                    currentStep >= step.id ? "text-medical-600" : "text-gray-400"
                  }`}>
                    {step.title}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`flex-1 h-0.5 md:h-1 mx-1 md:mx-3 rounded-full transition-all duration-500 ${
                    currentStep > step.id ? "bg-medical-500" : "bg-gray-200"
                  }`}></div>
                )}
              </div>
            ))}
          </div>

          {/* Step Content */}
          <form onSubmit={handleSubmit}>
            {/* Step 1: Department */}
            {currentStep === 1 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">Select Department</h2>
                <p className="text-gray-500 mb-8">Choose the department for your consultation.</p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {DEPARTMENTS.slice(0, 12).map((dept) => (
                    <button
                      key={dept.id}
                      type="button"
                      onClick={() => handleChange("department", dept.name)}
                      className={`p-3 md:p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        formData.department === dept.name
                          ? "border-medical-500 bg-medical-50 shadow-lg shadow-medical-500/10"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <h4 className={`font-semibold text-xs md:text-sm ${
                        formData.department === dept.name ? "text-medical-600" : "text-gray-700"
                      }`}>
                        {dept.name}
                      </h4>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Doctor */}
            {currentStep === 2 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">Select Doctor</h2>
                <p className="text-gray-500 mb-8">Choose your preferred doctor (optional).</p>
                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={() => handleChange("doctor", "")}
                    className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                      formData.doctor === ""
                        ? "border-medical-500 bg-medical-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <h4 className="font-semibold text-gray-700">Any Available Doctor</h4>
                    <p className="text-gray-400 text-sm">We'll assign the best available doctor</p>
                  </button>
                  {filteredDoctors.filter(d => d.available).map((doc) => (
                    <button
                      key={doc.id}
                      type="button"
                      onClick={() => handleChange("doctor", doc.name)}
                      className={`w-full p-3 md:p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-3 md:gap-4 ${
                        formData.doctor === doc.name
                          ? "border-medical-500 bg-medical-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-medical-400 to-medical-600 flex items-center justify-center text-white font-bold shrink-0 text-xs md:text-base">
                        {doc.name.split(" ").slice(1).map(n => n[0]).join("")}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-gray-700 text-sm md:text-base truncate">{doc.name}</h4>
                        <p className="text-gray-400 text-xs md:text-sm truncate">{doc.specialization} · {doc.experience}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1 shrink-0">
                        <span className="text-yellow-500 text-xs md:text-sm">★</span>
                        <span className="font-semibold text-xs md:text-sm">{doc.rating}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Date & Time */}
            {currentStep === 3 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">Select Date & Time</h2>
                <p className="text-gray-500 mb-8">Pick your preferred date and time slot.</p>
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <CalendarDays className="w-4 h-4 inline mr-2" />
                      Preferred Date
                    </label>
                    <Input
                      type="date"
                      min={getTomorrow()}
                      value={formData.date}
                      onChange={(e) => handleChange("date", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <Clock className="w-4 h-4 inline mr-2" />
                      Available Time Slots
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 md:gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => handleChange("time", slot)}
                          className={`py-2 md:py-3 px-1 md:px-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-200 ${
                            formData.time === slot
                              ? "bg-medical-500 text-white shadow-lg shadow-medical-500/25"
                              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 4: Patient Details */}
            {currentStep === 4 && (
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold font-display text-gray-900 mb-2">Patient Details</h2>
                <p className="text-gray-500 mb-8">Please provide your personal information.</p>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      required
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => handleChange("phone", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <Input
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Reason for Visit</label>
                    <Textarea
                      name="reason"
                      placeholder="Briefly describe your symptoms or reason..."
                      value={formData.reason}
                      onChange={(e) => handleChange("reason", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-10 pt-6 border-t">
              {currentStep > 1 ? (
                <Button type="button" variant="outline" onClick={prevStep} className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Previous
                </Button>
              ) : (
                <div></div>
              )}
              {currentStep < 4 ? (
                <Button type="button" onClick={nextStep} className="gap-2">
                  Next Step
                  <ArrowRight className="w-4 h-4" />
                </Button>
              ) : (
                <Button type="submit" size="lg" className="gap-2">
                  <Calendar className="w-5 h-5" />
                  Confirm Appointment
                </Button>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
