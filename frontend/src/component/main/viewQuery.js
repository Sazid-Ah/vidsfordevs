import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import TimeAgo from "javascript-time-ago";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import app_config from "../../config";

const ViewQuery = () => {
  const { id } = useParams();
  const [queryData, setQueryData] = useState({});
  const [loading, setLoading] = useState(true);
  const [comment, setComment] = useState("");
  const [video, setVideo] = useState("");
  const navigate = useNavigate();
  const [solutions, setSolutions] = useState([]);
  const [solutionsLoading, setSolutionsLoading] = useState(true);

  

  // Create formatter (English).
  const timeAgo = new TimeAgo("en-US");

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );

  const url = app_config.backend_url;
  const fetchData = () => {
    fetch(url + "/solution/getbyquery/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSolutions(data);
        setSolutionsLoading(false);
      });

    fetch(url + "/query/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setQueryData(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const displayQuery = () => {
    if (!loading) {
      return (
        <Card className="query-card">
          <CardContent>
            {queryData.tags.map((tag) => (
              <Chip label={tag} variant="filled" />
            ))}
            <Divider className="mt-4 mb-4" />
            <div>
              <Box sx={{ display: "flex" }}>
                <Avatar
                  alt={queryData.dev.username}
                  src={url + "/uploads/" + queryData.dev.avatar}
                />

                <Box sx={{ ml: 1 }}>
                  <p style={{ marginBottom: 0 }}>{queryData.dev.username}</p>
                  <Typography variant="caption">
                    {/* {new Date(createAt).toLocaleDateString()} */}
                    {timeAgo.format(new Date(queryData.createAt))}
                  </Typography>
                </Box>
              </Box>
            </div>
          </CardContent>
        </Card>
      );
    }
  };

  const displaySolutions = () => {
    if (!solutionsLoading) {
      return solutions.map((sol) => (
        <Box component="div">
          <Typography variant="h5">{sol.comment}</Typography>
          <Box component="div" sx={{ display: "flex" }}>
            <Avatar />
            <p>{sol.uploadedBy.username}</p>
          </Box>
        </Box>
      ));
    }
  };

  return (
    <Container>
      {displayQuery()}
      {displaySolutions()}
    </Container>
  );
};

export default ViewQuery;
