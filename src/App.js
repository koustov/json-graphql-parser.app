import logo from "./logo.svg";
import "./App.css";
import { config_to_query } from "json-graphql-parser/v2/index.js";
import { useEffect, useState } from "react";
import { getJsonStrings } from "./queries";

function App() {
  const [objectData, setObjectData] = useState("");
  const [queryData, setQueryData] = useState("");
  const [allTemplates, setAllTemplates] = useState([]);
  useEffect(() => {
    setAllTemplates(getJsonStrings());
  }, []);

  const onSelectionChanged = (v) => {
    setObjectData(
      JSON.stringify(allTemplates[v.target.selectedIndex].value, null, 4)
    );
  };
  const convert = () => {
    try {
      const objectStrToObj = JSON.parse(objectData);
      const queryString = config_to_query(objectStrToObj);
      setQueryData(queryString);
    } catch (err) {
      console.error(`Error while parsing: ${err}`);
    }
  };
  return (
    <div className="app-wrapper">
      <div className="app-header">
        <header class="header-fixed">
          <div class="header-limiter">
            <h1>
              <a href="#">
                <span>JSON graphql parser</span>&nbsp;playground
              </a>
            </h1>
          </div>
        </header>
      </div>
      <div className="app-container">
        <div className="app-toolbar">
          <div className="section-title">
            Select any predefined object or write your own
          </div>
          <div class="select">
            <select id="dropdown" onChange={(e) => onSelectionChanged(e)}>
              {allTemplates.map((d) => {
                return <option value={d.value}>{d.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="app-body">
          <div className="object-section">
            <span className="section-title">
              Write your object here in JSON format
            </span>
            <textarea
              onChange={(e) => setObjectData(e.target.value)}
              value={objectData}
            ></textarea>
          </div>
          <div className="query-section">
            <span className="section-title">Output</span>
            <textarea readOnly value={queryData}></textarea>
          </div>
        </div>
        <div className="app-footer">
          <button className="btn" onClick={() => convert()}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Convert
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
