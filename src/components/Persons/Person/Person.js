import React, { Component } from "react";
import styled from "styled-components";
import Aux from "../../../hoc/Aux";
import withClass from "../../../hoc/withClass";

const StyledDiv = styled.div`
  width: 60%;
  margin: 16px auto;
  border: 1px solid white;
  box-shadow: 0 2px 3px gray;
  padding: 16px;
  text-align: center;

  @media (mind-width: 500px) {
    width: 450px;
  }
`;
class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  render() {
    console.log("[Person.js] rendering...");
    return (
      <Aux>
        <StyledDiv>
          <p onClick={this.props.click}>
            I'm a {this.props.name} and I'm {this.props.age} years old
          </p>
          <p>{this.props.children}</p>
          <input
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
            ref={this.inputElementRef}
          />
        </StyledDiv>
      </Aux>
    );
  }
}

export default withClass(Person, "Person");
