export const FILTER_CATEGORIES = {
  contentType: ['Posts', 'Videos', 'Shorts', 'Protests', 'News', 'Discussions'],
  topics: [
    // Politics & Governance
    'Digital Rights',
    'Governance',
    'Tech Policy',
    'Privacy',
    'Education',
    'Activism',
    'Elections',
    'Public Policy',
    
    // Technology
    'Artificial Intelligence',
    'Cybersecurity',
    'Digital Infrastructure',
    'Smart Cities',
    'Innovation',
    'Blockchain',
    
    // Society & Culture
    'Digital Culture',
    'Social Impact',
    'Community',
    'Digital Inclusion',
    'Rural Development',
    
    // Environment & Sustainability
    'Climate Tech',
    'Green Technology',
    'Sustainable Development',
    
    // Business & Economy
    'Digital Economy',
    'Startups',
    'Digital Banking',
    'E-commerce',
    
    // Health & Wellness
    'Digital Health',
    'Telemedicine',
    'Mental Health',
    
    // Media & Entertainment
    'Digital Media',
    'Gaming',
    'Social Media',
    
    // Education & Skills
    'Digital Literacy',
    'Online Learning',
    'Skill Development'
  ],
  location: ['Global', 'Local', 'National', 'Regional', 'City-specific'],
  language: [
    'English',
    'Hindi',
    'Bengali',
    'Tamil',
    'Telugu',
    'Marathi',
    'Gujarati',
    'Kannada',
    'Malayalam',
    'Punjabi'
  ],
  sortBy: [
    'Latest',
    'Most Popular',
    'Most Discussed',
    'Trending',
    'Most Impactful',
    'Verified First'
  ]
} as const;