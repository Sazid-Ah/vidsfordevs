import { Avatar, Button, Chip, Divider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import app_config from "../../config";
import { useNavigate } from "react-router-dom";
import MDEditor from "@uiw/react-md-editor";
import { Box } from "@mui/system";
import TimeAgo from "javascript-time-ago";
import { ListAlt, QuestionAnswer } from "@mui/icons-material";

const QueryListing = () => {
  const [queryList, setQueryList] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = app_config.backend_url;

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const navigate = useNavigate();

  const fetchData = () => {
    fetch(url + "/query/getall")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
        setQueryList(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayQueries = () => {
    if (!loading) {
      return queryList.map(({ title, createAt, dev, _id, data, tags }) => (
        <div className="card my-5">
          <div className="card-body">
            <h3>{title}</h3>

            {tags.map((tag) => (
              <Chip label={tag} variant="filled" />
            ))}
            <Divider className="mt-4 mb-4" />
            <div>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  alt={dev.username}
                  src={url + "/uploads/" + dev.avatar}
                />

                <Box sx={{ ml: 1 }}>
                  <p style={{ marginBottom: 0 }}>{dev.username}</p>
                  <Typography variant="caption">
                    {/* {new Date(createAt).toLocaleDateString()} */}
                    {timeAgo.format(new Date(createAt))}
                  </Typography>
                </Box>
              </Box>

              <Box sx={{ mt: 3 }}>
                <Button
                  variant="outlined"
                  startIcon={<ListAlt />}
                  sx={{ mx: 1 }}
                  onClick={(e) => navigate("/main/viewquery/" + _id)}
                >
                  View Solutions
                </Button>
                <Button
                  color="success"
                  variant="outlined"
                  startIcon={<QuestionAnswer />}
                  sx={{ mx: 1 }}
                  onClick={(e) => navigate("/user/AddSolution/" + _id)}
                >
                  Provide Solution
                </Button>
              </Box>
            </div>
          </div>
        </div>
      ));
    }
  };

  return (
    <div>
      <header className="header bg-dark">
        <div className="container" style={{ padding: "5rem 0" }}>
          <div className="input-group">
            <input className="form-control" placeholder="Search Tests Here" />
            <button className="btn btn-primary">Search</button>
          </div>
        </div>
      </header>

      <div className="container my-1" style={{ border: "1px solid gray" }}>
        <div className="row">
          <div className="col-md-3">
            <div className="card" style={{ height: "50vh" }}>
              <div className="card-body">
                This is some text within a card body.
              </div>
            </div>
          </div>

          <div className="col-md-9">{displayQueries()}</div>
        </div>
      </div>
    </div>
  );
};

export default QueryListing;
