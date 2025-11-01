import { useEffect } from "react";
import { CheckCircle, Users, Target, Award, Lightbulb, Globe } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import scientistsTeam from "@/assets/about-scientists-team.jpg";
import labWork from "@/assets/about-lab-work.jpg";
import collaboration from "@/assets/about-collaboration.jpg";
import researchLab from "@/assets/research-lab.jpg";
import globalNetwork from "@/assets/global-network.jpg";

const About = () => {
  useEffect(() => {
    document.title = "About Us | Scientific Work - Research & Engineering Consultancy";
  }, []);

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every project, ensuring the highest quality standards and innovative solutions."
    },
    {
      icon: Users,
      title: "Collaboration", 
      description: "We believe in collaborative partnerships with our clients, working together to achieve exceptional results."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and methodologies to deliver innovative solutions that drive progress."
    },
    {
      icon: Award,
      title: "Integrity",
      description: "We maintain the highest ethical standards and transparency in all our professional interactions."
    }
  ];

  const milestones = [
    { year: "2010", title: "Company Founded", description: "Established as Scientific Research and Design Consultancy" },
    { year: "2015", title: "100+ Projects", description: "Completed over 100 successful research and engineering projects" },
    { year: "2018", title: "Multi-Domain Expertise", description: "Expanded services across 10+ engineering and technology domains" },
    { year: "2020", title: "Digital Transformation", description: "Enhanced digital capabilities and remote collaboration tools" },
    { year: "2023", title: "500+ Clients", description: "Served over 500 clients with 98% satisfaction rate" }
  ];

  const team = [
    {
      name: "Research Team",
      role: "PhD & Academic Research",
      description: "Expert researchers with extensive experience in academic writing, thesis development, and publication support."
    },
    {
      name: "Engineering Team", 
      role: "Technical Solutions",
      description: "Professional engineers specializing in design, development, and implementation across multiple domains."
    },
    {
      name: "Innovation Team",
      role: "R&D and Startups",
      description: "Innovation specialists focused on prototype development, patent filing, and startup consultancy."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative gradient-hero py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src={researchLab} 
            alt="Advanced research laboratory background"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white mb-6">
              About <span className="text-gradient">Scientific Work</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Bridging innovations & reality through comprehensive research, 
              academic support, and engineering consultancy services since 2010
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Scientific Work is a leading Research and Design, Engineering Consultancy unit of 
                <strong> SARALA POWERTECH CONSULTING ENGINEERS LLP</strong>. We specialize in providing 
                comprehensive solutions for academic research, PhD support, engineering projects, 
                and innovative startup consultancy.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Located in Bhubaneswar, Odisha, we have been serving clients across India and 
                internationally, helping researchers, students, and organizations achieve their 
                academic and professional goals.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Registered Business Entity</h4>
                    <p className="text-muted-foreground">Part of SARALA POWERTECH CONSULTING ENGINEERS LLP (LLP IN: AAG-2605)</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Professional Team</h4>
                    <p className="text-muted-foreground">Experienced researchers, engineers, and consultants with advanced degrees</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Quality Assurance</h4>
                    <p className="text-muted-foreground">Rigorous quality control processes ensuring excellence in every deliverable</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={scientistsTeam} 
                  alt="Scientific research team collaborating on innovative projects"
                  className="rounded-2xl shadow-lg hover-lift col-span-2"
                />
                <img 
                  src={labWork} 
                  alt="Professional engineers working in advanced laboratory"
                  className="rounded-xl shadow-lg hover-lift"
                />
                <img 
                  src={collaboration} 
                  alt="Team collaboration and professional consultancy sessions"
                  className="rounded-xl shadow-lg hover-lift"
                />
              </div>
              
              <div className="bg-muted rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Mission</h3>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  To bridge the gap between innovative ideas and practical reality by providing 
                  world-class research, academic, and engineering consultancy services that 
                  empower our clients to achieve excellence in their respective fields.
                </p>
                
                <h3 className="text-2xl font-bold text-foreground mb-6">Our Vision</h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  To be the leading consultancy firm that transforms academic and professional 
                  aspirations into successful outcomes through innovative solutions, expert 
                  guidance, and unwavering commitment to quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 section-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-dark-foreground mb-4">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-dark-muted-foreground max-w-3xl mx-auto">
              The principles that guide our work and define our commitment to our clients
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
            <div className="space-y-4">
              <img 
                src={researchLab} 
                alt="Advanced research laboratory with comprehensive equipment and technology"
                className="rounded-2xl shadow-lg hover-lift"
              />
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src={labWork} 
                  alt="Scientists conducting research in modern laboratory"
                  className="rounded-xl shadow-lg hover-lift"
                />
                <img 
                  src={globalNetwork} 
                  alt="Global network connectivity and technology innovation"
                  className="rounded-xl shadow-lg hover-lift"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="bg-dark-muted border-dark-muted text-center hover-lift">
                  <CardHeader>
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-dark-foreground text-lg">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-dark-muted-foreground text-sm">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Key milestones in our growth and success story
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-primary"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <Card className="hover-lift">
                      <CardHeader>
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{milestone.year}</span>
                          </div>
                          <CardTitle className="text-foreground">{milestone.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dedicated professionals with expertise across multiple domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover-lift">
                <CardHeader>
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-foreground">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-6">
            <Globe className="w-16 h-16" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Ready to start your project? We're here to help you succeed.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h4 className="font-semibold mb-2">Address</h4>
              <p className="opacity-90">
                3rd Floor, LP-110, Prasanti Vihar<br />
                KIIT Post, Bhubaneswar<br />
                Odisha - 751024, India
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Contact</h4>
              <p className="opacity-90">
                Phone: +91 8072566791<br />
                Email: scientificwork.in@gmail.com<br />
                Web: www.scientificwork.in
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Business Hours</h4>
              <p className="opacity-90">
                Monday - Friday: 9:00 AM - 6:00 PM<br />
                Saturday: 10:00 AM - 4:00 PM<br />
                Sunday: Consultation by appointment
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;