const readline = require("readline-sync");

var fs = require("fs");
var score = 0;
var start = () => {
    var userName = readline.question("Enter your name : ");
    console.log("Hello " + userName + " Welcome To The Cricket Game ");
    console.log("**************************************");
    var x = questions;
    for (q in x) {
        console.log(questions[q].que);
        console.log(questions[q].a);
        console.log(questions[q].b);
        console.log(questions[q].c);
        console.log(questions[q].d);
        var ans = readline.question("enter your answer = ");
        quiz(q, ans);
    }
    console.log("Your Final Score : " + score + " / 50");
};


function quiz(ques, answ) {
    if (questions[ques].ans == answ) {
        score += 5;
        console.log("Your Answer is Correct");
        console.log("Your Score : " + score);
        console.log("***********************");
    } else {
        score -= 2;
        console.log("Your Answer is Incorrect");
        console.log("Your Score : " + score);
        console.log("***********************");
    }
}


var questions = [{
        que: "Which team won the World Test Championship (WTC)?",
        a: "a. India",
        b: "b. Australia",
        c: "c. England",
        d: "d. New Zealand",
        ans: "d"
    },
    {
        que: "Which team had in ipl 2020 won?",
        a: "a. Mumbai Indians",
        b: "b. Chennai Super Kings",
        c: "c. Delhi Capitals",
        d: "d. Kolkata Knight Riders",
        ans: "a"
    },
    {
        que: "Which player has scored the most runs in Test?",
        a: "a. Kumar Sangakkara",
        b: "b. Ricky Ponting",
        c: "c. Sachin Tendulkar",
        d: "d. Sanath Jayasuriya",
        ans: "c"
    },
    {
        que: "Who has hit the most sixes in Ipl?",
        a: "a. MS Dhoni",
        b: "b. Chris Gayle",
        c: "c. AB de Villiers",
        d: "d. Rohit Sharma",
        ans: "b"
    },
    {
        que: "Which player had highest runs in IPL history?",
        a: "a. Virat Kohli",
        b: "b. Rohit Sharma",
        c: "c. Shikhar Dhawan",
        d: "d. Suresh Raina",
        ans: "a"
    },
    {
        que: "which team had won world cup 2015?",
        a: "a. India",
        b: "b. England",
        c: "c. Srilanka",
        d: "d. Australia",
        ans: "d"
    },
    {
        que: "world cup 2011 was played in which Stadium?",
        a: "a. Eden Gardens Stadium",
        b: "b. Wankhede Stadium",
        c: "c. Lord's Stadium",
        d: "d. Beausejour Stadium",
        ans: "b"
    },
    {
        que: "which team is reach in final of ipl 2021?",
        a: "a. CSk & KKR",
        b: "b. MI & RCB",
        c: "c. DC & CSK",
        d: "d. SRH & RCB",
        ans: "a"
    },
    {
        que: "which team is Won T20 world cup 2016?",
        a: "a. Australia",
        b: "b. India",
        c: "c. West Indies",
        d: "d. Pakistan",
        ans: "c"
    },
    {
        que: "which bowler is taken most wickets in ipl?",
        a: "a. Lasith Malinga",
        b: "b. Dwayne Bravo",
        c: "c. Kagiso Rabada",
        d: "d. Jasprit Bumrah",
        ans: "a"
    }
];

start();