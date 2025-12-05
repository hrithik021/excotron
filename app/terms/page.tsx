'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function TermsPage(): React.ReactElement {
  const lastUpdated = 'December 5, 2025';

  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ScrollToTop />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-teal-900 to-cyan-900">
          <div className="absolute inset-0 opacity-30" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: '20px 20px'
          }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Terms & Conditions
              </span>
            </h1>
            <p className="text-lg text-gray-300">Last Updated: {lastUpdated}</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="mb-12">
              <p className="text-gray-600 leading-relaxed">
                Welcome to Excotron Solutions. These Terms and Conditions govern your use of our website and services.
                By accessing or using our services, you agree to be bound by these terms. Please read them carefully.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  1
                </span>
                Acceptance of Terms
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  By accessing and using Excotron Solutions' website and services, you accept and agree to be bound by
                  these Terms and Conditions and our Privacy Policy. If you do not agree to these terms, please do not
                  use our services.
                </p>
                <p>
                  We reserve the right to modify these terms at any time. Your continued use of our services after any
                  such changes constitutes your acceptance of the new terms.
                </p>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  2
                </span>
                Services Description
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Excotron Solutions provides IT consulting, cloud solutions, cybersecurity, digital transformation,
                  and related technology services. The specific terms of service delivery will be outlined in individual
                  service agreements or statements of work.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any part of our services at any time with or
                  without notice. We will not be liable to you or any third party for any modification, suspension, or
                  discontinuance of services.
                </p>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  3
                </span>
                User Responsibilities
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>As a user of our services, you agree to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide accurate and complete information when requested</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                  <li>Notify us immediately of any unauthorized use of your account</li>
                  <li>Use our services only for lawful purposes</li>
                  <li>Not attempt to interfere with or disrupt our services</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  4
                </span>
                Intellectual Property
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  All content, features, and functionality of our services, including but not limited to text, graphics,
                  logos, images, software, and documentation, are owned by Excotron Solutions or its licensors and are
                  protected by copyright, trademark, and other intellectual property laws.
                </p>
                <p>
                  You may not reproduce, distribute, modify, create derivative works of, publicly display, or exploit
                  any of our content without our express written permission.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  5
                </span>
                Payment Terms
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Payment terms will be specified in individual service agreements. Unless otherwise agreed in writing,
                  all fees are due within 30 days of invoice date. Late payments may incur interest charges at the rate
                  of 1.5% per month or the maximum rate permitted by law, whichever is less.
                </p>
                <p>
                  All fees are non-refundable unless otherwise specified in your service agreement. We reserve the right
                  to suspend services for non-payment.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  6
                </span>
                Confidentiality
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Both parties agree to maintain the confidentiality of any proprietary or confidential information
                  disclosed during the course of service delivery. This obligation survives termination of the service
                  agreement.
                </p>
                <p>
                  Confidential information does not include information that is publicly available, rightfully obtained
                  from third parties, or independently developed.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  7
                </span>
                Limitation of Liability
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  To the maximum extent permitted by law, Excotron Solutions shall not be liable for any indirect,
                  incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
                  incurred directly or indirectly.
                </p>
                <p>
                  Our total liability for any claims arising from or related to our services shall not exceed the amount
                  paid by you for the specific service giving rise to the claim in the twelve months preceding the claim.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  8
                </span>
                Termination
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Either party may terminate a service agreement in accordance with the termination provisions specified
                  in that agreement. We reserve the right to suspend or terminate your access to our services immediately
                  if you breach these Terms and Conditions.
                </p>
                <p>
                  Upon termination, you must cease all use of our services and return or destroy any confidential
                  information in your possession.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  9
                </span>
                Governing Law
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  These Terms and Conditions shall be governed by and construed in accordance with the laws of India.
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts
                  located in India.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  10
                </span>
                Contact Information
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  If you have any questions about these Terms and Conditions, please contact us:
                </p>
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl border border-teal-100">
                  <p className="font-semibold text-gray-900 mb-2">Excotron Solutions</p>
                  <p>Email: Hr@excotronsolution.com</p>
                  <p>Business Hours: Monday - Friday, 9:00 AM - 6:00 PM (IST)</p>
                </div>
              </div>
            </div>

            {/* Final Note */}
            <div className="mt-12 p-6 bg-gray-50 rounded-xl border border-gray-200">
              <p className="text-sm text-gray-600">
                By using Excotron Solutions' services, you acknowledge that you have read, understood, and agree to be
                bound by these Terms and Conditions. These terms constitute the entire agreement between you and
                Excotron Solutions regarding your use of our services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
