import React, { Component } from 'react';
import Styled from '../../styled-components/Styled';
import { Container, Row, Col } from 'shards-react';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faTwitterSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'

library.add(faFacebookSquare, faTwitterSquare, faInstagram)

class Footer extends Component {
    render() { 
        return (
            <Styled.Section top="90px" bottom="40px">
                <Styled.Wrapper>
                    <Container fluid>
                        {/* Container component from Shards-React */}
                        {/* Footer broken into 3 columns */}
                        <Row>
                            
                            {/* Column 1, cake store name + placeholder text */}
                            <Col xs={4} style={{borderRight: "1px solid"}}>

                                <Styled.Text align="center" size="1.2rem" style={{fontWeight: 400}}>
                                    Alex's Cakes
                                </Styled.Text>

                                <Styled.Text align="center" size="1.05rem">
                                    They say everything looks better with odd numbers of things.
                                </Styled.Text>

                            </Col>

                            {/* Column 2, cake store hours of operation */}
                            <Col xs={4}>
                                <Styled.Text align="center" size="1.2rem" style={{fontWeight: 400}}>
                                    Hours
                                </Styled.Text>

                                <Styled.Text align="center" size="1.05rem">
                                    Monday - Thursday: 10am - 6pm <br/>
                                    Friday - Saturday: 11am - 4pm <br/>
                                    Sunday: Closed
                                </Styled.Text>

                            </Col>

                            {/* Column 3, cake store social media links */}
                            <Col xs={4} style={{borderLeft: "1px solid"}}>

                                <Styled.Text align="center" size="1.2rem" style={{fontWeight: 400}}>
                                    Contact
                                </Styled.Text>

                                <Styled.Div display="flex" justify="space-around" width="50%" margin="10px auto 0 auto">
                                    <FontAwesomeIcon icon={faFacebookSquare} size="2x"/>
                                    <FontAwesomeIcon icon={faTwitterSquare} size="2x"/>
                                    <FontAwesomeIcon icon={faInstagram} size="2x"/>
                                </Styled.Div>

                            </Col>

                        </Row>
                    </Container>
                </Styled.Wrapper>
            </Styled.Section>
        );
    }
}
 
export default Footer;