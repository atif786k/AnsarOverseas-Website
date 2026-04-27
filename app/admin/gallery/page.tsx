"use client";

import { useState, useCallback, useRef } from "react";
import { Upload, Trash2, Lock, ImagePlus, Loader2, X, Eye, EyeOff } from "lucide-react";

interface UploadedImage {
  url: string;
  pathname: string;
  name: string;
  uploadedAt: string;
  size: number;
}

interface PendingUpload {
  file: File;
  preview: string;
  name: string;
  category: string;
  description: string;
}

export default function AdminGalleryPage() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [authError, setAuthError] = useState("");
  const [images, setImages] = useState<UploadedImage[]>([]);
  const [pendingUploads, setPendingUploads] = useState<PendingUpload[]>([]);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const storedPassword = useRef("");

  const handleLogin = async () => {
    setAuthError("");
    setLoading(true);

    try {
      const res = await fetch("/api/gallery/list", {
        headers: { "x-admin-password": password },
      });
      const data = await res.json();

      // Verify password by trying a harmless operation
      // We'll just check if the password is accepted by the upload endpoint
      const testRes = await fetch("/api/gallery/upload", {
        method: "POST",
        headers: { "x-admin-password": password },
        body: new FormData(), // empty form, will get 400 but not 401
      });

      if (testRes.status === 401) {
        setAuthError("Incorrect password");
        setLoading(false);
        return;
      }

      storedPassword.current = password;
      setAuthenticated(true);
      setImages(data.images || []);
    } catch {
      setAuthError("Connection error. Please try again.");
    }

    setLoading(false);
  };

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/gallery/list");
      const data = await res.json();
      setImages(data.images || []);
    } catch {
      // silent fail
    }
  };

  const handleFilesSelected = (files: FileList | null) => {
    if (!files) return;

    const newPending: PendingUpload[] = [];
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (!file.type.startsWith("image/")) continue;

      const nameFromFile = file.name
        .replace(/\.[^.]+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase());

      newPending.push({
        file,
        preview: URL.createObjectURL(file),
        name: nameFromFile,
        category: "Gallery",
        description: "",
      });
    }

    setPendingUploads((prev) => [...prev, ...newPending]);
  };

  const removePending = (index: number) => {
    setPendingUploads((prev) => {
      const updated = [...prev];
      URL.revokeObjectURL(updated[index].preview);
      updated.splice(index, 1);
      return updated;
    });
  };

  const updatePending = (
    index: number,
    field: keyof PendingUpload,
    value: string
  ) => {
    setPendingUploads((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [field]: value };
      return updated;
    });
  };

  const handleUploadAll = async () => {
    if (pendingUploads.length === 0) return;
    setUploading(true);

    for (const item of pendingUploads) {
      const formData = new FormData();
      formData.append("file", item.file);
      formData.append("name", item.name);
      formData.append("category", item.category);
      formData.append("description", item.description);

      try {
        await fetch("/api/gallery/upload", {
          method: "POST",
          headers: { "x-admin-password": storedPassword.current },
          body: formData,
        });
      } catch {
        // continue with next
      }
    }

    // Clean up previews
    pendingUploads.forEach((p) => URL.revokeObjectURL(p.preview));
    setPendingUploads([]);
    setUploading(false);
    await fetchImages();
  };

  const handleDelete = async (url: string) => {
    if (!confirm("Delete this image? This cannot be undone.")) return;

    setDeleting(url);
    try {
      await fetch("/api/gallery/delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-admin-password": storedPassword.current,
        },
        body: JSON.stringify({ url }),
      });
      await fetchImages();
    } catch {
      // silent fail
    }
    setDeleting(null);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    handleFilesSelected(e.dataTransfer.files);
  }, []);

  const onDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  // ===== LOGIN SCREEN =====
  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-sm border border-border p-8">
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-5 h-5 text-muted-foreground" />
            <h1 className="text-lg font-semibold">Gallery Admin</h1>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter admin password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin()}
                className="w-full px-4 py-3 pr-12 border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            {authError && (
              <p className="text-sm text-red-600">{authError}</p>
            )}

            <button
              onClick={handleLogin}
              disabled={loading || !password}
              className="w-full py-3 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Access Gallery Admin"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ===== ADMIN DASHBOARD =====
  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-semibold">Gallery Manager</h1>
          <span className="text-sm text-muted-foreground">
            {images.length} image{images.length !== 1 ? "s" : ""} uploaded
          </span>
        </div>

        {/* Upload Area */}
        <div
          onDrop={onDrop}
          onDragOver={onDragOver}
          className="border-2 border-dashed border-border hover:border-foreground/30 transition-colors p-8 mb-8 text-center cursor-pointer"
          onClick={() => fileInputRef.current?.click()}
        >
          <ImagePlus className="w-10 h-10 mx-auto mb-3 text-muted-foreground" />
          <p className="text-muted-foreground mb-1">
            Drag & drop images here, or click to browse
          </p>
          <p className="text-sm text-muted-foreground">
            JPEG, PNG, WebP — max 1MB each — auto-resized to 1200px width
          </p>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            className="hidden"
            onChange={(e) => handleFilesSelected(e.target.files)}
          />
        </div>

        {/* Pending Uploads */}
        {pendingUploads.length > 0 && (
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium">
                Ready to upload ({pendingUploads.length})
              </h2>
              <button
                onClick={handleUploadAll}
                disabled={uploading}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {uploading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <Upload className="w-4 h-4" />
                )}
                {uploading ? "Uploading..." : "Upload All"}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingUploads.map((item, index) => (
                <div key={index} className="border border-border p-3">
                  <div className="relative mb-3">
                    <img
                      src={item.preview}
                      alt={item.name}
                      className="w-full h-40 object-cover"
                    />
                    <button
                      onClick={() => removePending(index)}
                      className="absolute top-2 right-2 p-1 bg-black/60 text-white hover:bg-black/80"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <input
                    type="text"
                    placeholder="Image name"
                    value={item.name}
                    onChange={(e) =>
                      updatePending(index, "name", e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm border border-border bg-background mb-2 focus:outline-none focus:border-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Category (e.g., Manufacturing, Products)"
                    value={item.category}
                    onChange={(e) =>
                      updatePending(index, "category", e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm border border-border bg-background mb-2 focus:outline-none focus:border-foreground"
                  />
                  <input
                    type="text"
                    placeholder="Description (optional)"
                    value={item.description}
                    onChange={(e) =>
                      updatePending(index, "description", e.target.value)
                    }
                    className="w-full px-3 py-2 text-sm border border-border bg-background focus:outline-none focus:border-foreground"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Existing Images */}
        <div>
          <h2 className="text-lg font-medium mb-4">Uploaded Images</h2>

          {images.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">
              No images uploaded yet. Use the area above to add photos.
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {images.map((img) => (
                <div key={img.url} className="group relative border border-border">
                  <img
                    src={img.url}
                    alt={img.name}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-2">
                    <p className="text-sm font-medium truncate">{img.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(img.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <button
                    onClick={() => handleDelete(img.url)}
                    disabled={deleting === img.url}
                    className="absolute top-2 right-2 p-1.5 bg-red-600 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-700 disabled:opacity-50"
                  >
                    {deleting === img.url ? (
                      <Loader2 className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <Trash2 className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
