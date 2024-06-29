'use client'

import {motion} from 'framer-motion'
import VideoPlayerControls from './playerscontrol';
import { useEffect, useRef, useState } from "react";


const Video =  () => {
    const [videoProgress, setVideoProgress] = useState<number>(0);
    const [videoDuration, setVideoDuration] = useState<number>();
    const [isPaused, setIsPaused] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);
  
    useEffect(() => {
      const video = videoRef.current;
      if (video) {
        setVideoDuration(video.duration);
      }
    }, []);
  
    useEffect(() => {
      if (isPaused) return;
      const currentTime = videoRef.current?.currentTime;
      if (videoDuration != null && currentTime != null) {
        let loadingTimeout = setTimeout(() => {
          if (videoProgress == currentTime / videoDuration) {
            setVideoProgress((prev) => prev + 0.000001);
          } else {
            setVideoProgress(currentTime / videoDuration);
          }
        }, 10);
  
        return () => {
          clearTimeout(loadingTimeout);
        };
      }
    }, [videoProgress, videoDuration, isPaused]);
  
    const togglePlayPause = () => {
      const video = videoRef.current;
      if (video) {
        setIsPaused(!video.paused);
        video.paused ? video.play() : video.pause();
      }
    };
  
    return (    

        <main>
          <div className="relative    overflow-hidden">
            <div className="absolute top-16 right-4 z-10">
              <VideoPlayerControls
              progress={videoProgress}
              isPaused={isPaused}
              onPlayPause={togglePlayPause}
              />
           </div>
           <video className="w-full h-full overflow-hidden mt-12" ref={videoRef} loop muted autoPlay>
        <source  src="/vidio/video1.mp4" type="video/mp4" />   
        </video>
        </div>
        </main>
    )

}
export default Video