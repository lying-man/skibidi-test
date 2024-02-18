import { FC, useRef, useState, useEffect } from "react";
import cl from "./Layout.module.scss";
import StartPage from "../StartPage/StartPage";
import TestPage from "../TestPage/TestPage";
import Screensaver from "../Screensaver/Screensaver";
import ResultPage from "../ResultPage/ResultPage";
import classNames from "classnames";
import { Routes, Route, useNavigate } from "react-router-dom";
import { IAnswerItem, TypeLocation } from "../Types/types";

const Layout: FC = () => {

    const [resultList, setResultList] = useState<IAnswerItem[]>([]);
    const [isResultLocation, setIsResultLocation] = useState<boolean>(false);
    const [isActiveLoader, setIsActiveLoader] = useState<boolean>(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        videoRef.current?.addEventListener("ended", () => {
            setIsActiveLoader(false);
            toggleLocation("test");
            if (videoRef.current) videoRef.current.currentTime = 0;
        });
    }, []);

    const toggleLocationActions: { to: TypeLocation, callback: () => void }[] = [
        { to: "main", callback: () => { setIsResultLocation(false); navigate("/") } },
        { to: "test", callback: () => { setIsResultLocation(false); navigate("/test") } },
        { to: "result", callback: () => { setIsResultLocation(true); navigate("/result") } },
    ]

    const toggleLocation = (locationTo: TypeLocation):void => {
        let findedLocation = toggleLocationActions.find(el => el.to === locationTo);
        findedLocation?.callback();
    }

    const handlerLoader = (): void => {
        if (videoRef.current) {
            videoRef.current.play();
            setIsActiveLoader(true);
        }
    }

    return (
        <div className={ isResultLocation ? classNames(cl.wrapper, cl.overflow) : cl.wrapper }>
            <Routes>
                <Route path="/" element={<StartPage setLoader={handlerLoader} />} />
                <Route path="/test" element={<TestPage addResultList={setResultList} toggleLocation={toggleLocation} />} />
                <Route path="/result" element={<ResultPage toggleLocation={toggleLocation} resultList={resultList} />} />
            </Routes>
            <Screensaver ref={videoRef} isActive={isActiveLoader} />
        </div>
    )
}

export default Layout