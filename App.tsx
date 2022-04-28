import "react-native-gesture-handler";
import React from "react";

//UI
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";
import * as mapping from "./mapping.json";

//Components
import ErrorBoundary from "~components/loaders/ErrorBoundary";
import Navigator from "~navigator/Navigator";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { Provider as ReduxProvider } from "react-redux";
import store from "~redux/store";

const App = (): React.ReactFragment => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />

      <ApplicationProvider
        {...eva}
        theme={eva.light}
        //@ts-ignore
        customMapping={mapping}
      >
        <SafeAreaProvider>
          <ErrorBoundary>
            <ReduxProvider store={store}>
              <Navigator />
            </ReduxProvider>
          </ErrorBoundary>
        </SafeAreaProvider>
      </ApplicationProvider>
    </>
  );
};

export default App;
