import React from "react";
import { FlatList, Text, View, Image } from "react-native";
import styles from './styles/ListStyle';

export default class List extends React.Component {
  renderSeparator() {
    return (
      <View style={styles.separatorContainer}>
        <View style={styles.separator} />
      </View>
    );
  }

  renderItem({ item }) {
    return (
      <View style={styles.row}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.thumbnail}
            source={{ uri: item.thumbnailUrl }}
            resizeMode={'cover'}
          />
        </View>
        <View style={styles.item}>
          <Text>{item.name}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={this.renderItem}
        ItemSeparatorComponent={this.renderSeparator}
        keyExtractor={(item, index) => index.toString()}
        scrollEnabled
      />
    );
  }
}
