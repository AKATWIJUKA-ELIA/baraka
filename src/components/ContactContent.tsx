"use client";

import { useState } from "react";
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { PageHero } from "@/components/PageHero";

export function ContactContent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    roomType: "",
    message: "",
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const whatsappMessage = `Hello Baraka Hotel.\n\nI would like to make a reservation.\n\nName: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nGuests: ${formData.guests}\nRoom: ${formData.roomType}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/256770404091?text=${encodeURIComponent(whatsappMessage)}`, "_blank");
  };

  const contactCards = [
    {
      icon: Phone,
      title: "Phone",
      body: (
        <>
          <a href="tel:+256768666505" className="block transition hover:text-bred">
            +256 768 666 505
          </a>
          <a href="tel:+256744628976" className="block transition hover:text-bred">
            +256 744 628 976
          </a>
          <a href="tel:+256770404091" className="block transition hover:text-bred">
            +256 770 404 091
          </a>
        </>
      ),
      accent: "red",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      body: (
        <>
          <a href="https://wa.me/256770404091" target="_blank" rel="noopener noreferrer" className="transition hover:text-bred">
            +256 770 404 091
          </a>
          <p className="mt-1 text-sm text-bink/55">Click to chat with reservations.</p>
        </>
      ),
      accent: "blue",
    },
    {
      icon: MapPin,
      title: "Address",
      body: (
        <span>
          Along Kampala-Gulu Highway
          <br />
          Bweyale, Kiryandongo District
          <br />
          Uganda
        </span>
      ),
      accent: "blue",
    },
    {
      icon: Clock,
      title: "Front Desk",
      body: (
        <span>
          24 hours / 7 days a week
          <br />
          Reception always available.
        </span>
      ),
      accent: "red",
    },
  ];

  return (
    <main className="min-h-screen bg-bpaper">
      <PageHero
        kicker="Contact & reservations"
        title="Get in"
        accent="touch"
        description="Make a reservation, ask about availability, or speak with the team before your arrival."
        image="/baraka/hero.jpg"
        primaryAction={{ href: "/rooms", label: "Explore Rooms" }}
        secondaryAction={{ href: "/gallery", label: "View Gallery" }}
      />

      <section className="section-shell">
        <div className="site-container">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="section-kicker">Contact information</p>
              <h2 className="section-heading">Reach us directly</h2>
              <p className="section-copy mt-5">
                Our team is available around the clock for room bookings, dining questions,
                conference inquiries, and arrival support.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {contactCards.map((card) => (
                  <Card key={card.title} className="hotel-card-hover">
                    <CardContent className="p-6">
                      <div
                        className={`mb-4 flex size-12 items-center justify-center rounded-2xl ${
                          card.accent === "red" ? "bg-bred text-white" : "bg-bblue text-bnavy"
                        }`}
                      >
                        <card.icon className="size-5" />
                      </div>
                      <h3 className="text-lg font-black text-bnavy">{card.title}</h3>
                      <div className="mt-2 leading-7 text-bink/70">{card.body}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-6 hotel-card p-6">
                <div className="flex items-start gap-4">
                  <Mail className="mt-1 size-5 shrink-0 text-bblue" />
                  <div>
                    <h3 className="font-black text-bnavy">Email</h3>
                    <a
                      href="mailto:barakahotelbweyale@gmail.com"
                      className="break-all leading-7 text-bink/70 transition hover:text-bred"
                    >
                      barakahotelbweyale@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardContent className="p-6 md:p-8">
                <p className="section-kicker">Reservation request</p>
                <h2 className="text-3xl font-black text-bnavy">Tell us about your stay</h2>
                <p className="mt-3 leading-7 text-bink/70">
                  Submit the form and we will open WhatsApp with your reservation details ready to send.
                </p>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-bold text-bnavy">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        required
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(event) => updateField("name", event.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-bold text-bnavy">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        required
                        type="tel"
                        placeholder="+256 7XX XXX XXX"
                        value={formData.phone}
                        onChange={(event) => updateField("phone", event.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-bold text-bnavy">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={(event) => updateField("email", event.target.value)}
                    />
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="checkIn" className="mb-2 block text-sm font-bold text-bnavy">
                        Check-in Date *
                      </label>
                      <Input
                        id="checkIn"
                        required
                        type="date"
                        value={formData.checkIn}
                        onChange={(event) => updateField("checkIn", event.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="checkOut" className="mb-2 block text-sm font-bold text-bnavy">
                        Check-out Date *
                      </label>
                      <Input
                        id="checkOut"
                        required
                        type="date"
                        value={formData.checkOut}
                        onChange={(event) => updateField("checkOut", event.target.value)}
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="guests" className="mb-2 block text-sm font-bold text-bnavy">
                        Guests
                      </label>
                      <Input
                        id="guests"
                        type="number"
                        min="1"
                        placeholder="1"
                        value={formData.guests}
                        onChange={(event) => updateField("guests", event.target.value)}
                      />
                    </div>
                    <div>
                      <label htmlFor="roomType" className="mb-2 block text-sm font-bold text-bnavy">
                        Room Type
                      </label>
                      <select
                        id="roomType"
                        value={formData.roomType}
                        onChange={(event) => updateField("roomType", event.target.value)}
                        className="form-field w-full"
                      >
                        <option value="">Select a room</option>
                        <option value="Standard Room - UGX 40,000">Standard Room - UGX 40,000</option>
                        <option value="Standard Plus Room - UGX 50,000">Standard Plus Room - UGX 50,000</option>
                        <option value="Deluxe Executive Room - UGX 70,000">Deluxe Executive Room - UGX 70,000</option>
                        <option value="Twin Economy Room - UGX 60,000">Twin Economy Room - UGX 60,000</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-bold text-bnavy">
                      Additional Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      placeholder="Any special requests or questions..."
                      value={formData.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      className="form-field min-h-32 w-full resize-y py-3"
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full">
                    <Send className="size-5" />
                    Send Reservation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-white py-10">
        <div className="site-container">
          <div className="hotel-card overflow-hidden p-0">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.513504230181!2d32.13965640000001!3d1.9502472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177a9b00702ab5f3%3A0x2ec6c28ed78ce1a2!2sBaraka%20Hotel%20-%20Bweyale%20-%20Kiryandongo!5e1!3m2!1sen!2sug!4v1770488092503!5m2!1sen!2sug"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Baraka Hotel Location"
            />
          </div>
        </div>
      </section>

      <section className="bg-bnavy py-16 text-white">
        <div className="site-container flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="text-3xl font-black">Need immediate assistance?</h2>
            <p className="mt-2 text-white/75">Call us directly or send a WhatsApp message.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild>
              <a href="tel:+256768666505">
                <Phone className="size-4" />
                Call Now
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/30 bg-white/10 text-white hover:bg-white hover:text-bnavy"
              asChild
            >
              <a href="https://wa.me/256770404091" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="size-4" />
                WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
