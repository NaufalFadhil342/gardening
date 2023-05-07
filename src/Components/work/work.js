import { IoIosCut } from 'react-icons/io';
import { GiPlantSeed, GiLadybug } from 'react-icons/gi';
import man from '../../Image/worker/man.png';
import woman from '../../Image/worker/woman.png';
import mowing from '../../Image/gardening/mowing.jpg';
import planting from '../../Image/gardening/planting.jpg';
import implementing from '../../Image/gardening/implement.jpg';

export const workIcon = [
  {
    id: 1,
    image: mowing,
    ourworkIcon: <IoIosCut />,
    label: 'Mowing the grass',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in laoreet leo. Phasellus id tincidunt nunc.',
  },
  {
    id: 2,
    image: planting,
    ourworkIcon: <GiPlantSeed />,
    label: 'Planting & seeding tree',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in laoreet leo. Phasellus id tincidunt nunc.',
  },
  {
    id: 3,
    image: implementing,
    ourworkIcon: <GiLadybug />,
    label: 'Implementing control',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in laoreet leo. Phasellus id tincidunt nunc.',
  },
];

export const FeedBack = [
  {
    icon: man,
    label: 'Travis Howard',
    text: 'Brighton & Hove, British',
  },
  {
    icon: woman,
    label: 'Cindy Baker',
    text: 'Marseille, France',
  },
];
