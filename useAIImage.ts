import { useState, useEffect } from 'react';

// Pre-defined static images to replace AI generation
const getStaticImage = (prompt: string): string => {
  const p = prompt.toLowerCase();
  
  // Specific mappings based on keywords in the prompts
  if (p.includes("landscape") || p.includes("garden")) {
      return "https://images.unsplash.com/photo-1558603668-6570496b66f8?q=80&w=2000&auto=format&fit=crop";
  }
  if (p.includes("residential") || p.includes("villa") || p.includes("farmhouse")) {
      return "https://images.unsplash.com/photo-1600596542815-60c37c6525fa?q=80&w=2000&auto=format&fit=crop"; // Modern Villa
  }
  if (p.includes("commercial") || p.includes("office") || p.includes("tech park")) {
      return "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000&auto=format&fit=crop"; // Office interior/exterior
  }
  
  if (p.includes("glass and concrete") || p.includes("structure") || p.includes("hero")) {
     return "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"; // Hero
  }
  if (p.includes("construction site") || p.includes("crane")) {
    return "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070&auto=format&fit=crop";
  }
  if (p.includes("interior") || p.includes("living room") || p.includes("design") || p.includes("loft")) {
    return "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop";
  }
  if (p.includes("worker") || p.includes("manpower") || p.includes("helmet")) {
    return "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=2070&auto=format&fit=crop";
  }
  if (p.includes("material") || p.includes("warehouse") || p.includes("brick") || p.includes("cement")) {
    return "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2068&auto=format&fit=crop";
  }
  if (p.includes("plumbing") || p.includes("pipe")) {
    return "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?q=80&w=2070&auto=format&fit=crop";
  }
  if (p.includes("electric") || p.includes("wiring")) {
    return "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=2069&auto=format&fit=crop";
  }
  if (p.includes("cleaning")) {
     return "https://images.unsplash.com/photo-1581578731117-104f2a417954?q=80&w=2070&auto=format&fit=crop";
  }
  if (p.includes("painting")) {
     return "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=2070&auto=format&fit=crop";
  }
  if (p.includes("team") || p.includes("architects") || p.includes("group")) {
      return "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop";
  }
  
  // Default architecture fallback
  return "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=2070&auto=format&fit=crop";
};

export const useAIImage = (prompt: string, autoLoad = false) => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const generate = async () => {
    // If we already have an image and this is called again, we can skip or reload.
    // Since these are static, we just set it.
    setLoading(true);
    
    // Simulate slight async behavior to prevent render jarring
    setTimeout(() => {
        const url = getStaticImage(prompt);
        setImageUrl(url);
        setLoading(false);
    }, 50);
  };

  useEffect(() => {
    if (autoLoad) generate();
  }, [prompt]);

  return { imageUrl, loading, generate };
};