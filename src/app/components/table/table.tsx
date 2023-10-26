import { useState } from "react";
import { Table, TableCaption } from "../ui/table";
import {
  ColumnFiltersState,
  SortingState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Input } from "../ui/input";
import { CustomTableHeader } from "./header";
import { Pagination } from "./pagination";
import { CustomTableBody } from "./body";

interface CustomTableProps {
  columns: any[];
  caption?: String;
  data: any[];
}

const CustomTable: React.FC<CustomTableProps> = ({
  columns,
  caption,
  data,
}) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        {columns.map((column) => (
          <div key={column.id} className="mr-4">
            <Input
              placeholder={`Filter ${column.accessorKey}`}
              value={
                (columnFilters?.find(
                  (item: any) => item?.id === column?.accessorKey
                )?.value as string) ?? ""
              }
              onChange={(event) =>
                table
                  .getColumn(column.accessorKey)
                  ?.setFilterValue(event.target.value)
              }
              className="max-w-sm"
            />
          </div>
        ))}
      </div>
      <div className="rounded-md border">
        <Table>
          <TableCaption>{caption}</TableCaption>
          <CustomTableHeader table={table} />
          <CustomTableBody table={table} columns={columns} />
        </Table>
      </div>
      <Pagination table={table} />
    </div>
  );
};

export default CustomTable;
