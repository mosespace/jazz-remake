import ThankYou from "@/components/(front-end)/thank-you-page";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You",
  description:
    "Thank you for choosing Jazz Africa Adventures for your travel needs. Your trust and support mean the world to us. We're thrilled to be a part of your journey and are committed to ensuring that your experience with us exceeds your expectations. Whether you've just booked a tour, inquired about our services, or reached out for assistance, we sincerely appreciate your decision to explore Kenya with us. Your adventure awaits, and we can't wait to help you create memories that will last a lifetime. Once again, thank you for choosing Jazz Africa Adventures. We look forward to welcoming you to the beauty and excitement of Kenya.",
};

export default function Page() {
  return (
    <div>
      <ThankYou />
    </div>
  );
}
