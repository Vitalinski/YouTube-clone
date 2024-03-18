import CheckroomIcon from '@mui/icons-material/Checkroom';
import CodeIcon from '@mui/icons-material/Code';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';
import HomeIcon from '@mui/icons-material/Home';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SchoolIcon from '@mui/icons-material/School';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import { Category } from '@/utils/Types';

  
  const CATEGORIES: Category[] = [
    { name: 'New', icon: HomeIcon },
    { name: 'MrBeast', icon: SportsEsportsIcon },
    { name: 'Coding', icon: CodeIcon },
    { name: 'ReactJS', icon: CodeIcon },
    { name: 'NextJS', icon: CodeIcon },
    { name: 'Music', icon: MusicNoteIcon },
    { name: 'Education', icon: SchoolIcon },
    { name: 'Podcast', icon: GraphicEqIcon },
    { name: 'Movie', icon: OndemandVideoIcon },
    { name: 'Gaming', icon: SportsEsportsIcon },
    { name: 'Live', icon: LiveTvIcon },
    { name: 'Sport', icon: FitnessCenterIcon },
    { name: 'Fashion', icon: CheckroomIcon },
    { name: 'Beauty', icon: FaceRetouchingNaturalIcon },
    { name: 'Comedy', icon: TheaterComedyIcon },
    { name: 'Gym', icon: FitnessCenterIcon },
    { name: 'Crypto', icon: DeveloperModeIcon },
  ];
  export default CATEGORIES