import React from "react";
import { NativeBaseProvider } from "native-base";
import { Provider } from "react-redux";
import { store } from "./src/store/store";
import { theme } from "./src/theme/globalStyles";
import NavigationWrapper from "./src/navigation/index";

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme}>
        <NavigationWrapper />
      </NativeBaseProvider>
    </Provider>
  );
}
<<<<<<< HEAD

else{
  return null
}

}
=======
>>>>>>> bf3f74c18813714bd42d9de82d0f4e20959d944f
