import { Box, Heading, Text } from '../../components/base';
import { CardList } from '../../components/card-list';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header/header';
import { LandingHero } from '../../components/landing-hero';

const tours = [
  {
    title: 'The Great British Day Out',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image:
      'https://images.unsplash.com/photo-1519526933243-dd9747bfaae5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3734&q=80',
    price: 89,
    availability: 'Available every Wed',
  },
  {
    title: 'Stratford Tour',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image: '/images/sua.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
  },
  {
    title: 'The London Tour',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image:
      'https://media.holidayme.com/wp-content/uploads/2017/02/13185557/shutterstock_178245392.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
  },
  {
    title: 'A day in Cambridge',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum obcaecati mollitia modi repellat neque deleniti officiis perspiciatis ipsum ex at.',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/b/b4/KingsCollegeChapelWest.jpg',
    price: 109,
    availability: 'Available every Mon and Fri',
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <LandingHero backgroundImage="images/poster.png"></LandingHero>
      <Box margin="0 auto" padding="200px 16px" maxWidth="1100px">
        <Box maxWidth={520} marginBottom={120} marginLeft={160}>
          {/* <Heading level={2} fontSize={theme.fs.h2}>
            Our Tours
          </Heading> */}
          <Heading type="h1">test</Heading>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Corporis aliquam reiciendis autem asperiores dolorem,
            voluptatum cupiditate corrupti aspernatur. Assumenda
            explicabo asperiores nisi adipisci veniam. Aspernatur
            vitae sequi consectetur expedita cumque?
          </Text>
        </Box>
        <CardList items={tours}></CardList>
      </Box>
      <Footer />
    </>
  );
}
