import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    console.log('Form submitted:', data);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 px-4 bg-muted/30" 
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="contact-heading" 
            className="font-condensed text-3xl md:text-4xl font-bold uppercase tracking-wide text-foreground mb-4"
          >
            Contact Us
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions about our inventory? Need help with an order? We're here to help.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="p-6">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Name <span className="text-destructive" aria-label="required">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Your full name"
                          data-testid="input-name"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.name}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-destructive" aria-label="required">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          placeholder="your.email@example.com"
                          data-testid="input-email"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.email}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Subject <span className="text-destructive" aria-label="required">*</span>
                      </FormLabel>
                      <Select 
                        onValueChange={field.onChange} 
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger 
                            data-testid="select-subject"
                            aria-required="true"
                            aria-invalid={!!form.formState.errors.subject}
                          >
                            <SelectValue placeholder="Select inquiry type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="order">eBay Order Question</SelectItem>
                          <SelectItem value="request">Product Request</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Message <span className="text-destructive" aria-label="required">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Tell us how we can help you..."
                          rows={5}
                          data-testid="textarea-message"
                          aria-required="true"
                          aria-invalid={!!form.formState.errors.message}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  className="w-full font-bold uppercase tracking-wider"
                  disabled={form.formState.isSubmitting || isSubmitted}
                  data-testid="button-submit"
                  aria-label={form.formState.isSubmitting ? "Sending message..." : "Send message"}
                >
                  {form.formState.isSubmitting ? (
                    "Sending..."
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle2 className="mr-2 h-5 w-5" aria-hidden="true" />
                      Sent!
                    </>
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </Card>
          
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-condensed text-lg font-bold uppercase tracking-wide mb-2">
                    Email Us
                  </h3>
                  <a 
                    href="mailto:contact@armysurplus.example" 
                    className="text-primary hover:underline"
                    data-testid="link-email"
                  >
                    contact@armysurplus.example
                  </a>
                  <p className="text-sm text-muted-foreground mt-2">
                    We typically respond within 24 hours
                  </p>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-condensed text-lg font-bold uppercase tracking-wide mb-2">
                    Business Hours
                  </h3>
                  <ul className="space-y-1 text-sm">
                    <li><span className="font-medium">Monday - Friday:</span> 9:00 AM - 6:00 PM</li>
                    <li><span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM</li>
                    <li><span className="font-medium">Sunday:</span> Closed</li>
                  </ul>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-md bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-condensed text-lg font-bold uppercase tracking-wide mb-2">
                    Visit Our Store
                  </h3>
                  <p className="text-sm">
                    Most of our inventory is available online through our eBay store. 
                    Contact us to schedule an in-person visit to see our full collection.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
