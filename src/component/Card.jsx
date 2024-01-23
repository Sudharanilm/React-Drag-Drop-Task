// Card.js
import React from "react";

const Card = ({ dataList }) => {
  return (
    <>
            <div
              className="characters"
              style={{ height: "50%" }}
            >
              {dataList.map((data, index) => {
                return (
                      <div
                        key={index}
                        className="card"
                        style={{
                          width: "18rem",
                          marginLeft:'13rem',
                          marginTop: "1rem",
                          marginBottom: "1rem",
                          textAlign: "center",
                        }}
                      >
                        <div className="card-body">
                          <h6 className="card-title">Name: {data.name}</h6>
                          <h6 className="card-text">Email: {data.email}</h6>
                          <h6 className="card-text">Phone: {data.phone}</h6>
                          <h6 className="card-text">Age: {data.age}</h6>
                        </div>
                      </div>
                );
              })}
            </div>
    </>
  );
};
export default Card;

// Card.js


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
//                 <Draggable key={data.id} data={data}>
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
