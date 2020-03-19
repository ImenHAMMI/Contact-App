import React from "react";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
// import purple from "@material-ui/core/colors/purple";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import GridListTile from "@material-ui/core/GridListTile";
import { Link } from "react-router-dom";

import "../css/Contact.css";
import ModalContact from "./ModalContact";

class Contact extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  render() {
    const { _id, Name, /*Mobile, EMail,*/ Img } = this.props.contact;
    let letters = "0123456789ABCDEF";
    let randomColor = "#";
    for (let i = 0; i < 6; i++) {
      randomColor += letters[Math.floor(Math.random() * 16)];
    }
    // console.log(this.props.contact);
    return (
      <div className="contactCard">
        <GridListTile>
          {Img ? (
            <img src={Img} alt="avatar"></img>
          ) : (
            // <AccountCircleRoundedIcon
            //   style={{
            //     color: purple[500],
            //     fontSize: 200
            //     // border: "1px solid black"
            //   }}
            // />
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
            // subtitle={<span>{EMail}</span>}
            actionIcon={
              <Link to={`/contact/${_id}`}>
                <IconButton
                  aria-label={`info about ${Name}`}
                  className="cardIcon"
                >
                  <InfoIcon />
                </IconButton>
              </Link>
            }
          />
        </GridListTile>
        {/* <div>
          <EditRoundedIcon onClick={() => this.handleOpen()} />
          <DeleteRoundedIcon onClick={() => this.props.deleteContact(_id)} />
        </div> */}

        {this.state.open ? (
          <ModalContact
            open={this.state.open}
            handleOpen={this.handleOpen}
            addContact={this.props.addContact}
            isEdit={true}
            contact={this.props.contact}
          />
        ) : null}
      </div>
    );
  }
}

export default Contact;
