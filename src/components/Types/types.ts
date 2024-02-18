import { Dispatch, SetStateAction } from "react";

export interface IAnswer {
    id: number,
    content: string
}

export interface IQuestionsData {
    id: number,
    imgSrc: string,
    title: string,
    answerList: IAnswer[]
}

export interface IAnswerItem {
    questionId: number, 
    answerId: number
}

export interface ICharacter {
    title: string,
    img: string
}

export type TypeLocation = "result" | "main" | "test";
export type Dispatcher<T> = Dispatch<SetStateAction<T>>