import React from "react";
import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function FormHeader({
  title,
  subtitle,
  redirectLink,
}: {
  title: string;
  subtitle: string;
  redirectLink: string;
}) {
  const router = useRouter();

  function redirect() {
    router.replace(`/dashboard/${redirectLink}`);
  }
  return (
    <CardHeader className="">
      <div className="flex items-center justify-between">
        <div className="">
          <CardTitle className="mb-4">{title}</CardTitle>
          <CardDescription>{subtitle}</CardDescription>
        </div>
        <Button type="button" onClick={redirect} variant="outline" size="icon">
          <X className="h-4 w-4" />
        </Button>
      </div>
    </CardHeader>
  );
}
