import React from 'react';
import {
  ButtonToolbar,
  Button,
  Modal,
  Toggle,
  RadioGroup,
  Radio,
  Loader,
  Placeholder
} from 'cen-suite';
import DefaultPage from '@/components/Page';
import RemindIcon from '@rsuite/icons/legacy/Remind';

export default function Page() {
  return (
    <DefaultPage
      dependencies={{
        Loader,
        ButtonToolbar,
        Button,
        Modal,
        Toggle,
        RadioGroup,
        Radio,
        RemindIcon,
        Placeholder
      }}
    />
  );
}
