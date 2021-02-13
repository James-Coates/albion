import useSWR from 'swr';
import { Heading, Text } from '../components/base';
import { Box } from '../components/base/box';
import { CardList } from '../components/card-list';
import { LandingHero } from '../components/landing-hero';
import { Layout } from '../components/layout';
import { fetcher } from '../helpers';
import { Tour } from '../models/tour.model';

export default function Home() {
  const { data, error } = useSWR<Tour>('/api/tours', fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <Layout>
      <LandingHero backgroundImage="/images/poster.png">
        <Heading level={1}>Great British Tours</Heading>
        <Text>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Quod suscipit quis odit, soluta quos illum iusto. Omnis esse
          quia voluptatem?
        </Text>
      </LandingHero>
      <Box margin="0 auto" padding="200px 16px" maxWidth="1100px">
        <Box maxWidth={520} marginBottom={120} marginLeft={160}>
          {/* <Heading level={2} fontSize={theme.fs.h2}>
            Our Tours
          </Heading> */}
          <Heading type="h2">test</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aliquam reiciendis autem asperiores dolorem,
            voluptatum cupiditate corrupti aspernatur. Assumenda
            explicabo asperiores nisi adipisci veniam. Aspernatur
            vitae sequi consectetur expedita cumque?
          </Text>
        </Box>
        <CardList items={data}></CardList>
      </Box>
    </Layout>
  );
}
