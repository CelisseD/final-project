import React, { Component } from "react";
import ResultsPage from "../../Pages/Results";
import Wrapper from "../Wrapper";
import Title from "../Title";
import brands from ".././../brands2.json";

class Results extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    brands
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Results Page</Title>
        {this.state.brands.map(brand => (
          <ResultsPage
            id={brand.id}
            key={brand.id}
            name={brand.name}
            logo={brand.logo}
            description={brand.description}
            link={brand.link}
            supporting={brand.supporting}
            conflicting={brand.conflicting}
            reason={brand.reason}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Results;
