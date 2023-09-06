class Question{
    constructor(id,question,answers){
        this.id=id;
        this.question=question;
        this.answers=answers
    }
}

class Answer{
    constructor(id,answer,correctState){
        this.id=id;
        this.answer=answer;
        this.correctState=correctState;
    }
}

let dataArray;

let q1=new Question(1,"Which river is the longest in the world?",[
    new Answer(1,"Nile",true),
    new Answer(2,"Amazon",false),
    new Answer(3,"Mississippi",false),
    new Answer(4,"Yangtze",false),

]);

const q2 = new Question(2, "What is the chemical symbol for gold?", [
    new Answer(1, "Go", false),
    new Answer(2, "Au", true),
    new Answer(3, "Ag", false),
    new Answer(4, "Fe", false),
]);

const q3 = new Question(3, "Who played the role of Jack Dawson in the movie 'Titanic'?", [
    new Answer(1, "Leonardo DiCaprio", true),
    new Answer(2, "Tom Hanks", false),
    new Answer(3, "Brad Pitt", false),
    new Answer(4, "Johnny Depp", false),
]);

const q4 = new Question(4, "Who was the first President of the United States?", [
    new Answer(1, "Benjamin Franklin", false),
    new Answer(2, "John Adams", false),
    new Answer(3, "Thomas Jefferson", false),
    new Answer(4, "George Washington", true),
]);

const q5 = new Question(5, "Which sport is known as the 'king of sports'?", [
    new Answer(1, "Soccer", false),
    new Answer(2, "Tennis", false),
    new Answer(3, "Golf", false),
    new Answer(4, "Cricket", true),
]);


dataArray.push(q1,q2,q3,q4,q5);