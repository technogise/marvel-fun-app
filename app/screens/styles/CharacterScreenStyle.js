import {Dimensions, StyleSheet} from 'react-native';
const window = Dimensions.get('window');

export default StyleSheet.create({
  item: {
    flexDirection: "row",
    paddingLeft: 10,
    justifyContent: "flex-start"
  },
  itemDesc: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 5,
    justifyContent: "flex-start",
    alignItems: 'flex-start'
  },
  imageContainer: {
    padding: 5,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  column: {
    flex: 1,
    flexDirection: "column",
    paddingTop: 5,
  },
  thumbnail: { width: window.width - 5, height: 400, borderRadius: 3 },
  nameText: {
    fontSize: 18
  },
  descText: {
    fontSize: 16,
    lineHeight: 25
  }
});
