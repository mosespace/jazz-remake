import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Faq, Tour } from "@prisma/client";
import EditFaq from "./edit-faq";
import DeleteBtn from "@/components/Actions/DeleteBtn";

export default function FaqsListing({
  tour,
  faqs,
}: {
  tour: Tour;
  faqs: Faq[];
}) {
  return (
    <>
      {faqs && faqs.length > 0 ? (
        <Card>
          <CardHeader className='px-7'>
            <CardTitle>Tour FAQS</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Question</TableHead>

                  <TableHead className='hidden sm:table-cell'>Answer</TableHead>
                  <TableHead className='hidden md:table-cell'>
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {faqs?.map((faq, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <div className='font-medium'>{faq?.qn}</div>
                        <div className='hidden text-xs text-muted-foreground sm:inline'>
                          (from {tour?.title})
                        </div>
                      </TableCell>

                      <TableCell className='hidden sm:table-cell'>
                        {faq.ans}
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        <div className='flex items-center'>
                          {/* Edit */}
                          <div>
                            <EditFaq id={faq.id} tour={tour} />
                          </div>
                          {/* Delete */}
                          <div>
                            <DeleteBtn
                              title2='Faq'
                              id={faq.id}
                              secondaryId={tour.id}
                            />
                          </div>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      ) : (
        <p>No FAQs</p>
      )}
    </>
  );
}
