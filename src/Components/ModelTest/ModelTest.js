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
import { pink, red, lightGreen } from "@mui/material/colors";
import Timer from "./Timer";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { saveQusAns, saveSelectedAns } from "../../features/qusSlice";
import { Grid } from "@mui/material";
import MaterialTimer from "./MaterialTimer";

const ModelTest = ({
  qusnumbervalue,
  setQusnumbervalue,
  timevalue,
  setTimevalue,
  data,
}) => {
  const [value, setValue] = useState();
  console.log(value);
  const { data: qusAnsdata } = useSelector((store) => store.qusAns);
  const dispatch = useDispatch();
  const [checkvalue, setCheckValue] = useState("");
  const [error, setError] = React.useState(false);
  const [timeOut, setTimeOut] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const qusdata = data.slice(0, qusnumbervalue);

  const handleRadioChange = (event) => {
    setValue(event.target.value);

    setError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    /*  if (checkvalue === true) {
      setScore(score + 1);
      setError(false);
    } else {
      setError(true);
    } */
    setValue();
  };

  const handleAnswerOptionClick = (isCorrect) => {
    if (checkvalue === true) {
      setScore(score + 1);
      setError(false);
    } else {
      setError(true);
    }
    dispatch(saveQusAns({ qsn: qusdata[currentQuestion], ans: value }));
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
    refreshPage();
  };
  const refreshPage = () => {
    window.location.reload(false);
  };
  window.onbeforeunload = function (e) {
    localStorage.clear();
  };
  const questions = JSON.parse(localStorage.getItem("QusAns"));

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
          <Button
            variant="outlined"
            style={{ float: "right" }}
            onClick={cleardata}
          >
            start again
          </Button>
          <h3>
            You scored {score} out of {qusdata.length}
          </h3>

          <p>View The Right ansawers</p>

          {questions.map((mcqs) => (
            <div style={{ textAlign: "left" }} key={mcqs.qsn.id}>
              <h5> Question: {mcqs.qsn.question} </h5>
              <div>
                {mcqs.qsn.answers.map((ans) => (
                  <div
                    key={mcqs.qsn.id}
                    /*    style={{
                      marginTop: "20px",
                      marginBottom: "10px",
                      marginLeft: "30px",
                    }} */
                  >
                    {ans.text === mcqs.selectAns ? (
                      <FormControl>
                        {ans.correct === true ? (
                          <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            checked={ans.text}
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  sx={{
                                    color: lightGreen[800],
                                    "&.Mui-checked": {
                                      color: lightGreen[800],
                                    },
                                  }}
                                />
                              }
                              label={ans.text}
                            />
                          </RadioGroup>
                        ) : (
                          <RadioGroup
                            aria-labelledby="demo-controlled-radio-buttons-group"
                            name="controlled-radio-buttons-group"
                            checked={ans.text}
                          >
                            <FormControlLabel
                              control={
                                <Radio
                                  sx={{
                                    color: red[800],
                                    "&.Mui-checked": {
                                      color: red[800],
                                    },
                                  }}
                                />
                              }
                              label={ans.text}
                            />
                          </RadioGroup>
                        )}
                      </FormControl>
                    ) : (
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-controlled-radio-buttons-group"
                          name="controlled-radio-buttons-group"
                          value={value}
                        >
                          <FormControlLabel
                            value={ans.text}
                            disabled
                            control={<Radio />}
                            label={ans.text}
                          />
                        </RadioGroup>
                      </FormControl>
                    )}
                  </div>
                ))}
              </div>

              {mcqs.qsn.answers.map((ans) => (
                <div key={mcqs.qsn.id}>
                  {ans.text !== mcqs.selectAns && (
                    <div>
                      {ans.correct === true && (
                        <h5 style={{ display: "flex ", flexDirection: "row" }}>
                          Answer:{" "}
                          <p style={{ color: "#43a047", marginLeft: "10px" }}>
                            {ans.text}
                          </p>{" "}
                        </h5>
                      )}
                    </div>
                  )}
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
                onChange={handleRadioChange}
              >
                {qusdata[currentQuestion].answers.map((answerOption) => (
                  <>
                    <FormControlLabel
                      key={qusdata.id}
                      onClick={() => setCheckValue(answerOption.correct)}
                      value={answerOption.text}
                      control={<Radio />}
                      label={answerOption.text}
                    />
                  </>
                ))}
              </RadioGroup>

              <div style={{ display: "flex" }}>
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
