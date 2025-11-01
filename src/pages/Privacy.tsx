import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Shield, Lock, Eye, UserCheck, FileText, Mail } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Privacy = () => {
  useEffect(() => {
    document.title = "Privacy Policy | Scientific Work - Data Protection & Privacy";
  }, []);

  const sections = [
    {
      icon: Shield,
      title: "Information We Collect",
      content: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Professional information (Academic qualifications, research interests, project details)",
        "Usage data (How you interact with our website and services)",
        "Technical data (IP address, browser type, device information)"
      ]
    },
    {
      icon: Lock,
      title: "How We Use Your Information",
      content: [
        "To provide and maintain our research and consultancy services",
        "To communicate with you about projects, inquiries, and updates",
        "To improve our services and develop new offerings",
        "To comply with legal obligations and protect our rights"
      ]
    },
    {
      icon: Eye,
      title: "Information Sharing",
      content: [
        "We do not sell, trade, or rent your personal information to third parties",
        "We may share information with trusted partners who assist in service delivery",
        "We may disclose information when required by law or to protect our rights",
        "All third-party service providers are bound by confidentiality agreements"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights",
      content: [
        "Access and review your personal information",
        "Request correction of inaccurate data",
        "Request deletion of your personal information",
        "Opt-out of marketing communications",
        "Object to processing of your data"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, 
              use, and protect your personal information.
            </p>
            <p className="text-sm text-gray-400 mt-4">
              Last Updated: January 2025
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Scientific Work (a unit of SARALA POWERTECH CONSULTING ENGINEERS LLP) is committed 
              to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy describes how we collect, use, disclose, and safeguard your 
              information when you visit our website or use our services.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              By accessing or using our services, you agree to the terms outlined in this Privacy Policy. 
              If you do not agree with our policies and practices, please do not use our services.
            </p>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <Card key={index} className="bg-dark-muted border-dark-muted hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-dark-foreground text-xl">{section.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-dark-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Data Security */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Lock className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Data Security</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We implement appropriate technical and organizational security measures to protect 
              your personal information against unauthorized access, alteration, disclosure, or 
              destruction. These measures include encryption, secure servers, regular security 
              assessments, and access controls. However, no method of transmission over the 
              Internet is 100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Cookies and Tracking</h2>
            </div>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Our website uses cookies and similar tracking technologies to enhance your browsing 
              experience, analyze site traffic, and understand user preferences. You can control 
              cookie preferences through your browser settings.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Essential Cookies:</strong> Required for website functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span><strong>Functional Cookies:</strong> Remember your preferences and settings</span>
              </li>
            </ul>
          </div>

          {/* Children's Privacy */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Children's Privacy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our services are intended for individuals who are at least 18 years old or have reached 
              the age of majority in their jurisdiction. We do not knowingly collect personal information 
              from children under 18. If you believe we have collected information from a child, please 
              contact us immediately.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Third-Party Links</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our website may contain links to third-party websites. We are not responsible for the 
              privacy practices or content of these external sites. We encourage you to review the 
              privacy policies of any third-party sites you visit.
            </p>
          </div>

          {/* Changes to Policy */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Changes to This Policy</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices 
              or legal requirements. We will notify you of any material changes by posting the updated 
              policy on our website with a new "Last Updated" date. Your continued use of our services 
              after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Data Retention</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We retain your personal information only for as long as necessary to fulfill the purposes 
              outlined in this Privacy Policy, comply with legal obligations, resolve disputes, and 
              enforce our agreements. When your information is no longer needed, we securely delete 
              or anonymize it.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Mail className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-6">Questions About Privacy?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            If you have any questions, concerns, or requests regarding this Privacy Policy 
            or how we handle your personal information, please contact us.
          </p>
          <div className="space-y-4 text-lg">
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:scientificwork.in@gmail.com" className="underline hover:text-gray-200">
                scientificwork.in@gmail.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+918072566791" className="underline hover:text-gray-200">
                +91 8072566791
              </a>
            </p>
            <p className="text-base opacity-75 pt-4">
              3rd Floor, LP-110, Prasanti Vihar, KIIT Post<br />
              Bhubaneswar, Odisha - 751024, India
            </p>
          </div>
          <div className="mt-10">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
