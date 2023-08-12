import AsideMedium from '../components/AsideMedium';
import FooterMedium from '../components/FooterMedium';
import MainMedium from '../components/MainMedium';
import HeaderMedium from '../components/HeaderMedium';
import ReviewsMedium from '../components/ReviewsMedium';
import MediumNavigation from '../components/MediumNavigation';

const MediumVersion = () => {
  return (
    <div className='wrapper'>
      <MediumNavigation />
      <HeaderMedium />
      <MainMedium />
      <AsideMedium />
      <ReviewsMedium />
      <FooterMedium />
    </div>
  );
};

export default MediumVersion;
