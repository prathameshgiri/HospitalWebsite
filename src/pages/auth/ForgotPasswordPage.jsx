import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { HOSPITAL_NAME } from "../../lib/constants";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-screen bg-[#eff4fa] flex flex-col items-center pt-20 px-4">
      {/* Container */}
      <div className="w-full max-w-[400px]">
        {/* Title */}
        <h1 className="text-4xl text-slate-800 mb-2 font-display">Reset Password</h1>
        <p className="text-slate-600 mb-8">Enter your email address and we'll send you a link to reset your password.</p>

        {/* Form */}
        <div className="space-y-4">
          <div>
            <label className="block text-slate-700 mb-2">Email</label>
            <Input 
              type="email" 
              className="w-full border-[#90b4e8] focus:border-blue-600 focus:ring-blue-600 rounded-lg bg-white"
              placeholder="email@example.com"
            />
          </div>
          <div className="pt-2">
            <Button className="w-full bg-slate-800 hover:bg-slate-900 text-white py-2.5 rounded-lg text-sm font-medium shadow-sm transition-all">
              Send Reset Link
            </Button>
          </div>
        </div>

        <div className="mt-6 text-center">
          <p className="text-slate-600 text-sm">
            Remember your password? <Link to="/login" className="text-blue-600 font-semibold hover:underline">Back to Sign in</Link>
          </p>
        </div>

        {/* Disclaimer */}
        <p className="text-xs text-slate-500 mt-12 mb-16 leading-relaxed text-center">
          By continuing, you agree to {HOSPITAL_NAME}'s <a href="#" className="underline hover:text-slate-700">Terms of Service</a> and <a href="#" className="underline hover:text-slate-700">Privacy Policy</a>.
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
