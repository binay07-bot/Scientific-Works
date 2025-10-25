import { useState, useEffect } from "react";
import { CheckCircle, BookOpen, Cog, Lightbulb, Zap, Plus, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ServiceGallery from "@/components/ServiceGallery";
import { openCalendlyPopup, useCalendly } from "@/hooks/useCalendly";
import phdResearch from "@/assets/phd-research.jpg";
import aiNeuralNetwork from "@/assets/ai-neural-network.jpg";
import aiInterface from "@/assets/ai-interface.jpg";
import embeddedPcb from "@/assets/embedded-pcb.jpg";
import iotDevices from "@/assets/iot-devices.jpg";
import powerGrid from "@/assets/power-grid.jpg";
import renewableEnergy from "@/assets/renewable-energy.jpg";
import researchLab from "@/assets/research-lab.jpg";
import digitalPrototype from "@/assets/digital-prototype.jpg";
import roboticsArm from "@/assets/robotics-arm.jpg";
import iotNetwork from "@/assets/iot-network.jpg";
import labEquipment from "@/assets/lab-equipment.jpg";
import circuitDesign from "@/assets/circuit-design.jpg";
import industrialTech from "@/assets/industrial-tech.jpg";
import automationFactory from "@/assets/automation-factory.jpg";
import innovationTech from "@/assets/innovation-tech.jpg";

const Services = () => {
  const [activeTab, setActiveTab] = useState("phd-services");
  useCalendly();

  useEffect(() => {
    document.title = "Services | Scientific Work - PhD, Research & Engineering Consultancy";
  }, []);

  const serviceCategories = [
    {
      id: "phd-services",
      title: "PhD Services",
      icon: BookOpen,
      description: "Comprehensive PhD support from proposal to completion",
      services: [
        {
          title: "Research Topic/PhD Proposal",
          description: "Expert guidance in finding and developing research topics with novel approach. Our experienced team helps you create compelling research proposals that demonstrate originality and academic rigor.",
          features: [
            "Topic identification and refinement",
            "Literature review and gap analysis", 
            "Research methodology design",
            "Proposal writing and formatting"
          ]
        },
        {
          title: "Research Journal Article Drafting & Publication",
          description: "Professional support for writing and publishing high-quality research papers in reputed journals.",
          features: [
            "Article structuring and writing",
            "Data analysis and presentation",
            "Journal selection guidance",
            "Submission and revision support"
          ]
        },
        {
          title: "Review/Survey Papers",
          description: "Comprehensive literature reviews and survey papers that establish research foundations.",
          features: [
            "Systematic literature review",
            "Critical analysis of existing work",
            "Research trends identification",
            "Future scope recommendations"
          ]
        },
        {
          title: "Synopsis Drafting",
          description: "Clear and concise synopsis preparation that effectively communicates your research objectives.",
          features: [
            "Research summary preparation", 
            "Methodology overview",
            "Expected outcomes description",
            "Timeline and milestones"
          ]
        },
        {
          title: "Thesis Drafting",
          description: "Complete thesis writing support with professional formatting and academic standards.",
          features: [
            "Chapter-wise writing support",
            "Academic formatting and style",
            "Quality assurance and review",
            "Plagiarism checking"
          ]
        }
      ]
    },
    {
      id: "academic-projects",
      title: "Academic Project Services",
      icon: Cog,
      description: "Complete project solutions for all academic levels",
      services: [
        {
          title: "M.Tech Projects",
          description: "Advanced master's level projects with industry-relevant applications and cutting-edge technology integration.",
          features: [
            "Industry-oriented project topics",
            "Advanced technical implementation",
            "Research-based approach",
            "Professional documentation"
          ]
        },
        {
          title: "B.Tech Projects",
          description: "Innovative undergraduate projects that demonstrate technical competency and practical application.",
          features: [
            "Practical project implementation",
            "Hardware-software integration",
            "Real-world problem solving",
            "Complete project documentation"
          ]
        },
        {
          title: "Hardware Projects",
          description: "Hands-on hardware development projects across various engineering domains.",
          features: [
            "Circuit design and implementation",
            "Prototype development",
            "Testing and validation",
            "Technical specifications"
          ]
        },
        {
          title: "Simulation Projects",
          description: "Software-based simulation projects using industry-standard tools and methodologies.",
          features: [
            "MATLAB/Simulink projects",
            "CAD/CAE simulations",
            "Virtual prototyping",
            "Results analysis and reporting"
          ]
        },
        {
          title: "Project Report Preparation",
          description: "Professional project documentation that meets academic and industry standards.",
          features: [
            "Technical writing excellence",
            "Professional formatting",
            "Comprehensive documentation",
            "Quality assurance"
          ]
        }
      ]
    },
    {
      id: "rd-services", 
      title: "R&D Services",
      icon: Lightbulb,
      description: "Research and development solutions for organizations",
      services: [
        {
          title: "Research Proposal Drafting",
          description: "Professional research proposals for funding agencies and research institutions.",
          features: [
            "Funding agency requirements",
            "Budget planning and justification",
            "Technical feasibility analysis",
            "Impact assessment"
          ]
        },
        {
          title: "Technical Consultancy Service",
          description: "Expert technical consultation for complex engineering and research challenges.",
          features: [
            "Problem analysis and solutions",
            "Technology evaluation",
            "Implementation guidance", 
            "Performance optimization"
          ]
        },
        {
          title: "Design & Detailed Engineering",
          description: "Comprehensive design and engineering services for innovative solutions.",
          features: [
            "Conceptual design development",
            "Detailed engineering drawings",
            "Specifications and standards",
            "Design optimization"
          ]
        },
        {
          title: "Find Funding",
          description: "Assistance in identifying and securing research funding opportunities.",
          features: [
            "Funding source identification",
            "Grant application support",
            "Proposal customization",
            "Follow-up assistance"
          ]
        },
        {
          title: "Proposal Presentation",
          description: "Professional presentation preparation and delivery for research proposals.",
          features: [
            "Presentation design",
            "Content structuring",
            "Visual aids preparation",
            "Delivery coaching"
          ]
        }
      ]
    },
    {
      id: "startup-support",
      title: "Project Innovations",
      icon: Zap, 
      description: "Innovation and prototyping services for projects",
      services: [
        {
          title: "Innovation for Projects",
          description: "Innovative solutions and technology development for your projects.",
          features: [
            "Technology ideation",
            "Innovation consulting",
            "Market analysis", 
            "Competitive advantage development"
          ]
        },
        {
          title: "Product Design",
          description: "Comprehensive product design from concept to market-ready solutions.",
          features: [
            "User-centered design",
            "Design thinking methodology",
            "Prototyping and testing",
            "Market validation"
          ]
        },
        {
          title: "Prototype Development",
          description: "Rapid prototyping and proof-of-concept development services.",
          features: [
            "Rapid prototyping",
            "3D printing and fabrication",
            "Functional testing",
            "Iteration and refinement"
          ]
        },
        {
          title: "Proof of Concept",
          description: "Validating innovative ideas through systematic proof-of-concept development.",
          features: [
            "Feasibility analysis",
            "Technical validation",
            "Risk assessment",
            "Implementation roadmap"
          ]
        },
        {
          title: "Patent Drafting & Filing",
          description: "Professional patent application services to protect intellectual property.",
          features: [
            "Patent search and analysis",
            "Application drafting",
            "Filing assistance",
            "IP strategy consultation"
          ]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Services</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive research, academic, and engineering consultancy services 
            designed to support your success at every stage
          </p>
        </div>
      </section>

      {/* Services Tabs */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <div className="flex justify-center mb-12">
              <TabsList className="grid w-full max-w-4xl grid-cols-2 lg:grid-cols-4 h-auto p-1 bg-muted">
                {serviceCategories.map((category) => (
                  <TabsTrigger
                    key={category.id}
                    value={category.id}
                    className="flex flex-col items-center gap-2 py-4 px-3 data-[state=active]:bg-primary data-[state=active]:text-white"
                  >
                    <category.icon className="w-5 h-5" />
                    <span className="text-xs font-medium text-center">{category.title}</span>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            {serviceCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="mt-0">
                <div className="text-center mb-12">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <category.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground mb-4">{category.title}</h2>
                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                    {category.description}
                  </p>
                  
                  {/* Category-specific images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-6xl mx-auto">
                    {category.id === "phd-services" && (
                      <>
                        <img 
                          src={phdResearch} 
                          alt="PhD research and academic writing support services"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={researchLab} 
                          alt="Advanced research laboratory facilities and equipment"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={labEquipment} 
                          alt="Modern lab equipment for scientific research"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={digitalPrototype} 
                          alt="Digital prototyping and research methodology"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                      </>
                    )}
                    {category.id === "rd-services" && (
                      <>
                        <img 
                          src={industrialTech} 
                          alt="Industrial technology and R&D solutions"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={researchLab} 
                          alt="Research and development laboratory services"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={innovationTech} 
                          alt="Innovation and technology consulting"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={automationFactory} 
                          alt="Factory automation and industrial engineering"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                      </>
                    )}
                    {category.id === "academic-projects" && (
                      <>
                        <img 
                          src={embeddedPcb} 
                          alt="Embedded systems and PCB design projects"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={circuitDesign} 
                          alt="Circuit design and electronics projects"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={roboticsArm} 
                          alt="Robotics and automation projects"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={iotDevices} 
                          alt="IoT devices and smart technology projects"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                      </>
                    )}
                    {category.id === "startup-support" && (
                      <>
                        <img 
                          src={innovationTech} 
                          alt="Innovation and startup support services"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={digitalPrototype} 
                          alt="Product design and prototype development"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={roboticsArm} 
                          alt="Advanced robotics and proof of concept"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                        <img 
                          src={iotNetwork} 
                          alt="IoT network and connectivity solutions"
                          className="rounded-xl shadow-lg hover-lift"
                        />
                      </>
                    )}
                  </div>
                </div>

                <Accordion type="single" collapsible className="space-y-4">
                  {category.services.map((service, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category.id}-${index}`}
                      className="border border-border rounded-lg bg-card"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <div className="text-left">
                          <h3 className="text-lg font-semibold text-card-foreground">
                            {service.title}
                          </h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-6">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <p className="text-muted-foreground mb-4 leading-relaxed">
                              {service.description}
                            </p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-card-foreground mb-3">Key Features:</h4>
                            <ul className="space-y-2">
                              {service.features.map((feature, idx) => (
                                <li key={idx} className="flex items-start gap-2">
                                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                                  <span className="text-sm text-muted-foreground">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Domain Expertise */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-foreground mb-4">
              Domain <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-xl text-dark-muted-foreground max-w-3xl mx-auto">
              We serve clients across multiple engineering and technology domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Building,
                title: "Business Management",
                areas: ["Strategic Planning", "Process Optimization", "Market Analysis"]
              },
              {
                icon: Zap,
                title: "Electrical & Electronics",
                areas: ["Circuit Design", "Power Systems", "Control Systems"]
              },
              {
                icon: Cog,
                title: "Mechanical Engineering",
                areas: ["Design Engineering", "Manufacturing", "Thermal Systems"]
              },
              {
                icon: BookOpen,
                title: "Computer Science",
                areas: ["Software Development", "Data Science", "Cybersecurity"]
              },
              {
                icon: Lightbulb,
                title: "AI & ML Technologies",
                areas: ["Machine Learning", "Deep Learning", "Neural Networks"]
              },
              {
                icon: Zap,
                title: "Deeptech and Power Electronics",
                areas: ["Advanced Power Systems", "Semiconductor Technology", "Quantum Computing"]
              }
            ].map((domain, index) => (
              <Card key={index} className="bg-dark-muted border-dark-muted hover-lift">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mb-4">
                    <domain.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-dark-foreground">{domain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {domain.areas.map((area, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-primary" />
                        <span className="text-sm text-dark-muted-foreground">{area}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Gallery */}
      <ServiceGallery />

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Contact us today to discuss your project requirements and get a customized solution.
          </p>
          <Button 
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100 border-white"
            onClick={openCalendlyPopup}
          >
            Get Free Consultation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;