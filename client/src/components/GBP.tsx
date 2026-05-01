import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Sparkles, MessageCircleHeart, BookOpen } from "lucide-react";

const pillars = [
  {
    icon: Users,
    title: "Mentorship",
    description: "Guidance for young hospitality professionals and entrepreneurs on careers, judgment, and growth.",
  },
  {
    icon: Sparkles,
    title: "Sounding Board",
    description: "A confidential space to test ideas on hotel, F&B, and hospitality-led venture plans.",
  },
  {
    icon: MessageCircleHeart,
    title: "Practical Conversations",
    description: "Direct, real-world conversations on business challenges, re-engineering, and operating choices.",
  },
  {
    icon: BookOpen,
    title: "Non-Commercial Support",
    description: "A spare-time initiative built to give back, without vendor recommendations or employment requests.",
  },
];

export default function GBP() {
  return (
    <section id="gbp" className="py-20 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-5 px-3 py-1.5">
            The Give Back Project (GBP)
          </Badge>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            A Non-Commercial Initiative for the Next Generation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A spare-time initiative by Sanjay Sethi to mentor young hospitality professionals,
            support founders, and share experience from a long career in the industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {pillars.map((pillar) => (
            <Card
              key={pillar.title}
              className="p-8 lg:p-10 hover-elevate transition-all duration-300"
              data-testid={`card-gbp-${pillar.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <pillar.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl font-medium text-foreground mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
