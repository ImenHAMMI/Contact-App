import React from "react";
import axios from "axios";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import { Redirect, Link } from "react-router-dom";

import "../css/InfoContact.css";
import ModalContact from "./ModalContact";

class InfoContact extends React.Component {
  state = {
    contact: {},
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    axios
      .get(`/contact/${id}`)
      .then(res => this.setState({ contact: res.data[0] }))
      .catch(error => console.error(error));
  }

  render() {
    const { _id, Name, Mobile, EMail } = {
      ...this.state.contact
    };
    console.log(this.state.contact);
    if (!this.state.contact) {
      return <p>Loading</p>;
    }
    return (
      <div className="Information">
        <div className="headerInfo">
          {/* <PersonRoundedIcon /> */}
          {Name}
        </div>
        <div className="MainInfo">
          <PhoneRoundedIcon className="Icon" />
          <div className="Details">
            {Mobile}
            <span>Mobile</span>
          </div>
        </div>
        <div className="MainInfo">
          <EmailRoundedIcon className="Icon" />
          <div className="Details">
            {EMail}
            <span>E-Mail</span>
          </div>
        </div>
        <div>
          <EditRoundedIcon
            onClick={() => this.handleOpen()}
            className="IconAction IconPostionEdit"
            style={{ fontSize: 60 }}
          />
          <Link to="/">
            <DeleteRoundedIcon
              onClick={() => this.props.deleteContact(_id)}
              className="IconAction IconPostionDelete"
              style={{ fontSize: 60 }}
            />
          </Link>
        </div>
        {this.state.open ? (
          //   <Redirect to="/">
          <ModalContact
            open={this.state.open}
            handleOpen={this.handleOpen}
            addContact={this.props.addContact}
            isEdit={true}
            contact={this.state.contact}
          />
        ) : //   </Link>
        null}
      </div>
    );
  }
}

export default InfoContact;
