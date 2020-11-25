import { useState, useEffect } from "react";
import axios from "axios";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import "../App.css"

const Header = () => {
  const [title, setTitle] = useState();

  useEffect(() => {
    axios
      .get("https://api.mountkelvin.com/v1/site/needed-endurable-plough")
      .then((res) => setTitle(res.data.name));
  }, []);

  
  return (
    <header>
      <AppBar position="relative">
        <Toolbar >
          <Typography align="center" variant="h6" color="inherit" noWrap>
            {title}
          </Typography>
        </Toolbar>
      </AppBar>
    </header>
  );
};

export default Header;
