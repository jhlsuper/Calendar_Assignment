import {PixelRatio} from 'react-native';

const ratio = PixelRatio.get();

export default PX = (() => {
  return 1 / ratio;
})();
