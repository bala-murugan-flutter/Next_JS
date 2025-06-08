import React from "react";

const clients = [
  {
    name: "Client A",
    rating: 4.5,
    videoUrl: "https://youtu.be/1EPsiJeWFgM",
    source: "Mobile App",
    phone: "+91 9876543210",
  },
];

// Function to extract VIDEO_ID from full YouTube URL
const extractVideoId = (url: string): string => {
  const regExp = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=)([^#\&\?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : "";
};

const ClientListPage = () => {
  return (
    <div className="min-h-screen p-6 pt-20 flex flex-col items-center text-white">
      <h1 className="text-4xl font-bold mb-8 text-center bg-gradient-to-r from-purple-500 to-cyan-500 text-transparent bg-clip-text">Igristechnos Reviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {clients.map((client, index) => {
          const videoId = extractVideoId(client.videoUrl);
          const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=0&mute=1&loop=1&playlist=${videoId}&rel=0`;

          return (
            <div
              key={index}
              className="backdrop-blur bg-white/10 border border-white/20 rounded-lg shadow-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <h2 className="text-2xl font-semibold mb-2">{client.name}</h2>
              <p className="mb-1">
                <span className="font-bold">Rating:</span> ⭐ {client.rating}/5
              </p>
              <p className="mb-1">
                <span className="font-bold">Source:</span> {client.source}
              </p>
              <p className="mb-4">
                <span className="font-bold">Phone:</span>{" "}
                <a href={`tel:${client.phone}`} className="text-blue-400 hover:underline">
                  {client.phone}
                </a>
              </p>

              {/* Responsive Video */}
              <div className="w-full relative" style={{ paddingBottom: "56.25%", height: 0 }}>
                <iframe
                  src={embedUrl}
                  title={`Review from ${client.name}`}
                  className="absolute top-0 left-0 w-full h-full rounded-md"
                  frameBorder="0"
                  allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClientListPage;
