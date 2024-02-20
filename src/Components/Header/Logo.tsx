export const Logo: React.FC<{}> = () => {
  return (
    <>
      <span className={'flex items-center flex-row gap-2 ml-6 absolute left-0 h-full'}>
        <img src="/Icon.svg" alt="Icon img" style={{ height: '28px', width: '28px' }} />
        <img src="/text.svg" alt="Text icon" style={{ width: '122px', height: '13.5px' }} />
      </span>
    </>
  );
};
