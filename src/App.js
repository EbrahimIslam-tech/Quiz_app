import logo from "./logo.svg";
import "./App.css";
import ModelTest from "./Components/ModelTest/ModelTest";
import Header from "./Components/Common/Header/Header";
import SelectionModal from "./Components/ModelTest/SelectionModal";
import { useState } from "react";

function App() {
  const [qusnumbervalue, setQusnumbervalue] = useState();
  const [timevalue, setTimevalue] = useState();

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Tony Stark",
          correct: false,
        },
        {
          text: "Elon Musk",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is one?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Tony Stark",
          correct: false,
        },
        {
          text: "Elon Musk",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is one?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Tony Stark",
          correct: false,
        },
        {
          text: "Elon Musk",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is one?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Tony Stark",
          correct: false,
        },
        {
          text: "Elon Musk",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is one?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Tony Stark",
          correct: false,
        },
        {
          text: "Elon Musk",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is one?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who is CEO of Tesla?",
      answers: [
        {
          text: "Jeff Bezos",
          correct: false,
        },
        {
          text: "Bill Gates",
          correct: false,
        },
        {
          text: "Tony Stark",
          correct: false,
        },
        {
          text: "Elon Musk",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "Which is one?",
      answers: [
        {
          text: "1",
          correct: true,
        },
        {
          text: "2",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
      ],
    },
  ];
  return (
    <div className="App">
      <Header></Header>
      {/* <ModelTest2></ModelTest2> */}
      {!timevalue ? (
        <SelectionModal
          timevalue={timevalue}
          setTimevalue={setTimevalue}
          qusnumbervalue={qusnumbervalue}
          setQusnumbervalue={setQusnumbervalue}
          data={data}
        ></SelectionModal>
      ) : (
        <ModelTest
          timevalue={timevalue}
          setTimevalue={setTimevalue}
          qusnumbervalue={qusnumbervalue}
          setQusnumbervalue={setQusnumbervalue}
          data={data}
        ></ModelTest>
      )}

      {/* <MaterialTimer></MaterialTimer> */}
    </div>
  );
}

export default App;
