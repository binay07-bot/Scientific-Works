import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Lightbulb, Target, Award, BookOpen, Cog, Zap, GraduationCap } from "lucide-react";
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
import heroSlide1 from "@/assets/hero-slide-1.jpg";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";
import heroSlide4 from "@/assets/hero-slide-4.jpg";
import aiNeuralNetwork from "@/assets/ai-neural-network.jpg";
import embeddedPcb from "@/assets/embedded-pcb.jpg";
import powerGrid from "@/assets/power-grid.jpg";
import renewableEnergy from "@/assets/renewable-energy.jpg";
import researchLab from "@/assets/research-lab.jpg";
import innovationTech from "@/assets/innovation-tech.jpg";
import circuitDesign from "@/assets/circuit-design.jpg";
import iotNetwork from "@/assets/iot-network.jpg";
import roboticsArm from "@/assets/robotics-arm.jpg";
import { openCalendlyPopup, useCalendly } from "@/hooks/useCalendly";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceCarouselApi, setServiceCarouselApi] = useState<CarouselApi>();
  useCalendly();

  const heroSlides = [heroSlide1, heroSlide2, heroSlide3, heroSlide4];

  useEffect(() => {
    // SEO: Update page title for home page
    document.title = "Scientific Work | Research, Innovation & Engineering Consultancy Services";
    
    // Auto-change hero background
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Auto-slide for service carousel
  useEffect(() => {
    if (!serviceCarouselApi) return;

    const interval = setInterval(() => {
      serviceCarouselApi.scrollNext();
    }, 3000);

    return () => clearInterval(interval);
  }, [serviceCarouselApi]);

  const services = [
    {
      icon: BookOpen,
      title: "PhD Services",
      description: "Complete PhD support from proposal to thesis completion",
      features: ["Research Topic & Proposal", "Journal Article Drafting", "Synopsis & Thesis Writing"]
    },
    {
      icon: Cog,
      title: "Academic Projects",
      description: "Comprehensive project solutions for all academic levels",
      features: ["M.Tech & B.Tech Projects", "Hardware & Simulation Projects", "Project Report Preparation"]
    },
    {
      icon: Lightbulb,
      title: "R&D Services",
      description: "Research and development solutions for innovation",
      features: ["Research Proposal Drafting", "Technical Consultancy", "Design & Engineering"]
    },
    {
      icon: Zap,
      title: "Project Innovations",
      description: "Innovation and prototyping for startups",
      features: ["Product Design", "Prototype Development", "Patent Drafting & Filing"]
    }
  ];

  const domains = [
    "Business Management",
    "Electrical & Electronics",
    "Mechanical Engineering",
    "Computer Science",
    "AI, ML & Quantum Technology",
    "Smart IoT",
    "Deeptech and Power Electronics"
  ];

  const stats = [
    { icon: Users, value: "500+", label: "Projects Completed" },
    { icon: Award, value: "50+", label: "Research Papers Published" },
    { icon: Target, value: "98%", label: "Success Rate" },
    { icon: CheckCircle, value: "24/7", label: "Support Available" }
  ];

  return (
    <>
      {/* Hero Section - Slideshow Background */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        {/* Slideshow Background */}
        <div className="absolute inset-0">
          {heroSlides.map((slide, index) => (
            <img 
              key={index}
              src={slide} 
              alt={`Scientific research and innovation ${index + 1}`}
              className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
                currentSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/85 to-dark/70"></div>
          {/* Animated overlay pattern */}
          <div className="absolute inset-0 opacity-10 animate-pulse" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(180 84% 36%) 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            {/* Tagline - Animated */}
            <div className="inline-block animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <span className="px-6 py-3 bg-primary/20 border-2 border-primary/40 rounded-full text-primary text-sm font-bold tracking-wider uppercase backdrop-blur-md shadow-lg">
                Bridging Innovations & Reality
              </span>
            </div>

            {/* Main Heading - Animated */}
            <h1 className="text-6xl lg:text-8xl font-extrabold text-white leading-tight animate-fade-in" style={{ animationDelay: '0.4s' }}>
              Scientific
              <span className="text-gradient block mt-3 animate-scale-in" style={{ animationDelay: '0.6s' }}>Work</span>
            </h1>

            {/* Subheading - Animated */}
            <p className="text-3xl lg:text-4xl text-gray-100 font-light leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
              Research, Innovation & Engineering Consultancy Services
            </p>

            {/* Description - Animated */}
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '1s' }}>
              Comprehensive research solutions, academic support, and engineering consultancy 
              services designed to transform your ideas into impactful innovations.
            </p>

            {/* CTA Buttons - Animated */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <Button 
                asChild 
                size="lg" 
                className="gradient-primary text-white hover:shadow-teal text-lg px-12 py-7 rounded-full font-bold transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/services">
                  Explore Services <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                variant="outline"
                className="border-3 border-white text-white hover:bg-white hover:text-dark text-lg px-12 py-7 rounded-full font-bold bg-white/10 backdrop-blur-md transform hover:scale-105 transition-all duration-300"
              >
                <Link to="/contact">
                  Get Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section with Carousel */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-dark-foreground mb-6">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-dark-muted-foreground max-w-3xl mx-auto">
              Empowering industries through innovation and intelligent engineering solutions
            </p>
          </div>

          {/* Service Images Carousel */}
          <div className="mb-16 max-w-5xl mx-auto">
            <Carousel 
              setApi={setServiceCarouselApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <img 
                    src={aiNeuralNetwork} 
                    alt="AI and Machine Learning neural network visualization"
                    className="rounded-2xl shadow-xl hover-lift w-full aspect-video object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <img 
                    src={embeddedPcb} 
                    alt="Embedded systems and PCB design engineering"
                    className="rounded-2xl shadow-xl hover-lift w-full aspect-video object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <img 
                    src={powerGrid} 
                    alt="Power electronics and smart grid technology"
                    className="rounded-2xl shadow-xl hover-lift w-full aspect-video object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <img 
                    src={renewableEnergy} 
                    alt="Renewable energy and sustainable technology research"
                    className="rounded-2xl shadow-xl hover-lift w-full aspect-video object-cover"
                  />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                  <img 
                    src={roboticsArm} 
                    alt="Robotics and automation technology"
                    className="rounded-2xl shadow-xl hover-lift w-full aspect-video object-cover"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-dark-muted border-dark-muted hover-lift hover-teal">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-dark-foreground">{service.title}</CardTitle>
                  <CardDescription className="text-dark-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-dark-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="gradient-primary text-white">
              <Link to="/services">View All Services <ArrowRight className="ml-2" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Domain <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Multi-disciplinary expertise across cutting-edge technologies and traditional engineering domains
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
              {domains.map((domain, index) => (
                <div
                  key={index}
                  className="bg-background rounded-xl p-6 text-center hover-lift border shadow-sm"
                >
                  <div className="text-sm font-medium text-foreground">{domain}</div>
                </div>
              ))}
            </div>
            
            <div className="space-y-4">
              <img 
                src={researchLab} 
                alt="Advanced research laboratory with innovative technology"
                className="rounded-2xl shadow-lg hover-lift"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={circuitDesign} 
                  alt="Circuit design and electrical engineering"
                  className="rounded-xl shadow-lg hover-lift"
                />
                <img 
                  src={iotNetwork} 
                  alt="IoT network and smart connectivity solutions"
                  className="rounded-xl shadow-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Research Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Get expert guidance and support for your academic and research projects. 
            Our team is here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 border-white"
              onClick={openCalendlyPopup}
            >
              Get Free Consultation
            </Button>
            <Button 
              asChild 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 border-white"
            >
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Floating Internship Button */}
      <Link to="/internship">
        <Button 
          size="lg"
          className="fixed bottom-8 right-8 z-50 gradient-primary text-white px-8 py-6 rounded-full shadow-2xl hover:shadow-teal transform hover:scale-110 transition-all duration-300 hover:animate-none flex items-center gap-2 font-bold text-lg"
          style={{ animation: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite' }}
        >
          <GraduationCap className="w-6 h-6" />
          Apply Internship
        </Button>
      </Link>
    </>
  );
};

export default Index;