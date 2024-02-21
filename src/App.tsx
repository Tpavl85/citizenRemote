import './App.css';
import { Header } from './Components/Header/Header.tsx';
import {
  Card,
  HeaderHelperText,
  HeaderText,
  LeftAside,
  RightAside,
  Wrapper
} from './Components/Utils.styles.ts';
import { Avatar, Stack } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import Divider from '@mui/material/Divider';
import { Counter } from './Components/Counter/Counter.tsx';
import { Button } from './Components/Button';

function App() {
  return (
    <>
      <Header />
      <Wrapper>
        <LeftAside>
          <HeaderText>Traveling Members</HeaderText>
          <HeaderHelperText>Are you traveling alone or with someone else?</HeaderHelperText>
          <Stack spacing={1} className={'mt-8'}>
            <Button className={'w-full'} variant={'outlined'}>
              Alone
            </Button>
            <Button className={'w-full'} variant={'outlined'}>
              With others
            </Button>
          </Stack>
          <div className={'p-4 border border-gray-300 rounded-[16px] mt-6'}>
            <div className={''}>
              <PeopleAltOutlinedIcon /> Traveling Memebers
            </div>
            <Divider sx={{ margin: '16px 0' }} />
            <Counter
              header={'Legal Spouse'}
              subText={'Must have marrige certificate'}
              initialValue={1}
            />
            <Divider sx={{ margin: '16px 0' }} />
            <Counter
              header={'Children under 18'}
              subText={'Must have birth certificate'}
              initialValue={3}
            />
            <Divider sx={{ margin: '16px 0' }} />

            <Counter header={'Pets'} subText={'Must have documents'} initialValue={5} />
          </div>
          <div className={'flex justify-between mt-8'}>
            <Button variant="text">
              <ChevronLeftIcon fontSize={'small'} />
              Text
            </Button>
            <Button variant="contained">Continue</Button>
          </div>
        </LeftAside>
        <RightAside>
          <Card>
            <div className={'flex flex-row items-center gap-3'}>
              <Avatar sx={{ height: '48px', width: '48px', bgcolor: 'black' }}>FR</Avatar>
              <div className={'flex flex-col'}>
                <span className={'text-base font-bold text-white'}>Fellow Traveler</span>
                <span className={'text-sm mt-1 text-slate-300'}>traveleremail@gmail.com</span>
              </div>
              <div className={'flex flex-row ml-auto gap-2'}>
                <Avatar alt="Germany" src="/Germany.svg" sx={{ height: '32px', width: '32px' }} />
                <Avatar alt="Ukraine" src="/Ukraine.svg" sx={{ height: '32px', width: '32px' }} />
              </div>
            </div>
            <div className={'bg-white rounded-[20px] p-5 mt-5 flex flex-1  '}>
              <span className={'text-xs self-start  pb-[4px] border-dotted border-b-2'}>
                Finance Information
              </span>
              <div className={'mt-4 '}>
                <span className={'block text-xs mb-1'}>Full Remote Job</span>
                <span className={'block text-sm font-medium'}>Yes, for over 6 months.</span>
              </div>

              <div className={'mt-4'}>
                <span className={'block text-xs  mb-1'}>Self employed</span>
                <span
                  className={
                    'block text-sm font-medium'
                  }>{`I'm self employed < 3 years business`}</span>
              </div>
              <div className={'flex flex-row gap-[7px] mt-5'}>
                <div
                  className={'bg-slate-50 flex gap-[65px] p-3 grow rounded-[12px] items-center '}>
                  <span className={'text-xs'}>Income</span>
                  <span className={'text-sm font-medium'}>$1000</span>
                </div>
                <div
                  className={'bg-slate-50 flex gap-[65px] p-3 grow  rounded-[12px] items-center'}>
                  <span className={'text-xs'}>Income</span>
                  <span className={'text-sm font-medium'}>$1000</span>
                </div>
              </div>
              <Divider sx={{ margin: ' 20px -20px' }} />
              <span className={'text-xs self-start pb-[4px] border-dotted border-b-2'}>
                Traveling Members
              </span>
              <div className={'flex flex-row mt-4 justify-between'}>
                <div className={'flex flex-row gap-2'}>
                  <Avatar
                    sx={{
                      height: '20px',
                      width: '20px',
                      fontSize: '12px',
                      backgroundColor: 'rgba(242, 242, 245, 1)',
                      color: 'black'
                    }}>
                    1
                  </Avatar>
                  <span className={'text-sm font-medium '}>Legal Spouce</span>
                </div>
                <div className={'flex flex-row gap-2'}>
                  <Avatar
                    sx={{
                      height: '20px',
                      width: '20px',
                      fontSize: '12px',
                      backgroundColor: 'rgba(242, 242, 245, 1)',
                      color: 'black'
                    }}>
                    2
                  </Avatar>
                  <span className={'text-sm font-medium '}>Children under 18</span>
                </div>
                <div className={'flex flex-row gap-2'}>
                  <Avatar
                    sx={{
                      height: '20px',
                      width: '20px',
                      fontSize: '12px',
                      backgroundColor: 'rgba(242, 242, 245, 1)',
                      color: 'black'
                    }}>
                    5
                  </Avatar>
                  <span className={'text-sm font-medium '}>Pets</span>
                </div>
              </div>
              <Divider sx={{ margin: ' 20px -20px' }} />
              <span className={'text-xs self-start  pb-[4px] border-dotted border-b-2'}>
                Additions
              </span>
              <div style={{ display: 'flex', flexGrow: '1000' }}></div>
            </div>
            <span className={'text-center mt-4 text-xs text-slate-400'}>
              Personal Travel Card by Citizen Remote
            </span>
          </Card>
        </RightAside>
      </Wrapper>
    </>
  );
}

export default App;
