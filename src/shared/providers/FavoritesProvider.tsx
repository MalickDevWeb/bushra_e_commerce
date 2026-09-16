"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { toast } from "sonner";

interface FavoritesContextType {
  favorites: string[]; // array of product IDs
  toggleFavorite: (id: string, name: string) => void;
  isFavorite: (id: string) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];

    const savedFavorites = localStorage.getItem("bushra_favorites");
    if (!savedFavorites) return [];

    try {
      return JSON.parse(savedFavorites) as string[];
    } catch (error) {
      console.error("Failed to parse favorites", error);
      return [];
    }
  });

  // Save to local storage
  useEffect(() => {
    localStorage.setItem("bushra_favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string, name: string) => {
    setFavorites((prev) => {
      if (prev.includes(id)) {
        toast.info(`${name} retiré de vos favoris`);
        return prev.filter((favId) => favId !== id);
      } else {
        toast.success(`${name} ajouté à vos favoris`, { icon: "❤️" });
        return [...prev, id];
      }
    });
  };

  const isFavorite = (id: string) => favorites.includes(id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}

