import { forwardRef, useImperativeHandle, useRef } from 'react'
import video from './video/video.mp4'

function Video(props, ref) {
    const videoRef = useRef()
    
    useImperativeHandle(ref, () => (
        {
            play() {
                videoRef.current.play()
            },
            pause() {
                videoRef.current.pause()
            }
        }
    ))
    
    return (
        <video
            ref={videoRef}
            src={video}
            width={300}
        />
    )
}

export default forwardRef(Video)