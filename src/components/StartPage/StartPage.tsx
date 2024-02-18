import { FC } from "react";
import cl from "./StartPage.module.scss";
import StartImage from "../../assets/start-image.png";
import ThumbImageOne from "../../assets/preview1.png";
import ThumbImageTwo from "../../assets/preview2.png";
import ThumbImageThree from "../../assets/preview3.png";
import { motion } from "framer-motion"; 

interface IStartPageProps {
    setLoader: () => void,
}

const animateImgVariants = {
    enterOne: (custom: number) => ({ scale: 1.8, rotate: 35, transition: { delay: custom * 0.2 } }),
    enterTwo: (custom: number) => ({ scale: 2.2, rotate: -35, transition: { delay: custom * 0.2 } }),
    enterThree: (custom: number) => ({ scale: 1.2, rotate: 15, transition: { delay: custom * 0.2 } }),
    startOne: { scale: 0, rotate: 35 },
    startTwo: { scale: 0, rotate: -35 },
    startThree: { scale: 0, rotate: 15 }
}

const StartPage: FC<IStartPageProps> = ({ setLoader }) => {

    interface IImgData {
        src: string,
        animation: { enter: string, start: string },
        classname: string,
        altText: string
    }

    const imgData: IImgData[] = [
        {
            animation: { enter: "enterOne", start: "startOne" },
            src: ThumbImageOne,
            classname: cl.thumbOne,
            altText: "picture"
        },
        {
            animation: { enter: "enterTwo", start: "startTwo" },
            src: ThumbImageTwo,
            classname: cl.thumbTwo,
            altText: "picture"
        },
        {
            animation: { enter: "enterThree", start: "startThree" },
            src: ThumbImageThree,
            classname: cl.thumbThree,
            altText: "picture"
        }
    ]

    return (
        <div className={cl.wrapper}>
            <div className={cl.imgWrapper}>
                <img className={cl.mainImage} src={StartImage} alt="Картинка камерамена" />
            </div>
            <h1 className={cl.title}>Тест кто ты из скибиди туалетов</h1>
            <div className={cl.content}>
                Пройди тест что-бы узнать кем ты являешься во вселенной скибиди туалетов
            </div>
            <motion.button 
                className={cl.btn} 
                onClick={setLoader}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0, transition: { delay: 0.7 } }}
            >
                Пройти Тест
            </motion.button>

            {
                imgData.map((el, index) => (
                    <motion.img
                        key={index}
                        src={el.src}
                        alt={el.altText}
                        className={el.classname}
                        initial={el.animation.start}
                        animate={el.animation.enter}
                        variants={animateImgVariants}
                        custom={index}
                    />
                ))
            }
        </div>
    )
}

export default StartPage