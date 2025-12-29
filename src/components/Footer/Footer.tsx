import "./footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      &copy; {year} Agustin Latienda - All rights reserved
    </div>
  );
};
