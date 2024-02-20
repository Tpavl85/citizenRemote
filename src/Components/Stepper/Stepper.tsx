import * as React from 'react';
import MobileStepper from '@mui/material/MobileStepper';

export default function DotsMobileStepper() {
  const [activeStep, setActiveStep] = React.useState(2);

  return (
    <MobileStepper
      variant="dots"
      className={'flex-grow  '}
      steps={4}
      position="static"
      activeStep={activeStep}
      sx={{
        maxWidth: 150,
        flexGrow: 1,
        backgroundColor: 'transparent',
        display: 'flex',
        justifyContent: 'center'
      }}
      nextButton={null}
      backButton={null}
    />
  );
}
