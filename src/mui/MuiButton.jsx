import { Button, Fab, IconButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import { LoadingButton } from "@mui/lab";
import { set } from "react-hook-form";
export const MuiButton = () => {
  const [isLoading, setisLoading] = useState(true);
  setTimeout(() => {
    setisLoading(false);
  }, 3000);
  return (
    <div>
      <h1>Material UI Button</h1>
      <Button variant="contained">my button</Button>
      <Button variant="outlined">my button</Button>
      <Button variant="text">my button</Button>
      <Button variant="contained" size="small">
        my button
      </Button>
      <Button variant="contained" size="large">
        my button
      </Button>
      <Button variant="contained" size="medium">
        my button
      </Button>
      <Button variant="contained" color="primary">
        my button
      </Button>
      <Button variant="contained" color="error">
        my button
      </Button>
      <Button variant="contained" color="warning">
        my button
      </Button>
      <Button
        variant="contained"
        sx={{
          color: "pink",
          height: "70px",
          width: "30px",
          backgroundColor: "grey",
        }}
      >
        my button
      </Button>
      <div>
        <Button variant="contained" disabled>
          login
        </Button>
        <Button variant="contained" startIcon={<SendIcon />}>
          send
        </Button>
        <Button variant="text" endIcon={<DeleteIcon />}>
          delete
        </Button>
      </div>
      <div>
        <IconButton
          onClick={() => {
            alert("ok");
          }}
        >
          <FingerprintIcon />
        </IconButton>
      </div>
      <div>
        <Fab color="primary">
          <SendIcon />
        </Fab>
      </div>
      <div>
        <LoadingButton variant="contained" loading={isLoading}>
          loading
        </LoadingButton>
      </div>
    </div>
  );
};
