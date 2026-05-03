import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle, Mail, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ADVISORY_EMAIL = "ss@sanjaysethi.co";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organisation: "",
    brief: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Open user's mail client with the brief pre-filled, so the message reaches the advisory inbox.
    const subject = encodeURIComponent(`Advisory enquiry — ${formData.name}${formData.organisation ? ` (${formData.organisation})` : ""}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nOrganisation: ${formData.organisation}\n\nBrief:\n${formData.brief}`,
    );
    window.location.href = `mailto:${ADVISORY_EMAIL}?subject=${subject}&body=${body}`;
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry prepared",
      description: "Your email client has opened with your message. I will respond within 48 hours.",
    });
  };

  return (
    <section id="contact" className="bg-background border-t border-border scroll-mt-16">

      {/* Section header — matches other sections */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pt-20 lg:pt-28 pb-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-border pb-10">
          <div>
            <p className="text-xs font-semibold tracking-[0.35em] uppercase text-primary mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground leading-snug">
              Let&rsquo;s Discuss an<br />Advisory Mandate
            </h2>
          </div>
          <p className="text-muted-foreground text-base max-w-xs lg:text-right">
            For institutional investors, owners, developers, and boards seeking a discreet, high-trust conversation.
          </p>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="max-w-7xl mx-auto px-8 lg:px-16 pb-20 lg:pb-28">
        <div className="grid lg:grid-cols-[1fr_520px] gap-16 lg:gap-24 items-start">

          {/* Left — contact details */}
          <div className="space-y-0 divide-y divide-border">

            {/* Prominent email card */}
            <a
              href={`mailto:${ADVISORY_EMAIL}`}
              className="flex items-center gap-4 py-7 group hover-elevate -mx-3 px-3 rounded-md"
              data-testid="link-email"
            >
              <div className="flex-shrink-0 w-11 h-11 border border-border flex items-center justify-center bg-primary/5 rounded-sm">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">Email</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors break-all text-sm lg:text-base">
                  {ADVISORY_EMAIL}
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-border group-hover:text-primary transition-colors flex-shrink-0" />
            </a>

            <div className="py-6">
              <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">Location</p>
              <p className="text-foreground font-medium" data-testid="text-location">Mumbai, India</p>
            </div>

            <a
              href="https://www.linkedin.com/in/sanjaysethi08"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start justify-between py-6 group"
              data-testid="link-linkedin"
            >
              <div>
                <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">LinkedIn</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  sanjaysethi08
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-border group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
            </a>

            <div className="pt-8">
              <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
                Engagements are limited by design. All conversations are held in the strictest confidence.
              </p>
            </div>
          </div>

          {/* Right — simple inline form */}
          <div>
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center py-20 text-center border border-border">
                <CheckCircle className="h-10 w-10 text-primary mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Thank You
                </h3>
                <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
                  Thank you for your enquiry. I will respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    data-testid="input-name"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    data-testid="input-email"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="organisation" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Organisation</Label>
                  <Input
                    id="organisation"
                    name="organisation"
                    placeholder="Your organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    data-testid="input-organisation"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="brief" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Brief</Label>
                  <Textarea
                    id="brief"
                    name="brief"
                    placeholder="A two or three line note on the mandate or question you would like to discuss..."
                    rows={3}
                    value={formData.brief}
                    onChange={handleChange}
                    required
                    className="resize-none"
                    data-testid="input-brief"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full tracking-widest uppercase text-xs bg-primary text-primary-foreground hover:bg-primary"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>

                <p className="text-[11px] text-muted-foreground/80 leading-relaxed">
                  Submitting opens your email client with this enquiry pre-addressed to {ADVISORY_EMAIL}. Information shared is treated in confidence.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
