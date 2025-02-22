import { useState } from "react";
import { Tag } from "lucide-react";
import { CentralPolitics } from "./CentralPolitics";
import { LocalPolitics } from "./LocalPolitics";
import { StatePolitics } from "./StatePolitics";

const SHORTS_TAGS = [
  "All",
  "Local politics",
  "State politics",
  "Central politics",
] as const;

export function ShortsFilters() {
  const [selectedTag, setSelectedTag] = useState<string>("All");

  const onTagToggle = (tag: string) => {
    setSelectedTag(tag); // Ensure only one tag is selected at a time
  };

  return (
    <div className="" >
      {/* <div className="flex items-center gap-2 mb-4">
        <Tag className="h-5 w-5" />
        
      </div> */}
      <div className="flex flex-wrap gap-2 mb-4">
        {SHORTS_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagToggle(tag)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedTag === tag
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-300 hover:bg-gray-700"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Conditionally render components based on selected tag */}
      <div className="mt-4">
        {selectedTag === "Central politics" && <CentralPolitics />}
        {selectedTag === "Local politics" && <LocalPolitics />}
        {selectedTag === "State politics" && <StatePolitics />}
        {selectedTag === "All" && <CentralPolitics />}
      </div>
    </div>
  );
}
