import AsideMedium from '../components/AsideMedium';
import FooterMedium from '../components/FooterMedium';
import MainMedium from '../components/MainMedium';
import HeaderMedium from '../components/HeaderMedium';

const MediumVersion = () => {
  return (
    <div className='wrapper'>
      <HeaderMedium />
      <MainMedium />
      <AsideMedium />
      <FooterMedium />
    </div>
  );
};

export default MediumVersion;
