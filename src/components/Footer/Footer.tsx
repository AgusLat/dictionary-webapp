import "./footer.css";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="footer">&copy; {year} pxweb - All rights reserved</div>
  );
};
