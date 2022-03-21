import React from "react";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import VolumeDown from "@mui/icons-material/VolumeDown";
import VolumeUp from "@mui/icons-material/VolumeUp";
import NavigationIcon from "@mui/icons-material/Navigation";
import MailIcon from "@mui/icons-material/Mail";
import {
  Avatar,
  AvatarGroup,
  Badge,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  Slider,
  Switch,
  Tooltip,
} from "@mui/material";
import { ButtonGroup, Fab, TextField } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Checkbox, Stack, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";

const MUI = () => {
  const [value, setValue] = React.useState(2);

  return (
    <div className="mui-component">
      <h2 className="text">Material UI Basic Components</h2>

      <Stack spacing={3} direction="row" flexWrap="wrap">
        <Button variant="text" color="primary">
          btn variant text
        </Button>

        <Button variant="contained" color="secondary">
          Btn Contained
        </Button>

        <Button variant="outlined" color="secondary">
          Outline
        </Button>

        <Button variant="outlined" color="secondary" disabled>
          Disable
        </Button>

        <Button variant="outlined" href="https://www.google.com">
          Link
        </Button>

        <Button variant="outlined" onClick={() => alert("Hey Young man!")}>
          Handle Event
        </Button>

        <Button variant="contained" color="success">
          success
        </Button>

        <Button variant="contained" color="error" size="small">
          Error
        </Button>

        <Button variant="contained" color="primary" size="medium">
          medium btn
        </Button>

        <Button variant="contained" color="error" size="large">
          Large btn
        </Button>

        <Button variant="outlined" color="primary" startIcon={<DeleteIcon />}>
          Delete
        </Button>

        <Button variant="outlined" color="primary" endIcon={<SendIcon />}>
          Send
        </Button>

        <IconButton color="primary">
          {" "}
          <AddShoppingCartIcon />{" "}
        </IconButton>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Stack>
      <Stack spacing={3} direction="row" flexWrap="wrap">
        <Checkbox defaultChecked color="primary" />
        <Fab color="primary" aria-label="add" size="small">
          {" "}
          <AddIcon />{" "}
        </Fab>
        <Fab color="primary" aria-label="add" size="medium">
          {" "}
          <EditIcon />{" "}
        </Fab>
        <Fab variant="extended">
          <NavigationIcon sx={{ mr: 1 }} />
          Navigate
        </Fab>
        <Typography component="legend">Controlled</Typography>
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Age</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Select Age"
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>

        <VolumeDown />
        <Slider aria-label="Volume" value={3} />
        <VolumeUp />
        <Switch defaultChecked />
      </Stack>
      <Stack spacing={3} direction="row" flexWrap="wrap">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />
        <TextField id="standard-basic" label="Standard" variant="standard" />

        <Avatar
          alt="Sohel Rana"
          src="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg"
        />
        <AvatarGroup max={4}>
          <Avatar
            alt="Remy Sharp"
            src="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg"
          />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar
            alt="Cindy Baker"
            src="https://i.pinimg.com/564x/e2/29/5f/e2295f7b9b470f873d0cc4b088ac0726.jpg"
          />
          <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
        </AvatarGroup>

        <Badge badgeContent={10} color="primary">
          {" "}
          <MailIcon />{" "}
        </Badge>

        <Tooltip title="Delete data">
         
          <IconButton>
          <Typography>What ?</Typography>
            <DeleteIcon />
          </IconButton>
        </Tooltip>

        <Typography variant="h1">This is Typography  h1</Typography>
        <Typography variant="h2">This is Typography  h2</Typography>
        <Typography variant="h3">This is Typography  h3</Typography>
        <Typography variant="h4">This is Typography  h4</Typography>


        
      </Stack>
    </div>
  );
};

export default MUI;
