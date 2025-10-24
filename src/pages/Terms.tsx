import { useEffect } from "react";
import { Shield, FileText, Scale, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Terms = () => {
  useEffect(() => {
    document.title = "Terms & Conditions | Scientific Work - Legal Terms";
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <FileText className="w-6 h-6 text-primary" />
                Terms & Conditions for Scientific Work
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p className="text-muted-foreground leading-relaxed">
                These terms and conditions apply to customers of <strong>"SCIENTIFIC WORK"</strong>, 
                a Scientific Research and Design, Engineering Business Sector operated by 
                <strong> SARALA POWERTECH CONSULTING ENGINEERS LLP</strong> (LLP IN: AAG-2605).
              </p>
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mt-6">
                <div className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-yellow-800">Important Notice</h4>
                    <p className="text-yellow-700 text-sm mt-1">
                      By using our website, services, or engaging with our consultancy, you are bound by these terms and conditions.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* General Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">1. General Terms & Definitions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Definitions:</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li><strong>Client/You:</strong> Refers to customers, users, business users, website visitors, suppliers, vendors, or buyers engaging with our services.</li>
                    <li><strong>Scientific Work/We/Us:</strong> Refers to www.scientificwork.in and SCIENTIFIC WORK on behalf of SARALA POWERTECH CONSULTING ENGINEERS LLP.</li>
                    <li><strong>Services:</strong> All research, academic, engineering, and consultancy services provided by Scientific Work.</li>
                    <li><strong>Booking/Project:</strong> Any engagement or order for services made through our website, applications, or direct communication.</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Legally Binding Agreement */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">2. Legally Binding Agreement</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  These Terms & Conditions establish a legally binding agreement between you and Scientific Work. 
                  By accessing our website, using our services, or engaging our consultancy, you acknowledge that you have read, 
                  understood, and agree to be bound by these terms.
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Company Information</h4>
                  <div className="text-blue-700 text-sm space-y-1">
                    <p><strong>Business Name:</strong> SCIENTIFIC WORK</p>
                    <p><strong>Parent Company:</strong> SARALA POWERTECH CONSULTING ENGINEERS LLP</p>
                    <p><strong>Registration:</strong> LLP IN: AAG-2605</p>
                    <p><strong>Address:</strong> 3rd Floor, LP-110, Prasanti Vihar, KIIT Post, Bhubaneswar, Odisha - 751024, India</p>
                    <p><strong>Website:</strong> www.scientificwork.in</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Service Terms */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">3. Service Terms & Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Registration Requirements</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    To access certain services, you must register and provide current, complete, and correct information. 
                    Scientific Work reserves the right to deny access if any information is suspected to be untrue, 
                    inaccurate, incomplete, or misleading.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Service Delivery</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• All services will be delivered according to agreed timelines and specifications</li>
                    <li>• Quality standards are maintained through rigorous review processes</li>
                    <li>• Revisions will be provided as per the agreed terms for each service</li>
                    <li>• Final deliverables remain the intellectual property of the client upon full payment</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Restrictions and Responsibilities */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">4. Restrictions on Use & Client Responsibilities</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Prohibited Uses</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Using our services for any unlawful or fraudulent purposes</li>
                    <li>• Attempting to reverse engineer or copy our methodologies</li>
                    <li>• Sharing login credentials or unauthorized access to services</li>
                    <li>• Submitting false information or misrepresenting project requirements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Client Responsibilities</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Provide accurate and complete project information</li>
                    <li>• Make payments according to agreed terms</li>
                    <li>• Respond to communications and requests for clarification in a timely manner</li>
                    <li>• Use delivered work ethically and in accordance with academic/professional standards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Payment and Refund Policy */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">5. Payment Terms & Refund Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Payment Terms</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Payment terms are specified in individual project agreements</li>
                    <li>• Typically, 50% advance payment is required to commence work</li>
                    <li>• Final payment is due upon project completion and delivery</li>
                    <li>• Late payments may incur additional charges as specified in agreements</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Refund Policy</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Refunds are considered on a case-by-case basis</li>
                    <li>• No refund is applicable after work has commenced unless there is a breach of service quality on our part</li>
                    <li>• Refund requests must be made in writing with valid justification</li>
                    <li>• Processing time for approved refunds is 7-14 business days</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Intellectual Property */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">6. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  All original work created by Scientific Work becomes the intellectual property of the client upon full payment. 
                  However, Scientific Work retains the right to use non-confidential methodologies and general knowledge 
                  gained during projects for future work.
                </p>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Confidentiality</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    We maintain strict confidentiality regarding all client projects and will not share any proprietary 
                    information or research data with third parties without explicit written consent.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Limitation of Liability */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">7. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Scientific Work's liability is limited to the amount paid for the specific service. 
                  We shall not be liable for any indirect, incidental, special, or consequential damages arising 
                  from the use of our services.
                </p>
                
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">Important Disclaimer</h4>
                  <p className="text-red-700 text-sm">
                    While we strive for excellence in all our services, clients are responsible for the final 
                    use and submission of any work. We recommend that all deliverables be reviewed and understood 
                    by the client before submission to any institution or publication.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Modifications and Governing Law */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="text-foreground">8. Modifications & Governing Law</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Terms Modifications</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Scientific Work reserves the right to modify these terms at any time. 
                    Changes will be posted on our website, and continued use of our services constitutes acceptance of new terms.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Governing Law</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    These terms are governed by the laws of India. Any disputes shall be subject to the jurisdiction 
                    of the courts in Bhubaneswar, Odisha, India.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-foreground">
                <Scale className="w-6 h-6 text-primary" />
                Contact Information for Legal Matters
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  For any questions regarding these Terms & Conditions, please contact us:
                </p>
                
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="space-y-2 text-sm">
                    <p><strong>SCIENTIFIC WORK</strong></p>
                    <p>SARALA POWERTECH CONSULTING ENGINEERS LLP</p>
                    <p>3rd Floor, LP-110, Prasanti Vihar, KIIT Post</p>
                    <p>Bhubaneswar, Odisha - 751024, India</p>
                    <p>Email: info@scientificwork.in</p>
                    <p>Phone: +91 9788888292</p>
                    <p>Website: www.scientificwork.in</p>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm">
                  <strong>Last Updated:</strong> September 2024
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Terms;