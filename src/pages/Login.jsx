import React from "react";

const Login = ({ onBackHome, message }) => {
  return (
    <div
      style={{
        maxWidth: "400px",
        margin: "80px auto",
        padding: "30px",
        backgroundColor: "#18181b",
        borderRadius: "12px",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#fff",
        textAlign: "center",
      }}
    >
      {message ? (
        <div
          style={{
            backgroundColor: "rgba(230, 57, 70, 0.15)",
            border: "1px solid #e63946",
            color: "#e63946",
            padding: "10px 15px",
            borderRadius: "6px",
            fontSize: "0.85rem",
            fontWeight: "700",
            marginBottom: "20px",
          }}
        >
          ⚠️ {message}
        </div>
      ) : (
        <h2 style={{ marginBottom: "20px", fontSize: "1.5rem" }}>
          LOG IN TO ZENJI
        </h2>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Logged in successfully!");
          onBackHome();
        }}
      >
        <input
          type="email"
          placeholder="Email Address"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "15px",
            borderRadius: "6px",
            border: "1px solid #333",
            background: "#09090b",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />
        <input
          type="password"
          placeholder="Password"
          required
          style={{
            width: "100%",
            padding: "12px",
            marginBottom: "20px",
            borderRadius: "6px",
            border: "1px solid #333",
            background: "#09090b",
            color: "#fff",
            boxSizing: "border-box",
          }}
        />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            backgroundColor: "#e63946",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontWeight: "800",
            cursor: "pointer",
          }}
        >
          LOG IN
        </button>
      </form>

      <button
        onClick={onBackHome}
        style={{
          marginTop: "15px",
          background: "none",
          border: "none",
          color: "#a1a1aa",
          cursor: "pointer",
          textDecoration: "underline",
          fontSize: "0.85rem",
        }}
      >
        ← Back to Home
      </button>
    </div>
  );
};

export default Login;
