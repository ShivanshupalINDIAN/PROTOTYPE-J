import React from 'react';
import { ShortVideo } from './ShortVideo';
import type { Short } from '../../types';

interface ShortsGridProps {
  shorts: Short[];
}

export function ShortsGrid({ shorts }: ShortsGridProps) {
  return (
    <div className="flex flex-col gap-4 max-w-7xl mx-auto">
      {shorts.map((short) => (
        <ShortVideo key={short.id} short={short} />
      ))}
    </div>
  );
}
