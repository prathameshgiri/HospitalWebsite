import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Eye, EyeOff } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { HOSPITAL_NAME } from "../../lib/constants";

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#eff4fa] flex flex-col items-center pt-20 px-4">
      {/* Container */}
      <div className="w-full max-w-[400px]">
        {/* Title */}
        <h1 className="text-4xl text-slate-800 mb-2 font-display">Sign up</h1>
        <p className="text-slate-600 mb-8">Create your account to get started.</p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 mb-2">Full Name</label>
            <Input 
              type="text" 
              className="w-full border-[#90b4e8] focus:border-blue-600 focus:ring-blue-600 rounded-lg bg-white"
              placeholder="Name"
            />
          </div>
          <div>
            <label className="block text-slate-700 mb-2">Mobile Number</label>
            <Input 
              type="tel" 
              className="w-full border-[#90b4e8] focus:border-blue-600 focus:ring-blue-600 rounded-lg bg-white"
              placeholder="+91 98765 43210"
            />
          </div>
          <div>
            <label className="block text-slate-700 mb-2">Email</label>
            <Input 
              type="email" 
              className="w-full border-[#90b4e8] focus:border-blue-600 focus:ring-blue-600 rounded-lg bg-white"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-slate-700 mb-2">Password</label>
            <div className="relative group">
              <Input 
                type={showPassword ? "text" : "password"} 
                className="w-full border-[#90b4e8] focus:border-blue-600 focus:ring-blue-600 rounded-lg pr-12 transition-all duration-300 bg-white"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center rounded-full hover:bg-blue-50 text-slate-400 hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500/50 overflow-hidden"
              >
                <div className={`transition-all duration-500 absolute flex items-center justify-center inset-0 transform ${showPassword ? 'scale-100 rotate-0 opacity-100' : 'scale-50 rotate-90 opacity-0'}`}>
                  <EyeOff className="w-4 h-4" />
                </div>
                <div className={`transition-all duration-500 absolute flex items-center justify-center inset-0 transform ${!showPassword ? 'scale-100 rotate-0 opacity-100' : 'scale-50 -rotate-90 opacity-0'}`}>
                  <Eye className="w-4 h-4" />
                </div>
              </button>
            </div>
          </div>
          <div className="pt-2">
            <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all">
              Sign up
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm">
            Already have an account? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Sign in</Link>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 mt-12 mb-16 leading-relaxed text-center">
          By signing up for {HOSPITAL_NAME} you acknowledge that you agree to<br className="hidden sm:block" /> {HOSPITAL_NAME}'s <a href="#" className="underline hover:text-slate-700">Terms of Service</a> and <a href="#" className="underline hover:text-slate-700">Privacy Policy</a>.
        </p>

        {/* Bottom Logo */}
        <div className="flex flex-col items-center pb-8">
          <Link to="/" className="flex items-center gap-2 mb-3 group">
            <div className="w-8 h-8 rounded-lg bg-[#1a4b8c] flex items-center justify-center group-hover:bg-[#13386b] transition-colors">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="font-display font-bold text-xl text-slate-800">{HOSPITAL_NAME}</span>
          </Link>
          <p className="text-xs text-slate-400">© {new Date().getFullYear()} {HOSPITAL_NAME}, Inc.</p>
        </div>
      </div>
    </div>
  );
}
