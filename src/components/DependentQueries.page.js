import React from "react";
import { useQuery } from "react-query";
import axios from "axios";

const fetchUserEamil = (email) => {
  return axios.get(`http://localhost:4000/users/${email}`);
};

const fetchCoursesByChannelId = (channelId) => {
  return axios.get(`http://localhost:4000/channels/${channelId}`);
};

const DependentQueriesPage = ({ email }) => {
  const { data: user } = useQuery(["user", email], () => fetchUserEamil(email));

  const channelId = user?.data.channelId;

  const { data: courses } = useQuery(
    ["courses", channelId],
    () => fetchCoursesByChannelId(channelId),
    {
      enabled: !!channelId,
    }
  );

  console.log(courses);
  return (
    <div>
      {courses?.data.courses.map((course) => (
        <div>{course}</div>
      ))}
    </div>
  );
};

export default DependentQueriesPage;
