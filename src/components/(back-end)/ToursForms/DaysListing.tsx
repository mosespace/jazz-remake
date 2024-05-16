import { Badge } from "@/components/ui/badge";
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
import { Day, Tour } from "@prisma/client";
import EditDay from "./edit-day";
import DeleteBtn from "@/components/Actions/DeleteBtn";

export default function DaysListing({
  days,
  tour,
}: {
  tour: Tour;
  days: Day[];
}) {
  return (
    <>
      {days && days.length > 0 ? (
        <Card>
          <CardHeader className='px-7'>
            <CardTitle>Tour Days</CardTitle>
            <CardDescription>Recent orders from your store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Title</TableHead>

                  <TableHead className='hidden sm:table-cell'>
                    Accommodation
                  </TableHead>
                  <TableHead className='hidden md:table-cell'>
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {days?.map((day, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <div className='font-medium'>{day?.title}</div>
                        <div className='hidden text-xs text-muted-foreground sm:inline'>
                          (from {tour?.title})
                        </div>
                      </TableCell>

                      <TableCell className='hidden sm:table-cell'>
                        <div className='flex gap-1 flex-wrap'>
                          {day.accommodation.map((item) => (
                            <Badge
                              key={item}
                              className='text-xs'
                              variant='secondary'
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className='hidden md:table-cell'>
                        <div className='flex items-center'>
                          {/* Edit */}
                          <div>
                            <EditDay id={day.id} tour={tour} />
                          </div>
                          {/* Delete */}
                          <div>
                            <DeleteBtn
                              title2='Day'
                              id={day.id}
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
        <p>No Days</p>
      )}
    </>
  );
}
