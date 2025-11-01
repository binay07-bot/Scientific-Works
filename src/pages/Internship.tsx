import { useEffect, useState } from "react";
import { MapPin, Award, Users, Lightbulb, Briefcase, GraduationCap, CheckCircle, Phone, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import internshipBanner from "@/assets/internship-banner.jpg";
import office1 from "@/assets/office-1.jpg";
import office2 from "@/assets/office-2.jpg";
import office3 from "@/assets/office-3.jpg";
import office4 from "@/assets/office-4.jpg";
import office5 from "@/assets/office-5.jpg";
import office6 from "@/assets/office-6.jpg";
import office7 from "@/assets/office-7.jpg";
import office8 from "@/assets/office-8.jpg";
import office9 from "@/assets/office-9.jpg";
import office10 from "@/assets/office-10.jpg";
import office11 from "@/assets/office-11.jpg";
import office12 from "@/assets/office-12.jpg";

const Internship = () => {
  const [officeCarouselApi, setOfficeCarouselApi] = useState<CarouselApi>();

  useEffect(() => {
    document.title = "Internship Program | Scientific Work - VTU-VRIF-TCOE Collaboration";
  }, []);

  // Auto-slide for office carousel
  useEffect(() => {
    if (!officeCarouselApi) return;

    const interval = setInterval(() => {
      officeCarouselApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [officeCarouselApi]);

  const highlights = [
    {
      icon: Lightbulb,
      title: "80% Practical Training",
      description: "Hands-on experience with real industry projects and cutting-edge technology"
    },
    {
      icon: GraduationCap,
      title: "20% Theory",
      description: "Essential theoretical foundations and conceptual understanding"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Recognized certification from SMPS Electric Control Pvt. Ltd."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry professionals and experienced researchers"
    }
  ];

  const activities = [
    "Joint project proposals with VTU colleges, doctorates, and professors",
    "R&D lab and research activities in cutting-edge technologies",
    "Industry collaboration with SMPS Electric Control Pvt. Ltd.",
    "Patent drafting and intellectual property development",
    "Entrepreneurship development and startup ecosystem training",
    "Live project implementation and real-world problem solving"
  ];

  const programs = [
    {
      title: "INDUSTRY ENTRY-LEVEL",
      price: "₹7,500/-",
      originalPrice: "₹18,750/-",
      description: "Build core industry skills",
      features: [
        "Foundational technical training",
        "Introduction to industrial power electronics",
        "Basic embedded systems design",
        "Industry tools and software training",
        "Project-based learning approach"
      ],
      applyLink: "https://vtu.internyet.in/internships/413-industry-entry-level-ai-powered-industrial-power-electronics-embedded-system-design",
      badge: null
    },
    {
      title: "INDUSTRY ADVANCED-LEVEL",
      price: "₹15,000/-",
      originalPrice: "₹37,500/-",
      description: "Advanced technical training",
      features: [
        "Advanced power electronics concepts",
        "AI/ML integration in industrial systems",
        "Complex embedded system design",
        "IoT and Industry 4.0 technologies",
        "Live industry project participation"
      ],
      applyLink: "https://vtu.internyet.in/internships/413-industry-advanced-level-ai-powered-industrial-power-electronics-embedded-system-design",
      badge: "Popular"
    },
    {
      title: "IP PRODUCT — R&D DEEP TECH",
      price: "₹30,000/-",
      originalPrice: "₹1,20,000/-",
      description: "Top 50 Students Only – Entry via Interview",
      features: [
        "Deep-tech R&D project involvement",
        "Intellectual property development",
        "Patent drafting and filing assistance",
        "Quantum computing and 5G/6G technologies",
        "Direct mentorship from industry leaders",
        "Potential pre-placement opportunities"
      ],
      applyLink: "https://vtu.internyet.in/internships/413-ip-product-rd-deep-tech-ai-powered-industrial-power-electronics-embedded-system-design",
      badge: "Elite"
    }
  ];

  const techStack = [
    "Industrial Power Electronics",
    "AI / ML / Quantum Technology",
    "Next-Gen Telecom: 5G + 6G",
    "Industry 5.0 & Beyond",
    "Embedded Systems Design",
    "PLC, SCADA & DCS",
    "IoT and Smart Systems",
    "Entrepreneurship Development"
  ];

  const officeImages = [
    office1, office2, office3, office4, office5, office6, 
    office7, office8, office9, office10, office11, office12
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={internshipBanner}
            alt="Internship program innovation and research background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/75"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block mb-6 animate-fade-in">
              <span className="px-6 py-3 bg-accent/20 border-2 border-accent/40 rounded-full text-accent text-sm font-bold tracking-wider uppercase backdrop-blur-md shadow-lg">
                VTU–VRIF–TCOE Collaboration
              </span>
            </div>
            <h1 className="text-6xl font-extrabold text-white mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Internship <span className="text-gradient">Program 2025</span>
            </h1>
            <p className="text-3xl text-gray-100 max-w-3xl mx-auto mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Industry-Fitness Internship | Deep Tech | Core Engineering
            </p>
            <p className="text-2xl text-accent font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              "Think Beyond Smart Powertronics"
            </p>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.8s' }}>
              <strong>Location:</strong> Bangalore, Karnataka
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Collaborative <span className="text-gradient">Program</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A unique collaboration bringing together academic excellence and industry expertise
            </p>
          </div>

          {/* Office Images Carousel */}
          <div className="mb-12 max-w-6xl mx-auto">
            <Carousel 
              setApi={setOfficeCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                {officeImages.map((img, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <img 
                      src={img} 
                      alt={`Bangalore office and R&D facility ${index + 1}`}
                      className="rounded-2xl shadow-xl hover-lift w-full aspect-video object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover-lift border-2">
              <CardHeader>
                <CardTitle className="text-primary text-xl">OptCELL GLOBAL</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Operations & Branding Partner</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift border-2 border-primary shadow-lg">
              <CardHeader>
                <CardTitle className="text-accent text-xl">Scientific Work</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Research & Development Collaboration</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover-lift border-2">
              <CardHeader>
                <CardTitle className="text-primary text-xl">SMPS Electric Control</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Industry Implementation Partner</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Program Highlights */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-foreground mb-4">
              Program <span className="text-gradient">Highlights</span>
            </h2>
            <p className="text-xl text-dark-muted-foreground max-w-3xl mx-auto">
              From Campus to Core Tech – Build What the Future Runs On!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {highlights.map((item, index) => (
              <Card key={index} className="bg-dark-muted border-dark-muted text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-dark-foreground">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-dark-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Program Structure */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="bg-dark-muted border-dark-muted hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-dark-foreground">Program Structure</CardTitle>
                <CardDescription className="text-dark-muted-foreground text-base">
                  3 Months | 80% Practical | 20% Theory
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg text-dark-foreground mb-2">Month 1: Hands-On Tech Training</h4>
                  <p className="text-dark-muted-foreground">Master tools, systems & workflows with Smart Industrial Power Electronics & IoT Products</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg text-dark-foreground mb-2">Months 2 & 3: Live Industry Innovation</h4>
                  <p className="text-dark-muted-foreground">Solve real problems. Build real solutions. Get placed with SMPS Electric & Tech Giants.</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-dark-muted border-dark-muted hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-dark-foreground">Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {activities.map((activity, index) => (
                    <li key={index} className="flex items-start gap-3 text-dark-muted-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{activity}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              What You'll <span className="text-gradient">Master</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="bg-muted rounded-xl p-6 text-center hover-lift border border-border"
              >
                <p className="font-medium text-foreground">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Tracks */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Choose Your Track</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Select the program that matches your career goals and technical aspirations
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className={`hover-lift ${program.badge === 'Elite' ? 'border-accent border-2' : ''}`}>
                <CardHeader>
                  {program.badge && (
                    <div className="text-center mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        program.badge === 'Elite' ? 'bg-accent/20 text-accent' : 'bg-primary/20 text-primary'
                      }`}>
                        {program.badge}
                      </span>
                    </div>
                  )}
                  <CardTitle className="text-center text-foreground">{program.title}</CardTitle>
                  <div className="text-center pt-4">
                    <div className="text-4xl font-bold text-foreground mb-2">{program.price}</div>
                    <div className="text-sm text-muted-foreground line-through mb-4">{program.originalPrice}</div>
                    <p className="text-sm text-muted-foreground">{program.description}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    asChild
                    className="w-full gradient-primary text-white"
                  >
                    <a href={program.applyLink} target="_blank" rel="noopener noreferrer">
                      Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Program Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2">Chief Business Development Officer</h4>
                  <p className="text-muted-foreground text-lg">A R Shalini</p>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <div className="text-muted-foreground">
                      <a href="tel:+919035874229" className="hover:text-primary transition-colors">9035874229</a> | 
                      <a href="tel:+918792779563" className="hover:text-primary transition-colors"> 8792779563</a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a 
                      href="mailto:careers.smpselectric@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      careers.smpselectric@gmail.com
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-primary" />
                  Office Address
                </CardTitle>
              </CardHeader>
              <CardContent>
                <address className="text-muted-foreground not-italic leading-relaxed text-lg">
                  Ground Floor, VTU-VRIF-TCOE Building<br />
                  1st Main Road, RHCS Layout<br />
                  Annapoorneshwari Nagar, Nagarbhavi<br />
                  Bengaluru, Karnataka – 560091<br />
                  India
                </address>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Internship;
