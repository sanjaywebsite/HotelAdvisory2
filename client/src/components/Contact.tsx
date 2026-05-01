import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, MapPin, Linkedin, Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    designation: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleDesignationChange = (value: string) => {
    setFormData((prev) => ({ ...prev, designation: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. I will respond within 48 hours.",
    });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
              Get In Touch
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
              Let’s Discuss an Advisory Mandate
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-xl">
              For institutional investors, owners, developers, and boards seeking a discreet,
              high-trust advisory conversation.
            </p>

            <div className="space-y-6">
              <a
                href="mailto:contact@sanjaysethi.com"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                data-testid="link-email"
              >
                <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">contact@sanjaysethi.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium text-foreground">Mumbai, India</p>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/in/sanjaysethi08/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-primary transition-colors group"
                data-testid="link-linkedin"
              >
                <div className="p-3 rounded-md bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <p className="font-medium">View executive profile</p>
                </div>
              </a>
            </div>
          </div>

          <div className="bg-background rounded-md p-8 lg:p-10 border border-border">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                <CheckCircle className="h-16 w-16 text-primary mb-6" />
                <h3 className="font-serif text-2xl font-semibold text-foreground mb-3">
                  Thank You
                </h3>
                <p className="text-muted-foreground max-w-sm">
                  Your message has been received. I will respond within 48 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
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
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
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

                <div className="space-y-2">
                  <Label htmlFor="designation">Designation</Label>
                  <Select value={formData.designation} onValueChange={handleDesignationChange}>
                    <SelectTrigger id="designation" data-testid="select-designation">
                      <SelectValue placeholder="Select designation" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="consultant">Consultant</SelectItem>
                      <SelectItem value="owner-ceo">Owner / CEO</SelectItem>
                      <SelectItem value="senior-management">Senior Management</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company / Organization</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Your organization"
                    value={formData.company}
                    onChange={handleChange}
                    data-testid="input-company"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about the advisory mandate you would like to discuss..."
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="resize-none"
                    data-testid="input-message"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
