Build a production-grade Hospital Management System (HMS) for a private hospital.

Do not create a demo project.

Build a real-world scalable SaaS-quality application with clean architecture, reusable components, secure authentication, proper database relationships, audit logs, role-based permissions, and professional UI/UX.

Technology Stack

Frontend:

React.js
Vite
Tailwind CSS
ShadCN UI
React Router
React Query

Backend:

Node.js
Express.js

Database:

Supabase PostgreSQL

Authentication:

JWT
Refresh Tokens
Role Based Access Control

Email:

Nodemailer

Deployment:

Netlify (Frontend)
Node Backend ready for VPS/Render/Railway deployment
PHASE 1
Public Hospital Website

Create a modern responsive website.

Pages:

Home
About
Services
Doctors
Facilities
Contact
Appointment Booking
Emergency Contact

Features:

SEO Optimized
Mobile Responsive
Fast Loading
Contact Form
Appointment Form
Google Maps Section
Testimonials
FAQ
PHASE 2
Authentication System

Create secure login system.

Roles:

Super Admin

Full Access

Doctor

Medical Access Only

Reception Staff

Patient and Appointment Access

Nurse

Assigned Patient Access

Accountant

Payment Access

HR

Employee Access

Each role must have separate dashboard and permissions.

Unauthorized access must be blocked.

PHASE 3
Patient Management System

Patient Registration

Fields:

UHID Auto Generated
Patient Name
Age
Gender
Blood Group
Phone
Alternate Phone
Email
Address
Aadhaar Number
Emergency Contact
Allergies
Medical History

Functions:

Add Patient
Edit Patient
Search Patient
Delete Patient
View History

Patient profile should contain complete timeline.

PHASE 4
Doctor Consultation Module

Doctor can:

Open Patient
Add Consultation
Add Symptoms
Add Diagnosis
Add Prescription
Upload Reports
Add Notes

Everything should be stored permanently.

PHASE 5
Diagnosis Management

Create Diagnosis Master Database.

Doctor should see:

Searchable Dropdown

Examples:

Fever
Malaria
Dengue
Diabetes
Hypertension

Search while typing.

If diagnosis not found:

Show:

Add New Diagnosis

New diagnosis becomes available globally.

Store:

Diagnosis Name
ICD Code
Description
PHASE 6
Prescription Engine

Create advanced prescription builder.

Medicine field must support:

Autocomplete Search

Examples:

Paracetamol
Azithromycin
Pantoprazole

If medicine not found:

Show:

Add New Medicine

Store:

Generic Name
Brand Name
Strength
Form

Doctor selects:

Medicine
Morning
Afternoon
Evening
Night
Before Food
After Food
Duration
Instructions

Generate:

Professional Prescription PDF

PHASE 7
Appointment Management

Patients can book appointments online.

Workflow:

Appointment Created

↓

Reception Dashboard

↓

Approve/Reject

↓

Doctor Dashboard

↓

Patient Notification

Statuses:

Pending
Confirmed
Checked In
In Consultation
Completed
Cancelled
PHASE 8
Employee Management

Manage:

Doctors
Nurses
Receptionists
Accountants
HR

Fields:

Employee ID
Name
Department
Salary
Joining Date
Documents

Features:

Attendance
Leave Requests
Shift Management
PHASE 9
Attendance Portal

Every employee can:

Login
Mark Present
Mark Check-In
Mark Check-Out

Admin can view:

Daily Attendance
Monthly Attendance
Late Entries
Absentees
PHASE 10
Payment Tracking

Track:

Consultation Fees

Tests

Medicines

Procedures

Statuses:

Paid
Unpaid
Partially Paid

Generate:

Invoice PDF
Payment Receipt PDF

Dashboard:

Daily Revenue
Weekly Revenue
Monthly Revenue
Outstanding Payments
PHASE 11
Email Automation

Using Nodemailer.

Whenever doctor saves consultation:

Send email automatically.

Email includes:

Patient Name
Diagnosis
Prescription
Consultation Summary

Recipients:

Doctor
Reception
Hospital Admin

Attach PDF Prescription.

PHASE 12
Notification Center

Create real-time notifications.

Examples:

New Appointment
New Patient
Prescription Created
Payment Received
Employee Leave Request

Notifications visible in dashboard.

PHASE 13
Audit Logs

Track every action.

Store:

User
Action
Time
IP
Device

Examples:

Patient Created
Patient Updated
Appointment Approved
Prescription Generated

No data should be deleted permanently.

Use soft delete.

PHASE 14
Reports

Generate:

Patient Reports

Doctor Reports

Appointment Reports

Revenue Reports

Attendance Reports

Medicine Reports

Export:

PDF
Excel
PHASE 15
Admin Dashboard

Dashboard Cards:

Total Patients
Today's Patients
Active Doctors
Active Employees
Appointments
Revenue

Charts:

Revenue Trend
Patient Trend
Appointment Trend
PHASE 16
Database Design

Design complete Supabase schema.

Create tables:

users

roles

employees

doctors

patients

appointments

consultations

diagnoses

medicines

prescriptions

prescription_items

payments

attendance

leaves

notifications

activity_logs

email_logs

reports

documents

Create all foreign keys.

Create indexes.

Optimize queries.

PHASE 17
Security

Implement:

JWT Authentication
Password Hashing
Rate Limiting
Input Sanitization
SQL Injection Protection
XSS Protection
CSRF Protection
Secure Cookies
RBAC

Hospital data must remain secure.

PHASE 18
Deliverables

Generate:

Complete Folder Structure
Database Schema
ER Diagram
API Documentation
Backend APIs
Frontend Pages
Dashboard Layouts
Role Permissions Matrix
Deployment Guide
Environment Variables
Production Setup
Sample Seed Data
README Documentation