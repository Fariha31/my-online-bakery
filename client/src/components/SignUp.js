import React from "react";
import {
  TextField,
  Grid,
  Button,
  FilledInput,
  InputAdornment,
  InputLabel,
  IconButton,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontStyle: "cursive",
    color: "secondary",
    padding: "1rem",
  },
  textfield: {
    marginTop: "5px",
    borderRadius: "20px",
    paddingLeft: "2px",
    paddingRight: "2px",
  },
  SignUpbtn: {
    marginTop: "0.4rem",
    width: "61ch",
  },
}));
const SignUp = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
          <h2 className={classes.heading}>SignUp</h2>
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>

      <Grid container spacing={4}>
        <Grid item sm={4}></Grid>
        <Grid item sm={4}>
          <TextField
            className={classes.textfield}
            label="Username"
            variant="filled"
            fullWidth
          />
          <TextField
            className={classes.textfield}
            label="Email"
            variant="filled"
            fullWidth
          />
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <TextField
            className={classes.textfield}
            label="Confirm password"
            variant="filled"
          />
          <Button
            className={classes.SignUpbtn}
            variant="contained"
            color="secondary"
          >
            SignUp
          </Button>
        </Grid>
        <Grid item sm={4}></Grid>
      </Grid>
    </div>
  );
};

export default SignUp;
