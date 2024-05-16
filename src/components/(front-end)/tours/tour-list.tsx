import TourCard from "./tour-card";
import { Tour } from "@prisma/client";
import BoldHeading from "../bold-heading";

export default function ToursList({ tours }: { tours: Tour[] }) {
  return (
    <div className='py-20'>
      <div className=''>
        <BoldHeading heading='Popular Tours' />
        <TourCard data={tours} />
      </div>
    </div>
  );
}
