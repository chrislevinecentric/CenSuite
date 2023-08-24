import React, { useEffect } from 'react';
import { ButtonToolbar } from 'cen-suite';
import canUseDOM from 'dom-lib/canUseDOM';
import { MoreActions } from './MoreActions';

interface PageToolbarProps {
  designHash?: any;
  routerId?: string;
}

function PageToolbar({ designHash, routerId }: PageToolbarProps) {
  const [show, setShow] = React.useState(false);

  useEffect(() => {
    setShow(canUseDOM);
  }, []);

  return show ? (
    <ButtonToolbar className="page-toolbar">
      <MoreActions designHash={designHash} routerId={routerId} />
    </ButtonToolbar>
  ) : null;
}

export default PageToolbar;
