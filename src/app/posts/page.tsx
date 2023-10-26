"use client";
import "../globals.css";
import { useEffect, useState } from "react";
import { columns } from "./table/columns";
import { RotateCounterClockwiseIcon } from "@radix-ui/react-icons";
import { getPosts } from "../../api/posts/posts";
import CustomTable from "../components/table/table";

export default function Posts({}: {}) {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const fetchPosts = async (setLoading: any) => {
    const data = await getPosts(setLoading);
    if (data?.length) {
      setLoading(false);
      setPosts(data);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchPosts(setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <RotateCounterClockwiseIcon className="mr-2 h-10 w-10 animate-spin" />{" "}
        </div>
      ) : (
        <CustomTable columns={columns} data={posts} />
      )}
    </>
  );
}
