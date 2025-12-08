import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import type { Location } from 'react-router-dom';

/**
 * IonRouterOutletWrapper - Transition-aware wrapper for React Router v7
 * 
 * This component delays unmounting of previous routes until page transitions complete,
 * enabling smooth Ionic page animations while maintaining a clean DOM.
 * 
 * How it works:
 * 1. Detects route changes via useLocation()
 * 2. Keeps previous location mounted during transition
 * 3. Renders both old and new routes during animation
 * 4. Unmounts old route after transition completes
 */
export const IonRouterOutletWrapper: React.FC<{ children: React.ReactElement }> = ({ children }) => {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState<Location>(location);
    const [previousLocation, setPreviousLocation] = useState<Location | null>(null);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Track if this is the initial mount
    const isInitialMount = useRef(true);

    useEffect(() => {
        // Skip transition logic on initial mount
        if (isInitialMount.current) {
            isInitialMount.current = false;
            setCurrentLocation(location);
            return;
        }

        // Detect route change
        if (location.pathname !== currentLocation.pathname) {
            // Store current location as previous
            setPreviousLocation(currentLocation);
            setCurrentLocation(location);
            setIsTransitioning(true);

            // Wait for animation to complete (StackManager handles this via CSS transitions)
            // Ionic's default transition duration is ~300ms, adding buffer
            const transitionDuration = 500;

            setTimeout(() => {
                setPreviousLocation(null);
                setIsTransitioning(false);
            }, transitionDuration);
        }
    }, [location, currentLocation]);

    // During transition: render both old and new routes
    // After transition: render only current route
    if (isTransitioning && previousLocation) {
        return (
            <>
                {/* Previous route (being animated out) */}
                {React.cloneElement(children, { location: previousLocation })}
                {/* Current route (being animated in) */}
                {React.cloneElement(children, { location: currentLocation })}
            </>
        );
    }

    // Normal rendering: just the current route
    return React.cloneElement(children, { location: currentLocation });
};
