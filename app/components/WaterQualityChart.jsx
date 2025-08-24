// WaterQualityCard.jsx
import React from "react";

const WaterQualityCard = ({ waterQuality, advice }) => {
  const getBackgroundColor = () => {
    if (waterQuality === "Good") return "#e8f5e9";
    if (waterQuality === "Fair") return "#fff3e0";
    return "#ffebee";
  };

  const getBorderColor = () => {
    if (waterQuality === "Good") return "#4caf50";
    if (waterQuality === "Fair") return "#ff9800";
    return "#f44336";
  };

  return (
    <div
      style={{
        marginTop: "25px",
        padding: "15px",
        borderRadius: "10px",
        background: getBackgroundColor(),
        border: `2px solid ${getBorderColor()}`,
      }}
    >
      <h2
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          marginBottom: "12px",
          color: "#01579b",
          display: "flex",
          alignItems: "center",
        }}
      >
        Water Quality:{" "}
        <span style={{ color: getBorderColor(), marginLeft: "10px" }}>
          {waterQuality}
        </span>
      </h2>

      <ul style={{ listStyleType: "none", paddingLeft: "0", color: "#000" }}>
        {advice.map((tip, index) => (
          <li
            key={index}
            style={{
              marginBottom: "8px",
              padding: "8px",
              borderRadius: "5px",
              background: tip.includes("✅") ? "#e8f5e9" : "#ffebee",
            }}
          >
            {tip}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WaterQualityCard;
