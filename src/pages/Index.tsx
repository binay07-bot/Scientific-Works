import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Users, Lightbulb, Target, Award, BookOpen, Cog, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import heroImage from "@/assets/hero-ai-tech.jpg";
import heroImage2 from "@/assets/hero-futuristic-lab.jpg";
import aiNeuralNetwork from "@/assets/ai-neural-network.jpg";
import embeddedPcb from "@/assets/embedded-pcb.jpg";
import powerGrid from "@/assets/power-grid.jpg";
import renewableEnergy from "@/assets/renewable-energy.jpg";
import researchLab from "@/assets/research-lab.jpg";
import innovationTech from "@/assets/innovation-tech.jpg";
import circuitDesign from "@/assets/circuit-design.jpg";
import iotNetwork from "@/assets/iot-network.jpg";
import { openCalendlyPopup, useCalendly } from "@/hooks/useCalendly";

const Index = () => {
  useCalendly();

  useEffect(() => {
    // SEO: Update page title for home page
    document.title = "Scientific Work | Research, Innovation & Engineering Consultancy Services";
  }, []);

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
      {/* Hero Section */}
      <section className="relative overflow-hidden gradient-hero min-h-[80vh] flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-dark/90 to-dark/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Scientific
                <span className="text-gradient block">Work</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Research, Innovation & Engineering Consultancy Services
              </p>
              <p className="text-lg text-gray-400 mb-10 max-w-2xl">
                Bridging innovations & reality through comprehensive research solutions, 
                academic support, and engineering consultancy services.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  asChild 
                  size="lg" 
                  className="gradient-primary text-white hover:shadow-teal text-lg px-8 py-4"
                >
                  <Link to="/services">
                    Explore Services <ArrowRight className="ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={heroImage} 
                  alt="Artificial Intelligence and deep-tech research innovation"
                  className="rounded-2xl shadow-2xl animate-float col-span-2"
                />
                <img 
                  src={heroImage2} 
                  alt="Futuristic laboratory with advanced technology research"
                  className="rounded-xl shadow-lg hover-lift"
                />
                <img 
                  src={researchLab} 
                  alt="Modern research laboratory with cutting-edge equipment"
                  className="rounded-xl shadow-lg hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-dark-foreground mb-6">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="text-xl text-dark-muted-foreground mb-8">
                Comprehensive research and engineering solutions tailored to your academic and professional needs
              </p>
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={aiNeuralNetwork} 
                  alt="AI and Machine Learning neural network visualization"
                  className="rounded-xl shadow-lg hover-lift"
                />
                <img 
                  src={embeddedPcb} 
                  alt="Embedded systems and PCB design engineering"
                  className="rounded-xl shadow-lg hover-lift"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <img 
                src={powerGrid} 
                alt="Power electronics and smart grid technology"
                className="rounded-2xl shadow-lg hover-lift"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={renewableEnergy} 
                  alt="Renewable energy and sustainable technology research"
                  className="rounded-xl shadow-lg hover-lift"
                />
                <img 
                  src={innovationTech} 
                  alt="Innovation and technology development"
                  className="rounded-xl shadow-lg hover-lift"
                />
              </div>
            </div>
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
    </>
  );
};

export default Index;