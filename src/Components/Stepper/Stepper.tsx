import MobileStepper from '@mui/material/MobileStepper';

export default function DotsMobileStepper() {
  return (
    <MobileStepper
      variant="dots"
      className={'flex-grow  '}
      steps={4}
      position="static"
      activeStep={2}
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
