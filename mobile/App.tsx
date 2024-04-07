import { StyleSheet, Dimensions } from "react-native";
import RootNavigation from "./src/navigation/RootNavigation";
import { NativeBaseProvider, extendTheme } from "native-base";
import { useEffect } from "react";
import nodejs from "nodejs-mobile-react-native";

const config = {
  useSystemColorMode: true,
  components: {
    Button: {
      defaultProps: {
        colorScheme: "info",
      },
    },
    IconButton: {
      defaultProps: {
        colorScheme: "info",
      },
    },
    Input: {
      defaultProps: {
        colorScheme: "info",
      },
    },
  },
};

const theme = extendTheme({ ...config });

export default function App() {
  useEffect(() => {
    console.log(nodejs);
    // nodejs.start("main.js");
    // nodejs.channel.addListener("message", (msg) => {
    //   alert("From node: " + msg);
    // });
  });
  return (
    <NativeBaseProvider theme={theme}>
      <RootNavigation />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: Dimensions.get("window").height,
  },
});
