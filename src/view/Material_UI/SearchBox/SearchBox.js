import { IconButton, InputBase, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import "./SearchBox.scss";
const theme = createTheme({
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Paper
        component="form"
        sx={{
          color: "white",
          p: "2px 4px",
          display: "flex",
          alignItems: "center",
          width: 250,
          background: "rgba(0,0,0,0.4)",
        }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Tìm kiếm phim"
          inputProps={{ "aria-label": "Tìm kiếm phim" }}
        />
        <IconButton type="button" sx={{ p: "5px" }} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Paper>
    </ThemeProvider>
  );
}

export default App;
