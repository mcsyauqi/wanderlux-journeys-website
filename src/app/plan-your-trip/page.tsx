"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Send,
  Phone,
  Mail,
  MessageCircle,
  Calendar,
  Users,
  MapPin,
  Sparkles,
  Check,
} from "lucide-react";
import Button from "@/components/ui/Button";
import { destinations, experiences } from "@/lib/data";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  destinations: z.array(z.string()).min(1, "Select at least one destination"),
  experienceTypes: z.array(z.string()).optional(),
  travelDates: z.string().min(1, "Please provide your travel dates"),
  duration: z.string().min(1, "Please select trip duration"),
  travelers: z.string().min(1, "Please select number of travelers"),
  budget: z.string().optional(),
  occasion: z.string().optional(),
  interests: z.string().optional(),
  message: z.string().optional(),
  newsletter: z.boolean().optional(),
});

type FormData = z.infer<typeof formSchema>;

const durationOptions = [
  "3-5 days",
  "1 week",
  "10-14 days",
  "2-3 weeks",
  "1 month+",
  "Flexible",
];

const travelerOptions = [
  "Solo traveler",
  "Couple",
  "Family (3-4)",
  "Family (5+)",
  "Small group (5-8)",
  "Large group (9+)",
];

const budgetOptions = [
  "$5,000 - $10,000",
  "$10,000 - $20,000",
  "$20,000 - $35,000",
  "$35,000 - $50,000",
  "$50,000+",
  "Flexible",
];

const occasionOptions = [
  "Honeymoon",
  "Anniversary",
  "Birthday",
  "Family vacation",
  "Adventure trip",
  "Wellness retreat",
  "Cultural exploration",
  "No special occasion",
];

