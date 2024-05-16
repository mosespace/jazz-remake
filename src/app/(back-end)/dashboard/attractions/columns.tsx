"use client";

import { CategoryFormProps } from "@/types/types";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import ImageColumn from "@/components/(back-end)/DataTableColumns/ImageColumn";
import SortableColumn from "@/components/(back-end)/DataTableColumns/SortableColumn";
import DateColumn from "@/components/(back-end)/DataTableColumns/DateColumn";
import ActionColumn from "@/components/(back-end)/DataTableColumns/ActionColumn";


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
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "title",
    header: ({ column }) => <SortableColumn column={column} title='Title' />,
  },
  {
    accessorKey: "imageUrl",
    header: "Attraction Image",
    cell: ({ row }) => <ImageColumn row={row} accessorKey='imageUrl' />,
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey='createdAt' />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const attraction = row.original;
      return (
        <ActionColumn
          row={row}
          title='Attraction'
          editEndpoint={`attractions/${attraction.id}`}
          id={attraction.id}
        />
      );
    },
  },
];
