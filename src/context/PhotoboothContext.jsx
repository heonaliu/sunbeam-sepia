import { createContext, useContext, useState } from "react";

const PhotoboothContext = createContext(null);

export function PhotoboothProvider({ children }) {
  const [photos, setPhotos] = useState([]);

  return (
    <PhotoboothContext.Provider value={{ photos, setPhotos }}>
      {children}
    </PhotoboothContext.Provider>
  );
}

export function usePhotobooth() {
  const context = useContext(PhotoboothContext);
  if (!context) {
    throw new Error("usePhotobooth must be used within a PhotoboothProvider");
  }
  return context;
}
