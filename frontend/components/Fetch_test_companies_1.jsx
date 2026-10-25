import React, { useEffect, useState } from "react";

function DataComponent() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/companies/1')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error(error));
  }, []); // Empty array ensures this runs once

  if (loading) return <div>Loading...</div>;
  return <div>{JSON.stringify(data)}</div>;

}

export default DataComponent
