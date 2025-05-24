import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../components/Common/Header";
import Footer from "../components/Common/Footer";

const DashboardPage = () => {
  const [images, setImages] = useState([]);
  const [name, setName] = useState("");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const fetchImages = async () => {
    try {
      const res = await fetch("https://painter-website-1.onrender.com/api/gallery", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setImages(data);
    } catch (error) {
      toast.error("Failed to fetch images.");
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/admin");
    } else {
      fetchImages();
    }
  }, []);

  const handleUpload = async () => {
    if (!file || !name) return toast.error("Please provide both image and name.");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("name", name);

    try {
      await fetch("https://painter-website-1.onrender.com/api/gallery/upload", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      toast.success("Image uploaded successfully!");
      setFile(null);
      setName("");
      fetchImages();
    } catch (err) {
      toast.error("Failed to upload image.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`https://painter-website-1.onrender.com/api/gallery/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      toast.success("Image deleted successfully!");
      fetchImages();
    } catch (err) {
      toast.error("Failed to delete image.");
    }
  };

  const handleEdit = async (id, newName) => {
    try {
      await fetch(`https://painter-website-1.onrender.com/api/gallery/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name: newName }),
      });
      toast.success("Image name updated!");
      fetchImages();
    } catch (err) {
      toast.error("Failed to update image name.");
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    toast.success("Logged out successfully!");
    navigate("/admin");
  };

  return (
    <>
      <Header />
      <div className="max-w-4xl mx-auto mt-8 p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Admin Dashboard</h1>
          <button onClick={logout} className="bg-red-600 text-white px-4 py-2 rounded">
            Logout
          </button>
        </div>

        {/* Upload Section */}
        <div className="mb-6 border p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Upload New Image</h2>
          <input
            type="text"
            placeholder="Image name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border p-2 mr-2 rounded"
          />
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
          <button
            onClick={handleUpload}
            className="ml-2 bg-blue-600 text-white px-4 py-2 rounded"
          >
            Upload
          </button>
        </div>

              {/* Gallery Display */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((img) => (
            <div key={img._id} className="border p-2 rounded shadow">
              <img
                src={`https://painter-website-1.onrender.com${img.imageUrl}`}
                alt={img.name}
                className="w-full h-40 object-cover mb-2"
              />
              <input
                type="text"
                defaultValue={img.name}
                onBlur={(e) => handleEdit(img._id, e.target.value)}
                className="border w-full p-1 mb-2 rounded"
              />
              <button
                onClick={() => handleDelete(img._id)}
                className="bg-red-500 text-white w-full py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DashboardPage;