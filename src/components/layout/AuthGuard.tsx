"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/store/auth";

export default function AuthGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  
  // ADDED: State to track if the browser has fully loaded the component
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    // FIXED: Only check authentication AFTER the component has mounted
    if (isMounted && !isAuthenticated) {
      router.replace("/login");
    }
  }, [isAuthenticated, isMounted, router]);

  // Show the loader while waiting for the component to mount OR if not authenticated
  if (!isMounted || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0d1117] flex items-center justify-center">
        <div className="w-8 h-8 border-2 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return <>{children}</>;
}