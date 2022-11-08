import React from "react";
import Head from "next/head";
import Layout from "../layout/layout";
import Link from "next/link";

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
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
          <div className="input-group">
            <input type="password" name="password" placeholder="password" />
          </div>

          <div className="input-button">
            <button type="submit">Login</button>
          </div>

          <div className="input-button">
            <button type="submit">Sign In with Google</button>
          </div>

          <div className="input-button">
            <button type="submit">Sign In with Github</button>
          </div>
        </form>
        {/* buttom */}
        <p className="text-center text-gray-400 ">
          <Link href={"/register"}>
            don&apos;t have an account yet?
            <a className="text-blue-700">Sign Up</a>
          </Link>
        </p>
      </section>
    </Layout>
  );
};

export default Login;
