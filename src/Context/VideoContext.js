import { createContext } from 'react';

export const VideoContextKey = createContext();

function VideoContext({ children, value }) {
    return <VideoContextKey.Provider value={value}>{children}</VideoContextKey.Provider>;
}

export default VideoContext;
