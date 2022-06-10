import React, { useState } from "react";
import Lottie from "react-lottie";
import animationData from "../lottie/empty.json";
import Alert from "../components/Alert";
import { Offline } from "react-detect-offline";
import { useRouter } from "next/router";
import "@heroicons/react/outline";
import Layout from "components/Layout";
import useUser from "lib/useUser";
import Overview from "../components/Overview";
import axios from "axios";
import Result from "components/Result"



export default function Search() {
  return (
    <Layout>
      <div className="md:px-48 mt-5 md:mt-12 mb-5 px-5 ">
        <h1 className="text-3xl font-bold leading-normal mb-6">Uitgifte</h1>

        <input
                type="text"
                placeholder="Bijv. tillift, infuuspomp"
                name="ultimo"
                required
                // onChange={getInputValue}
                className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
              />
                    </div>
    </Layout>
  );
}

