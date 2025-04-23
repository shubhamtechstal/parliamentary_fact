import { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import PopulerMpsDetailsComponent from 'components/Mps_performance/details/PopulerMPsDetails';
import AdvertisementLayout from 'components/addLayout/AdvertisementLayout';
import ShareModal from 'components/common/modals/ShareModal';
import TopPerformerMpsDetails from 'components/Mps_performance/details/TopPerformerMpsDetails';
import AutocompleteSearchBox from 'components/common/modals/AutoCompleateSearchBox';
import MpsConstituencyPageComponent from 'components/mps_constituency/MpsConstituencyPageComponent';

const MpsConstituencyContainer = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const initialSection = searchParams.get('section');
  const [activeSection, setActiveSection] = useState(initialSection);
  const [openShare, setOpenShare] = useState(false);
  const [filterParams, setFilterParams] = useState({});
  const onSelectSearchBox = (value) => {
    setFilterParams((prev) => ({
      ...prev,
      mp_full_name: value?.full_name,
    }));
  };
  
  const handleOpenSharePopup = () => {
    setOpenShare((prev) => !prev);
  };

  useEffect(() => {
    const section = searchParams.get('section');
    if (section) {
      setActiveSection(section);
    }
  }, [searchParams, initialSection]);

  const handleSectionChange = (sectionId) => {
    setActiveSection(sectionId);
    setSearchParams({ section: sectionId });
  };

  const handleBack = () => {
    setActiveSection(null);
    navigate('/mps-performance');
  };
  const sectionsComponets = [
    {
      id: 'popular-mps',
      component: (
        <PopulerMpsDetailsComponent
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    {
      id: 'top-performer-mps',
      component: (
        <TopPerformerMpsDetails
          handleBack={handleBack}
          handleOpenSharePopup={handleOpenSharePopup}
          // onFilterClick={onFilterClick}
        />
      ),
    },
    { id: 'health', component: 'Healthcare_Development' },
    { id: 'infrastructure', component: 'Infrastructure_Growth' },
    { id: 'defense', component: 'Defense_Policies' },
  ];
  return (
    <AdvertisementLayout>
      {activeSection && (
        <AutocompleteSearchBox onSelectMP={onSelectSearchBox} />
      )}
      {activeSection ? (
        sectionsComponets.find((s) => s.id === activeSection)?.component
      ) : (
        <MpsConstituencyPageComponent
          handleDetailsClick={handleSectionChange}
          handleOpenSharePopup={handleOpenSharePopup}
        />
      )}

      <ShareModal
        open={openShare}
        handleOpenSharePopup={handleOpenSharePopup}
      />
    </AdvertisementLayout>
  );
};

export default MpsConstituencyContainer