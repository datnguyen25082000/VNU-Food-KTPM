import React from "react";
import Sidebar from "../../component/Sidebar/Sidebar";
import ListPost from "../../component/ListPost/ListPost";

export const Customer = () => {
  const loading = () => (
    <div className="animated fadeIn pt-1 text-center">Loading...</div>
  );

  return (
    <div>
      <div className="d-flex toggled" id="wrapper">
        <Sidebar />
        <div id="page-content-wrapper">
          <div id="page-content-wrapper">
            <ListPost />
          </div>
        </div>
      </div>
    </div>
  );
};
