"use client";

import * as React from "react";

import { flexRender } from "@tanstack/react-table";
import { TableBody, TableCell, TableRow } from "../ui/table";

interface CustomTableBodyProps {
  table: any;
  columns: any;
}

const CustomTableBody: React.FC<CustomTableBodyProps> = ({
  table,
  columns,
}): any => {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row: any) => (
          <TableRow key={row.id} data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell: any) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export { CustomTableBody };
