import { Button } from "../../components/ui/button";
import { ColumnDef } from "@tanstack/react-table";

import { ArrowUpDown } from "lucide-react";

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div> {row.getValue("id")} </div>,
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left"> Name </div>,
    cell: ({ row }) => (
      <div className="text-left font-medium"> {row.getValue("name")} </div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="lowercase"> {row.getValue("email")} </div>
    ),
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-left"> Phone Number </div>,
    cell: ({ row }) => (
      <div className="text-left font-medium"> {row.getValue("phone")} </div>
    ),
  },
  {
    accessorKey: "website",
    header: () => <div className="text-left"> Website </div>,
    cell: ({ row }) => (
      <div className="text-left font-medium"> {row.getValue("website")} </div>
    ),
  },
];
