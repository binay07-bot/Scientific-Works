import { useEffect, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Calendar } from "lucide-react";
import techOffice from "@/assets/tech-office.jpg";
import futuristicNetwork from "@/assets/futuristic-network.jpg";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { useCalendly, openCalendlyPopup } from "@/hooks/useCalendly";
import Map from "@/components/Map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const { toast } = useToast();
  useCalendly();

  useEffect(() => {
    document.title = "Contact Us | Scientific Work - Get Expert Research Consultation";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await emailjs.send(
        'service_md5ujv8',
        'template_lj5n0fo',
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        'e8h4eKsRM65aezw1D'
      );

      toast({
        title: "Message Sent Successfully!",
        description: "We'll get back to you within 24 hours.",
      });
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const services = [
    "PhD Services",
    "Academic Project Services", 
    "Research & Development",
    "Project Innovations",
    "Industrial Consultancy",
    "Other"
  ];

  const contactMethods = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 8072566791",
      description: "Call us for immediate assistance",
      action: "tel:+918072566791"
    },
    {
      icon: Mail,
      title: "Email",
      content: "scientificwork.in@gmail.com",
      description: "Send us your queries anytime",
      action: "mailto:scientificwork.in@gmail.com"
    },
    {
      icon: MapPin,
      title: "Address",
      content: "3rd Floor, LP-110, Prasanti Vihar, KIIT Post, Bhubaneswar, Odisha - 751024",
      description: "Visit our office",
      action: "#"
    },
    {
      icon: Clock,
      title: "Business Hours",
      content: "Mon-Fri: 9AM-6PM, Sat: 10AM-4PM",
      description: "Let's build something extraordinary together — connect with us today!",
      action: "#"
    }
  ];

  const faqs = [
    {
      question: "How long does it take to complete a PhD thesis?",
      answer: "The duration varies based on the complexity and scope, typically ranging from 6-18 months depending on the research requirements."
    },
    {
      question: "Do you provide plagiarism-free content?",
      answer: "Yes, we guarantee 100% original content. All our work goes through rigorous plagiarism checking before delivery."
    },
    {
      question: "What are your payment terms?",
      answer: "We typically work with 50% advance and 50% on completion. For larger projects, we can discuss milestone-based payments."
    },
    {
      question: "Can you help with international journal publications?",
      answer: "Absolutely! We have experience with international journals and can guide you through the publication process."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={futuristicNetwork} 
            alt="Futuristic technology network background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6">
              Contact <span className="text-gradient">Us</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Ready to start your research journey? Get in touch with our expert team 
              for personalized consultation and project guidance.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactMethods.map((method, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <method.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground font-medium mb-2">{method.content}</p>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                  {method.action !== "#" && (
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="mt-3"
                      onClick={() => window.open(method.action, '_blank')}
                    >
                      Contact Now
                    </Button>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-12 sm:py-16 md:py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {/* Contact Form */}
            <div id="contact-form">
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-foreground mb-4 sm:mb-6">
                Send us a <span className="text-gradient">Message</span>
              </h2>
              <p className="text-sm sm:text-base text-dark-muted-foreground mb-6 sm:mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed response.
              </p>

              <Card className="bg-dark-muted border-dark-muted">
                <CardContent className="p-4 sm:p-6">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-dark-foreground">Full Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Your full name"
                          required
                          className="mt-1 bg-dark text-dark-foreground border-dark"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-dark-foreground">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                          required
                          className="mt-1 bg-dark text-dark-foreground border-dark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone" className="text-dark-foreground">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+91 9876543210"
                          className="mt-1 bg-dark text-dark-foreground border-dark"
                        />
                      </div>
                      <div>
                        <Label htmlFor="service" className="text-dark-foreground">Service Interested</Label>
                        <Select onValueChange={(value) => handleChange('service', value)} required>
                          <SelectTrigger className="mt-1 bg-dark text-dark-foreground border-dark">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((service) => (
                              <SelectItem key={service} value={service}>
                                {service}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-dark-foreground">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Please describe your project requirements, timeline, and any specific questions..."
                        rows={5}
                        required
                        className="mt-1 bg-dark text-dark-foreground border-dark"
                      />
                    </div>

                    <Button type="submit" size="lg" className="w-full gradient-primary text-white">
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>

              <div className="mt-8">
                <Card className="bg-dark-muted border-dark-muted">
                  <CardContent className="p-6 text-center">
                    <Calendar className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-dark-foreground mb-3">
                      Prefer to Schedule a Meeting?
                    </h3>
                    <p className="text-dark-muted-foreground mb-6">
                      Book a convenient time slot for a detailed consultation
                    </p>
                    <Button 
                      size="lg" 
                      className="gradient-primary text-white"
                      onClick={openCalendlyPopup}
                    >
                      <Calendar className="mr-2 w-5 h-5" />
                      Schedule a Meeting With Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Quick Info & FAQs */}
            <div className="space-y-6 sm:space-y-8">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-foreground mb-4 sm:mb-6">
                  Quick <span className="text-gradient">Information</span>
                </h3>
                <Card className="bg-dark-muted border-dark-muted">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-foreground">Free Consultation</h4>
                          <p className="text-dark-muted-foreground text-sm">
                            Initial consultation and project assessment at no cost
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-foreground">24-Hour Response</h4>
                          <p className="text-dark-muted-foreground text-sm">
                            We respond to all queries within 24 hours
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-foreground">Expert Team</h4>
                          <p className="text-dark-muted-foreground text-sm">
                            PhD holders and experienced professionals
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary mt-1" />
                        <div>
                          <h4 className="font-semibold text-dark-foreground">Quality Guarantee</h4>
                          <p className="text-dark-muted-foreground text-sm">
                            100% plagiarism-free and high-quality deliverables
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-dark-foreground mb-4 sm:mb-6">
                  Frequently Asked <span className="text-gradient">Questions</span>
                </h3>
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="bg-dark-muted border-dark-muted rounded-lg px-6">
                      <AccordionTrigger className="text-dark-foreground text-sm font-semibold hover:no-underline">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-dark-muted-foreground text-sm">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Office Hours */}
      <section className="py-12 sm:py-16 md:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 sm:mb-4">
              Visit Our <span className="text-gradient">Office</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Schedule an in-person consultation at our Bhubaneswar office
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
            <div className="space-y-6">
              <img 
                src={techOffice} 
                alt="Modern technology office environment"
                className="rounded-2xl shadow-lg hover-lift w-full"
              />
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" />
                    Office Address
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <address className="text-muted-foreground not-italic leading-relaxed">
                    <strong>SCIENTIFIC WORK</strong><br />
                    (SARALA POWERTECH CONSULTING ENGINEERS LLP)<br />
                    3rd Floor, LP-110, Prasanti Vihar<br />
                    KIIT Post, Bhubaneswar<br />
                    Odisha - 751024, India
                  </address>
                  
                  <div className="mt-6 space-y-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <div>
                        <p className="font-medium">Business Hours</p>
                        <p className="text-muted-foreground text-sm">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday: 10:00 AM - 4:00 PM<br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="rounded-lg overflow-hidden shadow-lg h-[400px] sm:h-[500px] lg:h-[600px]">
              <Map />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;