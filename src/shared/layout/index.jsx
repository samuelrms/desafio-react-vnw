import PropTypes from "prop-types";
import { Footer, Navbar } from "../components";

export const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

RootLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
