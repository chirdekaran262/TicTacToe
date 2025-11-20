import React from "react";

const Square = (props) => {
    return (
        <button
            onClick={props.onClick}
            className="square"
            style={{
                border: "none",
                height: "120px",
                width: "120px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: props.value ? "#f5f5f5" : "#ffffff",
                borderRadius: "12px",
                cursor: props.value ? "not-allowed" : "pointer",
                fontSize: "3rem",
                fontWeight: "800",
                color: props.value === "X" ? "#667eea" : props.value === "O" ? "#764ba2" : "transparent",
                transition: "all 0.2s ease",
                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
                border: "2px solid #e8e8e8"
            }}
            onMouseEnter={(e) => {
                if (!props.value) {
                    e.target.style.background = "#f0f0f0";
                    e.target.style.transform = "translateY(-2px)";
                    e.target.style.boxShadow = "0 6px 16px rgba(102, 126, 234, 0.2)";
                }
            }}
            onMouseLeave={(e) => {
                if (!props.value) {
                    e.target.style.background = "#ffffff";
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
                }
            }}
        >
            {props.value}
        </button>
    );
};

export default Square;