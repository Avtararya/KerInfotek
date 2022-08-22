import axios from "axios";
import React, { useEffect, useState } from "react";
import Avatar from "react-avatar";
import logs from "./logs.json";

const Sample = () => {
  const [value, setValue] = useState([]);

  const data = async () => {
    const api = await axios.get(
      "https://api.airtable.com/v0/appBTaX8XIvvr6zEC/Users?maxRecords=3&amp;view=Grid%20view ",
      {
        headers: {
          Authorization: "Bearer key4v56MUqVr9sNJv",
        },
      }
    );
    console.log(api);
    setValue(api.data.records);
  };

  useEffect(() => {
    data();
  }, []);
  console.log(logs);
  const totalRev = (id) => {
    let total = 0;
    logs.map((t) => {
      if (t.user_id === id) {
        total += t.revenue;
      }
    });
    return total;
  };
  const totalImpression = (id) => {
    let count = 0;
    logs.map((t) => {
      if (t.user_id === id && t.type === "impression") {
        count += 1;
      }
    });
    return count;
  };
  const totalConversion = (id) => {
    let count = 0;
    logs.map((t) => {
      if (t.user_id === id && t.type === "conversion") {
        count += 1;
      }
    });
    return count;
  };

  return (
    <div>
      <div className="flex  flex-col justify-center items-center ">
        <div className=" flex justify-around w-full">
          {value.map((x, i) => {
            return (
              <div
                key={i}
                className="my-8 border-b-2 border-gray-500 w-48 h-60 border-2 flex flex-col justify-center items-center"
              >
                <Avatar
                  className="mb-9"
                  name={x?.fields?.avatar}
                  size={40}
                  round="50px"
                />
                {x?.fields?.Name}
                <div>{x?.fields?.occupation}</div>
                <div>Revenue : {Math.round(totalRev(x?.fields?.Id))}</div>
                <div>
                  Impression : {Math.round(totalImpression(x?.fields?.Id))}
                </div>
                <div>
                  Conversion : {Math.round(totalConversion(x?.fields?.Id))}
                </div>
              </div>
            );
          })}

          <div>{value.map((z) => {})}</div>
        </div>
      </div>
    </div>
  );
};

export default Sample;
