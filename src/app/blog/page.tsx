"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";

const categories = [
  "All",
  "Travel Philosophy",
  "Destinations",
  "Sustainability",
  "Honeymoons",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesCategory =
        activeCategory === "All" || post.category === activeCategory;
      const matchesSearch =
        searchQuery === "" ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const featuredPost = blogPosts.find((post) => post.featured);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1920&q=80"
          alt="Travel blog"
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
              Travel Inspiration
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-white mb-4"
            >
              Stories & Insights
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 text-xl font-body max-w-2xl mx-auto"
            >
              Discover travel tips, hidden gems, and inspiring stories from our
              journeys around the world.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="section bg-sand">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="grid lg:grid-cols-2 gap-8 items-center"
            >
              <div className="relative aspect-video lg:aspect-[4/3] overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 left-4 px-3 py-1.5 bg-gold text-white text-xs font-body font-semibold uppercase tracking-wider">
                  Featured
                </div>
              </div>

              <div className="py-4">
                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="group block"
                >
                  <span className="text-teal text-sm font-body uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-navy mt-2 mb-4 group-hover:text-teal transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-navy-light font-body text-lg mb-6">
                    {featuredPost.excerpt}
                  </p>

                  <div className="flex items-center gap-6 text-navy-light text-sm font-body mb-6">
                    <span className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      {formatDate(featuredPost.date)}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <User size={14} />
                      {featuredPost.author}
                    </span>
                  </div>

                  <span className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider group-hover:text-teal-dark transition-colors">
                    Read Article
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Filters & Posts */}
      <section className="section bg-ivory">
        <div className="container">
          {/* Filters */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            {/* Search */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-3 px-4 pl-11 bg-white border-sand-medium"
              />
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-light"
                size={18}
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 text-sm font-body font-medium transition-all ${
                    activeCategory === category
                      ? "bg-teal text-white"
                      : "bg-white text-navy hover:bg-sand"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white"
              >
                <Link href={`/blog/${post.slug}`}>
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1.5 bg-teal text-white text-xs font-body font-semibold uppercase tracking-wider">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
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
                    <h3 className="text-navy text-xl mb-3 group-hover:text-teal transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-navy-light font-body text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="flex items-center gap-1 px-2 py-1 bg-sand text-navy-light text-xs font-body"
                        >
                          <Tag size={10} />
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <span className="inline-flex items-center gap-2 text-teal font-body font-semibold text-sm uppercase tracking-wider group-hover:text-teal-dark transition-colors">
                      Read More
                      <ArrowRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-navy-light text-lg font-body">
                No articles found matching your criteria.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("All");
                  setSearchQuery("");
                }}
                className="mt-4 btn-secondary"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80"
          alt="Newsletter"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-navy/80" />

        <div className="container relative text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white mb-4"
          >
            Stay Inspired
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 text-lg font-body mb-8 max-w-xl mx-auto"
          >
            Subscribe to receive exclusive travel inspiration, insider tips, and
            special offers curated for discerning travelers.
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:border-gold"
            />
            <button type="submit" className="btn-primary whitespace-nowrap">
              Subscribe
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
}
