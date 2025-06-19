"use client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MailIcon, MapPin, Phone } from "lucide-react";
import HeadingText from "./HeadingText";
import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactSection() {
const [form, setForm] = useState({ name: "", email: "", message: "" });
const [status, setStatus] = useState<"success" | "error" | "">("");
const [isSending, setIsSending] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    console.log(form);
    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,    
        process.env.NEXT_PUBLIC_CLIENT_TEMPLATE_ID!,  
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        process.env.NEXT_PUBLIC_USER_ID!    
      );
      emailjs.send(
  process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
  process.env.NEXT_PUBLIC_USER_TEMPLATE_ID!, 
  {
    to_name: form.name,
    to_email: form.email,
  },
  process.env.NEXT_PUBLIC_USER_ID! 
)
  .then(() => {
        setForm({ name: "", email: "", message: "" });
        setStatus("success");
        setIsSending(false);
        setTimeout(() => setStatus(""), 3000); 
      })
      .catch((error) => {
        console.error("Email error:", error);
        setIsSending(false);
        setStatus("error");
      });
  };

  return (
 <section id="contact" className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <HeadingText title="Contact Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
          
          {/* Contact Form */}
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block mb-1 text-sm font-medium">Name</label>
                  <Input
                    name="name"
                    placeholder="Your Name"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Email</label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Write your message..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>
               <Button type="submit" className="w-full" disabled={isSending}>
  {isSending ? "Sending..." : "Send Message"}
</Button>
                {status === "success" && (
                  <p className="text-green-600 text-sm">Your message has been sent!</p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm">Failed to send message. Try again.</p>
                )}
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card>
            <CardContent className="p-6 flex flex-col gap-6 justify-center">

              <div className="flex items-start gap-4">
                <MapPin className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">Toronto, Ontario, Canada</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground"><a href="tel:4376618091">+1 (437) 661-8091</a></p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MailIcon className="text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground"><a href="mailto:yashmodi998@gmail.com">yashmodi998@gmail.com</a></p>
                </div>
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </section>
  );
}
