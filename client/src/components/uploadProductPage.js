import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Grid,
  InputAdornment,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
} from "@material-ui/core";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  heading: {
    fontStyle: "cursive",
    color: "secondary",
    padding: "1rem",
  },
  textfield: {
    marginTop: theme.spacing(2),
  },
  Submitbtn: {
    marginTop: "0.6rem",
  },
}));

const UploadProductPage = () => {
  let classes = useStyles();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [body, setBody] = useState("");
  //const [image, setImage] = useState("");
  const [photo, setPhoto] = useState("");

  const prodImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "Bakery-MERN STACK");
    await axios
      .post("https://api.cloudinary.com/v1_1/fariha31/image/upload", data)
      .then((res) => setPhoto(res.data.secure_url))
      .catch((err) => console.log(err));

    const AddingProd = async () => {
      await axios
        .post("/api/products/addProduct", { title, body, price, photo })
        .then((res) => {
          console.log("returning");
          console.log(res.data.photo);
        })
        .catch((error) => console.log(error));
    };
  };
  return (
    <div>
      <Grid container>
        <Grid item xs={1} md={4}></Grid>
        <Grid item xs={10} md={4}>
          <div>
            <h3 style={{ padding: "0.6rem" }}>Add New Product</h3>
          </div>
          <form style={{ paddingTop: "1rem" }}>
            <div className="form-group">
              <input
                type="file"
                className="form-control-file"
                id="exampleFormControlFile1"
                onChange={prodImage}
              />
              <TextField
                className={classes.textfield}
                label="Title"
                value={title}
                variant="outlined"
                placeholder="Title of Product"
                fullWidth
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />

              <TextField
                className={classes.textfield}
                label="Description"
                value={body}
                placeholder="Description of Product"
                variant="outlined"
                fullWidth
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
              <FormControl
                variant="outlined"
                className={classes.textfield}
                fullWidth
                noValidate
              >
                <InputLabel htmlFor="outlined-adornment-price">
                  Price
                </InputLabel>
                <OutlinedInput
                  label="Price"
                  placeholder="Price of Product i.e. 100"
                  value={price}
                  variant="outlined"
                  fullWidth
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </FormControl>

              <Button
                className={classes.Submitbtn}
                variant="outlined"
                color="secondary"
                fullWidth
                onClick={AddingProd}
              >
                Add Product
              </Button>
            </div>
          </form>
        </Grid>
        <Grid item xs={1} md={4}></Grid>
      </Grid>
    </div>
  );
};

export default UploadProductPage;
