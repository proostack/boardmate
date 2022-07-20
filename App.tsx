import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import "react-native-gesture-handler";
import { store } from "./src/store/store";
import { theme } from "./src/theme/globalStyles";
import NavigationWrapper from "./src/navigation/index";
import Board from "./src/screens/games/chess/Board";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App(): JSX.Element {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <GestureHandlerRootView style={{ flex: 1 }}>
          <Board />
          {/* <NavigationWrapper/> */}
        </GestureHandlerRootView>
      </NativeBaseProvider>
    </Provider>
  );
}
