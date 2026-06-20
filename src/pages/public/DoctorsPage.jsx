import { useState } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../components/ui/badge";
import { Card, CardContent } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import {
  Star, Calendar, ArrowRight, Search, Filter,
  Clock, Users, Award, MapPin
} from "lucide-react";
import { DOCTORS, DEPARTMENTS } from "../../lib/constants";

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredDoctors = DOCTORS.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || doc.specialization === selectedDept;
    return matchesSearch && matchesDept;
  });

  const departments = ["All", ...new Set(DOCTORS.map(d => d.specialization))];

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-medical-50/30"></div>
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <Badge variant="emerald" className="mb-4 animate-fade-in">Our Doctors</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-gray-900 leading-tight animate-fade-in animation-delay-200">
            Meet Our <span className="gradient-text">Expert</span> Doctors
          </h1>
          <p className="text-lg text-gray-500 mt-6 max-w-2xl mx-auto animate-fade-in animation-delay-400">
            Our team of highly qualified specialists brings decades of combined experience
            to deliver exceptional medical care.
          </p>
        </div>
      </section>

      {/* Search & Filter */}
      <section className="py-8 bg-white border-b relative">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search doctors by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {departments.map((dept) => (
                <button
                  key={dept}
                  onClick={() => setSelectedDept(dept)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${selectedDept === dept
                      ? "bg-medical-500 text-white shadow-lg shadow-medical-500/25"
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                >
                  {dept}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          {filteredDoctors.length === 0 ? (
            <div className="text-center py-20">
              <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-500">No doctors found</h3>
              <p className="text-gray-400 mt-2">Try adjusting your search or filter</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <Card key={doctor.id} className="card-hover group overflow-hidden border-0 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 rounded-3xl bg-white">
                  <CardContent className="p-0">
                    <div className="h-28 bg-gradient-to-r from-medical-500 to-ocean-500 relative">
                      <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold shadow-md ${doctor.available
                          ? "bg-white text-emerald-600"
                          : "bg-white/90 text-gray-500"
                        }`}>
                        <span className={`w-2 h-2 rounded-full ${doctor.available ? "bg-emerald-500 animate-pulse-soft" : "bg-gray-400"}`}></span>
                        {doctor.available ? "Available Today" : "On Leave"}
                      </div>
                    </div>

                    <div className="px-6 pb-6 relative">
                      <div className="flex justify-center -mt-14 mb-4 relative z-10">
                        <div className="w-28 h-28 rounded-full shadow-xl group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-500 overflow-hidden bg-white border-4 border-white">
                          <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                        </div>
                      </div>

                      <div className="text-center">
                        <h3 className="text-xl font-bold font-display text-gray-900 group-hover:text-medical-600 transition-colors">{doctor.name}</h3>
                        <p className="text-medical-600 font-semibold text-sm mt-1">{doctor.specialization}</p>
                        <p className="text-gray-500 text-xs mt-2 font-medium bg-gray-50 inline-block px-3 py-1 rounded-lg border border-gray-100">{doctor.qualification}</p>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mt-6 pt-6 border-t border-gray-100">
                        <div className="text-center">
                          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold text-gray-900 text-sm">{doctor.rating}</span>
                          </div>
                          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Rating</span>
                        </div>
                        <div className="text-center border-l border-r border-gray-100">
                          <div className="font-bold text-gray-900 text-sm mb-1">{doctor.experience.replace(' years', 'y')}</div>
                          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Experience</span>
                        </div>
                        <div className="text-center">
                          <div className="font-bold text-gray-900 text-sm mb-1">{(doctor.patients / 1000).toFixed(1)}K+</div>
                          <span className="text-gray-400 text-[10px] uppercase tracking-wider font-semibold">Patients</span>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 mt-6">
                        <Link to={`/doctors/${doctor.id}`} className="w-full sm:flex-1">
                          <Button variant="outline" className="w-full text-xs font-semibold hover:bg-medical-50 hover:text-medical-600 border-gray-200">
                            View Profile
                          </Button>
                        </Link>
                        <Link to="/appointment" className="w-full sm:flex-1">
                          <Button className="w-full text-xs font-semibold bg-medical-600 hover:bg-medical-700 text-white shadow-md shadow-medical-500/20" disabled={!doctor.available}>
                            Get Appointment
                          </Button>
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
