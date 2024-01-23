// ThreeColumnLayout.js
import React from 'react';

const ThreeColumnLayout = () => {
  return (
    <div className="container">
      <div className="row" style={{textAlign:'center'}}>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Age 1-19</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Age 19-25</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Age 25-45</h5>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Age 45+</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThreeColumnLayout;


// Card.js
// import React from "react";
// import {DragDropContext, Draggable } from "react-beautiful-dnd";

// const Card = ({ dataList }) => {

//   return (
//     <>
//       <DragDropContext>
//         <droppable droppableId="characters">
//           {(provided) =>(
//             <div
//             className="characters"
//             {...provided.droppableProps}
//             ref={provided.innerRef}
//             style={{ height: "50%" }}
//           >
//             {dataList.map((data, index) => {
//               return (
//                 <Draggable key={data} draggableId={data} index={index}>
//                   {(provided) => (
//                     <div
//                     {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}
//                       key={index}
//                       className="card"
//                       style={{
//                         width: "18rem",
//                         marginTop: "1rem",
//                         marginBottom: "1rem",
//                         textAlign: "center",
//                       }}
//                     >
//                       <div className="card-body">
//                         <h6 className="card-title">Name: {data.name}</h6>
//                         <h6 className="card-text">Email: {data.email}</h6>
//                         <h6 className="card-text">Phone: {data.phone}</h6>
//                         <h6 className="card-text">Age: {data.age}</h6>
//                       </div>
//                     </div>
//                   )}
//                 </Draggable>
//               );
//             })}
//             {provided.placeholder}
//           </div>
//           )}
          
//         </droppable>
//       </DragDropContext>
//     </>
//   )
//           }
// export default Card;