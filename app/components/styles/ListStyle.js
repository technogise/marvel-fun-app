import { StyleSheet } from 'react-native';
import COLOR from '../../styles/colors';

export default StyleSheet.create({
  item: {
    flexDirection: 'column',
    paddingLeft: 10,
    flex: 1,
    justifyContent: 'center'
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'center'
  },
  row: {
    flexDirection: 'row',
    height: 120
  },
  separatorContainer: { flex: 1, backgroundColor: "white" },
  separator: { height: 1, backgroundColor: COLOR.INPUT_BORDER_COLOR },
  thumbnail: { width: 120, height: 80 }
});
