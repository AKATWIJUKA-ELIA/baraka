"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Phone, 
  MapPin, 
  Clock,
  MessageCircle,
  Send
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Hello! I would like to make a reservation.\n\nName: ${formData.name}\nPhone: ${formData.phone}\nCheck-in: ${formData.checkIn}\nCheck-out: ${formData.checkOut}\nGuests: ${formData.guests}\nRoom: ${formData.roomType}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/256768666505?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 lg:py-32 bg-stone-900">
        <div className="absolute inset-0">
          <Image
            src="/baraka/hero.jpg"
            alt="Contact Baraka Hotel"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <span className="inline-flex items-center rounded-md bg-bred/20 px-2 py-1 text-xs font-medium text-bred ring-1 ring-inset ring-bred/30 mb-4">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Get in <span className="text-bblue">Touch</span>
          </h1>
          <p className="text-stone-300 text-lg md:text-xl max-w-3xl mx-auto">
            We would love to hear from you. Whether you&apos;re making a reservation or 
            have an inquiry, our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* Contact Info & Form Section */}
      <section className="py-20 bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-stone-800 mb-6">
                  Contact Information
                </h2>
                <p className="text-stone-600 text-lg">
                  Reach out to us through any of these channels. We&apos;re here to help!
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bred/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-bred" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Phone Numbers</h3>
                      <p className="text-stone-600">
                        <a href="tel:+256768666505" className="hover:text-bred transition-colors">
                          +256 768 666 505
                        </a>
                      </p>
                      <p className="text-stone-600">
                        <a href="tel:+256744628976" className="hover:text-bred transition-colors">
                          +256 744 628 976
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">WhatsApp</h3>
                      <p className="text-stone-600">
                        <a 
                          href="https://wa.me/256768666505" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-green-600 transition-colors"
                        >
                          +256 768 666 505
                        </a>
                      </p>
                      <p className="text-stone-500 text-sm">Click to chat with us</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-bblue/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-bblue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Physical Address</h3>
                      <p className="text-stone-600">
                        Along Kampala-Gulu Highway<br />
                        Bweyale, Kiryandongo District<br />
                        Uganda
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg">
                  <CardContent className="p-4 flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-stone-800 mb-1">Hours</h3>
                      <p className="text-stone-600">
                        24 Hours / 7 Days a Week<br />
                        <span className="text-stone-500">Reception always available</span>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Booking Form */}
            <div>
              <Card className="border-0 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-stone-800 mb-2">
                    Make a Reservation
                  </h2>
                  <p className="text-stone-600 mb-6">
                    Fill out the form below and we&apos;ll get back to you shortly.
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">
                          Full Name *
                        </label>
                        <Input
                          required
                          placeholder="Your name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          className="border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">
                          Phone Number *
                        </label>
                        <Input
                          required
                          type="tel"
                          placeholder="+256 7XX XXX XXX"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                          className="border-stone-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="border-stone-300"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">
                          Check-in Date *
                        </label>
                        <Input
                          required
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) => setFormData({...formData, checkIn: e.target.value})}
                          className="border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">
                          Check-out Date *
                        </label>
                        <Input
                          required
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) => setFormData({...formData, checkOut: e.target.value})}
                          className="border-stone-300"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">
                          Number of Guests
                        </label>
                        <Input
                          type="number"
                          min="1"
                          placeholder="1"
                          value={formData.guests}
                          onChange={(e) => setFormData({...formData, guests: e.target.value})}
                          className="border-stone-300"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-stone-700 mb-1">
                          Room Type
                        </label>
                        <select
                          value={formData.roomType}
                          onChange={(e) => setFormData({...formData, roomType: e.target.value})}
                          className="w-full h-10 px-3 rounded-md border border-stone-300 bg-white text-stone-900"
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
                      <label className="block text-sm font-medium text-stone-700 mb-1">
                        Additional Message
                      </label>
                      <textarea
                        rows={4}
                        placeholder="Any special requests or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full px-3 py-2 rounded-md border border-stone-300 bg-white text-stone-900 resize-none"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full bg-bred hover:bg-bred/90 text-white py-6 text-lg rounded-xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Reservation Request
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="h-96 bg-stone-200">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3852.513504230181!2d32.13965640000001!3d1.9502472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177a9b00702ab5f3%3A0x2ec6c28ed78ce1a2!2sBaraka%20Hotel%20-%20Bweyale%20-%20Kiryandongo!5e1!3m2!1sen!2sug!4v1770488092503!5m2!1sen!2sug" 
          width="100%" 
          height="100%" 
          style={{border:0}}
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Baraka Hotel Location"
        />
      </section>

      {/* Quick Contact CTA */}
      <section className="py-12 bg-stone-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                Need Immediate Assistance?
              </h3>
              <p className="text-stone-400">
                Call us directly or send a WhatsApp message.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+256768666505">
                <Button className="bg-bred hover:bg-bred/90 text-white px-8 py-6 text-lg rounded-xl">
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </a>
              <a href="https://wa.me/256768666505" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
