import AddIcon from '@material-ui/icons/Add';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import ReactTooltip from 'react-tooltip';
import { setLightNav } from '../../actions';
import ClipboardImage from '../../assets/clipboard.png';
import FacesImage from '../../assets/faces.png';
import GirlWithComputerImage from '../../assets/Group 41.png';
import BGImage1 from '../../assets/Group 58.png';
import LaptopImage from '../../assets/laptop.png';
import ComputerImage from '../../assets/laptopandsmartphone.png';
import MessageImage from '../../assets/msg.png';
import PencilImage from '../../assets/pencil.png';
import PeopleImage from '../../assets/people.png';
import './landing.css';
import './landing.responsive.css';




function Landing() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLightNav(true));
    }, []);
    return (
        <div className="landing">
            
        </div>


    );
}

export default Landing;
