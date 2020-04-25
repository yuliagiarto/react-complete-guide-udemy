import React, { PureComponent } from "react";
import Person from "./Person/Person";

class Persons extends PureComponent {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log("persons.js getDerivedStateFromProps", props);
  //     return state;
  //   }
  //   componentWillReceiveProps(props) {
  //     console.log("persons.js this.componentWillReceiveProps",props);
  //   }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log("persons.js shouldComponentUpdate");
  //     if (nextProps.persons !== this.props.persons) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons.js getSnapshotBeforeUpdate");
    return { message: "snapshot" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("persons.js componentDidUpdate");
    console.log(snapshot);
  }
  componentWillUnmount() {
    console.log("persons.js componentWillUnmount");
  }

  render() {
    console.log("persons.js rendering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
          isAuth={this.props.isAuthenticated}
        />
      );
    });
  }
}

export default Persons;
