import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const Image = ({ clicked }) => {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [pointerPosition, setPointerPosition] = useState({ x: 0, y: 0 });
  const [imgDimensions, setImgDimensions] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);

  // Calculate dimensions of the main image for accurate pointer position
  useEffect(() => {
    const handleResize = () => {
      if (imgRef.current) {
        const { width, height } = imgRef.current.getBoundingClientRect();
        setImgDimensions({ width, height });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseMove = (event) => {
    if (imgRef.current) {
      const imgElement = imgRef.current.getBoundingClientRect();
      const relativeX = event.clientX - imgElement.left;
      const relativeY = event.clientY - imgElement.top;

      // Calculate position relative to the main image's dimensions
      setPointerPosition({
        x: (relativeX / imgElement.width) * 100,
        y: (relativeY / imgElement.height) * 100,
      });
    }
  };

  const handleScroll = (event) => {
    setZoomLevel((prevZoomLevel) =>
      event.deltaY > 0
        ? Math.max(0.5, prevZoomLevel - 0.1)
        : Math.min(10, prevZoomLevel + 0.1) // Increased max zoom for better control
    );
  };

  useEffect(() => {
    document.addEventListener('wheel', handleScroll);
    return () => {
      document.removeEventListener('wheel', handleScroll);
    };
  }, []);

  return (
    <div className="relative overflow-hidden h-screen w-screen">
      {/* Top Right Panel for Hub View */}
      <div className="absolute top-5 z-[100] right-5 p-2 rounded-md bg-gradient-to-r from-zinc-900 to-zinc-800">
        <div className="relative overflow-hidden">
          <img 
            src={"/wsi.png"} 
            alt="zoomed-out view" 
            className="w-[150px] h-[150px] object-cover"
          />
          {/* Circle overlay to indicate zoomed-in area */}
          <motion.div
            className="absolute border border-white rounded-full pointer-events-none"
            style={{
              width: `${(1 / zoomLevel) * 100}%`,
              height: `${(1 / zoomLevel) * 100}%`,
              top: `${pointerPosition.y}%`,
              left: `${pointerPosition.x}%`,
              transform: 'translate(-50%, -50%)',
              // Ensure the circle stays within bounds of the hub view
              maxWidth: '100%',
              maxHeight: '100%',
              clipPath: 'circle(50% at center)',  // Ensure it stays fully inside the preview
            }}
            animate={{
              width: `${(1 / zoomLevel) * 100}%`,
              height: `${(1 / zoomLevel) * 100}%`,
              top: `${pointerPosition.y}%`,
              left: `${pointerPosition.x}%`,
            }}
            transition={{
              type: "spring", // Use spring animation for smooth transitions
              stiffness: 300,
              damping: 20,
            }}
          />
        </div>
      </div>

      <motion.div 
        className="h-screen w-full flex justify-center items-center overflow-hidden" 
        onMouseMove={handleMouseMove}
      >
        <motion.div 
          style={{
            scale: zoomLevel,
          }}
          animate={{
            scale: zoomLevel,
          }}
          transition={{
            type: "spring", // Smooth zoom transition
            stiffness: 100,
            damping: 20,
          }}
        >
          <img 
            ref={imgRef}
            src={"/wsi.png"} 
            alt="image" 
            className={`w-[500px] h-[500px] object-cover ${window.innerWidth < 768 ? 'w-full h-full' : ''}`} 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Image;
