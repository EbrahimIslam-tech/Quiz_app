import logo from "./logo.svg";
import "./App.css";
import ModelTest from "./Components/ModelTest/ModelTest";
import Header from "./Components/Common/Header/Header";
import SelectionModal from "./Components/ModelTest/SelectionModal";
import { useState } from "react";
import data from "./Components/ModelTest/DemoData";

function App() {
  const [qusnumbervalue, setQusnumbervalue] = useState();
  const [timevalue, setTimevalue] = useState();

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
