
import React, { useEffect, useState } from "react";
import axios from "axios";

const GalleryDashboard = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    const res = await axios.get("https://painter-website-1.onrender.com/api/gallery");
    setImages(res.data);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);
    await axios.post("https://painter-website-1.onrender.com/api/gallery/upload", formData);
    fetchImages();
    setName("");
    setFile(null);
  };

  const handleDelete = async (id) => {
    await axios.delete(`https://painter-website-1.onrender.com/api/gallery/${id}`);
    fetchImages();
  };

  const handleEdit = async (id, newName) => {
    await axios.put(`https://painter-website-1.onrender.com/api/gallery/${id}`, { name: newName });
    fetchImages();
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Upload New Image</h2>
      <input
        type="text"
        placeholder="Image name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-1 mr-2"
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} className="ml-2 px-4 py-1 bg-blue-500 text-white">
        Upload
      </button>

      <h3 className="text-lg mt-6">Gallery</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-2">
        {images.map((img) => (
          <div key={img._id} className="border p-2 rounded">
            <img src={`https://painter-website-1.onrender.com${img.imageUrl}`} alt={img.name} className="w-full h-32 object-cover mb-2" />
            <input
              type="text"
              defaultValue={img.name}
              onBlur={(e) => handleEdit(img._id, e.target.value)}
              className="w-full border p-1"
            />
            <button
              onClick={() => handleDelete(img._id)}
              className="mt-1 bg-red-500 text-white w-full py-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryDashboard;
