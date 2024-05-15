export interface CategoryFormProps {
  id?: string;
  title: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
}
export interface AttractionFormProps {
  id?: string;
  title: string;
  slug: string;
  description: string | null;
  location: string | null;
  history: string | null;
  thingsToKnow: string[] | null;
  how: string | null;
  when: string | null;
  imageUrl: string | null;
  tourIds: string[];
}
export interface TourFormProps {
  //Form 1
  id?: string;
  title: string;
  slug: string;
  description: string | null;
  imageUrl: string | null;
  imageUrls: string[];
  pricePerAdult: number;
  pricePerChild: number;
  categoryId: string;
  // Form 2
  whatsIncluded: string[];
  additionalInfo: string[];
  cancellationPolicy: string;
  travelerPhotos: string[];
  departureAndReturn: string;
  // Form 3
  days: DayFormProps[];
  faqs: FaqFormProps[];
}
export type DayFormProps = {
  id?: string;
  title: string;
  description: string;
  accommodation: string[] | null;
  meals: string[];
  tourId: string;
};
export type FaqFormProps = {
  id?: string;
  qn: string;
  ans: string;
  tourId: string;
};
