import { Loader, Plus, RefreshCcw } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function SubmitButton({
  isLoading = false,
  buttonTitle,
  loadingButtonTitle,
}: {
  isLoading: boolean;
  buttonTitle: string;
  loadingButtonTitle: string;
}) {
  return (
    <>
      {isLoading ? (
        <Button disabled>
          <Loader className='mr-2 h-4 w-4 animate-spin' />
          {loadingButtonTitle}
        </Button>
      ) : (
        <Button>{buttonTitle}</Button>
      )}
    </>
  );
}
