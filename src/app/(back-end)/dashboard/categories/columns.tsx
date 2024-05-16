"use client";

import ActionColumn from "@/components/(back-end)/DataTableColumns/ActionColumn";
import DateColumn from "@/components/(back-end)/DataTableColumns/DateColumn";
import ImageColumn from "@/components/(back-end)/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/(back-end)/DataTableColumns/SortableColumn";
import { Checkbox } from "@/components/ui/checkbox";
import { CategoryFormProps } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
export const columns: ColumnDef<CategoryFormProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title="Title" />,
  },
  {
    accessorKey: "imageUrl",
    header: "Category Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey="imageUrl" />,
  },

  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const category = row.original;
      return (
        <ActionColumn
          row={row}
          title="Category"
          editEndpoint={`categories/update/${category.id}`}
          id={category.id}
        />
      );
    },
  },
];
