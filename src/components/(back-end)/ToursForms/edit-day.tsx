import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Pencil } from "lucide-react";
import DaysForm from "./DaysForm";

export default function EditDay({ id, tour }: any) {
  const day: any = tour.days.find((day: any) => day.id == id);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' title='Edit day'>
          <Pencil className='w-4 h-4 text-red-500' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[45rem]'>
        <DialogHeader className='text-center px-10'>
          <DialogTitle>Edit 🎉 {day?.title}</DialogTitle>
          <DialogDescription>
            Make changes to the following day here. Click update when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <DaysForm tour={tour} initialData={day} />
      </DialogContent>
    </Dialog>
  );
}
