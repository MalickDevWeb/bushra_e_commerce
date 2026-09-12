"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { useCallback } from "react";

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const handleUpload = useCallback(
    (result: any) => {
      onChange(result.info.secure_url);
    },
    [onChange]
  );

  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="bushra_preset"
      options={{
        maxFiles: 1,
        resourceType: "image",
        clientAllowedFormats: ["jpeg", "png", "jpg", "webp"],
      }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative flex flex-col items-center justify-center gap-4 p-6 w-full h-48 border-2 border-dashed border-[#d4af37]/40 rounded-xl bg-[#0a0a0a] hover:bg-[#d4af37]/5 hover:border-[#d4af37] transition-all cursor-pointer overflow-hidden group"
          >
            {value ? (
              <>
                <Image
                  src={value}
                  alt="Upload"
                  fill
                  className="object-cover transition-opacity group-hover:opacity-50"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8 text-white mb-2 shadow-sm">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                  </svg>
                  <span className="text-white font-medium shadow-sm">Changer l'image</span>
                </div>
              </>
            ) : (
              <>
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6 text-[#d4af37]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                  </svg>
                </div>
                <div className="text-center">
                  <p className="text-[14px] font-medium text-[#e8e1d3]">Cliquez pour uploader</p>
                  <p className="text-[12px] text-[#a89b82] mt-1">JPEG, PNG, WEBP (Max 5MB)</p>
                </div>
              </>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
}

