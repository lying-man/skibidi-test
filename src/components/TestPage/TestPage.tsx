import { FC, Fragment, useEffect, useState } from "react";
import cl from "./TestPage.module.scss";
import ArrowLeft from "../../assets/arrow-left.svg";
import { questionsData } from "../../data/data";
import { Dispatcher, IAnswerItem, TypeLocation } from "../Types/types"; 
import classNames from "classnames";
import { motion, AnimatePresence } from "framer-motion";

interface ITestProps {
    addResultList: Dispatcher<IAnswerItem[]>,
    toggleLocation: (locationTo: TypeLocation) => void
}

const TestPage: FC<ITestProps> = ({ addResultList, toggleLocation }) => {

    const [currentQuestionId, setCurrentQuestionId] = useState<number>(0);
    const [answerId, setAnswerId] = useState<number>(0);
    const [resultList, setResultList] = useState<IAnswerItem[]>([]);
    const [isVisibleCurrentAnswer, setIsVisibleCurrentAnswer] = useState<boolean>(true);

    useEffect(() => {
        if (!answerId) {
            setIsVisibleCurrentAnswer(true);
        }
    }, [answerId]);

    const currentQuestion = questionsData[currentQuestionId];

    const confirmAnswer = ():void => {

        if (!answerId) return; 

        setAnswerId(0);
        
        if (currentQuestionId === 11) {
            addResultList([...resultList, { answerId: answerId, questionId: currentQuestion.id }]);
            toggleLocation("result");
            return;
        }
        
        setResultList([ ...resultList, { answerId: answerId, questionId: currentQuestion.id } ]);
        setCurrentQuestionId(currentQuestionId + 1);

    }
 
    return (    
        <Fragment>
            <button className={cl.restart} onClick={() => toggleLocation("main")}>
                <img src={ArrowLeft} alt="arrow" />
                <span>Начать заново</span>
            </button>

            <div className={cl.header}>
                <div className={cl.headerBox}>
                    <div className={cl.progress}>
                        <div style={{ width: currentQuestion.id / 12 * 100 + "%" }}></div>   
                    </div>
                    <div className={cl.count}><span className={cl.current}>{ currentQuestionId + 1 }</span> / 12</div>
                </div>
            </div>

            <div className={cl.wrapper}>

                <AnimatePresence mode="popLayout" onExitComplete={() => confirmAnswer()}>
                    {
                        isVisibleCurrentAnswer && (
                            <motion.div 
                                className={cl.box}
                                initial={{ opacity: 0, x: 160 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -160 }}
                            >
                                <div>
                                    <div className={cl.image}>
                                        <img src={ currentQuestion.imgSrc } alt="image" />
                                    </div>
                                    <h2 className={cl.title}>{ currentQuestion.title }</h2>
            
                                    <ul className={ currentQuestion.answerList.length === 3 ? classNames(cl.variants, cl.three) : cl.variants }>
                                        {
                                            currentQuestion.answerList.map((el) => (
                                                <li key={el.id}>
                                                    <motion.button 
                                                        whileTap={{ scale: 0.8 }}
                                                        className={ el.id === answerId ? cl.active : "" } 
                                                        onClick={() => setAnswerId(el.id)}
                                                    >
                                                        { el.content }
                                                    </motion.button>
                                                </li>
                                            ))
                                        }
                                    </ul>

                                    <motion.button 
                                        onClick={() => answerId && setIsVisibleCurrentAnswer(false)} className={cl.btn}
                                        initial={{ opacity: 0, y: 60 }}
                                        animate={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
                                    >
                                        Ответить
                                    </motion.button>
                                </div>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

            </div>
        </Fragment>
    )
}

export default TestPage