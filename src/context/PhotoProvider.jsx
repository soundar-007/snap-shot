import { createContext, useContext, useState, useEffect } from "react";

const photocontext = createContext(null);

function PhotoProvider({ children }) {
  const [query, setQuery] = useState("birds");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  async function getPhotos() {
    try {
      setLoading(true);
      const data = await fetch(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=86823d6ff85e2db171222479a411d5e2&tags=${query}&per_page=24&format=json&nojsoncallback=1`
      );
      const res = await data.json();
      console.log(res.photos.photo);
      setImages(res.photos.photo);
      setLoading(false);
    } catch (err) {
      console.log(err.message);
    }
  }
  useEffect(() => {
    getPhotos();
  }, [query]);
  return (
    <photocontext.Provider
      value={{ query, getPhotos, loading, images, setQuery }}
    >
      {children}
    </photocontext.Provider>
  );
}

export function usePhoto() {
  const context = useContext(photocontext);
  return context;
}

export default PhotoProvider;
