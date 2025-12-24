import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import {
  MapPin,
  Calendar,
  Cloud,
  DollarSign,
  Languages,
  Star,
  Check,
  ArrowRight,
  ChevronLeft,
} from "lucide-react";
import { destinations, getDestinationBySlug, experiences } from "@/lib/data";
import DestinationContent from "./DestinationContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return destinations.map((destination) => ({
    slug: destination.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return {
      title: "Destination Not Found",
    };
  }

  return {
    title: `${destination.name}, ${destination.country}`,
    description: destination.description,
  };
}

export default async function DestinationPage({ params }: PageProps) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    notFound();
  }

  const relatedExperiences = experiences.filter((exp) =>
    destination.experiences.some((e) => exp.slug.includes(e))
  );

  return <DestinationContent destination={destination} relatedExperiences={relatedExperiences} />;
}
