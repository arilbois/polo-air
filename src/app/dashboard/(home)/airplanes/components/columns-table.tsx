"use client";

import type { ColumnDef } from "@tanstack/react-table";
import type { Airplane } from "@prisma/client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Pencil } from "lucide-react";

export const columns: ColumnDef<Airplane>[] = [
  {
    accessorKey: "image",
    header: "Image",
  },
  {
    accessorKey: "code",
    header: "Code",
  },
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const plane = row.original;

      return (
        <div className="inline-flex gap-5 items-center">
          <Button variant="secondary" size="sm" asChild>
            <Link href="/dasboard/airplanes/edit/${plane.id}">
              <Pencil className="mr-2 h-4 w-4">Edit</Pencil>
            </Link>
          </Button>
        </div>
      );
    },
  },
];
