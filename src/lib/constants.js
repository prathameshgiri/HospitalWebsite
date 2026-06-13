export const HOSPITAL_NAME = "MediCare Hospital";
export const HOSPITAL_TAGLINE = "Your Health, Our Priority";
export const HOSPITAL_PHONE = "+91 98765 43210";
export const HOSPITAL_EMERGENCY = "+91 98765 00000";
export const HOSPITAL_EMAIL = "info@medicarehospital.com";
export const HOSPITAL_ADDRESS = "123 Medical Avenue, Healthcare City, India - 400001";

export const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Doctors", path: "/doctors" },
  { name: "Facilities", path: "/facilities" },
  { name: "Contact", path: "/contact" },
];

export const DEPARTMENTS = [
  { id: 1, name: "General Medicine", icon: "Stethoscope", color: "medical" },
  { id: 2, name: "Cardiology", icon: "Heart", color: "coral" },
  { id: 3, name: "Orthopedics", icon: "Bone", color: "ocean" },
  { id: 4, name: "Pediatrics", icon: "Baby", color: "emerald" },
  { id: 5, name: "Neurology", icon: "Brain", color: "medical" },
  { id: 6, name: "Dermatology", icon: "Scan", color: "coral" },
  { id: 7, name: "Ophthalmology", icon: "Eye", color: "ocean" },
  { id: 8, name: "ENT", icon: "Ear", color: "emerald" },
  { id: 9, name: "Gynecology", icon: "HeartPulse", color: "coral" },
  { id: 10, name: "Dental", icon: "Smile", color: "ocean" },
  { id: 11, name: "Psychiatry", icon: "BrainCircuit", color: "medical" },
  { id: 12, name: "Emergency", icon: "Siren", color: "destructive" },
];

export const SERVICES = [
  {
    id: 1,
    title: "24/7 Emergency Care",
    description: "Round-the-clock emergency services with state-of-the-art trauma center, fully equipped ambulances, and expert emergency physicians.",
    icon: "Siren",
    features: ["Trauma Center", "24/7 Availability", "Air Ambulance", "Quick Response"],
  },
  {
    id: 2,
    title: "Advanced Diagnostics",
    description: "Cutting-edge diagnostic laboratory with MRI, CT Scan, Digital X-Ray, Ultrasound, and comprehensive pathology services.",
    icon: "Microscope",
    features: ["MRI & CT Scan", "Digital X-Ray", "Ultrasound", "Pathology Lab"],
  },
  {
    id: 3,
    title: "Cardiac Sciences",
    description: "Comprehensive cardiac care including angiography, angioplasty, bypass surgery, pacemaker implantation, and cardiac rehabilitation.",
    icon: "HeartPulse",
    features: ["Angiography", "Bypass Surgery", "Pacemaker", "Rehabilitation"],
  },
  {
    id: 4,
    title: "Surgical Excellence",
    description: "Advanced surgical suites with minimally invasive surgery, robotic surgery, laparoscopy, and specialized surgical teams.",
    icon: "Scissors",
    features: ["Robotic Surgery", "Laparoscopy", "Day Care Surgery", "ICU Backup"],
  },
  {
    id: 5,
    title: "Mother & Child Care",
    description: "Complete maternity care from prenatal to postnatal, NICU facility, painless delivery options, and expert pediatric care.",
    icon: "Baby",
    features: ["Painless Delivery", "NICU", "Prenatal Care", "Vaccination"],
  },
  {
    id: 6,
    title: "Physiotherapy & Rehab",
    description: "Comprehensive rehabilitation services with advanced physiotherapy equipment, occupational therapy, and sports injury management.",
    icon: "Dumbbell",
    features: ["Sports Rehab", "Occupational Therapy", "Neuro Rehab", "Pain Management"],
  },
];

