import { isOdd } from '../helpers';
import { Grid } from './base';
import { Card } from './card';

const marginTop = (i) => [0, isOdd(i) ? 200 : null];
const marginBottom = (i) => [0, isOdd(i) ? -120 : null];

export const CardList = ({ items }) => (
  <Grid
    gridRowGap={40}
    gridColumnGap={[40, 40, 240]}
    gridTemplateColumns={['1fr', '1fr 1fr']}
  >
    {items.map((item, i) => (
      <Card
        marginTop={marginTop(i)}
        marginBottom={marginBottom(i)}
        data={item}
        key={i}
      ></Card>
    ))}
  </Grid>
);
