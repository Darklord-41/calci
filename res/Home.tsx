import React from 'react';
import { motion } from 'motion/react';
import { Calculator, Upload, Zap, Shield, ChevronRight, BookOpen, CheckCircle, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="relative p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl group overflow-hidden"
  >
    {/* Corner dots to mimic xAI style */}
    <div className="absolute top-0 left-0 w-1.5 h-1.5 bg-blue-500/40 -translate-x-0.5 -translate-y-0.5" />
    <div className="absolute top-0 right-0 w-1.5 h-1.5 bg-blue-500/40 translate-x-0.5 -translate-y-0.5" />
    <div className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-blue-500/40 -translate-x-0.5 translate-y-0.5" />
    <div className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-blue-500/40 translate-x-0.5 translate-y-0.5" />
    
    <div className="w-12 h-12 rounded-2xl bg-blue-600/10 flex items-center justify-center mb-6 group-hover:bg-blue-600/20 transition-colors border border-blue-500/20">
      <Icon className="text-blue-500" size={24} />
    </div>
    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">{title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed font-medium">{description}</p>
    
    {/* Decorative gradient */}
    <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-blue-500/5 blur-3xl group-hover:bg-blue-500/10 transition-colors" />
  </motion.div>
);

const FaqItem = ({ question, answer }: { question: string, answer: string }) => (
  <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
    <h4 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
      <HelpCircle size={16} className="text-blue-500" />
      {question}
    </h4>
    <p className="text-xs text-gray-500 leading-relaxed font-medium">{answer}</p>
  </div>
);

export const Home = () => {
  return (
    <div className="min-h-screen pt-40 pb-20 px-4">
      <div className="max-w-7xl mx-auto space-y-32">
        {/* Hero Section */}
        <section className="relative text-center space-y-10 max-w-5xl mx-auto">
          {/* Background Decorative Element */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-violet-600/30 blur-[120px] rounded-full scale-75" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold tracking-[0.2em] uppercase mb-4">
              <Zap size={12} />
              The Intelligent Grade Calculator
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-[0.9] mb-8">
              Smarter Result <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600">Calculations.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
              Eliminate manual errors. CALCI uses advanced OCR to parse your result sheets instantly, securely, and entirely in your browser.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
          >
            <Link 
              to="/upload" 
              className="w-full sm:w-auto px-10 py-5 rounded-[24px] bg-white text-black font-black hover:bg-gray-100 transition-all flex items-center justify-center gap-3 group shadow-2xl shadow-white/10"
            >
              <Upload size={22} strokeWidth={2.5} />
              Smart Upload
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/manual" 
              className="w-full sm:w-auto px-10 py-5 rounded-[24px] bg-white/5 border border-white/10 text-white font-black hover:bg-white/10 transition-all flex items-center justify-center gap-3 backdrop-blur-md"
            >
              <Calculator size={22} strokeWidth={2.5} />
              Manual Entry
            </Link>
          </motion.div>

          {/* Hero Image Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="pt-20 px-4"
          >
            <div className="relative mx-auto max-w-5xl rounded-[32px] border border-white/10 bg-black/50 p-3 backdrop-blur-2xl shadow-2xl overflow-hidden">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1760224254228-78ca793b7f6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhYnN0cmFjdCUyMHRlY2hub2xvZ3klMjBiYWNrZ3JvdW5kJTIwZGFyayUyMGJsdWV8ZW58MXx8fHwxNzY5ODQyNjE3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                className="w-full h-[400px] object-cover rounded-[24px] opacity-60"
                alt="Dashboard Preview"
              />
              <motion.div 
                initial={{ top: "0%" }}
                animate={{ top: "100%" }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent z-10 shadow-[0_0_15px_rgba(59,130,246,0.8)]"
              />
              <div className="absolute bottom-10 left-10 right-10 flex flex-col md:flex-row items-end justify-between gap-6">
                <div className="text-left space-y-2">
                  <div className="flex gap-2">
                    <div className="w-12 h-1.5 rounded-full bg-blue-600" />
                    <div className="w-6 h-1.5 rounded-full bg-white/20" />
                  </div>
                  <h3 className="text-2xl font-black text-white">Visual Verification View</h3>
                  <p className="text-gray-400 text-sm max-w-xs font-medium">Compare OCR results side-by-side with your original screenshot.</p>
                </div>
                <div className="flex -space-x-3">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800" />
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-blue-600 flex items-center justify-center text-[10px] font-bold text-white">
                    +1k
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Grid */}
        <section className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-black text-white tracking-tight">Technical Prowess</h2>
            <p className="text-gray-500 font-medium">Engineered for speed, accuracy, and total privacy.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={Zap}
              title="Advanced OCR Engine"
              description="Built on Tesseract.js, CALCI identifies grades and credits across various result formats with intelligent pattern recognition."
            />
            <FeatureCard 
              icon={Shield}
              title="Local Execution"
              description="Privacy is core. Your data stays on your device. We don't use external APIs or servers for processing your documents."
            />
            <FeatureCard 
              icon={CheckCircle}
              title="Verified Results"
              description="The human-in-the-loop design ensures 100% accuracy by allowing quick manual adjustments before the final calculation."
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white/[0.02] rounded-[40px] border border-white/5 px-8 md:px-20 space-y-12 overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/5 blur-[100px] -z-10" />
          
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/3 space-y-4">
              <h2 className="text-3xl font-black text-white leading-tight">Got <br />Questions?</h2>
              <p className="text-gray-500 font-medium text-sm">Everything you need to know about CALCI and how it processes your data.</p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FaqItem 
                question="Is it really offline?"
                answer="Yes. After the initial load, the OCR engine and calculation logic run entirely in your browser's local sandbox."
              />
              <FaqItem 
                question="What image formats?"
                answer="We support standard PNG, JPG, and WEBP formats. High-contrast screenshots yield the best OCR results."
              />
              <FaqItem 
                question="How accurate is it?"
                answer="While very accurate, we always recommend verifying the extracted data in the side-by-side view provided."
              />
              <FaqItem 
                question="Is it free to use?"
                answer="CALCI is completely free and open-source, built to help students manage their academic tracking easily."
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

