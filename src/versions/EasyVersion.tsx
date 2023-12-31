import { FC } from 'react';
import MainEasy from '../components/MainEasy';
import HeaderEasy from '../components/HeaderEasy';
import AsideEasy from '../components/AsideEasy';
import FooterEasy from '../components/FooterEasy';

const EasyVersion: FC = () => {
  return (
    <div className='wrapper'>
      <HeaderEasy />
      <MainEasy />
      <AsideEasy />
      <FooterEasy />
    </div>
  );
};

export default EasyVersion;
