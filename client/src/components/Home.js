import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
const Home = () => {
  let history = useHistory();
  return (
    <div style={{ marginTop: "3rem" }}>
      <div className="container ">
        <Grid container>
          <Grid item md={6}>
            <img
              style={{ paddingRight: "0.5rem" }}
              src="/img/d1.jpg"
              alt="newsletter"
              className="img-fluid"
            />
          </Grid>

          <Grid item md={6}>
            <Grid container>
              <Grid item md={6}>
                <div
                  className="text-center"
                  style={{ paddingBottom: "0.3rem", paddingRight: "0.3rem" }}
                >
                  <h5> </h5>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore
                  </p>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={(e) => {
                      history.push("/home/Items");
                    }}
                  >
                    Read More
                  </Button>
                </div>
              </Grid>

              <Grid item md={6}>
                <img
                  style={{ paddingBottom: "0.3rem" }}
                  src="/img/d1.jpg"
                  alt="newsletter"
                  className="img-fluid"
                />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item md={6}>
                <img
                  style={{ paddingRight: "0.3rem" }}
                  src="/img/d1.jpg"
                  alt="newsletter"
                  className="img-fluid"
                />
              </Grid>

              <Grid item md={6}>
                <img src="/img/d1.jpg" alt="newsletter" className="img-fluid" />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div style={{ marginTop: "3rem" }}>
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner text-center">
            <div className="carousel-item active">
              <div>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
              </div>
              <p className="paragraph text-center">
                "As chefs,especially pastry chefs,your creativity plays such big
                part of daily work"
              </p>
              <p>INA DORSEY</p>
            </div>
            <div className="carousel-item">
              <div>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
              </div>
              <p className="paragraph text-center">
                "Quality breads and pastries made to order.Beautiful Cakes for
                Beautiful Occasions"
              </p>
              <p>RANDY WOOD</p>
            </div>
            <div className="carousel-item">
              <div>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
                <i className="fa fa-star stars" aria-hidden="true"></i>
              </div>
              <p className="paragraph text-center">
                "Everyone has a favourite cake,pastry,pudding or pie from when
                they were kids"
              </p>
              <p>TOM TALLY</p>
            </div>
          </div>
          <Link
            className="carousel-control-prev"
            to="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </Link>
          <Link
            className="carousel-control-next"
            to="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
