import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      hello
      <Head>
        <title>this is head</title>
      </Head>
    </div>
  );
}
