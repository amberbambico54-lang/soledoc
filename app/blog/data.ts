export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  // Content type
  type: "foot-health" | "footwear-guide" | "shoe-review" | "news";
  typeLabel: string;
  // Conditions
  conditions: string[];
  // Shoe type
  shoeTypes: string[];
  // Audience
  audiences: string[];
  // Legacy (kept for category page routing)
  categorySlug: string;
  readTime: string;
  date: string;
  img: string;
  featured?: boolean;
  // For shoe reviews
  brand?: string;
};

export const articles: Article[] = [
  // ── FOOTWEAR GUIDES ──────────────────────────────────────────
  {
    slug: "best-shoes-for-nurses",
    title: "Best Shoes for Nurses: A Podiatrist's Top Picks for 2025",
    excerpt: "After 12-hour shifts, your feet deserve serious support. Dr. Saylee reviews the top podiatrist-approved nursing shoes that combine clinical performance with all-day comfort.",
    type: "footwear-guide",
    typeLabel: "Footwear Guide",
    conditions: [],
    shoeTypes: ["work-shoes"],
    audiences: ["nurses", "healthcare"],
    categorySlug: "footwear-guides",
    readTime: "9 min read",
    date: "June 2, 2025",
    img: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=700&q=80",
    featured: true,
  },
  {
    slug: "best-walking-shoes-for-flat-feet",
    title: "Best Walking Shoes for Flat Feet in 2025",
    excerpt: "Motion control, arch support, and stability — Dr. Saylee breaks down the best walking shoes for people with flat feet or overpronation.",
    type: "footwear-guide",
    typeLabel: "Footwear Guide",
    conditions: ["flat-feet"],
    shoeTypes: ["walking-shoes"],
    audiences: ["general"],
    categorySlug: "footwear-guides",
    readTime: "8 min read",
    date: "May 15, 2025",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&q=80",
  },
  {
    slug: "best-shoes-for-teachers",
    title: "Best Shoes for Teachers: Stand & Teach All Day Pain-Free",
    excerpt: "Teachers spend 6+ hours on their feet daily. Dr. Saylee reviews the most comfortable, podiatrist-approved shoes for classroom wear.",
    type: "footwear-guide",
    typeLabel: "Footwear Guide",
    conditions: [],
    shoeTypes: ["work-shoes"],
    audiences: ["teachers"],
    categorySlug: "footwear-guides",
    readTime: "6 min read",
    date: "May 5, 2025",
    img: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=700&q=80",
  },
  {
    slug: "best-shoes-for-standing-all-day",
    title: "Best Shoes for Standing All Day: Podiatrist-Vetted Picks",
    excerpt: "Whether you're a nurse, retail worker, or chef — these are the shoes Dr. Saylee recommends for anyone on their feet for 8+ hours.",
    type: "footwear-guide",
    typeLabel: "Footwear Guide",
    conditions: [],
    shoeTypes: ["work-shoes"],
    audiences: ["nurses", "healthcare", "general"],
    categorySlug: "footwear-guides",
    readTime: "7 min read",
    date: "April 20, 2025",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=700&q=80",
  },
  {
    slug: "best-walking-shoes-for-plantar-fasciitis",
    title: "Best Walking Shoes for Plantar Fasciitis in 2025",
    excerpt: "The right walking shoe can dramatically reduce plantar fasciitis pain. Dr. Saylee reviews the top picks with the arch support and cushioning you need.",
    type: "footwear-guide",
    typeLabel: "Footwear Guide",
    conditions: ["plantar-fasciitis"],
    shoeTypes: ["walking-shoes"],
    audiences: ["general"],
    categorySlug: "footwear-guides",
    readTime: "9 min read",
    date: "April 10, 2025",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
  },
  {
    slug: "best-running-shoes-for-flat-feet",
    title: "Best Running Shoes for Flat Feet: Motion Control That Works",
    excerpt: "Flat feet and running don't have to conflict. Dr. Saylee picks the best motion-control and stability running shoes for overpronators.",
    type: "footwear-guide",
    typeLabel: "Footwear Guide",
    conditions: ["flat-feet"],
    shoeTypes: ["running-shoes"],
    audiences: ["general"],
    categorySlug: "footwear-guides",
    readTime: "8 min read",
    date: "March 28, 2025",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80",
  },

  // ── FOOT HEALTH ───────────────────────────────────────────────
  {
    slug: "plantar-fasciitis-explained",
    title: "Plantar Fasciitis Explained: Causes, Symptoms & Treatment",
    excerpt: "Stabbing heel pain when you take your first steps in the morning? You likely have plantar fasciitis. Here's what's happening and how to fix it.",
    type: "foot-health",
    typeLabel: "Foot Health",
    conditions: ["plantar-fasciitis", "heel-pain"],
    shoeTypes: [],
    audiences: ["general"],
    categorySlug: "foot-health",
    readTime: "7 min read",
    date: "May 28, 2025",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=700&q=80",
    featured: true,
  },
  {
    slug: "how-to-prevent-bunions",
    title: "How to Prevent Bunions From Getting Worse",
    excerpt: "Early intervention makes a major difference. Learn which footwear habits protect your toe joints and slow the progression of bunions.",
    type: "foot-health",
    typeLabel: "Foot Health",
    conditions: ["bunions"],
    shoeTypes: [],
    audiences: ["general"],
    categorySlug: "foot-health",
    readTime: "6 min read",
    date: "May 20, 2025",
    img: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=700&q=80",
  },
  {
    slug: "heel-pain-causes",
    title: "Why Your Heel Hurts: 6 Common Causes Explained by a Podiatrist",
    excerpt: "Not all heel pain is plantar fasciitis. Dr. Saylee walks through the 6 most common causes of heel pain and how each one is treated.",
    type: "foot-health",
    typeLabel: "Foot Health",
    conditions: ["heel-pain", "plantar-fasciitis"],
    shoeTypes: [],
    audiences: ["general"],
    categorySlug: "foot-health",
    readTime: "8 min read",
    date: "May 10, 2025",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",
  },
  {
    slug: "signs-you-have-flat-feet",
    title: "Signs You Have Flat Feet — and What To Do About It",
    excerpt: "Flat feet affect up to 30% of people. Most don't know they have them until pain starts. Here's how to tell and what your options are.",
    type: "foot-health",
    typeLabel: "Foot Health",
    conditions: ["flat-feet"],
    shoeTypes: [],
    audiences: ["general"],
    categorySlug: "foot-health",
    readTime: "5 min read",
    date: "April 28, 2025",
    img: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=700&q=80",
  },
  {
    slug: "neuroma-explained",
    title: "Morton's Neuroma: What It Is, Why It Hurts & How to Treat It",
    excerpt: "That burning, tingling pain in the ball of your foot? It could be a neuroma. Dr. Saylee explains what's happening and what actually helps.",
    type: "foot-health",
    typeLabel: "Foot Health",
    conditions: ["neuroma"],
    shoeTypes: [],
    audiences: ["general"],
    categorySlug: "foot-health",
    readTime: "6 min read",
    date: "April 15, 2025",
    img: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=700&q=80",
  },

  // ── SHOE REVIEWS ──────────────────────────────────────────────
  {
    slug: "hoka-bondi-9-review",
    title: "Hoka Bondi 9 Review: Is It Worth It for Nurses & Healthcare Workers?",
    excerpt: "The Bondi 9 is one of the most-recommended shoes in healthcare settings. Dr. Saylee puts it to the clinical test to see if it lives up to the hype.",
    type: "shoe-review",
    typeLabel: "Shoe Review",
    conditions: [],
    shoeTypes: ["walking-shoes", "work-shoes"],
    audiences: ["nurses", "healthcare"],
    categorySlug: "shoe-reviews",
    readTime: "7 min read",
    date: "June 5, 2025",
    img: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?w=700&q=80",
    brand: "Hoka",
    featured: true,
  },
  {
    slug: "brooks-ghost-16-review",
    title: "Brooks Ghost 16 Review: Best Everyday Running Shoe?",
    excerpt: "The Brooks Ghost 16 is a perennial podiatrist favorite. Dr. Saylee reviews the latest update and whether it's still worth it for daily wear.",
    type: "shoe-review",
    typeLabel: "Shoe Review",
    conditions: ["plantar-fasciitis"],
    shoeTypes: ["running-shoes"],
    audiences: ["general"],
    categorySlug: "shoe-reviews",
    readTime: "6 min read",
    date: "May 25, 2025",
    img: "https://images.unsplash.com/photo-1514989771522-458c9b6c035a?w=700&q=80",
    brand: "Brooks",
  },
  {
    slug: "new-balance-990v6-review",
    title: "New Balance 990v6 Review: Style Meets Podiatrist-Approved Support",
    excerpt: "The 990v6 is the rare shoe that's both fashion-forward and biomechanically excellent. Here's Dr. Saylee's full verdict.",
    type: "shoe-review",
    typeLabel: "Shoe Review",
    conditions: ["flat-feet"],
    shoeTypes: ["walking-shoes", "sneakers"],
    audiences: ["general"],
    categorySlug: "shoe-reviews",
    readTime: "5 min read",
    date: "May 18, 2025",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=700&q=80",
    brand: "New Balance",
  },

  // ── NEWS & TRENDS ─────────────────────────────────────────────
  {
    slug: "max-cushion-shoes-worth-it",
    title: "Are Max Cushion Shoes Actually Worth It? A Podiatrist Weighs In",
    excerpt: "Maximum cushioning shoes have taken over running and lifestyle wear. But do they actually protect your feet — or are brands just selling comfort theater?",
    type: "news",
    typeLabel: "News & Trends",
    conditions: [],
    shoeTypes: ["running-shoes", "walking-shoes"],
    audiences: ["general"],
    categorySlug: "news",
    readTime: "6 min read",
    date: "June 8, 2025",
    img: "https://images.unsplash.com/photo-1561861422-a549073e547a?w=700&q=80",
    featured: true,
  },
  {
    slug: "tiktok-shoe-trends-explained",
    title: "TikTok Shoe Trends Explained By a Podiatrist",
    excerpt: "From barefoot shoes to chunky clogs, TikTok is full of footwear trends. Dr. Saylee breaks down which are actually good for your feet — and which to skip.",
    type: "news",
    typeLabel: "News & Trends",
    conditions: [],
    shoeTypes: [],
    audiences: ["general"],
    categorySlug: "news",
    readTime: "5 min read",
    date: "June 1, 2025",
    img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=700&q=80",
  },
  {
    slug: "best-new-walking-shoes-2025",
    title: "The Best New Walking Shoes Launching in 2025",
    excerpt: "From Hoka to On Running to New Balance — Dr. Saylee previews the most promising new walking shoe releases of the year.",
    type: "news",
    typeLabel: "News & Trends",
    conditions: [],
    shoeTypes: ["walking-shoes"],
    audiences: ["general"],
    categorySlug: "news",
    readTime: "4 min read",
    date: "May 22, 2025",
    img: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=700&q=80",
  },
];

