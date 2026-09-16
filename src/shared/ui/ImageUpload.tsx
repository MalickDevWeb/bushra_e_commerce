"use client";

import Image from "next/image";
import { useRef, useState } from "react";

interface ImageUploadProps {
  value?: string;
  onChange?: (value: string) => void;
  values?: string[];
  onValuesChange?: (values: string[]) => void;
  maxFiles?: number;
}

export function ImageUpload({ value = "", onChange, values, onValuesChange, maxFiles = 3 }: ImageUploadProps) {
  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  const [uploadError, setUploadError] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);

  async function uploadFile(file: File): Promise<{ url?: string; error?: string }> {
    if (!cloudName || !uploadPreset) {
      return { error: "La configuration Cloudinary est incomplète." };
    }
    if (!["image/jpeg", "image/png", "image/webp"].includes(file.type)) {
      return { error: `${file.name} n'est pas un format accepté.` };
    }
    if (file.size > 5 * 1024 * 1024) {
      return { error: `${file.name} dépasse la limite de 5 Mo.` };
    }
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("upload_preset", uploadPreset);
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
        method: "POST",
        body,
      });
      const result: { secure_url?: string; error?: { message?: string } } = await response.json();
      if (!response.ok) {
        return { error: result.error?.message || "Cloudinary a refusé cette photo." };
      }
      if (!result.secure_url) {
        return { error: "Cloudinary n'a pas retourné l'URL de la photo." };
      }
      return { url: result.secure_url };
    } catch (error) {
      return {
        error: error instanceof Error ? error.message : "Erreur réseau pendant l'envoi.",
      };
    }
  }

  async function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (!selectedFiles.length) return;

    setUploadError("");
    setIsUploading(true);
    const availableSlots = isGallery ? maxFiles - gallery.length : 1;
    const files = selectedFiles.slice(0, availableSlots);
    const uploadedUrls: string[] = [];
    const uploadErrors: string[] = [];
    for (const file of files) {
      const result = await uploadFile(file);
      if (result.url) uploadedUrls.push(result.url);
      if (result.error) uploadErrors.push(result.error);
    }

    if (isGallery) {
      onValuesChange?.([...(values ?? []), ...uploadedUrls]);
    } else if (uploadedUrls[0]) {
      onChange?.(uploadedUrls[0]);
    }
    if (uploadErrors.length > 0) {
      setUploadError(uploadErrors.join(" "));
    } else if (selectedFiles.length > availableSlots) {
      setUploadError(`Vous pouvez ajouter au maximum ${maxFiles} photos.`);
    }
    setIsUploading(false);
  }

  if (!cloudName || !uploadPreset) {
    return (
      <div className="flex h-48 w-full items-center justify-center rounded-xl border-2 border-dashed border-[#d4af37]/40 bg-[#0a0a0a] p-6 text-center text-xs text-[#a89b82]">
        Configurez le nom Cloudinary et le preset d&apos;upload pour activer l&apos;import.
      </div>
    );
  }

  const gallery = values ?? (value ? [value] : []);
  const isGallery = Boolean(onValuesChange);

  return (
    <>
      <input ref={fileInputRef} type="file" accept="image/jpeg,image/png,image/webp" multiple={isGallery} onChange={handleFileChange} className="hidden" />
      <input ref={cameraInputRef} type="file" accept="image/*" capture="environment" onChange={handleFileChange} className="hidden" />
      <div className="relative flex min-h-48 w-full flex-col items-center justify-center gap-3 overflow-hidden rounded-xl border-2 border-dashed border-[#d4af37]/40 bg-[#0a0a0a] p-4 transition-all hover:border-[#d4af37] hover:bg-[#d4af37]/5">
        {!isGallery && value && <Image src={value} alt="Image sélectionnée" fill sizes="(max-width: 768px) 100vw, 360px" className="object-cover" />}
        <div className="z-10 flex flex-wrap items-center justify-center gap-2">
          <button type="button" disabled={isUploading || (isGallery && gallery.length >= maxFiles)} onClick={() => fileInputRef.current?.click()} className="rounded-md bg-[#d4af37] px-3 py-2 text-sm font-medium text-[#0a0a0a] shadow-lg disabled:opacity-50">
            {isUploading ? "Envoi..." : isGallery ? "Ajouter des photos" : value ? "Changer le fichier" : "Choisir une photo"}
          </button>
          <button type="button" disabled={isUploading || (isGallery && gallery.length >= maxFiles)} onClick={() => cameraInputRef.current?.click()} className="rounded-md border border-[#d4af37] bg-black/70 px-3 py-2 text-sm font-medium text-[#e8e1d3] disabled:opacity-50">
            Prendre une photo
          </button>
        </div>
        {!gallery.length && !isUploading && <span className="z-10 text-xs text-[#a89b82]">JPEG, PNG ou WEBP - 5 MB maximum</span>}
      </div>
      {isGallery && gallery.length > 0 && (
        <div className="mt-3 grid grid-cols-3 gap-2">
          {gallery.map((image, index) => (
            <div key={`${image}-${index}`} className="relative aspect-square overflow-hidden rounded-lg border border-[#d4af37]/30">
              <Image src={image} alt={`Photo ${index + 1}`} fill sizes="(max-width: 768px) 33vw, 120px" className="object-cover" />
              <button type="button" onClick={() => onValuesChange?.(gallery.filter((_, imageIndex) => imageIndex !== index))} className="absolute right-1 top-1 rounded-full bg-black/75 px-2 py-1 text-xs text-white" aria-label={`Supprimer la photo ${index + 1}`}>×</button>
              {index === 0 && <span className="absolute bottom-1 left-1 rounded bg-black/75 px-1.5 py-0.5 text-[10px] text-white">Principale</span>}
            </div>
          ))}
        </div>
      )}
      {uploadError && <p className="mt-2 text-center text-xs text-red-400">{uploadError}</p>}
    </>
  );
}
