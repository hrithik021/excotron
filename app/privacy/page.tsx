'use client';
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

export default function PrivacyPage(): React.ReactElement {
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
                Privacy Policy
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
                At Excotron Solutions, we are committed to protecting your privacy and ensuring the security of your
                personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your
                information when you use our services or visit our website.
              </p>
            </div>

            {/* Section 1 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  1
                </span>
                Information We Collect
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 mt-4">Personal Information</h3>
                <p>We may collect personal information that you provide to us, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Name and contact information (email, phone number, address)</li>
                  <li>Company name and business information</li>
                  <li>Account credentials and login information</li>
                  <li>Payment and billing information</li>
                  <li>Communications and correspondence with us</li>
                </ul>

                <h3 className="text-xl font-semibold text-gray-900 mt-6">Automatically Collected Information</h3>
                <p>When you visit our website, we may automatically collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>IP address and device information</li>
                  <li>Browser type and version</li>
                  <li>Pages visited and time spent on our site</li>
                  <li>Referring website addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                </ul>
              </div>
            </div>

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  2
                </span>
                How We Use Your Information
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>We use the information we collect for various purposes, including:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Providing and maintaining our services</li>
                  <li>Processing your transactions and managing your account</li>
                  <li>Communicating with you about our services, updates, and offers</li>
                  <li>Responding to your inquiries and support requests</li>
                  <li>Improving our services and developing new features</li>
                  <li>Analyzing usage patterns and trends</li>
                  <li>Protecting against fraud and unauthorized access</li>
                  <li>Complying with legal obligations</li>
                </ul>
              </div>
            </div>

            {/* Section 3 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  3
                </span>
                Information Sharing and Disclosure
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>We may share your information in the following circumstances:</p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4">Service Providers</h3>
                <p>
                  We may share information with third-party service providers who perform services on our behalf, such
                  as payment processing, data analysis, email delivery, and hosting services.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4">Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the
                  acquiring entity.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4">Legal Requirements</h3>
                <p>
                  We may disclose your information if required to do so by law or in response to valid requests by
                  public authorities (e.g., court orders or government agencies).
                </p>

                <h3 className="text-xl font-semibold text-gray-900 mt-4">With Your Consent</h3>
                <p>
                  We may share your information for any other purpose with your explicit consent.
                </p>
              </div>
            </div>

            {/* Section 4 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  4
                </span>
                Data Security
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  We implement appropriate technical and organizational security measures to protect your personal
                  information against unauthorized access, alteration, disclosure, or destruction. These measures include:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security assessments and audits</li>
                  <li>Access controls and authentication mechanisms</li>
                  <li>Employee training on data protection</li>
                  <li>Incident response procedures</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we
                  strive to protect your information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>

            {/* Section 5 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  5
                </span>
                Your Privacy Rights
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Access:</strong> Request access to your personal information</li>
                  <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                  <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                  <li><strong>Portability:</strong> Request transfer of your information to another service</li>
                  <li><strong>Objection:</strong> Object to processing of your information</li>
                  <li><strong>Restriction:</strong> Request restriction of processing your information</li>
                  <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
                </ul>
                <p className="mt-4">
                  To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </div>
            </div>

            {/* Section 6 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  6
                </span>
                Cookies and Tracking Technologies
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  We use cookies and similar tracking technologies to enhance your experience on our website. Cookies
                  are small data files stored on your device that help us:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Remember your preferences and settings</li>
                  <li>Understand how you use our website</li>
                  <li>Improve website performance and functionality</li>
                  <li>Deliver personalized content and advertisements</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling cookies may limit your
                  ability to use certain features of our website.
                </p>
              </div>
            </div>

            {/* Section 7 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  7
                </span>
                Data Retention
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  We retain your personal information for as long as necessary to fulfill the purposes outlined in this
                  Privacy Policy, unless a longer retention period is required or permitted by law. When we no longer
                  need your information, we will securely delete or anonymize it.
                </p>
              </div>
            </div>

            {/* Section 8 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  8
                </span>
                Third-Party Links
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Our website may contain links to third-party websites. We are not responsible for the privacy
                  practices or content of these external sites. We encourage you to review the privacy policies of any
                  third-party sites you visit.
                </p>
              </div>
            </div>

            {/* Section 9 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  9
                </span>
                Children's Privacy
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  Our services are not intended for children under the age of 13. We do not knowingly collect personal
                  information from children. If you believe we have collected information from a child, please contact
                  us immediately so we can delete it.
                </p>
              </div>
            </div>

            {/* Section 10 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  10
                </span>
                Changes to This Privacy Policy
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any significant changes by
                  posting the new policy on this page and updating the "Last Updated" date. We encourage you to review
                  this policy periodically.
                </p>
              </div>
            </div>

            {/* Section 11 */}
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4 flex items-center">
                <span className="w-10 h-10 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-lg flex items-center justify-center text-white font-bold mr-4">
                  11
                </span>
                Contact Us
              </h2>
              <div className="ml-14 space-y-4 text-gray-600">
                <p>
                  If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices,
                  please contact us:
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
                By using Excotron Solutions' services, you acknowledge that you have read and understood this Privacy
                Policy and agree to the collection, use, and disclosure of your information as described herein.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
