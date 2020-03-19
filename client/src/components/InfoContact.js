import React from "react";
import axios from "axios";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";

import "../css/InfoContact.css";

class InfoContact extends React.Component {
  state = {
    contact: {}
  };
  componentDidMount() {
    const id = this.props.match.params.id;
    axios
      .get(`/contact/${id}`)
      .then(res => this.setState({ contact: res.data[0] }))
      .catch(error => console.error(error));
  }
  render() {
    const { Name, Mobile, EMail } = {
      ...this.state.contact
    };

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
      </div>
    );
  }
}

export default InfoContact;
