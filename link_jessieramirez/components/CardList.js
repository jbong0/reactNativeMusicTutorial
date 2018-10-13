import React from 'react';
import { Text } from 'react-native';

export class CardList extends React.Component {
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
    return (

    );
  }
}
