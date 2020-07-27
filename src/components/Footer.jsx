import React from 'react';
import { Segment, Grid, Container, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";

class Footer extends React.Component {
     render() {
        return (
         
   <Segment className="footer">
      <Container>
        <Grid divided stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Link to="/"><Header>Tidy Keep</Header></Link>
            </Grid.Column>
            <Grid.Column width={3}>
              <Link to="/BookingPage">Book Online</Link> 
            </Grid.Column>
            <Grid.Column width={3}>
            Call us on 98716273
            </Grid.Column>
            <Grid.Column width={3}>
              Insert social media icons
              <Link to="/TermsConditions">Terms and Conditions</Link>
              </Grid.Column>
              </Grid.Row>
              </Grid>
                </Container>
    </Segment>
  
        );
    };
}


export default Footer;