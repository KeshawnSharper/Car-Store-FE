import React, { Component } from "react";
import Styled from "../../styled-components/Styled";

// Non functional block of placeholder text
// Quotes obtained from Bob Ross Lipsum
class Description extends Component {
  render() {
    return (
      <Styled.Section color="rgb(33, 37, 41)" top="15px" bottom="15px">
        <Styled.Wrapper width="60%">
          <Styled.Text size="2rem" color="white" align="center">
            Choose From Corvettes to lambhorghinis !!!!
          </Styled.Text>

          <Styled.Text size="1.1rem" color="white" margin="5px" align="center">
            <p>
              The only prerequisite is that it makes you happy. If it makes you
              happy then it's good. We don't really know where this goes and I'm
              not sure we really care. Maybe there's a happy little waterfall
              happening over here. Let your imagination be your guide. Maybe
              there's a little something happening right here. It's life. It's
              interesting. It's fun. It's cold, but it's beautiful. We don't
              need any guidelines or formats. All we need to do is just let it
              flow right out of us.
            </p>
          </Styled.Text>
        </Styled.Wrapper>
      </Styled.Section>
    );
  }
}

export default Description;
