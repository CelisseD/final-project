import React from "react";
import "../components/Results/results.css";

function ResultsPage(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.logo} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>{props.name}</strong>
          </li>
          <li>
            <strong>Description:</strong> {props.description}
          </li>
          <li>
            <strong>Address:</strong> {props.link}
          </li>
          <li>
            <strong>Supported Causes:</strong> {props.supporting}
          </li>
          <li>
            <strong>Conflicting Causes:</strong> {props.conflicting}
          </li>
          <li>
            <strong>Verdict:</strong> {props.reason}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ResultsPage;


