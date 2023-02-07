import { ActivityIndicator, View } from "react-native";

import AppNavigator from "./navigation";
import { THEME } from "./constants/theme";
import { styles } from "./styles";
import { useFonts } from "expo-font";

const App = () => {
  const [loaded] = useFonts({
    PlayfairDisplayRegular: require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
    PlayfairDisplayBold: require("../assets/fonts/PlayfairDisplay-Bold.ttf"),
  });
  if (!loaded) return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} color={THEME.colors.primary}/>
    </View>
  );

  return <AppNavigator />;
};

export default App;
