import PropTypes from "prop-types";
import Header from "./Header";

export default function Page({ children, cool }) {
  return (
    <div>
      <Header></Header>
      <h2>I am the page component</h2>
      {children}
    </div>
  );
}

Page.propTypes = {
  cool: PropTypes.string,
  children: PropTypes.any,
};
