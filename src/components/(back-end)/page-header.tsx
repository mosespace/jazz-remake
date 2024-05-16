import React from "react";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

type PageHeaderProps = {
  pageTitle: string;
  path?: string;
  linkText?: string;
};
export default function PageHeader({
  pageTitle,
  path,
  linkText,
}: PageHeaderProps) {
  return (
    <div className="flex items-center justify-between border-b pb-3">
      <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
        {pageTitle}
      </h2>
      {path && (
        <Button asChild>
          <Link href={path}>
            <Plus className="mr-2 h-4 w-4" /> {linkText}
          </Link>
        </Button>
      )}
    </div>
  );
}
