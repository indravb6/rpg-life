import { cookies } from "next/headers";
import challengeAPI from "../../../api/challengeAPI";
import PageWrapper from "../../../components/PageWrapper/PageWrapper";
import CategoryView from "../../../features/category/CategoryView";

export default async function ChallengeCategoryPage() {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const categories = await challengeAPI.getCategories(cookieHeader);

  return (
    <PageWrapper>
      <CategoryView categories={categories} />
    </PageWrapper>
  );
}
