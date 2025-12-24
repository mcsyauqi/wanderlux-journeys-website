"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, User } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { getFeaturedBlogPosts } from "@/lib/data";

export default function BlogPreview() {
  const posts = getFeaturedBlogPosts();

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeader
          tag="Travel Inspiration"
          title="Stories & Insights"
          subtitle="Discover travel tips, hidden gems, and inspiring stories from our journeys around the world."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.slice(0, 3).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-ivory p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <Link href={`/blog/${post.slug}`}>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden mb-6">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    unoptimized
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 bg-teal text-white text-xs font-body font-semibold uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-4 text-navy-light text-sm font-body mb-3">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <User size={14} />
                    {post.author}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-navy text-xl mb-3 group-hover:text-teal transition-colors px-1">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-navy-light font-body text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>

                {/* CTA */}
                <span className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider group-hover:text-teal-dark transition-colors">
                  Read More
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link href="/blog" className="btn-secondary">
            View All Articles
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
