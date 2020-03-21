import React from "react";
import axios from "axios";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Contact from "./components/Contact";
import ModalContact from "./components/ModalContact";
import InfoContact from "./components/InfoContact";

class App extends React.Component {
  state = {
    contacts: [],
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  getContacts = () =>
    axios
      .get("/contacts")
      .then(res =>
        this.setState({
          contacts: res.data
        })
      )
      // .then(res => console.log(res.data))
      .catch(error => console.error(error));

  deleteContact = id => {
    axios
      .delete(`/deleteContact/${id}`)
      .then(() =>
        this.setState({
          contacts: this.state.contacts.filter(contact => contact._id !== id)
        })
      )
      .catch(error => console.error(error));
  };
  addContact = newContact =>
    axios
      .post("/addContact", newContact)
      .then(() =>
        this.setState({ contacts: this.state.contacts.concat(newContact) })
      )
      .catch(error => console.error(error));

  editContact = editedContact =>
    axios
      .put(`/editContact/${editedContact.id}`, {
        Name: editedContact.Name,
        Mobile: editedContact.Mobile,
        EMail: editedContact.EMail,
        Img: editedContact.Img
      })
      .then(() => this.getContacts())
      .catch(error => console.error(error));

  componentDidMount() {
    this.getContacts();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route
            exact
            path="/contact/:id"
            // component={InfoContact}
            render={props => (
              <InfoContact
                {...props}
                deleteContact={this.deleteContact}
                addContact={this.editContact}
              />
            )}
          />
          <Route
            exact
            path="/"
            render={() => (
              <>
                <div className="contactList">
                  <GridList cellHeight={180} className="gridList">
                    <GridListTile
                      key="Subheader"
                      cols={2}
                      style={{ height: "auto" }}
                    >
                      <ListSubheader component="div" className="Header">
                        <i className="fas fa-users"></i>
                        <span>Mes contacts</span>
                      </ListSubheader>
                    </GridListTile>
                    {this.state.contacts.map((contact, key) => (
                      <Contact
                        key={key}
                        contact={contact}
                        // deleteContact={this.deleteContact}
                        // addContact={this.editContact}
                      />
                    ))}
                  </GridList>
                </div>
                <ModalContact
                  open={this.state.open}
                  handleOpen={this.handleOpen}
                  addContact={this.addContact}
                />
              </>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
