import { useEffect } from "react";
import { MapPin, Clock, Users, ArrowRight, Briefcase, GraduationCap, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Careers = () => {
  useEffect(() => {
    document.title = "Careers | Scientific Work - Join Our Research & Engineering Team";
  }, []);

  const openings = [
    {
      title: "Senior Research Consultant",
      department: "Research & Development",
      location: "Bhubaneswar, Odisha",
      type: "Full-time",
      description: "Lead research projects and provide expert consultation for PhD and academic research initiatives.",
      requirements: [
        "PhD in Engineering/Science with 3+ years experience",
        "Strong research and publication background",
        "Excellence in technical writing and communication",
        "Experience with research methodologies"
      ]
    },
    {
      title: "Technical Writer - Engineering",
      department: "Academic Services",
      location: "Bhubaneswar, Odisha / Remote",
      type: "Full-time",
      description: "Create high-quality technical documentation, research papers, and academic content for engineering domains.",
      requirements: [
        "Master's degree in Engineering/Technology",
        "2+ years of technical writing experience", 
        "Proficiency in LaTeX, MS Office, and documentation tools",
        "Strong command of English language"
      ]
    },
    {
      title: "Project Consultant - Startups",
      department: "Innovation & Startups",
      location: "Bhubaneswar, Odisha",
      type: "Full-time",
      description: "Support startup clients with innovation consulting, product development, and patent filing services.",
      requirements: [
        "Engineering degree with MBA/Business background preferred",
        "Experience in product development or startup ecosystem",
        "Knowledge of patent processes and IP management",
        "Strong analytical and problem-solving skills"
      ]
    },
    {
      title: "Research Associate - Intern",
      department: "Research & Development", 
      location: "Bhubaneswar, Odisha",
      type: "Internship",
      description: "Support research activities, literature reviews, and academic project development under senior guidance.",
      requirements: [
        "Pursuing M.Tech/PhD in relevant engineering domains",
        "Strong academic performance and research interest",
        "Good communication and teamwork abilities",
        "Willingness to learn and grow in research field"
      ]
    }
  ];

  const benefits = [
    {
      icon: GraduationCap,
      title: "Professional Development",
      description: "Continuous learning opportunities, conference participation, and skill enhancement programs"
    },
    {
      icon: Users,
      title: "Collaborative Environment",
      description: "Work with expert researchers and engineers in a supportive, knowledge-sharing culture"
    },
    {
      icon: Award,
      title: "Recognition & Growth",
      description: "Performance-based recognition, career advancement opportunities, and competitive compensation"
    },
    {
      icon: Briefcase,
      title: "Work-Life Balance",
      description: "Flexible working arrangements, comprehensive benefits, and a healthy work environment"
    }
  ];

  const process = [
    {
      step: "1",
      title: "Application",
      description: "Submit your resume and cover letter through our application form"
    },
    {
      step: "2", 
      title: "Screening",
      description: "Initial review of qualifications and experience alignment"
    },
    {
      step: "3",
      title: "Interview",
      description: "Technical interview and discussion about role expectations"
    },
    {
      step: "4",
      title: "Decision",
      description: "Final selection and offer communication within 1-2 weeks"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&auto=format&fit=crop"
            alt="Team collaboration background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              Join Our <span className="text-gradient">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a dynamic team that's shaping the future of research, 
              innovation, and engineering consultancy
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Why Choose <span className="text-gradient">Scientific Work?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Join a company where your expertise makes a real impact on research, 
              innovation, and academic excellence
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-foreground">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* SMPS Internship Program Section */}
      <section className="py-20 bg-gradient-to-b from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              SMPS <span className="text-gradient">Internship Program 2025</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
              Industry-Fitness Internship Program | Deep Tech | Core Engineering | Innovation-Driven
            </p>
            <p className="text-lg font-semibold text-accent">
              "Think Beyond Smart Powertronics"
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Program Structure */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Program Structure</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-l-4 border-accent pl-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Month 1: Hands-On Tech Training</h4>
                  <p className="text-muted-foreground">Master tools, systems & workflows with Smart Industrial Power Electronics & IoT Products</p>
                </div>
                <div className="border-l-4 border-primary pl-6">
                  <h4 className="font-semibold text-lg text-foreground mb-2">Months 2 & 3: Live Industry Innovation</h4>
                  <p className="text-muted-foreground">Solve real problems. Build real solutions. Get placed with SMPS Electric & Tech Giants.</p>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Master */}
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">What You'll Master</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Industrial Power Electronics
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Futuristic Tech: AI / ML / Quantum
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Next-Gen Telecom Tech: 5G + 6G
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Industry 5.0 & Beyond
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Embedded Systems and Design
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    PLC, SCADA & DCS
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                    Entrepreneurship Development & Startup Ecosystem
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Program Tracks */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 hover-lift">
              <CardHeader>
                <CardTitle className="text-center text-accent">INDUSTRY ENTRY-LEVEL</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">₹7,500/-</div>
                <div className="text-sm text-muted-foreground line-through mb-4">₹18,750/-</div>
                <p className="text-sm text-muted-foreground mb-4">Build core industry skills</p>
                <Button 
                  asChild
                  className="w-full gradient-primary text-white"
                >
                  <a href="https://vtu.internyet.in/internships/413-industry-entry-level-ai-powered-industrial-power-electronics-embedded-system-design" target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-primary/10 hover-lift">
              <CardHeader>
                <CardTitle className="text-center text-primary">INDUSTRY ADVANCED-LEVEL</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">₹15,000/-</div>
                <div className="text-sm text-muted-foreground line-through mb-4">₹37,500/-</div>
                <p className="text-sm text-muted-foreground mb-4">Advanced technical training</p>
                <Button 
                  asChild
                  className="w-full gradient-primary text-white"
                >
                  <a href="https://vtu.internyet.in/internships/413-industry-advanced-level-ai-powered-industrial-power-electronics-embedded-system-design" target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/20 to-accent/20 hover-lift border-primary">
              <CardHeader>
                <CardTitle className="text-center text-primary">IP PRODUCT—R&D DEEP TECH</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <div className="text-3xl font-bold text-foreground mb-2">₹30,000/-</div>
                <div className="text-sm text-muted-foreground line-through mb-4">₹1,20,000/-</div>
                <div className="bg-accent/20 rounded-lg p-2 text-xs text-accent font-semibold mb-4">
                  Top 50 Students Only<br />Entry via Interview
                </div>
                <Button 
                  asChild
                  className="w-full gradient-primary text-white"
                >
                  <a href="https://vtu.internyet.in/internships/413-ip-product-rd-deep-tech-ai-powered-industrial-power-electronics-embedded-system-design" target="_blank" rel="noopener noreferrer">
                    Apply
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Outcomes & Contact */}
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Hands-On Outcomes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center text-muted-foreground">
                    <Award className="w-5 h-5 text-primary mr-3" />
                    Industry Ready & Placement
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Users className="w-5 h-5 text-primary mr-3" />
                    Entrepreneurial Mindset
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <GraduationCap className="w-5 h-5 text-primary mr-3" />
                    Hands-On Core Tech Training
                  </li>
                  <li className="flex items-center text-muted-foreground">
                    <Briefcase className="w-5 h-5 text-primary mr-3" />
                    Real-Time Project Work
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl text-foreground">Program Contact</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-foreground">Chief Business Development Officer</h4>
                  <p className="text-muted-foreground">A R Shalini</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Contact</h4>
                  <p className="text-muted-foreground">9035874229 | 8792779563 | 8792779563</p>
                  <p className="text-muted-foreground">careers.smpselectric@gmail.com</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Office Address</h4>
                  <p className="text-muted-foreground">Ground Floor, VTU-VRIF-TCOE Building<br />
                  1st Main Road, RHCS Layout, Annapoorneshwari Nagar<br />
                  Nagarbhavi, Bengaluru, Karnataka – 560091, India</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-foreground mb-4">
              Current <span className="text-gradient">Openings</span>
            </h2>
            <p className="text-xl text-dark-muted-foreground max-w-3xl mx-auto">
              Explore exciting career opportunities in research, engineering, and innovation
            </p>
          </div>

          <div className="space-y-8">
            {openings.map((job, index) => (
              <Card key={index} className="bg-dark-muted border-dark-muted hover-lift">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                    <div className="flex-grow">
                      <CardTitle className="text-dark-foreground text-xl mb-2">{job.title}</CardTitle>
                      <CardDescription className="text-dark-muted-foreground text-base">
                        {job.description}
                      </CardDescription>
                    </div>
                    <div className="flex-shrink-0">
                      <Button 
                        asChild
                        size="sm" 
                        className="gradient-primary text-white"
                      >
                        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfKizSqLeqBIHGhhHJSJtxjz3YPdKdzpvvXiFr-jnENLAeUQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                          Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-dark-muted-foreground mt-4">
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.type}
                    </span>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <h4 className="font-semibold text-dark-foreground mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-dark-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-dark-muted-foreground mb-6">
              Don't see a suitable position? We're always looking for talented individuals.
            </p>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-white"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfKizSqLeqBIHGhhHJSJtxjz3YPdKdzpvvXiFr-jnENLAeUQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
                Send Us Your Resume
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Application <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our streamlined hiring process ensures a smooth experience for all candidates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                    <span className="text-white font-bold text-xl">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-primary"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact for Careers */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join our team and contribute to groundbreaking research and innovation projects
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="text-left">
              <h4 className="font-semibold mb-2">HR Department</h4>
              <p className="opacity-90">
                Email: scientificwork.in@gmail.com<br />
                Phone: +91 8072566791
              </p>
            </div>
            <div className="text-left">
              <h4 className="font-semibold mb-2">Office Address</h4>
              <p className="opacity-90">
                3rd Floor, LP-110, Prasanti Vihar<br />
                KIIT Post, Bhubaneswar, Odisha - 751024
              </p>
            </div>
          </div>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="bg-white text-primary hover:bg-gray-100 border-white"
          >
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdfKizSqLeqBIHGhhHJSJtxjz3YPdKdzpvvXiFr-jnENLAeUQ/viewform?usp=dialog" target="_blank" rel="noopener noreferrer">
              Submit Application
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Careers;