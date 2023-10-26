"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  router.push("/users");

  return (
    <>
      <h1>Home</h1>
    </>
  );
}
