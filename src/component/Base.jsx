import React, { useState } from "react";

const Base =({ updateDataList }) => {
  const[inputArr,setInputArr]=useState([])
  const [errors, setErrors] = useState({});
  const [disable, setDisable] = useState("");
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });

  const handleInput = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
    
  };
const handleInput1 = () => {
  const newData = { name, email, phone, age };
  setInputArr([...inputArr, newData]);
  console.log(newData,'sudharani mirjeli')
  updateDataList(newData); 
}

let {name,email,phone,age}=formValue;
 

  const handleInput2 = () =>{
    console.log(inputArr)
  }

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formValue.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    if (!formValue.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setDisable(formValue);
    }
  };



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <form onSubmit={handleSubmit}>
              <div className="row">
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      value={formValue.name}
                      onChange={handleInput}
                    />
                    {errors.name && <p>{errors.name}</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      name="email"
                      className="form-control"
                      value={formValue.email}
                      onChange={handleInput}
                    />
                    {errors.email && <p>{errors.email}</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control"
                      value={formValue.phone}
                      onChange={handleInput}
                    />
                    {errors.phone && <p>{errors.phone}</p>}
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="text"
                      name="age"
                      className="form-control"
                      value={formValue.age}
                      onChange={handleInput}
                    />
                    {errors.age && <p>{errors.age}</p>}
                  </div>
                </div>
              </div>
              <div className="col-md-12">
                <div className="mb-3">
                  <label className="form-label"></label>
                  <button
                    className="btn btn-danger btn-lg"
                    data-bs-dismiss="modal"
                    type="button"
                    onClick={handleInput2}
                  >
                    Cancel
                  </button>{" "}
                  <button
                  onClick={handleInput1}
                    className="btn btn-success btn-lg"
                    data-bs-dismiss="modal"
                    disabled={
                      formValue.name.length === 0 ||
                      formValue.email.length === 0 ||
                      formValue.phone.length === 0 ||
                      formValue.age.length === 0 ||
                      disable === "submitted"
                    }
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div>
      </div>
    </>
  );
}

export default Base;



