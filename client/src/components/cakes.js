import React from "react";
const CakesHomePage = () => {
  return (
    <div className="cakes">
      <div className="cakes_section_title">
        <h2>Our Delicious Cakes</h2>
      </div>
      <div className="cakes-center">
        <section className="cake">
          <div className="cake_img_container">
            <img src="/img/d6.jpg" alt="cake1" className="img-fluid cake-img" />
            <button className="cake_bag_btn" data-id="1">
              <i className="fa fa-shopping-cart" aria-hidden="true"></i>
              Add to cart
            </button>
          </div>
          <h3>Cake</h3>
          <h4>$22</h4>
        </section>
      </div>
    </div>
  );
};

export default CakesHomePage;
