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
import FaqForm from "./FaqForm";

export default function EditFaq({ id, tour }: any) {
  const faq: any = tour.faqs.find((faq: any) => faq.id == id);
//   console.log(faq);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='ghost' title='Edit faq'>
          <Pencil className='w-4 h-4 text-red-500' />
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[45rem]'>
        <DialogHeader className='text-center px-10'>
          <DialogTitle>Edit 🎉 {faq?.title}</DialogTitle>
          <DialogDescription>
            Make changes to the following faq here. Click update when you're
            done.
          </DialogDescription>
        </DialogHeader>
        <FaqForm tour={tour} initialData={faq} />
      </DialogContent>
    </Dialog>
  );
}
