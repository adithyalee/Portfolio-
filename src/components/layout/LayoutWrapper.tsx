"use client";

import { useState } from "react";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { Navigation } from "@/components/layout/Navigation";
import { CustomCursor } from "@/components/CustomCursor";
import { siteConfig } from "@/lib/data/config";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
    // Always same initial state on server and client to avoid hydration mismatch
    const [isLoaded, setIsLoaded] = useState(!siteConfig.features.loadingScreen);
    const [showContent, setShowContent] = useState(!siteConfig.features.loadingScreen);

    const handleLoadComplete = () => {
        setIsLoaded(true);
        setTimeout(() => setShowContent(true), 100);
    };

    return (
        <>
            {siteConfig.features.customCursor ? <CustomCursor /> : null}
            {siteConfig.features.loadingScreen ? <LoadingScreen onComplete={handleLoadComplete} /> : null}
            <Navigation />
            <div
                style={{
                    opacity: showContent ? 1 : 0,
                    transition: "opacity 0.6s ease",
                }}
            >
                {children}
            </div>
        </>
    );
}
