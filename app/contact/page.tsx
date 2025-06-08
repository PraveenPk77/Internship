"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, MessageCircle, Phone, MapPin, Send, Clock } from "lucide-react"

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <Send className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800">Message Sent!</h1>
        <p className="text-gray-600">Thank you for reaching out. We'll get back to you within 24 hours.</p>
        <Button onClick={() => setSubmitted(false)} className="bg-orange-600 hover:bg-orange-700">
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2 text-orange-600">
          <MessageCircle className="h-12 w-12" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Get in Touch</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Have questions, suggestions, or feedback? We'd love to hear from you!
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Email Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">hello@smartrecipegen.com</p>
              <p className="text-sm text-gray-500 mt-2">We typically respond within 24 hours</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center space-x-2">
                <Phone className="h-5 w-5" />
                <span>Call Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">+1 (555) 123-4567</p>
              <p className="text-sm text-gray-500 mt-2">Mon-Fri, 9AM-6PM EST</p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center space-x-2">
                <MapPin className="h-5 w-5" />
                <span>Visit Us</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                123 Recipe Street
                <br />
                Culinary District
                <br />
                Food City, FC 12345
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700 flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>Office Hours</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-1 text-gray-700">
                <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p>Saturday: 10:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
            <CardHeader>
              <CardTitle className="text-orange-700">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-gray-700 font-medium">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      required
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-gray-700 font-medium">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      required
                      className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-700 font-medium">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject" className="text-gray-700 font-medium">
                    Subject *
                  </Label>
                  <Select name="subject" required>
                    <SelectTrigger className="border-orange-200 focus:border-orange-400 focus:ring-orange-400">
                      <SelectValue placeholder="Select a subject" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="feedback">Feedback</SelectItem>
                      <SelectItem value="bug">Bug Report</SelectItem>
                      <SelectItem value="feature">Feature Request</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-700 font-medium">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help you..."
                    className="min-h-[120px] border-orange-200 focus:border-orange-400 focus:ring-orange-400"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium py-3"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </div>
                  ) : (
                    <div className="flex items-center space-x-2">
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </div>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* FAQ Section */}
      <Card className="bg-white/60 backdrop-blur-sm border-orange-100">
        <CardHeader>
          <CardTitle className="text-orange-700">Frequently Asked Questions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">How does the AI recipe generation work?</h3>
              <p className="text-gray-600">
                Our AI analyzes your ingredients and cuisine preferences, then uses advanced language models to create
                personalized recipes that match your specific needs and taste preferences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Is the service free to use?</h3>
              <p className="text-gray-600">
                Yes! Our basic recipe generation service is completely free. We believe everyone should have access to
                personalized cooking assistance.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Can I save my favorite recipes?</h3>
              <p className="text-gray-600">
                Currently, you can copy and save recipes manually. We're working on user accounts and recipe saving
                features for future updates.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">What if I have dietary restrictions?</h3>
              <p className="text-gray-600">
                You can mention your dietary restrictions in the ingredients field, and our AI will generate recipes
                that accommodate your needs.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