export default function PlanYourTripPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      destinations: [],
      experienceTypes: [],
      newsletter: true,
    },
  });

  const selectedDestinations = watch("destinations") || [];
  const selectedExperiences = watch("experienceTypes") || [];

  const toggleDestination = (slug: string) => {
    const current = selectedDestinations;
    if (current.includes(slug)) {
      setValue(
        "destinations",
        current.filter((d) => d !== slug)
      );
    } else {
      setValue("destinations", [...current, slug]);
    }
  };

  const toggleExperience = (slug: string) => {
    const current = selectedExperiences;
    if (current.includes(slug)) {
      setValue(
        "experienceTypes",
        current.filter((e) => e !== slug)
      );
    } else {
      setValue("experienceTypes", [...current, slug]);
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    console.log(data);
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <section className="min-h-screen flex items-center justify-center bg-sand py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-xl text-center px-8"
        >
          <div className="w-20 h-20 bg-teal mx-auto mb-8 flex items-center justify-center">
            <Check className="text-white" size={40} />
          </div>
          <h2 className="text-navy mb-4">Thank You!</h2>
          <p className="text-navy-light font-body text-lg mb-8">
            Your trip inquiry has been received. One of our travel designers
            will contact you within 24 hours to begin crafting your perfect
            journey.
          </p>
          <a href="/" className="btn-primary">
            Return Home
          </a>
        </motion.div>
      </section>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1488085061387-422e29b40080?w=1920&q=80"
          alt="Plan your trip"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-navy/40 to-navy/80" />

        <div className="absolute inset-0 flex items-center justify-center text-center">
          <div className="container">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="section-tag inline-block mb-4"
            >
              Start Your Journey
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              Plan Your Trip
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto"
            >
              Share your travel dreams and our expert designers will craft your
              perfect journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="section bg-ivory">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                {/* Contact Information */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8"
                >
                  <h3 className="text-navy mb-6">Contact Information</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        First Name *
                      </label>
                      <input
                        {...register("firstName")}
                        className={errors.firstName ? "border-red-500" : ""}
                        placeholder="Your first name"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Last Name *
                      </label>
                      <input
                        {...register("lastName")}
                        className={errors.lastName ? "border-red-500" : ""}
                        placeholder="Your last name"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.lastName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Email Address *
                      </label>
                      <input
                        {...register("email")}
                        type="email"
                        className={errors.email ? "border-red-500" : ""}
                        placeholder="your@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        {...register("phone")}
                        type="tel"
                        placeholder="+1 (234) 567-8900"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Destinations */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8"
                >
                  <h3 className="text-navy mb-2">Where Would You Like to Go?</h3>
                  <p className="text-navy-light font-body mb-6">
                    Select all destinations that interest you.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                    {destinations.map((dest) => (
                      <button
                        key={dest.slug}
                        type="button"
                        onClick={() => toggleDestination(dest.slug)}
                        className={`p-3 text-left text-sm font-body transition-all ${
                          selectedDestinations.includes(dest.slug)
                            ? "bg-teal text-white"
                            : "bg-sand text-navy hover:bg-sand-medium"
                        }`}
                      >
                        {dest.name}
                      </button>
                    ))}
                  </div>
                  {errors.destinations && (
                    <p className="text-red-500 text-sm mt-2">
                      {errors.destinations.message}
                    </p>
                  )}
                </motion.div>

                {/* Experience Types */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8"
                >
                  <h3 className="text-navy mb-2">What Experiences Interest You?</h3>
                  <p className="text-navy-light font-body mb-6">
                    Select any that appeal to you.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {experiences.map((exp) => (
                      <button
                        key={exp.slug}
                        type="button"
                        onClick={() => toggleExperience(exp.slug)}
                        className={`p-3 text-left text-sm font-body transition-all ${
                          selectedExperiences.includes(exp.slug)
                            ? "bg-gold text-white"
                            : "bg-sand text-navy hover:bg-sand-medium"
                        }`}
                      >
                        {exp.name}
                      </button>
                    ))}
                  </div>
                </motion.div>

                {/* Trip Details */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8"
                >
                  <h3 className="text-navy mb-6">Trip Details</h3>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Preferred Travel Dates *
                      </label>
                      <input
                        {...register("travelDates")}
                        placeholder="e.g., March 2025, flexible"
                        className={errors.travelDates ? "border-red-500" : ""}
                      />
                      {errors.travelDates && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.travelDates.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Trip Duration *
                      </label>
                      <select
                        {...register("duration")}
                        className={errors.duration ? "border-red-500" : ""}
                      >
                        <option value="">Select duration</option>
                        {durationOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.duration && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.duration.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Number of Travelers *
                      </label>
                      <select
                        {...register("travelers")}
                        className={errors.travelers ? "border-red-500" : ""}
                      >
                        <option value="">Select travelers</option>
                        {travelerOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                      {errors.travelers && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors.travelers.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Budget Range (per person)
                      </label>
                      <select {...register("budget")}>
                        <option value="">Select budget</option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label className="block text-navy font-body font-medium mb-2">
                        Special Occasion
                      </label>
                      <select {...register("occasion")}>
                        <option value="">Select occasion (optional)</option>
                        {occasionOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </motion.div>

                {/* Additional Details */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-8"
                >
                  <h3 className="text-navy mb-6">Tell Us More</h3>
                  <div className="space-y-6">
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Interests & Preferences
                      </label>
                      <textarea
                        {...register("interests")}
                        rows={3}
                        placeholder="Tell us about your interests: food & wine, adventure activities, art & culture, relaxation, wildlife, photography, etc."
                      />
                    </div>
                    <div>
                      <label className="block text-navy font-body font-medium mb-2">
                        Additional Notes or Questions
                      </label>
                      <textarea
                        {...register("message")}
                        rows={4}
                        placeholder="Any specific requests, must-have experiences, or questions for our team..."
                      />
                    </div>
                    <div className="flex items-center gap-3">
                      <input
                        {...register("newsletter")}
                        type="checkbox"
                        id="newsletter"
                        className="w-5 h-5"
                      />
                      <label
                        htmlFor="newsletter"
                        className="text-navy-light font-body text-sm"
                      >
                        Subscribe to our newsletter for travel inspiration and
                        exclusive offers
                      </label>
                    </div>
                  </div>
                </motion.div>

                {/* Submit */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    isLoading={isSubmitting}
                    icon={<Send size={18} />}
                    className="w-full sm:w-auto"
                  >
                    Submit Inquiry
                  </Button>
                  <p className="text-navy-light text-sm font-body mt-4">
                    By submitting, you agree to our privacy policy. We&apos;ll
                    respond within 24 hours.
                  </p>
                </motion.div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-navy p-8 sticky top-28"
              >
                <h4 className="text-white text-xl mb-6">Need Help?</h4>
                <p className="text-white/70 font-body mb-8">
                  Our travel experts are here to assist you with any questions.
                </p>

                <div className="space-y-6 mb-8">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-gold flex items-center justify-center">
                      <Phone className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body">Call us</p>
                      <p className="text-white font-body group-hover:text-gold transition-colors">
                        +1 (234) 567-890
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:hello@wanderluxjourneys.com"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-teal flex items-center justify-center">
                      <Mail className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body">Email us</p>
                      <p className="text-white font-body group-hover:text-gold transition-colors">
                        hello@wanderluxjourneys.com
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 bg-green-500 flex items-center justify-center">
                      <MessageCircle className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-white/60 text-sm font-body">WhatsApp</p>
                      <p className="text-white font-body group-hover:text-gold transition-colors">
                        Quick response
                      </p>
                    </div>
                  </a>
                </div>

                <div className="border-t border-white/20 pt-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Sparkles className="text-gold" size={20} />
                    <p className="text-white font-body font-medium">
                      What to expect:
                    </p>
                  </div>
                  <ul className="space-y-2 text-white/70 font-body text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="text-gold" size={16} />
                      Response within 24 hours
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-gold" size={16} />
                      Personalized consultation call
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-gold" size={16} />
                      Custom itinerary proposal
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="text-gold" size={16} />
                      No obligation to book
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
