import { useRouter } from 'next/router';
import useSWR from 'swr';
import { Heading, Text } from '../../components/base';
import { LandingHero } from '../../components/landing-hero';
import { Layout } from '../../components/layout';
import { fetcher } from '../../helpers';
import { Tour } from '../../models/tour.model';

const TourPage = () => {
  const { query } = useRouter();
  const { data, error } = useSWR<Tour>(
    `/api/tours/${query.id}`,
    fetcher,
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <LandingHero backgroundImage={data.image}>
        <Heading level={1}>{data.title}</Heading>
        <Text>{data.description}</Text>
      </LandingHero>
    </Layout>
  );
};

export default TourPage;
