import { forwardRef } from "react";
import cl from "./Screensaver.module.scss";
import screenVideo from "../../assets/skibidi.mp4";
import classNames from "classnames";

interface IScreeensaverProps {
    isActive: boolean
}

const Screensaver = forwardRef<HTMLVideoElement, IScreeensaverProps>(({ isActive }, ref) => {
    return (
        <div className={ isActive ? classNames(cl.box, cl.active) : cl.box }>
            <video preload="auto" ref={ref} muted={true} autoPlay={true} className={cl.video} src={screenVideo}></video>
        </div>
    )
})

export default Screensaver