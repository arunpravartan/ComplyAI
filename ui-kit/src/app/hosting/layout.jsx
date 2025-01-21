import PropTypes from 'prop-types';
// @next
import dynamic from 'next/dynamic';

// @types

// @project
const ScrollFab = dynamic(() => import('@/components/ScrollFab'));
const HostingLayout = dynamic(() => import('@/views/landings/hosting/layout'));

/***************************  LAYOUT - HOSTING  ***************************/

export default function Hosting({ children }) {
  return (
    <HostingLayout>
      <>
        {children}

        {/* scroll to top section */}
        <ScrollFab />
      </>
    </HostingLayout>
  );
}

Hosting.propTypes = { children: PropTypes.any };
