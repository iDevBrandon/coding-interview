import React from "react";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";

const Login = () => {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10">
        {/* title */}
        <div className="title">
          <h1 className="text-gray-800 text-4xl font-bold py-4">Explore</h1>
          <p className="w-3/4 mx-auto text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            officia?
          </p>
        </div>
        {/* form */}
        <form className="flex flex-col gap-5">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="password"
              className={styles.input_text}
            />
          </div>

          <div className="input-button">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>

          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign In with Google{" "}
              <Image src={"/assets/google.svg"} alt='google' width="20" height={20}></Image>
            </button>
          </div>
          <div className="input-button">
            <button type="button" className={styles.button_custom}>
              Sign In with Github{" "}
              <Image src={"/assets/github.svg"}  alt='Github' width={25} height={25}></Image>
            </button>
          </div>
        </form>
        {/* buttom */}

        <p className="text-center text-gray-400 ">
          don&apos;t have an account yet?{" "}
          <Link href={"/register"}>
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
