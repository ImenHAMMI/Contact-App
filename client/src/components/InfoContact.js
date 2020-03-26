import React from "react";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";

import { connect } from "react-redux";
import { getContact, deleteContact } from "../js/actions/actionContact";

import "../css/InfoContact.css";
import ModalContact from "./ModalContact";

class InfoContact extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount() {
    this.props.getContact(this.props.match.params.id);
  }

  handleClick = () => {
    this.props.deleteContact(this.props.contact._id);
    this.props.history.push("/");
  };

  render() {
    const { Name, Mobile, EMail } = {
      ...this.props.contact
    };

    if (!this.props.contact) {
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
            onClick={() => {
              this.handleOpen();
            }}
            className="IconAction IconPostionEdit"
            style={{ fontSize: 60 }}
          />
          <DeleteRoundedIcon
            onClick={this.handleClick}
            className="IconAction IconPostionDelete"
            style={{ fontSize: 60 }}
          />
        </div>
        {this.state.open ? (
          <ModalContact
            open={this.state.open}
            handleOpen={this.handleOpen}
            isEdit={true}
            contact={this.props.contact}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  contact: state.contact
});
export default connect(mapStateToProps, { getContact, deleteContact })(
  InfoContact
);
