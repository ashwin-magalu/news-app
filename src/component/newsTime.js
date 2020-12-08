import moment from "moment";
import { Text } from "native-base";
import React, { useEffect, useState } from "react";

const NewsTime = ({ time }) => {
  const [date, setDate] = useState(time);
  const [_time, set_time] = useState("");

  useEffect(() => {
    set_time(moment(date || moment.now()).fromNow());
    return () => {
      //
    };
  }, []);

  return (
    <Text note style={{ marginHorizontal: 10 }}>
      {_time}
    </Text>
  );
};

export default NewsTime;
