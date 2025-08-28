const Card = ({ title, children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        padding: "1rem",
        background: "#222",
        color: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.5)",
        transition: "transform 0.2s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
