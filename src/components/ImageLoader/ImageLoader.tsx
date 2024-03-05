import { FC } from "react";
import Loader from "../../assets/loader.svg";
import cl from "./ImageLoader.module.scss";

const ImageLoader: FC = () => {
    return (
        <div className={cl.box}>
            <img className={cl.loader} src={Loader} alt="Loader..." />
        </div>
    );
}

export default ImageLoader;