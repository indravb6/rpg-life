import { cookies } from "next/headers";
import challengeAPI from "../../../../api/challengeAPI";
import PageWrapper from "../../../../components/PageWrapper/PageWrapper";
import ChallengeListView from "../../../../features/challengeList/ChallengeListView";

export default async function ChallengeListPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const cookieStore = await cookies();
  const cookieHeader = cookieStore.toString();

  const challenges = await challengeAPI.getChallenges(title, cookieHeader);
  console.log(challenges);
  const decodedTitle = decodeURIComponent(title);

  return (
    <PageWrapper>
      <ChallengeListView challenges={challenges} categoryTitle={decodedTitle} />
    </PageWrapper>
  );
}
