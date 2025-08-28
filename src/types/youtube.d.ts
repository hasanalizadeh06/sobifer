// Global declarations for YouTube Iframe API

export {};

declare global {
  namespace YT {
    export type PlayerState = {
      UNSTARTED: number;
      ENDED: number;
      PLAYING: number;
      PAUSED: number;
      BUFFERING: number;
      CUED: number;
    };
    export interface Player {
      getPlayerState(): number;
      playVideo(): void;
      pauseVideo(): void;
      stopVideo(): void;
      getDuration(): number;
      getCurrentTime(): number;
      seekTo(seconds: number, allowSeekAhead: boolean): void;
      // ...diğer gerekli metotlar...
    }
  }
  interface Window {
    YT: typeof YT | unknown;
    onYouTubeIframeAPIReady: () => void;
  }
}



