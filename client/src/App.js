import React from "react";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import ListSubheader from "@material-ui/core/ListSubheader";

import { connect } from "react-redux";
import { getContacts } from "./js/actions/actionContact";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Contact from "./components/Contact";
import ModalContact from "./components/ModalContact";
import InfoContact from "./components/InfoContact";

class App extends React.Component {
  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({
      open: !this.state.open
    });
  };

  componentDidMount() {
    this.props.getContacts();
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Route exact path="/contact/:id" component={InfoContact} />
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
                      <ListSubheader
                        component="div"
                        className="Header"
                        style={{ backgroundColor: "teal" }}
                      >
                        <i className="fas fa-users"></i>
                        <span>Mes contacts</span>
                      </ListSubheader>
                    </GridListTile>
                    {this.props.contacts.map((contact, key) => (
                      <Contact key={key} contact={contact} />
                    ))}
                  </GridList>
                </div>
                <ModalContact
                  open={this.state.open}
                  handleOpen={this.handleOpen}
                />
              </>
            )}
          />
        </BrowserRouter>
      </div>
    );
  }
}

const MapStateToProps = state => ({
  contacts: state.contacts
});

export default connect(MapStateToProps, {
  getContacts
})(App);
