"use client";

import { CategoryFormProps } from "@/types/types";
import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import ActionColumn from "@/components/(back-end)/DataTableColumns/ActionColumn";
import SortableColumn from "@/components/(back-end)/DataTableColumns/SortableColumn";
import DateColumn from "@/components/(back-end)/DataTableColumns/DateColumn";

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
    accessorKey: "name",
    header: ({ column }) => <SortableColumn column={column} title='Names' />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableColumn column={column} title='Email' />,
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "children",
    header: "No. of Children",
  },
  {
    accessorKey: "adults",
    header: "No. of adults",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => <DateColumn row={row} accessorKey='date' />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const booking = row.original;
      return (
        <ActionColumn
          row={row}
          title='Booking'
          editEndpoint={`bookings/${booking.id}`}
          id={booking.id}
        />
      );
    },
  },
];
