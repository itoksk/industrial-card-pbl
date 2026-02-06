'use client';

import { useState } from 'react';

interface PromptCardProps {
  title: string;
  description: string;
  prompt: string;
  color?: 'purple' | 'orange' | 'blue' | 'green' | 'yellow' | 'red';
}

const colorMap = {
  purple: '#a855f7',
  orange: '#f97316',
  blue: '#3b82f6',
  green: '#22c55e',
  yellow: '#fbbf24',
  red: '#ef4444',
};

export default function PromptCard({
  title,
  description,
  prompt,
  color = 'orange',
}: PromptCardProps) {
  const [showToast, setShowToast] = useState(false);

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <>
      <div
        onClick={handleClick}
        className="content-card cursor-pointer group relative"
        style={{
          borderLeft: `4px solid ${colorMap[color]}`,
        }}
      >
        <div className="mb-3">
          <h3 className="text-xl font-bold mb-2 text-theme group-hover:text-[#f97316] transition-colors">
            {title}
          </h3>
          <p className="text-sm text-theme-muted">{description}</p>
        </div>

        <div
          className="code-block mt-4 max-h-48 overflow-y-auto"
          style={{
            cursor: 'pointer',
          }}
        >
          <pre className="text-xs sm:text-sm">
            <code>{prompt}</code>
          </pre>
        </div>

        <div className="mt-3 text-xs text-theme-muted flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
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
              d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
          <span>Click to copy</span>
        </div>
      </div>

      {showToast && (
        <div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[1000] animate-fade-in-up"
          style={{
            animation: 'fadeInUp 0.3s ease-out',
          }}
        >
          <div
            className="px-6 py-3 rounded-lg shadow-2xl flex items-center space-x-3"
            style={{
              background: 'rgba(20, 20, 24, 0.95)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(249, 115, 22, 0.3)',
            }}
          >
            <svg
              className="w-5 h-5 text-green-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-sm font-medium text-white">
              Copied to clipboard!
            </span>
          </div>
        </div>
      )}
    </>
  );
}
