import { useEffect } from 'react';
import TagManager from 'react-gtm-module';

const GoogleTagManager = () => {
    TagManager.initialize({ gtmId: import.meta.env.VITE_GTM_ID });

    return <></>;
};

export default GoogleTagManager;