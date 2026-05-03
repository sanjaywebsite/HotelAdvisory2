import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CheckCircle, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    designation: "",
    enquiryType: "",
    message: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (field: "designation" | "enquiryType") => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      toast({
        title: "Consent required",
        description: "Please confirm consent before submitting your enquiry.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Enquiry received",
      description: "Thank you for your enquiry. I will respond within 48 hours.",
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
              Let's Discuss an<br />Advisory Mandate
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

          {/* Left — contact details, editorial style */}
          <div className="space-y-0 divide-y divide-border">
            <a
              href="mailto:ss@sanjaysethi.co"
              className="flex items-start justify-between py-6 group"
              data-testid="link-email"
            >
              <div>
                <p className="text-xs text-muted-foreground tracking-[0.3em] uppercase mb-1">Email</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  ss@sanjaysethi.co
                </p>
              </div>
              <ArrowUpRight className="h-4 w-4 text-border group-hover:text-primary transition-colors mt-1 flex-shrink-0" />
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

          {/* Right — form, no card wrapper */}
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
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="name" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Full Name</Label>
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
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="phone" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 ..."
                      value={formData.phone}
                      onChange={handleChange}
                      data-testid="input-phone"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="company" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Company / Organisation</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your organisation"
                      value={formData.company}
                      onChange={handleChange}
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <Label htmlFor="designation" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Role / Designation</Label>
                    <Select value={formData.designation} onValueChange={handleSelectChange("designation")}>
                      <SelectTrigger id="designation" data-testid="select-designation">
                        <SelectValue placeholder="Select role" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investor-pe">Investor / PE Fund</SelectItem>
                        <SelectItem value="owner-developer">Owner / Developer</SelectItem>
                        <SelectItem value="owner-ceo">Owner / CEO</SelectItem>
                        <SelectItem value="board-director">Board Director</SelectItem>
                        <SelectItem value="family-office">Family Office</SelectItem>
                        <SelectItem value="senior-management">Senior Management</SelectItem>
                        <SelectItem value="consultant">Consultant</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-1.5">
                    <Label htmlFor="enquiryType" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Nature of Enquiry</Label>
                    <Select value={formData.enquiryType} onValueChange={handleSelectChange("enquiryType")}>
                      <SelectTrigger id="enquiryType" data-testid="select-enquiry-type">
                        <SelectValue placeholder="Select enquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="investment-advisory">Hospitality Investment Advisory</SelectItem>
                        <SelectItem value="owner-developer-advisory">Owner & Developer Advisory</SelectItem>
                        <SelectItem value="board-governance">Board & Governance Advisory</SelectItem>
                        <SelectItem value="strategic-foresight">Strategic Foresight</SelectItem>
                        <SelectItem value="selective-engagement">Selective Engagement</SelectItem>
                        <SelectItem value="speaking-media">Speaking / Media</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <Label htmlFor="message" className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Briefly describe the mandate or question you would like to discuss..."
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                    data-testid="input-message"
                  />
                </div>

                <div className="flex items-start gap-3 pt-1">
                  <Checkbox
                    id="consent"
                    checked={formData.consent}
                    onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, consent: checked === true }))}
                    data-testid="checkbox-consent"
                    className="mt-0.5"
                  />
                  <Label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed font-normal cursor-pointer">
                    I consent to my details being used to respond to this enquiry. Information shared
                    is treated in confidence and is not used for marketing.
                  </Label>
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  className="w-full tracking-widest uppercase text-xs"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? "Sending..." : "Submit Enquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
