"use client";
import "../globals.css";
import { useEffect, useState } from "react";
import { getUsers } from "../../api/users/users";
import { columns } from "./table/columns";
import { RotateCounterClockwiseIcon } from "@radix-ui/react-icons";
import CustomTable from "../components/table/table";

export default function Users({}: {}) {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const fetchUsers = async (setLoading: any) => {
    const data = await getUsers(setLoading);
    if (data?.length) {
      setLoading(false);
      setUsers(data);
    }
  };

  useEffect(() => {
    setLoading(true);
    fetchUsers(setLoading);
  }, []);

  return (
    <>
      {loading ? (
        <div className="min-h-screen flex items-center justify-center">
          <RotateCounterClockwiseIcon className="mr-2 h-10 w-10 animate-spin" />{" "}
        </div>
      ) : (
        <CustomTable columns={columns} data={users} />
      )}
    </>
  );
}
