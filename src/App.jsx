// App.js
import React, { useState } from "react";
import Base from "./component/Base";
import Card from "./component/Card";
import ThreeColumnLayout from "./component/ThreeColumnLayout";

const App = () => {
  const [dataList, setDataList] = useState([]);
  const updateDataList = (data) => {
    console.log(updateDataList, "updateDataList");

    setDataList([...dataList, data]);
    console.log(data, "datalist");
    console.log(dataList, "sudharani");
  };
  return (
    <>
      <center>
      <button
        type="button"
        className="btn btn-primary mb-4 mt-4"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        ADD +
      </button>
      </center>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body">
              <Base updateDataList={updateDataList} />
            </div>
          </div>
        </div>
      </div>
      <div>
        <ThreeColumnLayout />
      </div>
      <div>
        <Card dataList={dataList} />
      </div>
    </>
  );
};

export default App;
