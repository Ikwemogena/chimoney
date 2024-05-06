import Image from "next/image";
import styles from "./page.module.css";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  return (
    // <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} />
    <Box>
      <Box>
        <Box sx={{ border: '2px solid grey' }}>
          <Typography variant="h4">Good morning, Mo</Typography>
          <Typography variant="subtitle1">Here's what you missed</Typography>
        </Box>
      </Box>
    </Box>
  );
}
