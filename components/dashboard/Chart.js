import React from "react";

const Chart = () => {
  return (
    <div id="chart">
      <p>Donut Chart</p>
      <div className="svg-container">
        <svg>
          <circle cx="150" cy="150" r="140"></circle>
          <circle
            cx="150"
            cy="150"
            r="140"
            style={{ strokeDashoffset: `calc(880 - (880 * ${25}) / 100)` }}
          ></circle>
          <circle cx="150" cy="150" r="120"></circle>
          <circle
            cx="150"
            cy="150"
            r="120"
            style={{ strokeDashoffset: `calc(754 - (754 * ${30}) / 100)` }}
          ></circle>
          <circle cx="150" cy="150" r="100"></circle>
          <circle
            cx="150"
            cy="150"
            r="100"
            style={{ strokeDashoffset: `calc(629 - (629 * ${90}) / 100)` }}
          ></circle>
          <circle cx="150" cy="150" r="80"></circle>
        </svg>
      </div>
    </div>
  );
};

export default Chart;
