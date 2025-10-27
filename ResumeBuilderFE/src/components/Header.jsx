import React from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography"; 
import Button from "@mui/material/Button";  //button of Material Ui
import { GiHamburgerMenu } from "react-icons/gi";
import Tooltip from "@mui/material/Tooltip";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: "#350463" }}>
          <Toolbar>
            <GiHamburgerMenu />
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, ml: 2 }}
            >
              rbuilder
            </Typography>

            <Tooltip
              title="A Resume Builder App is an essential tool for job seekers looking to create polished and effective resumes. By combining ease of use with professional design options, these apps empower users to present their qualifications confidently and increase their chances of landing job interviews."
              arrow
            >
              <Button color="inherit">ABOUT US</Button>
            </Tooltip>
            <Link to="/history">
              <Button
                variant="outlined"
                sx={{ color: "white", borderColor: "white" }}
              >
                History
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Header