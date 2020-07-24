import React from "react";
const adminDashboard = () => {
  const showHeader = () => (
    <div className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>
              <i class="fa fa-home" aria-hidden="true"></i> Dashboard
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
  return <div>{showHeader()}</div>;
};

export default adminDashboard;
