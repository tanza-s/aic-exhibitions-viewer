"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

import { Exhibition } from "./api/types";

// Sanitize the HTML string. Only used in short_description, which is provided by AIC
// and occassionaly includes HTML.
const SanitizedContent = ({ htmlString }: { htmlString: string }) => {
  const [cleanedContent, setCleanedContent] = useState("");

  useEffect(() => {
    const cleanHTML = DOMPurify.sanitize(htmlString, {});
    setCleanedContent(cleanHTML);
  }, [htmlString]);

  return (
    <div
      className="text-lg text-gray-700 dark:text-gray-300"
      dangerouslySetInnerHTML={{ __html: cleanedContent }}
    />
  );
};

export const ExhibitionHit = ({ exhibition }: { exhibition: Exhibition }) => {
  const [showArtworks, setShowArtworks] = useState(false);

  const handleShowArtworks = () => {
    setShowArtworks((prev) => !prev);
  };

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">
        {exhibition.title}
      </h3>
      <p className="text-lg text-gray-600 dark:text-gray-400">
        {exhibition.start_date} - {exhibition.end_date}
      </p>
      {exhibition.image_url && (
        <div className="relative w-full aspect-video max-w-2xl rounded-lg overflow-hidden shadow-md">
          <Image
            src={exhibition.image_url}
            alt={exhibition.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="text-lg text-gray-700 dark:text-gray-300">
        <SanitizedContent htmlString={exhibition.description} />
      </div>
      {exhibition.web_url && (
        <a
          href={exhibition.web_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl hover:underline inline-flex items-center gap-1 w-fit font-medium"
        >
          View on AIC Website
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      )}

      {exhibition.artworks.length > 0 && (
        <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
          <h4 className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-3">
            Artworks in this Exhibition
          </h4>
          <button
            onClick={handleShowArtworks}
            className="px-4 py-2 bg-[#b50938] text-white rounded-md hover:bg-[#8f0730] transition-colors duration-200 shadow-sm font-medium"
          >
            {showArtworks ? "Hide" : "Show"} Artworks
          </button>
          {showArtworks && (
            <ul className="mt-4 space-y-2 list-disc list-inside">
              {exhibition.artworks.map((artwork) => (
                <li
                  key={artwork.id}
                  className="text-gray-700 dark:text-gray-300 list-none"
                >
                    <p className="font-medium">{artwork.title}</p>
                  {artwork.artist_display && (
                    <span className="text-gray-600 dark:text-gray-400">
                      {" "}
                      {artwork.artist_display}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
