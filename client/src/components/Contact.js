import React from "react";
// import purple from "@material-ui/core/colors/purple";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GridListTile from "@material-ui/core/GridListTile";
import { Link } from "react-router-dom";

import "../css/Contact.css";

const Contact = props => {
  const { _id, Name, Img } = props.contact;
  let letters = "0123456789ABCDEF";
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += letters[Math.floor(Math.random() * 16)];
  }

  return (
    <div className="contactCard">
      <Link to={`/contact/${_id}`}>
        <GridListTile>
          {Img ? (
            <img src={Img} alt="avatar"></img>
          ) : (
            <i
              className="fas fa-user-circle"
              style={{
                // color: purple[500],
                color: randomColor,
                fontSize: 200
                // border: "1px solid black"
              }}
            ></i>
          )}
          <GridListTileBar
            className="infoContact"
            title={<span>{Name}</span>}
            actionIcon={
              <IconButton
                aria-label={`info about ${Name}`}
                className="cardIcon"
              >
                <InfoIcon />
              </IconButton>
            }
          />
        </GridListTile>
      </Link>
    </div>
  );
};

export default Contact;
