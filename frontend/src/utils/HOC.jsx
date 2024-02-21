import React, { useEffect, useState } from "react";
import Loading from "./Loading";

const HOC = ({Children}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 10000);
  }, []);

  return <>{loading ? <Loading /> : <Children />}</>;
};

export default HOC;
