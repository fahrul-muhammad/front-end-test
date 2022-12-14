import react, { useEffect, useState } from "react";
import Header from "../../components/headerLogin/headerLogin";
import { selectAuth } from "../../redux/store";
import { useSelector } from "react-redux";
import "./home.scoped.css";
import axios from "axios";

type Results = {
  data: [];
};

const Home = () => {
  const userData = useSelector(selectAuth);
  const { name } = userData[0];
  const [data, setData] = useState<[]>([]);
  const [dataUser, setDataUser] = useState<[]>([]);

  const getDataDashboard = async () => {
    try {
      const result = await axios.get("https://jsonplaceholder.typicode.com/posts");
      console.log("DATA RESULTS: ", result.data);
      setData(result.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getUserData = async () => {
    try {
      const { data }: Results = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log("DATA USER", data);
      setDataUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchName = (props: any) => {
    const results: any = dataUser.filter((user: any) => {
      return user.id === props;
    });
    return results[0].name;
  };

  const getTotalComment = async (props: any) => {
    try {
      const results: any = await axios.get(`https://jsonplaceholder.typicode.com/posts/${props}/comments`);
      console.log("TOTAL COMMENTS", results.data.length);
      return results.data.length;
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUserData();
    getDataDashboard();
    // getTotalComment();
  }, []);

  return (
    <>
      <Header name={name} />
      <div className="container">
        <p className="post">POST</p>
        <input className="inputSearch" placeholder="Search" />
        {data.length > 0 &&
          dataUser.length > 0 &&
          data.map((val: any, idx: number) => {
            // console.log(val.id);
            return (
              <div className="box-container" key={idx}>
                <p className="name">{searchName(val.userId)}</p>
                <div className="box-comment">
                  <p className="grey-text">{val.title}</p>
                  <p className="grey-text">{val.body}</p>

                  <div className="icon-wrapper">
                    <span className="material-symbols-outlined icon-comment">chat_bubble</span>
                    <p className="total-comment">1</p>
                    <p className="total-comment">Detail</p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};

export default Home;
