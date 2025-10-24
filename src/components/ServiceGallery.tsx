import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import servicesOverview from "@/assets/services-overview.jpg";
import expertiseDomains from "@/assets/expertise-domains.jpg";
import industrialAutomation from "@/assets/industrial-automation.jpg";
import phdSurvivor from "@/assets/phd-survivor.jpg";
import consultancyServices from "@/assets/consultancy-services.jpg";
import phdServices from "@/assets/phd-services.jpg";
import industrialConsultancy from "@/assets/industrial-consultancy.jpg";
import civilEngineering from "@/assets/civil-engineering.jpg";
import researchCycle from "@/assets/research-cycle.jpg";
import industryResearch from "@/assets/industry-research.jpg";

const ServiceGallery = () => {
  const [selectedImage, setSelectedImage] = useState<{ src: string; title: string; description: string } | null>(null);

  const galleryItems = [
    {
      src: servicesOverview,
      title: "Techno-Financial Services",
      description: "Asset valuation, inspection services, and chartered engineering consultancy for comprehensive project support.",
      category: "Financial Services"
    },
    {
      src: expertiseDomains,
      title: "Multi-Domain Expertise", 
      description: "Our comprehensive services span across industrial engineering, R&D support, design & prototyping, and academic research.",
      category: "Expertise Areas"
    },
    {
      src: industrialAutomation,
      title: "Industrial Automation Consultancy",
      description: "Complete electrical & instrumentation engineering solutions for industrial automation and control systems.",
      category: "Industrial Engineering"
    },
    {
      src: phdSurvivor,
      title: "PhD Academic Support",
      description: "Comprehensive support for PhD candidates throughout their research journey, from proposal to thesis completion.",
      category: "Academic Services"
    },
    {
      src: consultancyServices,
      title: "Professional Services Overview",
      description: "Our consultancy services include personalized approach, product expertise, preventative options, and proactive advice.",
      category: "Consultancy"
    },
    {
      src: phdServices,
      title: "PhD Research Services",
      description: "Specialized PhD services across electrical engineering, mechanical engineering, nuclear power, civil engineering, and renewable energy.",
      category: "PhD Services"
    },
    {
      src: industrialConsultancy,
      title: "Industrial Research & Consultancy",
      description: "Strategic industrial consultancy combining research expertise with practical implementation for real-world solutions.",
      category: "Industrial Research"
    },
    {
      src: civilEngineering,
      title: "Civil Design Engineering",
      description: "Comprehensive civil engineering design services including structural design, construction management, and architectural solutions.",
      category: "Civil Engineering"
    },
    {
      src: researchCycle,
      title: "Research Methodology",
      description: "Our systematic research cycle approach ensuring quality from identifying research areas to publishing results.",
      category: "Research Process"
    },
    {
      src: industryResearch,
      title: "Industry Research & Innovation",
      description: "Advanced laboratory research and renewable energy solutions driving innovation across multiple industrial sectors.",
      category: "R&D Innovation"
    }
  ];

  const categories = [...new Set(galleryItems.map(item => item.category))];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Service <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Visual showcase of our comprehensive services and expertise areas across research, 
            engineering, and academic consultancy
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Badge key={category} variant="outline" className="px-4 py-2">
              {category}
            </Badge>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryItems.map((item, index) => (
            <Card 
              key={index} 
              className="hover-lift cursor-pointer group overflow-hidden"
              onClick={() => setSelectedImage(item)}
            >
              <CardContent className="p-0 relative">
                <img 
                  src={item.src} 
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="mb-2 bg-primary text-primary-foreground text-xs">
                      {item.category}
                    </Badge>
                    <h3 className="text-white font-semibold text-sm leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
            {selectedImage && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl">{selectedImage.title}</DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.title}
                    className="w-full rounded-lg shadow-lg"
                  />
                  <p className="text-muted-foreground leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ServiceGallery;