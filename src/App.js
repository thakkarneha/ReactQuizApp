import { useState } from "react";
import "./style.css";

function App() {
  const questionArray=[
    {
      series:"1",
      question:"Which of the following is the correct name of React.js?",
      answerOptions:[
      {answer:'React', isCorrect:false},
      {answer:'React.js',isCorrect:false},
      {answer:'Reactjs',isCorrect:false},
      {answer:'All of the Above',isCorrect:true}
      ],
    },
    {
      series:"2",
      question:"Which of the following are the advantages of React.js?",
      answerOptions:[
        {answer:"React.js can increase the application's performance with Virtual DOM.",isCorrect:false},
      {answer:"React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",isCorrect:false},
      {answer:"React.js can render both on client and server side.",isCorrect:false},
      {answer:"All of the Above",isCorrect:true}
      ],
    },
    { series:"3",
      question:"Which of the following is not a disadvantage of React.js?",
      answerOptions:[
       { answer:"React.js has only a view layer. We have put your code for Ajax requests, events and so on.",isCorrect:false},
      {answer:"The library of React.js is pretty large.",isCorrect:false},
      {answer:"The JSX in React.js makes code easy to read and write",isCorrect:true},
      {answer:"The learning curve can be steep in React.js.",isCorrect:false},
  ],
},
    { series:"4",
    question:"Which of the following command is used to install create-react-app??",
    answerOptions:[
     {answer:"npm install -g create-react-app",isCorrect:true},
      {answer:"npm install create-react-app ",isCorrect:false},
      {answer:"npm install -f create-react-app",isCorrect:false},
      {answer:"install -g create-react-app",isCorrect:false},
   ],
   },
    {
      series:"5",
      question:"What of the following is used in React.js to increase performance?",
      answerOptions:[
       { answer:"Original DOM",isCorrect:false},
      {answer:"Virtual DOM",isCorrect:true},
      {answer:"Both A and B",isCorrect:false},
      {answer:"None of the Above",isCorrect:false},
  ],
},
    { series:"6",
      question:"A class is a type of function, but instead of using the keyword function to initiate it, which keyword do we use?",
      answerOptions:[
        {answer:"Constructor",isCorrect:false},
      {answer:"Class",isCorrect:true},
      {answer:"Object",isCorrect:false},
      {answer:"Data Object",isCorrect:false},
  ],
},
    { series:"7",
      question:"Which of the following acts as the input of a class-based component?",
      answerOptions:[
       { answer:"Class",isCorrect:false},
      {answer:"factory",isCorrect:false},
      {answer:"Render",isCorrect:false},
      {answer:"Props",isCorrect:true},
    ],
  },
    { series:"8",
      question:"Which of the following keyword is used to create a class inheritance?",
      answerOptions:[
        {answer:"Create",isCorrect:false},
      {answer:"Inherit",isCorrect:false},
      {answer:"Extend",isCorrect:true},
      {answer:"This",isCorrect:false},
   ],
   },

    { series:"9",
    question:"What is the default port where webpack-server runs?",
      answerOptions:[
        {answer:"3030",isCorrect:false},
      {answer:"8080",isCorrect:false},
      {answer:"3000",isCorrect:true},
      {answer:"6060",isCorrect:false},
   ],
   },
    { series:"10",
      question:"What is the declarative way to render a dynamic list of components based on values in an array?",
      answerOptions:[
        {answer:"Using the reduce array method",isCorrect:false},
      {answer:"Using the <Each /> component",isCorrect:false},
      {answer:"Using the Array.map() method",isCorrect:true},
      {answer:"With a for/while loop",isCorrect:false},
  ],
},
    { series:"11",
      question:" How many ways of defining your variables in ES6?",
      answerOptions:[
       { answer:"1",isCorrect:false},
      {answer:"3",isCorrect:true},
      {answer:"4",isCorrect:false},
      {answer:"5",isCorrect:false},
  ],
},
    {
      series:"12",
      question:"What is a state in React?",
      answerOptions:[
        {answer:"A permanent storage.",isCorrect:false},
      {answer:"Internal storage of the component",isCorrect:true},
      {answer:"External storage of the component",isCorrect:false},
      {answer:"None of the Above",isCorrect:false},
   ],
   }

  ]
  const[currentQue, setcurrentQue]=useState(0)
  const[showScore, setShowScore]=useState(false)
  const[score, setScore]=useState(0)


const nextQue=(isCorrect)=>{
  if(isCorrect){
    setScore(score+1);
  }
  const nextQuestion=currentQue+1

  if(nextQuestion < questionArray.length){
    setcurrentQue(nextQuestion)
  }
  else{
    setShowScore(true)
    }
  
}
  return (
    <>
    <h1 className="Container text-center">React JS Basic Quiz</h1>
  
   
<div className="container mt-3" >
<div className="card">
  <div className="card-body">
  {showScore?(<div className="pinku">You have Scored {score} Out of {questionArray.length}</div>):(
<div>
  <span>Question {currentQue+1}</span>/{questionArray.length}
    <h5 className="card-title">{questionArray[currentQue].question}</h5>
 <div className="my-3 pd-5">{questionArray[currentQue].answerOptions.map((answerOptions) =>(
<button className="btn btn-warning myClass" onClick={()=>nextQue(answerOptions.isCorrect)}>{answerOptions.answer}</button>
     ))}
     </div> 
    </div>
    )}
    </div>
    </div>
    </div>
   
    
      
    </>
  );
}

export default App;
