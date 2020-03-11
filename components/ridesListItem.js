import { Header, Card, Button, Icon, ListItem } from "react-native-elements";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Alert,
  ScrollView,
  ImageBackground
} from "react-native";
import { connect } from "react-redux";

const RidesListItem = props => {
  // console.log("CLIPROPS", props);
  return (
    <View>hi</View>
    //     <ListItem>
    //       {/* <img style={{ borderRadius: "50%" }} src={faker.image.avatar()} alt="" /> */}
    //       {props.loggedInUser.name}
    //     </ListItem>
  );
};

// ConversationListItem.propTypes = {
//   ...UserType
// };

const mapStateToProps = state => {
  return {
    // drivers: state.drivers.all.filter(driver => driver.id),
    loggedInUser: state.auth.loggedInUser,
    rides: state.rides.all.find(ride => ride.name === loggedInUser.name)
  };
};

export default connect(mapStateToProps)(RidesListItem);

// const ConversationListItem = props => {
//   return (
//     <Container>
//       <Row>
//         <Col>
//           <div>
//             <Card>
//               <CardImg
//                 style={{ borderRadius: "50%" }}
//                 src={faker.image.avatar()}
//                 alt=""
//               />
//               <CardBody>
//                 <CardTitle>
//                   <Link to={`/users/${props.user[0].id}`}>
//                     {props.user[0].name}
//                   </Link>
//                 </CardTitle>
//                 <CardText>{props.cli.body}</CardText>
//                 <Input />
//                 <Button>Button</Button>
//               </CardBody>
//             </Card>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// const mapStateToProps = (state, props) => {
//   return {
//     user: state.users.all.filter(
//       user => user.id === props.cli.recipient_id || props.cli.sender_id
//     )
//   };
// };
// export default connect(mapStateToProps)(ConversationListItem);
