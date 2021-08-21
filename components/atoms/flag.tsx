import Gb from '../../public/images/flags/gb.svg';
import De from '../../public/images/flags/de.svg';
import Cn from '../../public/images/flags/cn.svg';
import Fr from '../../public/images/flags/fr.svg';
import It from '../../public/images/flags/it.svg';
import Jp from '../../public/images/flags/jp.svg';
import Nl from '../../public/images/flags/nl.svg';
import Pt from '../../public/images/flags/pt.svg';
import Es from '../../public/images/flags/es.svg';
import Ru from '../../public/images/flags/ru.svg';
import { SvgIcon } from './svg';

interface FlagProps {
  country: string;
}

const getSvg = (country: string) => {
  switch (country) {
    case 'english':
      return <SvgIcon width="100%" Icon={Gb} />;
    case 'german':
      return <SvgIcon width="100%" Icon={De} />;
    case 'chinese':
      return <SvgIcon width="100%" Icon={Cn} />;
    case 'french':
      return <SvgIcon width="100%" Icon={Fr} />;
    case 'italian':
      return <SvgIcon width="100%" Icon={It} />;
    case 'japanese':
      return <SvgIcon width="100%" Icon={Jp} />;
    case 'dutch':
      return <SvgIcon width="100%" Icon={Nl} />;
    case 'russian':
      return <SvgIcon width="100%" Icon={Ru} />;
    case 'spanish':
      return <SvgIcon width="100%" Icon={Es} />;
    case 'portugese':
      return <SvgIcon width="100%" Icon={Pt} />;
    default:
      return null;
  }
};

export const Flag: React.FC<FlagProps> = ({ country }) => (
  <>{getSvg(country.toLowerCase())}</>
);
