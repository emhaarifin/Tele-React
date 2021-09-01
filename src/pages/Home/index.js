import React from "react";
import Main from "@/components/templates/Main";

function index({ socket }) {
  return (
    <div>
      <Main socket={socket} />
    </div>
  );
}

export default index;
