import { useParams, Link } from "react-router-dom";
import { DOCTORS } from "../../lib/constants";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  Star, Calendar, ArrowLeft, Clock, Award, Users, GraduationCap, MapPin, CheckCircle2
} from "lucide-react";

export default function DoctorProfilePage() {
  const { id } = useParams();
  const doctor = DOCTORS.find((d) => d.id === parseInt(id));

  if (!doctor) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Doctor Not Found</h2>
        <p className="text-gray-500 mb-6">The doctor profile you are looking for does not exist.</p>
        <Link to="/doctors">
          <Button className="gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Doctors
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header/Hero Area */}
      <section className="relative pt-20 pb-32 bg-gradient-to-br from-slate-900 via-medical-950 to-ocean-950 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-10 mix-blend-overlay"></div>
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-medical-500/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-ocean-500/20 rounded-full blur-[100px] animate-pulse animation-delay-1000"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <Link to="/doctors" className="inline-flex items-center gap-2 text-medical-200 hover:text-white transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-semibold">Back to all Doctors</span>
          </Link>
        </div>
      </section>

      {/* Main Profile Content */}
      <section className="container mx-auto px-4 md:px-6 -mt-24 relative z-20">
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          
          {/* Left Column - Profile Card */}
          <div className="lg:col-span-1 lg:sticky lg:top-24">
            <Card className="rounded-[2rem] border-0 shadow-2xl overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="h-32 bg-gradient-to-r from-medical-500 to-ocean-500 relative">
                   <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md ${doctor.available
                      ? "bg-white text-emerald-600"
                      : "bg-white/90 text-gray-500"
                    }`}>
                    <span className={`w-2 h-2 rounded-full ${doctor.available ? "bg-emerald-500 animate-pulse-soft" : "bg-gray-400"}`}></span>
                    {doctor.available ? "Available" : "On Leave"}
                  </div>
                </div>
                
                <div className="px-8 pb-8 relative text-center">
                  <div className="flex justify-center -mt-20 mb-4 relative z-10">
                    <div className="w-40 h-40 rounded-full shadow-xl bg-white border-4 border-white overflow-hidden">
                      <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <Badge variant="emerald" className="mb-3">{doctor.specialization}</Badge>
                  <h1 className="text-2xl md:text-3xl font-bold font-display text-gray-900 mb-1">{doctor.name}</h1>
                  <p className="text-gray-500 text-sm font-medium bg-gray-50 inline-block px-3 py-1 rounded-lg border border-gray-100 mb-6">{doctor.qualification}</p>
                  
                  <div className="grid grid-cols-2 gap-4 border-t border-b border-gray-100 py-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                        <Star className="w-5 h-5 fill-current" />
                        <span className="font-bold text-gray-900 text-lg">{doctor.rating}</span>
                      </div>
                      <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Rating</span>
                    </div>
                    <div className="text-center border-l border-gray-100">
                      <div className="flex items-center justify-center gap-1 text-medical-600 mb-1">
                        <Users className="w-5 h-5" />
                        <span className="font-bold text-gray-900 text-lg">{(doctor.patients / 1000).toFixed(1)}K+</span>
                      </div>
                      <span className="text-gray-400 text-xs uppercase tracking-wider font-semibold">Patients</span>
                    </div>
                  </div>

                  <Link to="/appointment">
                    <Button size="xl" className="w-full text-base font-bold bg-medical-600 hover:bg-medical-700 text-white shadow-lg shadow-medical-500/30 gap-2" disabled={!doctor.available}>
                      <Calendar className="w-5 h-5" />
                      Book Appointment
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <Card className="rounded-3xl border border-gray-100 shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-4 flex items-center gap-2">
                  <Award className="w-6 h-6 text-medical-500" />
                  About Doctor
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {doctor.bio || `${doctor.name} is a highly experienced specialist in ${doctor.specialization} with over ${doctor.experience} of dedicated medical practice. They are committed to providing the best healthcare solutions and compassionate care to all patients.`}
                </p>
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mt-6 pt-6 border-t border-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                      <Clock className="w-5 h-5 text-emerald-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Experience</p>
                      <p className="font-bold text-gray-900">{doctor.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-medical-50 flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 text-medical-600" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold">Location</p>
                      <p className="font-bold text-gray-900">Main Hospital Building</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education & Qualifications */}
            <Card className="rounded-3xl border border-gray-100 shadow-sm bg-white">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-6 flex items-center gap-2">
                  <GraduationCap className="w-6 h-6 text-ocean-500" />
                  Education & Qualifications
                </h3>
                <div className="space-y-6">
                  {doctor.education ? (
                    doctor.education.map((edu, idx) => (
                      <div key={idx} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-ocean-500 ring-4 ring-ocean-50 mt-1.5"></div>
                          {idx !== doctor.education.length - 1 && <div className="w-px h-full bg-gray-100 mt-2"></div>}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">{edu.degree}</h4>
                          <p className="text-gray-500 text-sm">{edu.institution}</p>
                          <p className="text-medical-600 text-xs font-semibold mt-1">{edu.year}</p>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-3 h-3 rounded-full bg-ocean-500 ring-4 ring-ocean-50 mt-1.5"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 text-base">{doctor.qualification}</h4>
                          <p className="text-gray-500 text-sm">Top Medical University</p>
                        </div>
                      </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Schedule */}
            <Card className="rounded-3xl border border-gray-100 shadow-sm bg-white bg-gradient-to-br from-white to-gray-50/50">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold font-display text-gray-900 mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-medical-500" />
                  Working Schedule
                </h3>
                <div className="flex items-center gap-4 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-medical-50 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-medical-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-base">{doctor.schedule || "Mon - Sat: 9:00 AM - 5:00 PM"}</p>
                    <p className="text-gray-500 text-sm mt-0.5">Walk-ins and appointments accepted</p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
