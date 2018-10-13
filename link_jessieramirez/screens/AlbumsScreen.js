import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Button } from 'react-native-elements'

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

  // function that maps through array of objects
  renderAlbums(){
    const { albums } = this.state;

    return albums.map((album,index) => {
      return(
        <Card
          title={ album.title }
          image={{uri: album.image}} >
          <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' />
        </Card>
      )
    })
  }
  render() {
    const { albums } = this.state

    return (
      <ScrollView style={styles.container}>
        { this.renderAlbums() }
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
