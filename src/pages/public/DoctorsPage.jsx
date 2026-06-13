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

const allDoctors = [
  ...DOCTORS,
  {
    id: 7, name: "Dr. Amit Joshi", specialization: "Dermatology",
    qualification: "MBBS, MD Dermatology", experience: "14 years",
    image: "/images/avatars/doctor_amit_1781333867925.png", rating: 4.7, patients: 7500, available: true,
  },
  {
    id: 8, name: "Dr. Kavitha Rao", specialization: "ENT",
    qualification: "MBBS, MS ENT", experience: "11 years",
    image: "/images/avatars/doctor_kavitha_1781333881064.png", rating: 4.8, patients: 6000, available: true,
  },
  {
    id: 9, name: "Dr. Sanjay Gupta", specialization: "Dental",
    qualification: "BDS, MDS Orthodontics", experience: "13 years",
    image: "/images/avatars/doctor_sanjay_1781333893082.png", rating: 4.9, patients: 9000, available: false,
  },
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDept, setSelectedDept] = useState("All");

  const filteredDoctors = allDoctors.filter((doc) => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.specialization.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = selectedDept === "All" || doc.specialization === selectedDept;
    return matchesSearch && matchesDept;
  });

  const departments = ["All", ...new Set(allDoctors.map(d => d.specialization))];

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
      <section className="py-8 bg-white border-b sticky top-20 z-30 backdrop-blur-xl bg-white/90">
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
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedDept === dept
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
                <Card key={doctor.id} className="card-hover group overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-56 bg-gradient-to-br from-medical-100 via-ocean-50 to-emerald-50 flex items-center justify-center overflow-hidden">
                      <div className="w-32 h-32 rounded-full shadow-xl group-hover:scale-110 transition-transform duration-500 overflow-hidden bg-white border-4 border-white">
                        <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                      </div>
                      <div className={`absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold ${
                        doctor.available
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-100 text-gray-500"
                      }`}>
                        <span className={`w-2 h-2 rounded-full ${doctor.available ? "bg-emerald-500 animate-pulse-soft" : "bg-gray-400"}`}></span>
                        {doctor.available ? "Available Today" : "On Leave"}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold font-display text-gray-900">{doctor.name}</h3>
                      <p className="text-medical-600 font-semibold text-sm mt-1">{doctor.specialization}</p>
                      <p className="text-gray-400 text-xs mt-1">{doctor.qualification}</p>

                      <div className="grid grid-cols-3 gap-3 mt-5">
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="flex items-center justify-center gap-1 text-yellow-500 mb-1">
                            <Star className="w-4 h-4 fill-current" />
                            <span className="font-bold text-gray-900 text-sm">{doctor.rating}</span>
                          </div>
                          <span className="text-gray-400 text-xs">Rating</span>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="font-bold text-gray-900 text-sm mb-1">{doctor.experience}</div>
                          <span className="text-gray-400 text-xs">Experience</span>
                        </div>
                        <div className="text-center p-2 bg-gray-50 rounded-lg">
                          <div className="font-bold text-gray-900 text-sm mb-1">{(doctor.patients / 1000).toFixed(0)}K+</div>
                          <span className="text-gray-400 text-xs">Patients</span>
                        </div>
                      </div>

                      <Link to="/appointment" className="block mt-5">
                        <Button className="w-full gap-2 group/btn" disabled={!doctor.available}>
                          <Calendar className="w-4 h-4" />
                          {doctor.available ? "Book Appointment" : "Currently Unavailable"}
                        </Button>
                      </Link>
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
