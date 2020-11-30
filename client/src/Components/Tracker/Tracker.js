import React, { useEffect, useState } from "react";
import "./Tracker.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProgressBar from "react-bootstrap/ProgressBar";

// class Tracker extends React.Component {
//   render() {
//     const now = 60;
//     return (
//       <>
//         <div className="tracker-container">
//           <h3 className="tracker-title">Donation Tracker</h3>
//           <div className="progressBar">
//             <ProgressBar striped variant="success" animated now={40} />
//             <ProgressBar striped variant="info" animated now={20} />
//             <ProgressBar striped variant="warning" animated now={60} />
//             <h4 className="tracker-title">
//               You have donated {`$${now}`} so far!
//             </h4>
//           </div>
//         </div>
//       </>
//     );
//   }
// }

const Tracker = (props) => {
  const [donate, setDonate] = useState([]);

  useEffect((donate) => {
    fetch(`/donationAmount/${props.user}`)
      .then((res) => res.json())
      .then((data) => {
        setDonate(data.monies);
      });
  }, [props.user]); //<--Keep this array empty for only one update

  return (
    <div>
    <div className="tracker-container">
      <h3 className="tracker-title">Donation Tracker</h3>

      {/*THIS CAN BE USED POST MVP -- GRAPHING USER'S DONATION HISTORY
      <div className="progressBar">
      {donate.map((x, i) => {
        return <ProgressBar striped variant="success" animated now={x.amount} />
      })} */}
      <h4 className="tracker-title">
          You have donated ${donate} so far!
        </h4>
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Tracker;
