import { Button } from "@/app/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export type Posts = {
  id: number;
  title: string;
};

export const columns: ColumnDef<Posts>[] = [
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
    accessorKey: "title",
    header: () => <div className="text-left"> Title </div>,
    cell: ({ row }) => (
      <div className="text-left font-medium"> {row.getValue("title")} </div>
    ),
  },
];