// ── FILTER TAXONOMY ───────────────────────────────────────────
export const contentTypes = [
  { label: "All", value: "all" },
  { label: "Foot Health", value: "foot-health" },
  { label: "Footwear Guides", value: "footwear-guide" },
  { label: "Shoe Reviews", value: "shoe-review" },
  { label: "News & Trends", value: "news" },
];

export const conditionFilters = [
  { label: "All Conditions", value: "all" },
  { label: "Plantar Fasciitis", value: "plantar-fasciitis" },
  { label: "Flat Feet", value: "flat-feet" },
  { label: "Bunions", value: "bunions" },
  { label: "Heel Pain", value: "heel-pain" },
  { label: "Neuroma", value: "neuroma" },
];

export const shoeTypeFilters = [
  { label: "All Types", value: "all" },
  { label: "Running", value: "running-shoes" },
  { label: "Walking", value: "walking-shoes" },
  { label: "Work Shoes", value: "work-shoes" },
  { label: "Sneakers", value: "sneakers" },
];

export const audienceFilters = [
  { label: "All Audiences", value: "all" },
  { label: "Nurses", value: "nurses" },
  { label: "Teachers", value: "teachers" },
  { label: "Healthcare", value: "healthcare" },
];

export const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Most Popular", value: "popular" },
  { label: "Editor's Picks", value: "featured" },
];

// Legacy category support
export const categories = [
  { label: "All", slug: "all" },
  { label: "Foot Health", slug: "foot-health" },
  { label: "Footwear Guides", slug: "footwear-guides" },
  { label: "Shoe Reviews", slug: "shoe-reviews" },
  { label: "News & Trends", slug: "news" },
];
