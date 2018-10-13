import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-elements'
import { CardList } from '../components/CardList'

export default class AlbumsScreen extends React.Component {
  static navigationOptions = {
    title: 'Albums',
  };

  constructor() {
    super();

    this.state = {
      albums: [
        {
          title: 'Meteora',
          image: 'https://1.bp.blogspot.com/-hO_D0hLC-Vo/V_DZo-Cf0tI/AAAAAAAACWA/chpNCVK3k4s-lmyKho5G53g2ryi4XL4PgCLcB/s400/linkin-park-meteora.jpg'
        },
        {
          title: 'Meteora',
          image: 'https://1.bp.blogspot.com/-hO_D0hLC-Vo/V_DZo-Cf0tI/AAAAAAAACWA/chpNCVK3k4s-lmyKho5G53g2ryi4XL4PgCLcB/s400/linkin-park-meteora.jpg'
        },
        {
          title: 'Meteora',
          image: 'https://1.bp.blogspot.com/-hO_D0hLC-Vo/V_DZo-Cf0tI/AAAAAAAACWA/chpNCVK3k4s-lmyKho5G53g2ryi4XL4PgCLcB/s400/linkin-park-meteora.jpg'
        },
        {
          title: 'Meteora',
          image: 'https://1.bp.blogspot.com/-hO_D0hLC-Vo/V_DZo-Cf0tI/AAAAAAAACWA/chpNCVK3k4s-lmyKho5G53g2ryi4XL4PgCLcB/s400/linkin-park-meteora.jpg'
        },
        {
          title: 'Meteora',
          image: 'https://1.bp.blogspot.com/-hO_D0hLC-Vo/V_DZo-Cf0tI/AAAAAAAACWA/chpNCVK3k4s-lmyKho5G53g2ryi4XL4PgCLcB/s400/linkin-park-meteora.jpg'
        },
      ]

    }
  }

  render() {
    const { albums } = this.state

    return (
      <ScrollView style={styles.container}>
        <CardList data={ albums }
                  imageKey={'image'}
                  titleKey={'title'}
                  buttonText={'Click to view details'}
                  >
        </CardList>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