export const DOCTORS = [
  {
    id: 1,
    name: "Dr. Rajesh Kumar",
    specialization: "Cardiology",
    qualification: "MBBS, MD, DM Cardiology",
    experience: "18 years",
    image: "/images/avatars/doctor_rajesh_1781333787157.png",
    rating: 4.9,
    patients: 12000,
    available: true,
  },
  {
    id: 2,
    name: "Dr. Priya Sharma",
    specialization: "Neurology",
    qualification: "MBBS, MD, DM Neurology",
    experience: "15 years",
    image: "/images/avatars/doctor_priya_1781333800072.png",
    rating: 4.8,
    patients: 9500,
    available: true,
  },
  {
    id: 3,
    name: "Dr. Arun Patel",
    specialization: "Orthopedics",
    qualification: "MBBS, MS Orthopedics",
    experience: "20 years",
    image: "/images/avatars/doctor_arun_1781333811046.png",
    rating: 4.9,
    patients: 15000,
    available: true,
  },
  {
    id: 4,
    name: "Dr. Sneha Reddy",
    specialization: "Pediatrics",
    qualification: "MBBS, MD Pediatrics",
    experience: "12 years",
    image: "/images/avatars/doctor_sneha_1781333824138.png",
    rating: 4.7,
    patients: 8000,
    available: true,
  },
  {
    id: 5,
    name: "Dr. Vikram Singh",
    specialization: "General Medicine",
    qualification: "MBBS, MD Medicine",
    experience: "22 years",
    image: "/images/avatars/doctor_vikram_1781333843636.png",
    rating: 4.8,
    patients: 20000,
    available: false,
  },
  {
    id: 6,
    name: "Dr. Meera Iyer",
    specialization: "Gynecology",
    qualification: "MBBS, MS OBG, DNB",
    experience: "16 years",
    image: "/images/avatars/doctor_meera_1781333856877.png",
    rating: 4.9,
    patients: 11000,
    available: true,
  },
];

export const FACILITIES = [
  {
    id: 1,
    name: "500+ Bed Capacity",
    description: "Spacious, well-equipped rooms with modern amenities including private, semi-private, and general wards.",
    icon: "BedDouble",
  },
  {
    id: 2,
    name: "Advanced ICU",
    description: "State-of-the-art intensive care units with 24/7 monitoring, ventilator support, and specialized critical care teams.",
    icon: "Monitor",
  },
  {
    id: 3,
    name: "Modern Operation Theaters",
    description: "10 fully equipped modular operation theaters with laminar airflow, HEPA filters, and advanced surgical equipment.",
    icon: "Scissors",
  },
  {
    id: 4,
    name: "24/7 Pharmacy",
    description: "In-house pharmacy open round the clock with complete range of medicines, surgical supplies, and medical equipment.",
    icon: "Pill",
  },
  {
    id: 5,
    name: "Diagnostic Center",
    description: "Complete diagnostic facility with MRI, CT Scan, X-Ray, Ultrasound, ECG, EEG, and pathology laboratory.",
    icon: "Microscope",
  },
  {
    id: 6,
    name: "Blood Bank",
    description: "24/7 blood bank facility with all blood groups available, component separation unit, and blood donation camps.",
    icon: "Droplets",
  },
  {
    id: 7,
    name: "Ambulance Fleet",
    description: "Fleet of advanced life support (ALS) and basic life support (BLS) ambulances with GPS tracking.",
    icon: "Ambulance",
  },
  {
    id: 8,
    name: "Cafeteria & Parking",
    description: "Multi-cuisine cafeteria, spacious parking for 200+ vehicles, wheelchair accessible throughout.",
    icon: "UtensilsCrossed",
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Anita Verma",
    role: "Patient",
    content: "The doctors and staff at MediCare Hospital are incredibly caring. My heart surgery was handled with utmost professionalism. The recovery was smooth and the follow-up care has been excellent.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Mehta",
    role: "Patient's Family",
    content: "When my father needed emergency care at 2 AM, MediCare Hospital responded within minutes. The emergency team saved his life. We are forever grateful to the entire team.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sunita Devi",
    role: "Patient",
    content: "I had my delivery at MediCare and the experience was wonderful. The maternity ward is excellent, nurses were supportive, and Dr. Meera made sure everything went smoothly.",
    rating: 5,
  },
  {
    id: 4,
    name: "Karthik Nair",
    role: "Patient",
    content: "After my knee replacement surgery, the physiotherapy team at MediCare helped me walk again within weeks. Their rehabilitation facility is truly world-class.",
    rating: 5,
  },
  {
    id: 5,
    name: "Vikas Joshi",
    role: "Patient",
    content: "I have been coming here for my regular checkups for the last 5 years. The staff is courteous, the facilities are clean, and the doctors give you enough time.",
    rating: 4,
  },
  {
    id: 6,
    name: "Pooja Desai",
    role: "Patient",
    content: "The pediatric department is fantastic. Dr. Sneha Reddy is very gentle with kids and explains everything perfectly. My daughter loves visiting her.",
    rating: 5,
  },
  {
    id: 7,
    name: "Manoj Singh",
    role: "Patient",
    content: "Excellent diagnostic center. I got all my tests done under one roof and the reports were delivered to my phone the same day. Highly efficient.",
    rating: 4.5,
  },
  {
    id: 8,
    name: "Neha Gupta",
    role: "Patient's Family",
    content: "My mother was admitted in the ICU for a week. The level of care and hygiene maintained there is commendable. The doctors updated us daily about her progress.",
    rating: 5,
  },
];

