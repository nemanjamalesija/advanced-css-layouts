import { FC } from 'react';
import HeaderEasy from '../components/HeaderEasy';
import MainEasy from '../components/MainEasy';
import FigureEasy from '../components/FigureEasy';

const EasyVersion: FC = () => {
  return (
    <div>
      <HeaderEasy />
      <MainEasy />
      <FigureEasy />
    </div>
  );
};

export default EasyVersion;
