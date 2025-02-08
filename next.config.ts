import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static export
  basePath: "ToDoList", // Replace with your GitHub repo name
  assetPrefix: "ToDoList",
};

export default nextConfig;

