'use client'

import { useState } from 'react'

import Intro from './sections/intro'
import Gender from './sections/gender'
import Question from './sections/question'
import Result from './sections/result'
import { questions, answers } from './data'

export default function Home() {

  const [index, setIndex] = useState(0);
  const [gender, setGender] = useState('neither');

  let initialCounters = [
    {
      ee: 0,
      ss: 0,
      ff: 0,
      ns: 0,
      hg: 0,
      hs: 0
    }
  ];

  const [persona, setPersona] = useState(initialCounters);

  function handleNextClick() {
    setIndex(index + 1);
  }
  function previousNextClick() {
    setIndex(index - 1);
  }
  function genderChoice(val) {
    setGender(val);
  }
  function personaNextClick(val) {
    
    const personaCounter = persona.map(p => ({
      ...p,
      [val]: (p[val] || 0) + 1
    }));
  
    setPersona(personaCounter);
    setIndex(index + 1);
  }

  function reset() {
    setIndex(0);
    setGender("neither")
    setPersona(initialCounters)
  }

  return (
    <>
      <Intro
        sectionNumber={index}
        clickEvent={handleNextClick}
        title="The Craving Calculator"
        intro="Ready to curb your cravings?  Answer 15 questions about your eating habits and general lifestyle to get your Cravings Persona and some advice  for managing your eating."
        buttonTitle="Start"
      />
      <Gender
        sectionNumber={index}
        previousClickEvent={previousNextClick}
        clickEvent={handleNextClick}
        genderChoice={genderChoice}
        subTitle="About you"
        title="Pre-Screen questions"
        question="What is your sex?"
        buttonTitle="Begin Quiz"
      />
      {
        questions.map(question => 
          <Question
            key={question.no}
            sectionNumber={index}
            previousClickEvent={previousNextClick}
            clickEvent={personaNextClick}
            questionNo = {(question.no / questions.length) * 100}
            questionLength = {questions.length}
            questionNumber = {question.no}
            title={question.title}
            questions={question.questions}
            gender={gender}
            sectionContainer={question.no+1}
          />
        )
      }
      {
        answers.map(answer => 
          <Result
            key={answer.no}
            sectionNumber={index}
            title={answer.title}
            causes={answer.causes}
            image={answer.image}
            content={answer.content}
            advice={answer.advice}
            sectionLength={questions.length + 2}
            resetButton={reset}
          />
        )
      }
    </>
  );
}

