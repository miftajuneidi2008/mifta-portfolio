"use client";
import React from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { contactInfo } from "@/data/data";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useForm, Controller, SubmitHandler } from "react-hook-form";

import { Send } from "lucide-react";
import {
  contactFormSchema,
  ContactFormSchemaType,
} from "@/schema/ContactSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { sendMail } from "@/lib/Email";
import { email } from "zod";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormSchemaType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    mode: "onChange",
  });
  const onSubmit = async (data: ContactFormSchemaType) => {
    const { name, email, subject, message } = data;
    sendMail(email,subject,message)
    toast.success("Message sent successfully!");
  };
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center gap-2 sm:h-screen">
      <div className="title-container mb-10">
        <h3 className="title">Get in Touch</h3>
        <p className="max-w-xl text-center font-semibold text-[#666666]">
          Have a project in mind or just want to chat? I'd love to hear from
          you. Send me a message and I'll respond as soon as possible.
        </p>
      </div>

      <div className="mx-auto w-full max-w-3xl">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full"
        >
          <Card className="border-2 border-slate-200 p-8 shadow-xl">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-slate-700">
                    Your Name *
                  </label>
                  <Input
                    {...register("name")}
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full"
                  />
                  {errors.name && (
                    <p className="text-red-500">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="email" className="mb-2 block text-slate-700">
                    Email Address *
                  </label>
                  <Input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    
                    className="w-full"
                  />
                  {errors.email && (
                    <p className="text-red-500">{errors.email.message}</p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-slate-700">
                  Subject *
                </label>
                <Input
                  {...register("subject")}
                  id="subject"
                  type="text"
                  placeholder="What's this about?"
                  className="w-full"
                />
                {errors.subject && (
                  <p className="text-red-500">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-slate-700">
                  Message *
                </label>
                <Textarea
                  {...register("message")}
                  id="message"
                  placeholder="Tell me more about your project..."
                  rows={6}
                  className="w-full resize-none"
                />
                {errors.message && (
                  <p className="text-red-500">{errors.message.message}</p>
                )}
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  type="submit"
                  className="w-full bg-linear-to-r from-blue-600 to-purple-600 px-8 py-6 text-white hover:from-blue-700 hover:to-purple-700 sm:w-auto cursor-pointer"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </motion.div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
