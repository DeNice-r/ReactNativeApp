import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function PostItem({props}): React.JSX.Element {
  const {id, image, title, date, description} = props;
  return (
    <View key={id} style={styles.postItem}>
      <Image
        source={{
          uri: `https://raw.githubusercontent.com/DeNice-r/ReactNativeApp/main/data/image/${image}`,
        }}
        style={styles.postImage}
      />
      <View style={styles.text}>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {title + '...'}
        </Text>
        <Text style={styles.date}>{date}</Text>
        <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
          {description + '...'}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  postItem: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 5,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  postImage: {
    flex: 0.5,
    padding: 15,
    paddingLeft: 20,
    borderRadius: 5,
  },
  text: {
    flex: 4,
    paddingLeft: 5,
  },
  title: {
    fontSize: 16,
    color: 'black',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
  description: {
    color: 'black',
  },
});
export default PostItem;
