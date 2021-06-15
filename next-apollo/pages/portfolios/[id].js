import React from "react";
import { useRouter } from "next/router";

// const PortfolioDetail = () => {
//   const router = useRouter();
//   const id = router.query.id;

//   return <h1>I am detailed one with id: {id}</h1>;
// };

// functional component
const PortfolioDetail = ({ query }) => {
  const { id } = query;

  return <h1>I am detailed one with id: {id}</h1>;
};

PortfolioDetail.getInitialProps = ({ query }) => {
  return { query };
};

// class based component
// class PortfolioDetail extends React.Component {

//   // called on the server
//   static getInitialProps({ query }) {
//     // what you return here, will get into this.props
//     return { query, test: "Hello world", num: 4 + 4 };
//   }

//   render() {
//     const id = this.props.query.id;
//     return (
//       <h1>
//         I am detailed one with id: {id} {this.props.query.test}
//         {this.props.query.num}
//       </h1>
//     );
//   }
// }

export default PortfolioDetail;
