import * as React from "react";
import { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
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
import { saveQusAns, saveSelectedAns } from "../../features/qusSlice";
const ModelTest = ({
  qusnumbervalue,
  setQusnumbervalue,
  timevalue,
  setTimevalue,
  data,
}) => {
  const [value, setValue] = useState();
  console.log(value, "value");
  const { data: qusAnsdata } = useSelector((store) => store.qusAns);
  const dispatch = useDispatch();

  const [checkvalue, setCheckValue] = useState("");

  const [error, setError] = React.useState(false);

  const [timeOut, setTimeOut] = useState(false);

  const qusdata = data.slice(0, qusnumbervalue);

  const handleRadioChange = (event) => {
    setValue(event.target.value);

    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (checkvalue === true) {
      setScore(score + 1);
      setError(false);
    } else {
      setError(true);
    }
    setValue();
  };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // console.log(currentQuestion);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    dispatch(saveQusAns(qusdata[currentQuestion]));
    dispatch(saveSelectedAns(value));
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < qusdata.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
      setTimeOut(true);
    }
  };
  const cleardata = () => {
    localStorage.clear();
  };
  const qustions = JSON.parse(localStorage.getItem("QusAns"));
  const selectAns = JSON.parse(localStorage.getItem("selectAns"));
  console.log(qustions, selectAns);
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
          <button onClick={cleardata}>start again</button>
          <p>Right ansawers are</p>

          {qustions.map((mcqs) => (
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
