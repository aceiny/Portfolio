"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  Minimize2,
  Maximize2,
  Grip,
} from "lucide-react";
import { currentTrack } from "@/constants/data";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [position, setPosition] = useState({ x: 20, y: 20 }); // Start in top-left corner
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Set position to bottom right after mount
    const initialX =
      typeof window !== "undefined" ? window.innerWidth - 340 : 20;
    const initialY =
      typeof window !== "undefined" ? window.innerHeight - 100 : 20;

    setPosition({ x: initialX, y: initialY });
  }, []);

  if (!mounted) {
    return null; // Don't render anything until after mount
  }

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        right: typeof window !== "undefined" ? window.innerWidth - 320 : 0,
        top: 0,
        bottom: typeof window !== "undefined" ? window.innerHeight - 100 : 0,
      }}
      dragElastic={0}
      onDragEnd={(_, info) => {
        setPosition({
          x: position.x + info.offset.x,
          y: position.y + info.offset.y,
        });
      }}
      initial={position}
      animate={{
        x: position.x,
        y: position.y,
        height: isMinimized ? 60 : "auto",
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed w-80 backdrop-blur-xl bg-black/60 rounded-2xl p-4 z-50 border border-white/10 shadow-2xl"
    >
      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <Grip className="w-4 h-4 text-gray-400 cursor-move" />
          <motion.div
            className="relative w-12 h-12"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          >
            <Image
              src={currentTrack.cover || "/placeholder.svg"}
              alt="Album art"
              width={48}
              height={48}
              className="rounded-lg"
            />
          </motion.div>
          <div className="flex-1 min-w-0">
            <h4 className="font-medium truncate">{currentTrack.title}</h4>
            <p className="text-sm text-gray-400 truncate">
              {currentTrack.artist}
            </p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsMinimized(!isMinimized)}
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4" />
            ) : (
              <Minimize2 className="h-4 w-4" />
            )}
          </Button>
        </div>

        <AnimatePresence>
          {!isMinimized && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-4"
            >
              <div className="space-y-2">
                <Slider
                  defaultValue={[33]}
                  max={100}
                  step={1}
                  className="w-full"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>1:23</span>
                  <span>{currentTrack.duration}</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                  <Slider
                    defaultValue={[70]}
                    max={100}
                    step={1}
                    className="w-20"
                  />
                </div>
                <div className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <SkipBack className="h-4 w-4" />
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => setIsPlaying(!isPlaying)}
                    >
                      {isPlaying ? (
                        <Pause className="h-4 w-4" />
                      ) : (
                        <Play className="h-4 w-4" />
                      )}
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <SkipForward className="h-4 w-4" />
                    </Button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
