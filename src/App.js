import { ThemeProvider } from "@material-ui/core";
import theme from "./theme";
import Layout from "./Utils/Layout";
import Main from "./Views/Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Main />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
