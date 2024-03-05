import { FC, useEffect, useState } from "react";
import cl from "./ResultPage.module.scss";
import { IAnswerItem, TypeLocation } from "../Types/types";
import { questionsData } from "../../data/data";
import { defineCharacter } from "../../utils/defineCharacter";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import ImageLoader from "../ImageLoader/ImageLoader";

interface IResultPageProps {
    toggleLocation: (locationTo: TypeLocation) => void,
    resultList: IAnswerItem[]
}

const ResultPage: FC<IResultPageProps> = ({ resultList, toggleLocation }) => {

    const [visible, setVisible] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => { setVisible(true) }, []);

    interface IAnswers {
        id: number,
        title: string,
        choosedAnswer: string
    }

    const characterData = defineCharacter(resultList);

    let answers: IAnswers[] = resultList.map((item) => {
        let currentQuestion = questionsData.find(el => item.questionId === el.id);
        let choosedAnswer = currentQuestion?.answerList.find(el => el.id === item.answerId);
        return { 
            id: item.questionId, 
            title: currentQuestion ? currentQuestion.title : "", 
            choosedAnswer: choosedAnswer ? choosedAnswer.content : "" 
        }
    });

    return (
        <div className={cl.wrapper}>
            <div className={cl.info}>
                <motion.div 
                    className={cl.wrapperImg} 
                    animate={ isLoading ? { scale: 0, opacity: 0 } : { scale: 1, opacity: 1 } } 
                    initial={false}
                    transition={{ delay: 0.1 }}
                >
                    <img 
                        src={ characterData.img } 
                        onLoad={() => setIsLoading(false)}
                        alt="картинка" 
                    />
                </motion.div>
                <motion.h2 
                    className={cl.title} 
                    animate={{ scale: 1, opacity: 1 }} 
                    initial={{ scale: 0, opacity: 0 }}
                    transition={{ delay: 0.3 }}
                >
                    { characterData.title }
                </motion.h2>
                <div className={cl.subtitle}>Ваш персонаж из вселенной скибиди туалетов</div>
                <button className={cl.btn} onClick={() => toggleLocation("test")}>Пройти тест снова</button>
            </div>
            <div className={cl.content}>
                <h2 className={cl.text}>Список ответов на вопросы</h2>
                <div className={cl.line}></div>
                <ul className={cl.list}>
                    {
                        answers.map((el, index) => (
                            <li className={cl.item} key={el.id}>
                                <span className={cl.question}>{ `${index + 1}. ` + el.title }</span>
                                <span>-</span>
                                <span className={cl.answer}>{ el.choosedAnswer }</span>
                            </li>
                        ))
                    }
                </ul>
            </div>

            {
                visible && (
                    <Confetti
                        width={window.innerWidth - (window.innerWidth - document.documentElement.offsetWidth)}
                        height={window.innerHeight}
                        recycle={false}
                        gravity={0.1}
                        numberOfPieces={300}
                    />
                )
            }

        </div>
    )
}

export default ResultPage;