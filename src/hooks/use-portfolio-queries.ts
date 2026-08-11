"use client";

import { useQuery, useMutation } from "@tanstack/react-query";
import {
  profileData,
  skillCategories,
  experiences,
  projectsData,
  educationsData,
  servicesData
} from "@/data/portfolio-data";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function useProfileQuery() {
  return useQuery({
    queryKey: ["profile"],
    queryFn: async () => profileData,
  });
}

export function useSkillCategoriesQuery() {
  return useQuery({
    queryKey: ["skillCategories"],
    queryFn: async () => skillCategories,
  });
}

export function useExperiencesQuery() {
  return useQuery({
    queryKey: ["experiences"],
    queryFn: async () => experiences,
  });
}

export function useProjectsQuery() {
  return useQuery({
    queryKey: ["projects"],
    queryFn: async () => projectsData,
  });
}

export function useEducationsQuery() {
  return useQuery({
    queryKey: ["educations"],
    queryFn: async () => educationsData,
  });
}

export function useServicesQuery() {
  return useQuery({
    queryKey: ["services"],
    queryFn: async () => servicesData,
  });
}

export function useSendContactMutation() {
  return useMutation({
    mutationFn: async (formData: ContactFormData) => {
      const response = await fetch("https://formsubmit.co/ajax/lelisashashura@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Portfolio Contact: ${formData.subject}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please send an email directly to lelisashashura@gmail.com.");
      }

      return response.json();
    },
  });
}
