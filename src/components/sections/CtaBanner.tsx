'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { Phone, Mail, ArrowRight, CheckCircle, Loader2, AlertCircle } from 'lucide-react';
import type { ApiResponse } from '@/types/lead';

const trustPoints = [
  '5+ Years of Proven Experience',
  'ISO-Certified Quality Standards',
  '200+ Projects Delivered',
  'End-to-End Project Ownership',
];

type FormState = 'idle' | 'loading' | 'success' | 'error';

const inputCls =
  'w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 font-body text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50';

const selectCls =
  'w-full bg-black/40 border border-white/20 rounded-lg px-4 py-3 text-white/70 font-body text-sm focus:outline-none focus:border-primary transition-colors disabled:opacity-50';

export default function CtaBanner() {
  const [state, setState] = useState<FormState>('idle');
  const [quoteId, setQuoteId] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState('loading');
    setErrorMsg('');

    const fd = new FormData(e.currentTarget);
    const payload = {
      name: fd.get('name') as string,
      company: fd.get('company') as string,
      email: fd.get('email') as string,
      phone: fd.get('phone') as string,
      service: fd.get('service') as string,
      message: fd.get('message') as string,
    };

    try {
      const res = await fetch('/api/quotes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const data: ApiResponse = await res.json();

      if (!res.ok || !data.success) {
        const errData = data as { success: false; error: string };
        setErrorMsg(errData.error ?? 'Something went wrong. Please try again.');
        setState('error');
        return;
      }

      setQuoteId((data as Extract<ApiResponse, { success: true }>).leadId);
      setState('success');
      formRef.current?.reset();
    } catch {
      setErrorMsg('Network error. Please check your connection and try again.');
      setState('error');
    }
  }

  return (
    <section
      className="cta-banner relative py-20 lg:py-28 bg-cover bg-center"
      style={{ backgroundImage: 'url(/images/background/cta-bg.png)' }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/90 to-secondary/75" />
      <div
        className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'url(/images/shape/shape-4.png)', backgroundRepeat: 'repeat' }}
      />

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left: Text & CTAs */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-0.5 bg-primary" />
              <span className="text-primary font-heading font-semibold text-sm uppercase tracking-widest">
                Get Started Today
              </span>
            </div>
            <h2 className="font-heading font-bold text-3xl lg:text-4xl xl:text-5xl text-white leading-tight mb-4">
              Ready to Build Something{' '}
              <span className="text-primary">Extraordinary?</span>
            </h2>
            <p className="text-white/70 font-body text-base leading-relaxed mb-8 max-w-lg">
              Whether you need engineering expertise, smart technology solutions, or business
              support services — MHtracon is your one trusted partner in Saudi Arabia. Let&apos;s
              discuss your next project.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors group"
              >
                <Mail className="h-4 w-4" />
                Send Enquiry
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="tel:+966506030311"
                className="inline-flex items-center gap-2 bg-white/10 border border-white/30 text-white px-8 py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:bg-white/20 transition-colors group"
              >
                <Phone className="h-4 w-4 group-hover:animate-pulse" />
                +966 506 030 311
              </Link>
            </div>

            {/* Trust points */}
            <ul className="flex flex-col gap-3">
              {trustPoints.map((point) => (
                <li key={point} className="flex items-center gap-3 text-white/80 font-body text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Contact card */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/15 rounded-2xl p-8 lg:p-10">
            <h3 className="font-heading font-bold text-white text-2xl mb-2">
              Request a Free Consultation
            </h3>
            <p className="text-white/60 font-body text-sm mb-8">
              Tell us about your project and our team will get back to you within 24 hours.
            </p>

            {/* Success state */}
            {state === 'success' ? (
              <div className="flex flex-col items-center justify-center py-12 text-center gap-4">
                <div className="w-16 h-16 bg-green-500/20 border border-green-500/40 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-400" />
                </div>
                <h4 className="font-heading font-bold text-white text-xl">Request Submitted!</h4>
                <p className="text-white/70 font-body text-sm max-w-xs">
                  Thank you! Our team will contact you within 24 hours.
                </p>
                <div className="bg-white/10 border border-white/20 rounded-lg py-2 px-4 inline-flex items-center gap-2 mt-2">
                  <span className="text-white/60 font-body text-xs uppercase tracking-wider">Quote ID:</span>
                  <span className="text-primary font-heading font-bold tracking-widest">{quoteId}</span>
                </div>
                <button
                  onClick={() => setState('idle')}
                  className="mt-2 text-primary font-body text-sm underline underline-offset-2 hover:text-primary-dark transition-colors"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form ref={formRef} className="space-y-4" onSubmit={handleSubmit} noValidate>
                {/* Name + Company */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    required
                    disabled={state === 'loading'}
                    className={inputCls}
                  />
                  <input
                    type="text"
                    name="company"
                    placeholder="Company Name"
                    disabled={state === 'loading'}
                    className={inputCls}
                  />
                </div>

                {/* Email + Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    required
                    disabled={state === 'loading'}
                    className={inputCls}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    required
                    disabled={state === 'loading'}
                    className={inputCls}
                  />
                </div>

                {/* Service */}
                <select
                  name="service"
                  required
                  disabled={state === 'loading'}
                  defaultValue=""
                  className={selectCls}
                >
                  <option value="" disabled>Select Service *</option>
                  <option value="interior">Interior &amp; Exterior Design</option>
                  <option value="mep">MEP Solutions</option>
                  <option value="ai">AI &amp; Software Development</option>
                  <option value="security">Security Solutions</option>
                  <option value="office">Office Essentials</option>
                  <option value="gifts">Corporate Gifts &amp; Branding</option>
                  <option value="uniforms">Uniform Solutions</option>
                  <option value="other">Other</option>
                </select>

                {/* Message */}
                <textarea
                  name="message"
                  rows={3}
                  placeholder="Brief project description..."
                  disabled={state === 'loading'}
                  className={inputCls + ' resize-none'}
                />

                {/* Error message */}
                {state === 'error' && errorMsg && (
                  <div className="flex items-start gap-2 bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                    <AlertCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <p className="text-red-300 font-body text-sm">{errorMsg}</p>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={state === 'loading'}
                  className="w-full bg-primary text-white py-3.5 rounded-lg font-heading font-semibold text-sm uppercase tracking-wider hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {state === 'loading' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}

