import { ReactComponent as BarChartIcon } from '../../assets/svg/Bar chart-2.svg';
import { ReactComponent as VideoIcon } from '../../assets/svg/Video.svg';
import { ReactComponent as AlertIcon } from '../../assets/svg/Alert triangle.svg';
import { ReactComponent as AddIcon } from '../../assets/svg/add.svg';
import { ReactComponent as HelpIcon } from '../../assets/svg/Help circle.svg';
import Pages from '../../enums/Pages';


const buttonData = [
  {
    "text": "בית",
    "icon": BarChartIcon,
    "page": Pages.Home
  },
  {
    "text": "סרטונים",
    "icon": VideoIcon,
    "page": Pages.Videos
  },
  {
    "text": "תקלות",
    "icon": AlertIcon,
    "page": Pages.DocumentedMalfunctions
  },
  {
    "text": "תקלה חדשה",
    "icon": AddIcon,
    "page": Pages.newMalfunction
  },
  {
    "text": "תמיכה טכנית",
    "icon": HelpIcon,
    "page": Pages.technicalSupport
  }
]
export default buttonData;