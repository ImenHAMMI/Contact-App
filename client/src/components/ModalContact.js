import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import PersonAddRoundedIcon from "@material-ui/icons/PersonAddRounded";
// import purple from "@material-ui/core/colors/purple";
import PhoneRoundedIcon from "@material-ui/icons/PhoneRounded";
import EmailRoundedIcon from "@material-ui/icons/EmailRounded";
import PersonRoundedIcon from "@material-ui/icons/PersonRounded";
import FaceRoundedIcon from "@material-ui/icons/FaceRounded";

import "../css/ModalContact.css";

class ModalContact extends React.Component {
  state = {
    Name: "",
    Mobile: "",
    EMail: "",
    Img: ""
  };

  componentDidMount() {
    this.props.isEdit
      ? this.setState({
          Name: this.props.contact.Name,
          Mobile: this.props.contact.Mobile,
          EMail: this.props.contact.EMail,
          Img: this.props.contact.Img,
          id: this.props.contact._id
        })
      : this.setState({
          Name: "",
          Mobile: "",
          EMail: "",
          Img: ""
        });
  }

  changeHandler = e => this.setState({ [e.target.name]: e.target.value });

  render() {
    const { open, handleOpen, addContact, isEdit } = this.props;
    return (
      <div>
        {!isEdit ? (
          <div className="AddContact" onClick={handleOpen}>
            <PersonAddRoundedIcon
              style={{
                color: "rgba(0, 0, 0, 0.54)",
                fontSize: 50
              }}
            />
            <span>Add Contact</span>
          </div>
        ) : null}
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className="modalForm"
          open={open}
          onClose={handleOpen}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={open}>
            <div className="modalPaper">
              <form>
                <div className="RowForm">
                  <PersonRoundedIcon className="Icon" />
                  <input
                    name="Name"
                    placeholder="Name"
                    defaultValue={this.state.Name}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="RowForm">
                  <PhoneRoundedIcon className="Icon" />
                  <input
                    name="Mobile"
                    placeholder="Mobile"
                    defaultValue={this.state.Mobile}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="RowForm">
                  <EmailRoundedIcon className="Icon" />
                  <input
                    name="EMail"
                    placeholder="E-Mail"
                    defaultValue={this.state.EMail}
                    onChange={this.changeHandler}
                  />
                </div>
                <div className="RowForm">
                  <FaceRoundedIcon className="Icon" />
                  <input
                    name="Img"
                    placeholder="Profil image"
                    defaultValue={this.state.Img}
                    onChange={this.changeHandler}
                  />
                </div>
                {!isEdit ? (
                  <div
                    className="btn-add"
                    onClick={() => {
                      addContact(this.state);
                      handleOpen();
                    }}
                  >
                    <PersonAddRoundedIcon className="Icon" />
                    <span>Add</span>
                  </div>
                ) : (
                  <div
                    className="btn-add"
                    onClick={() => {
                      addContact(this.state);
                      handleOpen();
                    }}
                  >
                    <PersonAddRoundedIcon className="Icon" />
                    {/* <i className="fas fa-user-edit"></i> */}
                    <span>Edit</span>
                  </div>
                )}
              </form>
            </div>
          </Fade>
        </Modal>
      </div>
    );
  }
}

export default ModalContact;
