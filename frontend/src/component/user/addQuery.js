import React, { useState } from "react";
import { Formik } from "formik";
import app_config from "../../config";
import MDEditor from "@uiw/react-md-editor";
import Swal from "sweetalert2";
import { Autocomplete, Chip, TextField } from "@mui/material";

const AddQuery = () => {
  const url = app_config.backend_url;

  const [query, setQuery] = useState("");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const myStyle = {
    backgroundColor: "",
    color: "red",
    borderRadius: "5px",
  };

  const queryForm = {
    title: "",
    data: "",
    dev: currentUser._id,
    tags: [],
  };

  const querySubmit = (formdata) => {
    formdata.data = query;
    console.log(formdata);
    fetch(url + "/query/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Query Added",
        });
      });
  };

  return (
    <div className="container-md  mt-5" style={myStyle}>
      <div className="row">
        <div className="col  border ">
          <header className="mx-5">
            <h1 className="text-center">AddQuery</h1>
          </header>

          <Formik initialValues={queryForm} onSubmit={querySubmit}>
            {({ values, handleSubmit, handleChange }) => (
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="exampleFormControlInput1" class="form-label">
                    Query
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Query Name"
                    id="title"
                    onChange={handleChange}
                    value={values.title}
                  />
                  <br></br>
                </div>
                <div className="mb-3">
                  <Autocomplete
                    className="mt-5"
                    multiple
                    id="tags"
                    options={["JavaScript", "React", "MERN", "Python"].map(
                      (topic) => topic
                    )}
                    freeSolo
                    renderTags={(value, getTagProps) =>
                      value.map((option, index) => (
                        <Chip
                          variant="outlined"
                          label={option}
                          {...getTagProps({ index })}
                        />
                      ))
                    }
                    renderInput={(params) => (
                      <TextField
                        id="tags"
                        value={values.tags}
                        onChange={handleChange}
                        {...params}
                        variant="filled"
                        label="Tags for the Query"
                        placeholder="HTML, CSS etc."
                      />
                    )}
                  />
                </div>

                <div class="mb-3">
                  <MDEditor value={query} onChange={setQuery} />
                </div>

                <button className="btn btn-primary">Submit</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AddQuery;
