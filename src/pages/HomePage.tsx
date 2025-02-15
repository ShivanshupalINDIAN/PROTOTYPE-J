import React, { useState } from 'react';
import { VideoCard } from '../components/home/VideoCard';
import { ShortsPreview } from '../components/home/ShortsPreview';
import { CategoryFilter } from '../components/categories/CategoryFilter';
import { VideoEmbed } from '../components/video/VideoEmbed';
import { MOCK_VIDEOS } from '../data/mockVideos';
import { MOCK_SHORTS } from '../data/mockShorts';

const FEATURED_VIDEOS = [
  {
    id: 'Sq96sTtRQdE',
    title: 'Digital Rights and Privacy',
    channelName: 'Digital Rights Channel',
    channelLogo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=64'
  },
  {
    id: 'YmCBBZcbkh8',
    title: 'Community Engagement',
    channelName: 'Community Watch',
    channelLogo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64'
  },
  {
    id: 'vz-sSSgrDQw',
    title: 'Digital Activism',
    channelName: 'Activism Today',
    channelLogo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=64'
  }
];

export function HomePage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const filteredVideos = selectedCategories.length === 0
    ? MOCK_VIDEOS
    : MOCK_VIDEOS.filter(video =>
        video.categories.some(cat => selectedCategories.includes(cat))
      );

  const filteredShorts = selectedCategories.length === 0
    ? MOCK_SHORTS
    : MOCK_SHORTS.filter(short =>
        short.categories.some(cat => selectedCategories.includes(cat))
      );

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <CategoryFilter
        selectedCategories={selectedCategories}
        onToggleCategory={toggleCategory}
      />

      <section className="space-y-8">
        <h2 className="text-2xl font-bold mb-4 text-white">Featured Videos</h2>
        {FEATURED_VIDEOS.map((video, index) => (
          <VideoEmbed
            key={video.id}
            videoId={video.id}
            title={video.title}
            channelName={video.channelName}
            channelLogo={video.channelLogo}
            isPrimary={index === 0}
          />
        ))}
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4 text-white">Recommended</h2>
        <div className="space-y-6">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </section>

      <section>
        <ShortsPreview shorts={filteredShorts} />
      </section>
    </div>
  );
}