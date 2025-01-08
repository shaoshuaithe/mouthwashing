import { HomeLayout } from "@/components/layout/HomeLayout";
import { HomeLayoutChildren } from "@/types/layout";

export default async function HomePageLayout({ children }: HomeLayoutChildren) {


  return (
    <>
      <HomeLayout children={children} />
    </>
  );
}
