import React ,{useState,useEffect} from "react";
import { getLandingContent } from "./Api";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import LandingPage from "../pages/LandingPage";

function ApiData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const result = await getLandingContent();
      setData(result || []);
    } catch (err) {
      setError("Unable to load content");
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return <LandingPage data={data} />;
}

export default ApiData;