export const FAQ_DATA = [
  {
    question: "What are the visiting hours?",
    answer: "Regular visiting hours are from 10:00 AM to 12:00 PM and 4:00 PM to 6:00 PM. ICU visiting is allowed for 15 minutes at 11:00 AM and 5:00 PM.",
  },
  {
    question: "How can I book an appointment?",
    answer: "You can book an appointment through our website, by calling our reception at +91 98765 43210, or by visiting the hospital reception desk in person.",
  },
  {
    question: "Do you accept insurance?",
    answer: "Yes, we accept all major health insurance providers including Star Health, ICICI Lombard, HDFC Ergo, New India Assurance, and more. Please contact our billing department for specific queries.",
  },
  {
    question: "Is emergency service available 24/7?",
    answer: "Yes, our emergency department operates 24 hours a day, 7 days a week, 365 days a year. Our emergency number is +91 98765 00000.",
  },
  {
    question: "What documents are needed for admission?",
    answer: "You need a valid photo ID (Aadhaar/PAN/Passport), insurance card (if applicable), referral letter (if any), and previous medical records.",
  },
  {
    question: "Do you have ambulance services?",
    answer: "Yes, we have a fleet of Advanced Life Support (ALS) and Basic Life Support (BLS) ambulances available 24/7 with GPS tracking and trained paramedics.",
  },
];

export const STATS = [
  { label: "Patients Served", value: 50000, suffix: "+" },
  { label: "Expert Doctors", value: 120, suffix: "+" },
  { label: "Years of Excellence", value: 25, suffix: "+" },
  { label: "Departments", value: 30, suffix: "+" },
];

export const ROLES = {
  SUPER_ADMIN: "super_admin",
  DOCTOR: "doctor",
  RECEPTION: "reception",
  NURSE: "nurse",
  ACCOUNTANT: "accountant",
  HR: "hr",
};

export const APPOINTMENT_STATUSES = {
  PENDING: "pending",
  CONFIRMED: "confirmed",
  CHECKED_IN: "checked_in",
  IN_CONSULTATION: "in_consultation",
  COMPLETED: "completed",
  CANCELLED: "cancelled",
};

export const PAYMENT_STATUSES = {
  PAID: "paid",
  UNPAID: "unpaid",
  PARTIALLY_PAID: "partially_paid",
};
