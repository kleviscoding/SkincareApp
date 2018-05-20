import React, { Component } from 'react';
import { ScrollView, View, Image, Linking } from 'react-native';
import { Text, Button, Row } from 'native-base';
import { Actions } from 'react-native-router-flux';

export default class Home extends Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.viewStyle}>
          <Image
            source={require('./420skincare_logo.png')}
            style={{ width: 160, height: 60, padding: 10 }}
          />
          <Text style={styles.textStyle}>Cannabis Infused Luxury Skincare
          </Text>

          <Image
            source={{ uri: 'https://scontent.fphx1-1.fna.fbcdn.net/v/t1.0-9/31225138_10156315166967236_1786995132902408192_n.jpg?_nc_cat=0&oh=2adf63a7482c0614dc4a84993d2f03eb&oe=5B50D150' }}
            style={{ width: 315, height: 180, margin: 5 }}
          />
          <Text
              style={{ color: '#ab8321', fontSize: 12, fontWeight: 'bold' }}
              onPress={() => Linking.openURL('http://www.420-Skincare.com')}
          >
            420-Skincare.com
          </Text>
          <Text style={styles.textStyle2}>
            From Infused Body Butter to CBD Soaps,
            we specialize in Natural, Organic, Hand-Crafted
            Skincare for all Skin Types. Our soothing all natural
            ingredients can improve several skin conditions. 50% of
            our proceeds from this app go directly to the nonprofit
            Start Living Recovery Home. 420 Skincare products will
            make you feel good inside and out!
          </Text>

          <Row>
          <Button
            block small success
            style={{ margin: 10 }}
            onPress={() => { Actions.Products(); }}
          >
          <Text>420 Skincare Products</Text>
          </Button>
          </Row>
        </View>
      </ScrollView>
    );
  }
}
 const styles = {
   viewStyle: {
     backgroundColor: 'black',
     alignItems: 'center',
     height: 600,
     padding: 10,
     elevation: 2,
     position: 'relative'
   },
   textStyle: {
     fontSize: 17,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   },
   textStyle2: {
     fontSize: 14,
     padding: 10,
     fontWeight: 'bold',
     color: '#ab8321'
   }
 };
