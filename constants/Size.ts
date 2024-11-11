import { Dimensions } from "react-native";
import { scale } from "react-native-size-matters";
const TextSize = {
  extraSmall: scale(10),
  small: scale(12),
  medium: scale(16),
  large: scale(20),
  extraLarge: scale(22),
  extraExtraLarge: scale(22),
};
const ScreenWidth = Dimensions.get("screen").width;
const ScreenHeight = Dimensions.get("screen").height;
const WindowWidth = Dimensions.get("window").width;
const WindowHeight = Dimensions.get("window").height;

export default TextSize;
export { ScreenHeight, ScreenWidth, WindowHeight, WindowWidth };
