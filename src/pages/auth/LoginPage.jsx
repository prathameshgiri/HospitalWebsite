import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { Heart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { HOSPITAL_NAME } from "../../lib/constants";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#b3e5fc]/50 via-white to-white flex flex-col items-center pt-20 px-4">
      {/* Container */}
      <div className="w-full max-w-[400px]">
        {/* Title */}
        <h1 className="text-4xl text-slate-800 mb-2">Sign in</h1>
        <p className="text-slate-600 mb-8">Welcome back. Please sign in to continue.</p>

        {/* Google Button */}
        <Button className="w-full bg-[#1a4b8c] hover:bg-[#13386b] text-white py-6 rounded-xl text-lg font-medium flex items-center justify-center gap-3 mb-6 shadow-sm hover:shadow-md transition-all">
          <FaGoogle className="w-5 h-5" />
          Continue with Google
        </Button>

        {/* Or */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-px bg-slate-200 flex-1"></div>
          <span className="text-slate-500 text-sm">or</span>
          <div className="h-px bg-slate-200 flex-1"></div>
        </div>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 mb-2">Email</label>
            <Input 
              type="email" 
              className="w-full border-blue-500 focus:border-blue-600 focus:ring-blue-600 py-6 rounded-xl"
            />
          </div>
          <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-6 rounded-xl text-lg font-medium shadow-sm transition-all">
            Continue with Email
          </Button>
        </div>

        <div className="mt-6 space-y-3">
          <p className="text-slate-600 text-sm">
            Don't have an account? <Link to="/signup" className="text-blue-500 hover:underline">Sign up</Link>
          </p>
          <p>
            <a href="#" className="text-blue-500 hover:underline text-sm">Continue with Single Sign On (SSO)</a>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 mt-12 mb-16 leading-relaxed">
          By signing in to {HOSPITAL_NAME} you acknowledge that you agree to {HOSPITAL_NAME}'s <a href="#" className="underline hover:text-slate-700">Terms of Service</a> and <a href="#" className="underline hover:text-slate-700">Privacy Policy</a>.
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
