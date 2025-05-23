import { useEffect, useState } from "react";

const GalleryPage = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null); // For zoom

  useEffect(() => {
    const fetchGallery = async () => {
      try {
        const res = await fetch("https://painter-website-1.onrender.com/api/gallery", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setImages(data);
      } catch (error) {
        console.error("Error fetching gallery:", error);
      }
    };

    fetchGallery();
  }, []);

  return (
    <>
      <div className="max-w-6xl mx-auto p-4 mt-8">
        <h1 className="text-3xl font-bold text-center mb-8">Gallery</h1>
        {images.length === 0 ? (
          <p className="text-center text-gray-500">No images to show yet.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img) => (
              <div
                key={img._id}
                className="border rounded shadow p-2 cursor-pointer"
                onClick={() => setSelectedImage(`https://painter-website-1.onrender.com${img.imageUrl}`)}
              >
                <img
                  src={`https://painter-website-1.onrender.com${img.imageUrl}`}
                  alt={img.name}
                  className="w-full h-48 object-cover rounded mb-2"
                />
                <h3 className="text-center font-semibold">{img.name}</h3>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Zoom Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full px-4">
            <button
              className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Zoomed"
              className="w-full max-h-[90vh] object-contain rounded"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;
