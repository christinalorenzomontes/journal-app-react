import { Box } from "@mui/material";
import { NavBar } from "../components";

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
      <NavBar />
      <Box
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
      >
        { children }
      </Box>
    </Box>
  )
}
