import { getTours } from "@/actions/tours";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth-options";
import { getCategories } from "@/actions/categories";
import Footer from "@/components/(front-end)/footer";
import { SiteHeader } from "@/components/site-header";
import WhatsappLink from "@/components/(front-end)/whatsapp-link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  const tourData = await getTours();
  const categoriesData = await getCategories();

  return (
    <div>
      <SiteHeader
        session={session}
        tourData={tourData}
        categoriesData={categoriesData}
      />
      {children}
      <WhatsappLink />
      <Footer />
    </div>
  );
}
