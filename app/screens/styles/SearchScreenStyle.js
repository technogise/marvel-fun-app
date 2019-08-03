import { Dimensions, StyleSheet } from 'react-native';
import COLOR from '../../styles/colors';
const window = Dimensions.get('window');

export default StyleSheet.create({
  controlContainer: {
    flex: 0.1,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  listContainer: {
    flex: 0.9,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  textInputContainer: {
    flex: 0.75,
    padding: 15,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: 12,
  },
  buttonContainer: {
    flex: 0.25,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  searchInput: {
    height: 40,
    borderColor: COLOR.INPUT_BG_COLOR,
    borderWidth: 1,
    width: window.width - 100,
    backgroundColor: COLOR.INPUT_BORDER_COLOR
  },
});
