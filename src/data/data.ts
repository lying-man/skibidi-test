import { ICharacter, IQuestionsData } from "../components/Types/types";

const questionsData: IQuestionsData[] = [
    { id: 1, imgSrc: "/1.png", title: "Какой ваш пол?", answerList: [{ id: 1, content: "Мальчик" }, { id: 2, content: "Девочка" }] },
    { id: 2, imgSrc: "/2.png", title: "Сколько вам лет?", answerList: [{ id: 1, content: "Меньше 8" }, { id: 2, content: "От 8 до 12" }, { id: 3, content: "Больше 12" }] },
    { id: 3, imgSrc: "/3.png", title: "Какой выберешь цвет?", answerList: [{ id: 1, content: "Жёлтый" }, { id: 2, content: "Синий" }, { id: 3, content: "Красный" }, { id: 4, content: "Фиолетовый" }] },
    { id: 4, imgSrc: "/4.png", title: "Что выберешь?", answerList: [{ id: 1, content: "Бластер" }, { id: 2, content: "Меч" }] },
    { id: 5, imgSrc: "/5.png", title: "Какая способность больше нравится?", answerList: [{ id: 1, content: "Дыхание огнём" }, { id: 2, content: "Телепортация" }] },
    { id: 6, imgSrc: "/6.png", title: "Нравится способность летать?", answerList: [{ id: 1, content: "Да, конечно" }, { id: 2, content: "Нет, не нравится" }] },
    { id: 7, imgSrc: "/7.png", title: "Что выберешь?", answerList: [{ id: 1, content: "Быть умным" }, { id: 2, content: "Быть сильным" }] },
    { id: 8, imgSrc: "/8.png", title: "Нравится слушать музыку на полную громкость?", answerList: [{ id: 1, content: "Да" }, { id: 2, content: "Нет" }] },
    { id: 9, imgSrc: "/9.png", title: "Скибиди доп доп доп?", answerList: [{ id: 1, content: "Да" }, { id: 2, content: "Нет" }] },
    { id: 10, imgSrc: "/10.png", title: "Нравится спсобность быстро бегать/летать?", answerList: [{ id: 1, content: "Да" }, { id: 2, content: "Нет" }] },
    { id: 11, imgSrc: "/11.png", title: "Ты не сделал домашку, спишешь у кого то или честно признаешься, что не сделал?", answerList: [{ id: 1, content: "Спишу" }, { id: 2, content: "Честно признаюсь" }, { id: 3, content: "Прогуляю урок" }, { id: 4, content: "Всегда делаю домашку" }] },
    { id: 12, imgSrc: "/12.png", title: "Кем хочешь быть?", answerList: [{ id: 1, content: "Скибидистом" }, { id: 2, content: "Камераменом" }, { id: 3, content: "Человеком" }, { id: 4, content: "Кирпичом" }] }
];

const charactersList: ICharacter[] = [
    { title: "G-man", img: "/gman.webp" },
    { title: "Астро-Скибидист", img: "/astro-skibidist.webp" },
    { title: "Камерамэн", img: "/cameraman.webp" },
    { title: "Девушка-Скибидист", img: "/female-skibidi.webp" },
    { title: "Мини-скибидист", img: "/mini-skibidi.webp" },
    { title: "Скибиди-Вертолёт", img: "/skibidi-helicopter.webp" },
    { title: "Скибиди-Паразит", img: "/skibidi-parasit.webp" },
    { title: "Скибиди-Учёный", img: "/skibidi-sciense.webp" },
    { title: "Тубзик Обычный", img: "/skibidist.webp" },
    { title: "Спикермэн", img: "/speakerman.webp" },
    { title: "Спикер Вумэн", img: "/speakerwoman.webp" },
    { title: "Титан-Камерамэн", img: "/titanCM.webp" },
    { title: "Титан-Спикермэн", img: "/titanSP.webp" },
    { title: "Титан-ТВмэн", img: "/titanTV.webp" },
    { title: "ТВ-мэн", img: "/tvmam.webp" },
    { title: "ТВ-Вумен", img: "/tvwomen.webp" }
];

export { questionsData, charactersList }
