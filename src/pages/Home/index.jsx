import Banner from "../../components/Banner";
import Category from "../../components/Category";
import styles from "./Home.module.css";
import videos from "../../db/db.json";

export default function Home() {
  return (
    <>
      <Banner />
      <div className={styles.container}>
        <Category title="FRONT END" videos={videos.frontEnd} color="#00bfff" />
        <Category title="BACK END" videos={videos.backEnd} color="#00ff7f" />
        <Category title="MOBILE" videos={videos.mobile} color="#ffbf00" />
      </div>
    </>
  );
}
