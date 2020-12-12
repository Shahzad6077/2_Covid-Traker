import { Box, ThemeProvider } from "@material-ui/core";
import { Suspense } from "react";
import theme from "./theme";
import Layout from "./Utils/Layout";
import ErrorBoundary from "./Utils/ErrorBoundary";
import Main from "./Views/Main";

import CircularProgress from "@material-ui/core/CircularProgress";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Suspense
          fallback={
            <Box
              width="100%"
              height="300px"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <CircularProgress />
            </Box>
          }
        >
          <ErrorBoundary>
            <Main />
          </ErrorBoundary>
        </Suspense>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
