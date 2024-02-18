import { IAnswerItem, ICharacter } from "../components/Types/types";
import { charactersList } from "../data/data"; 

const resultVariants: string[] = [ 
    "234112211211", 
    "234211212144", 
    "232121221224", 
    "213112212231", 
    "124212222121", 
    "231112111241", 
    "122211112233", 
    "122211112233", 
    "132212221131",
    "132211122144",
    "213122212112",
    "113212122211",
    "234211212144",
    "132212221131",
    "124212222121",
    "234112211211"
];

const middleVariants:number[] = [0, 1, 2, 3, 4, 5];

const defineCharacter = (list: IAnswerItem[]):ICharacter => {
    
    //check empty answer
    let answer:string = list.map(el => el.answerId).join("");
    let candidatCharacter: number = resultVariants.indexOf(answer);

    if (candidatCharacter >= 0) return charactersList[candidatCharacter];

    //check slice answer
    let randomStartSlice = middleVariants[Math.floor(Math.random() * middleVariants.length)];
    let sliceAnswer = answer.slice(randomStartSlice, randomStartSlice + 6);
    candidatCharacter = resultVariants.findIndex(el => el.includes(sliceAnswer));

    if (candidatCharacter >= 0) return charactersList[candidatCharacter];

    //get random variant
    let randomVariant = Math.floor(Math.random() * resultVariants.length);
    return charactersList[randomVariant];

}

export { defineCharacter }