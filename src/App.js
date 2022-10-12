import { Navbar } from "./components";
import {
  heroDesktop,
  heroMobile,
  clientDatabiz,
  clientAudiophile,
  clientMaker,
  clientMeet,
} from "./assets";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Box,
  Button,
  Typography,
} from "@mui/material";
import { grey } from "@mui/material/colors";
const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: grey[700],
      light: grey[100],
      dark: grey[600],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Box
        sx={{
          height: { md: "calc(100vh - 68.5px)" },
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          justifyContent: { md: "space-evenly" },
          overflow: "hidden",
          padding: { md: 2 },
          pb: 2,
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", md: "auto" },
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", md: "flex-start" },
            justifyContent: { md: "center" },
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontSize: { xs: "1.9rem", md: "3rem" },
              textAlign: { xs: "center", md: "start" },
              fontFamily: "Epilogue, 'sans-serif'",
              fontWeight: "700",
              my: 2,
            }}
          >
            Make{" "}
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            remote work
          </Typography>
          <Typography
            variant="body2"
            component="span"
            sx={{
              display: "block",
              fontFamily: "Epilogue, 'sans-serif'",
              color: "hsl(0, 0%, 41%)",
              textAlign: { xs: "center", md: "start" },
              px: 1,
              my: 2,
            }}
          >
            Get your team in sync, no matter your location.
            <Box
              component="br"
              sx={{ display: { xs: "none", md: "block" } }}
            />{" "}
            Streamline processes, create team rituals, and
            <Box
              component="br"
              sx={{ display: { xs: "none", md: "block" } }}
            />{" "}
            watch productivity soar.
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              backgroundColor: "black",
              fontFamily: "Epilogue, 'sans-serif'",
              diplay: "block",
              textTransform: "initial",
              borderRadius: 3,
              px: { xs: 4 },
              my: 2,
              border: "1px solid transparent",
              ":hover": {
                background: "white",
                borderColor: "black",
                color: "black",
              },
            }}
          >
            Learn more
          </Button>
          <Box
            sx={{
              width: "100%",
              minHeight: { md: 50 },
              overflow: "hidden",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              mt: { xs: 2, md: 5 },
            }}
          >
            {[clientDatabiz, clientAudiophile, clientMeet, clientMaker].map(
              (imgSrc, index) => (
                <Box
                  key={index}
                  component="img"
                  src={imgSrc}
                  alt={`${imgSrc} brand logo`}
                  sx={{
                    width: { xs: "20%", md: "auto" },
                    ":hover": {
                      filter: "brightness(0.5)",
                    },
                    ":not(:last-of-type)": {
                      mr: { md: 5 },
                    },
                  }}
                />
              )
            )}
          </Box>
        </Box>
        <Box>
          <Box component="picture" sx={{ width: { xs: "100%", md: "auto" } }}>
            <Box
              component="source"
              media="(max-width:900px)"
              srcSet={heroMobile}
            />
            <Box
              component="img"
              src={heroDesktop}
              alt="(max-width:900px)"
              sx={{
                width: { xs: "100%", md: "auto" },
                height: { xs: "auto", md: "100%" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
