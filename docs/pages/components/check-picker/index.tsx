import React from 'react';
import { CheckPicker, Button, Checkbox, RadioGroup, Radio } from 'cen-suite';
import DefaultPage from '@/components/Page';
import SpinnerIcon from '@rsuite/icons/legacy/Spinner';

export default function Page() {
  return (
    <DefaultPage
      dependencies={{
        CheckPicker,
        Button,
        Checkbox,
        RadioGroup,
        Radio,
        SpinnerIcon
      }}
    />
  );
}
