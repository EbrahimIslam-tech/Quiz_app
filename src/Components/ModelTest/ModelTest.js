import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import FormLabel from "@mui/material/FormLabel";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";

import Timer from "./Timer";

import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const ModelTest = ({
  qusnumbervalue,
  setQusnumbervalue,
  timevalue,
  setTimevalue,
  data,
}) => {
  const [value, setValue] = useState();

  // console.log(timevalue, "timevalue");
  const [checkvalue, setCheckValue] = useState("");

  const [error, setError] = React.useState(false);
  const [helperText, setHelperText] = React.useState("Choose wisely");
  const [timeOut, setTimeOut] = useState(false);

  const qusdata = data.slice(0, qusnumbervalue);
  // console.log(qusdata);
  /*  function qusvalueslider(qusvalue) {
    setQusnumbervalue(qusvalue);
    // console.log(qusvalue);
    return `${qusvalue}`;
  }
  function timevalueslider(timevalue) {
    setTimevalue(timevalue);
    // console.log(qusvalue);

    return `${timevalue}`;
  } */
  /*  const handletimechange = () => {
    function timevalueslider(timevalue) {
      setTimevalue(timevalue);
      // console.log(qusvalue);
      return `${timevalue}`;
    }
  }; */
  const handleRadioChange = (event) => {
    setValue(event.target.value);
    // rightanswer.push(event.target.value);
    // setCheckValue(checkvalue);
    setHelperText(" ");
    setError(false);
  };

  var rightanswer = [];
  // console.log(rightanswer);
  const handleSubmit = (event) => {
    event.preventDefault();
    // rightanswer.push(value);
    if (checkvalue === true) {
      setHelperText("You got it!");
      setScore(score + 1);
      setError(false);
    } else {
      setHelperText("Sorry, wrong answer!");
      setError(true);
    }
    setValue();
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const handleAnswerOptionClick = (isCorrect) => {
    setHelperText("");
    /*    if (isCorrect) {
      setScore(score + 1);
    } */

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < qusdata.length) {
      setCurrentQuestion(nextQuestion);
      setHelperText();
    } else {
      setShowScore(true);
      setTimeOut(true);
    }
  };
  return (
    <Container style={{}}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          background: "#ffffff",
          margin: "10px",
        }}
      >
        <h4>BCS Preli Model Test </h4>
        <div className="question-count">
          <span>Question No: {currentQuestion + 1}</span>/{qusdata.length}
          {/*      <Box sx={{ width: 300 }}>
            <Slider
              aria-label="Question Numbers"
              defaultValue={10}
              getAriaValueText={qusvalueslider}
              valueLabelDisplay="auto"
              step={5}
              marks
              min={10}
              max={data.length}
            />
          </Box> */}
        </div>
      </div>

      {!timeOut && timevalue && (
        <div>
          <Timer setTimeOut={setTimeOut} timevalue={timevalue} />
        </div>
      )}

      {showScore || timeOut ? (
        <div className="score-section">
          <br />
          <h3>
            You scored {score} out of {qusdata.length}
          </h3>

          <p>Right ansawers are</p>

          {qusdata.map((mcqs) => (
            <div style={{ textAlign: "left" }}>
              <h5> Question: {mcqs.question} </h5>
              {/*    {mcqs.answers.map((ans) => (
                <div style={{ color: "#00ff00" }}>
                  <input type="radio" defaultValue={ans.text} name="" id="" />
                </div>
              ))} */}
              {mcqs.answers.map((ans) => (
                <FormControl>
                  <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    // value={value}
                    //  onChange={handleChange}
                  >
                    <FormControlLabel
                      value={ans.text}
                      disabled
                      control={<Radio />}
                      label={ans.text}
                    />
                  </RadioGroup>
                </FormControl>
              ))}
              {mcqs.answers.map((ans) => (
                <div style={{ color: "#00ff00" }}>
                  {ans.correct === true && <h6> Answer is :{ans.text}</h6>}
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div>
          <form onSubmit={handleSubmit} style={{ float: "left" }}>
            <FormControl sx={{ m: 3 }} variant="standard">
              <FormLabel id="demo-error-radios" style={{ textAlign: "left" }}>
                <div> {qusdata[currentQuestion].question}</div>
              </FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={value}
                // checkvalue={checkvalue}

                onChange={handleRadioChange}
              >
                {qusdata[currentQuestion].answers.map((answerOption) => (
                  <>
                    <FormControlLabel
                      onClick={() => setCheckValue(answerOption.correct)}
                      value={answerOption.text}
                      control={<Radio />}
                      label={answerOption.text}
                    />
                  </>
                ))}
              </RadioGroup>
              {/*    <FormHelperText
                style={{ textAlign: "right", marginLeft: "500px" }}
              >
                {helperText}
              </FormHelperText> */}
              <div style={{ display: "flex" }}>
                {/*  <Button sx={{ mt: 1, mr: 1 }} type="submit" variant="contained">
                  Check Answer
                </Button> */}
                {value && (
                  <Button
                    sx={{ mt: 1, ml: 5 }}
                    type="submit"
                    variant="outlined"
                    onClick={() => handleAnswerOptionClick()}
                  >
                    Next
                  </Button>
                )}
              </div>
            </FormControl>
          </form>
        </div>
      )}
    </Container>
  );
};
export default ModelTest;
