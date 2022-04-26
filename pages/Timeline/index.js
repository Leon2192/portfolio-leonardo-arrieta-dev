import styles from "../../styles/Timeline.module.css";
import Link from "next/link";

const Timeline = () => {
  return (
    <>
      <h1>This is the timeline</h1>
      <Link href="/">
        <a>Home</a>
      </Link>
    </>
  );
};

export default Timeline;
