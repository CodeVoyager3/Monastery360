// src/components/AudioPlayer.jsx

import React from 'react';

export default function AudioPlayer({ isVisible, onClose, audioSrc, title }) {
  
  // If not visible, render nothing.
  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-on-scroll animate-fade-in-up">
      <div className="bg-white/95 backdrop-blur-lg border border-amber-300/50 rounded-2xl shadow-2xl max-w-2xl mx-auto p-6">
        
        {/* Header with title and close button */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="font-bold text-red-900 text-lg">Audio Guide</p>
            <p className="text-sm text-gray-700">{title} Narrative</p>
          </div>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-red-600 p-2 rounded-full hover:bg-white/50 transition-colors"
            aria-label="Close audio player"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Audio Element with Controls - WITH COMPREHENSIVE DEBUGGING */}
        <audio
          autoPlay  
          src={audioSrc}
          controls
          preload="metadata"
          className="w-full"
          style={{
            height: '54px',
            outline: 'none',
            borderRadius: '8px',
            display: 'block',
            visibility: 'visible',
            opacity: 100,
            backgroundColor: 'black',
          }}
          onLoadStart={() => console.log('🎵 Loading audio from:', audioSrc)}
          onLoadedMetadata={() => console.log('✅ Audio metadata loaded successfully')}
          onCanPlay={() => console.log('✅ Audio is ready to play')}
          onPlay={() => console.log('▶️ Audio started playing')}
          onPause={() => console.log('⏸️ Audio paused')}
          onError={(e) => {
            console.error('❌ Audio failed to load:', e);
            console.error('❌ Error details:', e.target.error);
            console.log('❌ Attempted to load:', audioSrc);
          }}
          onEmptied={() => console.log('⚠️ Audio element was emptied')}
          onStalled={() => console.log('⚠️ Audio loading stalled')}
        >
          Your browser does not support the audio element.
        </audio>

        {/* Debug info and test button */}
        <div className="mt-3 p-3 bg-gray-100 rounded text-xs">
          <p><strong>Debug Info:</strong></p>
          <p>Audio Source: {audioSrc}</p>
          <button 
            onClick={() => {
              // Test if file exists by trying to fetch it
              fetch(audioSrc)
                .then(response => {
                  console.log('File fetch response:', response.status);
                  if (response.ok) {
                    console.log('✅ Audio file exists and is accessible');
                  } else {
                    console.log('❌ Audio file returned status:', response.status);
                  }
                })
                .catch(err => console.log('❌ Failed to fetch audio file:', err));
            }}
            className="mt-2 bg-blue-500 text-white px-3 py-1 rounded text-xs hover:bg-blue-600"
          >
            Test File Access
          </button>
        </div>

        {/* Optional: Add a fallback message for debugging */}
        <p className="text-xs text-gray-500 mt-2 text-center">
          If audio doesn't load, ensure the file exists at: {audioSrc}
        </p>
      </div>
    </div>
  );
}