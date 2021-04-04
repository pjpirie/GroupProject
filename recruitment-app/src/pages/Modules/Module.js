import { Button } from '@material-ui/core';
import Check from '@material-ui/icons/CheckCircleOutlineRounded';
import Bulb from '@material-ui/icons/EmojiObjects';
import Arrow from '@material-ui/icons/OpenWithRounded';
import Gear from '@material-ui/icons/Settings';
import Clipboard from '../../assets/clipboard.png';
import Faces from '../../assets/faces.png';
import ModuleImg4 from '../../assets/Image-1.png';
import ModuleImg3 from '../../assets/Image-2.png';
import ModuleImg1 from '../../assets/Image-3.png';
import ModuleImg2 from '../../assets/Image-4.png';
import ModuleImg5 from '../../assets/Image-5.png';
import ModuleImg6 from '../../assets/Image.png';
import Laptop from '../../assets/laptop.png';
import logo from '../../assets/logo.svg';
import ModuleBottom from '../../assets/modules-bottom.png';
import Msg from '../../assets/msg.png';
import Pencil from '../../assets/pencil.png';
import People from '../../assets/people.png';
import wheel from '../../assets/wheel.png';
import './Module.css';






function Module() {
    return (
        <div className="Modules">
            <div className="ModuleHeader">
                <div className="left">
                    <img src={wheel} alt="" className="wheel" />
                </div>
                <div className="right">
                    <h1>Modules</h1>
                    <p>
                        Aliquip voluptate amet veniam anim eiusmod proident Lorem sunt elit commodo commodo nulla. 
                        Enim aliqua ut aliquip sit nulla aliqua amet nostrud nostrud. Est velit culpa sunt ea veniam pariatur fugiat magna minim amet ea tempor
                        nostrud et. Anim reprehenderit anim id non labore reprehenderit occaecat dolore ut do pariatur. 
                        Aliquip voluptate amet veniam anim eiusmod proident Lorem sunt elit commodo commodo nulla. 
                    </p>
                    <p>
                        Enim aliqua ut aliquip sit nulla aliqua amet nostrud nostrud. Est velit culpa sunt ea veniam pariatur fugiat magna minim amet ea tempor
                        nostrud et. Anim reprehenderit anim id non labore reprehenderit occaecat dolore ut do pariatur. 
                    </p>
                    <Button className="ModuleBtn">Start Now</Button>
                </div>
            </div>
            <div className="cards">
                <div className="card-1">
                    <div className="left">
                        <img src={Clipboard} alt=""/>
                        <h3>Plan to succeed with preparation</h3>
                        <p>
                            In qui irure laborum duis mollit incididunt proident laboris minim excepteur voluptate velit reprehenderit ea. Deserunt ullamco quis do sint dolor sunt anim nostrud ex enim incididunt do. Nostrud pariatur ex tempor irure proident labore ea incididunt do sint occaecat non.
                        </p>
                    </div>
                    <div className="right">
                        <img src={ModuleImg1} alt="" className="ModuleImg" />
                    </div>
                </div>
                <div className="card-2">
                    <div className="left">
                        <img src={Msg} alt=""/>
                        <h3>Plan to succeed with preparation</h3>
                        <p>
                            In qui irure laborum duis mollit incididunt proident laboris minim excepteur voluptate velit reprehenderit ea. Deserunt ullamco quis do sint dolor sunt anim nostrud ex enim incididunt do. Nostrud pariatur ex tempor irure proident labore ea incididunt do sint occaecat non.
                        </p>
                    </div>
                    <div className="right">
                        <img src={ModuleImg2} alt="" className="ModuleImg" />
                    </div>
                </div>
                <div className="card-1">
                    <div className="left">
                        <img src={Laptop} alt="" />
                        <h3>Plan to succeed with preparation</h3>
                        <p>
                            In qui irure laborum duis mollit incididunt proident laboris minim excepteur voluptate velit reprehenderit ea. Deserunt ullamco quis do sint dolor sunt anim nostrud ex enim incididunt do. Nostrud pariatur ex tempor irure proident labore ea incididunt do sint occaecat non.
                        </p>
                    </div>
                    <div className="right">
                        <img src={ModuleImg3} alt="" className="ModuleImg" />
                    </div>
                </div>
                <div className="card-2">
                    <div className="left">
                        <img src={People} alt="" />
                        <h3>Plan to succeed with preparation</h3>
                        <p>
                            In qui irure laborum duis mollit incididunt proident laboris minim excepteur voluptate velit reprehenderit ea. Deserunt ullamco quis do sint dolor sunt anim nostrud ex enim incididunt do. Nostrud pariatur ex tempor irure proident labore ea incididunt do sint occaecat non.
                        </p>
                    </div>
                    <div className="right">
                        <img src={ModuleImg4} alt="" className="ModuleImg" />
                    </div>
                </div>
                <div className="card-1">
                    <div className="left">
                        <img src={Pencil} alt="" />
                        <h3>Plan to succeed with preparation</h3>
                        <p>
                            In qui irure laborum duis mollit incididunt proident laboris minim excepteur voluptate velit reprehenderit ea. Deserunt ullamco quis do sint dolor sunt anim nostrud ex enim incididunt do. Nostrud pariatur ex tempor irure proident labore ea incididunt do sint occaecat non.
                        </p>
                    </div>
                    <div className="right">
                        <img src={ModuleImg5} alt="" className="ModuleImg" />
                    </div>
                </div>
                <div className="card-2">
                    <div className="left">
                        <img src={Faces} alt="" />
                        <h3>Plan to succeed with preparation</h3>
                        <p>
                            In qui irure laborum duis mollit incididunt proident laboris minim excepteur voluptate velit reprehenderit ea. Deserunt ullamco quis do sint dolor sunt anim nostrud ex enim incididunt do. Nostrud pariatur ex tempor irure proident labore ea incididunt do sint occaecat non.
                        </p>
                    </div>
                    <div className="right">
                        <img src={ModuleImg6} alt="" className="ModuleImg" />
                    </div>
                </div>
            </div>
            <div className="banner">
                <h2>Ready to begin your journy to success?</h2>
                <Button className="ModuleBtn">Begin Here</Button>
            </div>
            <div className="info">
                <div className="left">
                    <p className="infoText">
                        Quis tempor amet adipisicing ea ea cillum commodo qui. Mollit culpa qui adipisicing cillum non consectetur incididunt laboris labore esse elit. Cupidatat velit aliquip et ullamco.
                        Laboris eu cupidatat laboris eu deserunt reprehenderit incididunt aliqua proident incididunt qui eiusmod eiusmod. Est excepteur amet minim exercitation velit velit nostrud eiusmod. Exercitation irure consequat in eiusmod mollit esse dolore adipisicing veniam id consectetur. Qui veniam ea laborum duis et ipsum. Fugiat et eiusmod sint velit fugiat aliqua id ullamco consequat ullamco. Non officia mollit nostrud anim reprehenderit exercitation veniam fugiat voluptate est. Proident et eu ipsum cupidatat.
                        Id dolor eiusmod ad mollit laboris commodo officia consequat aliqua reprehenderit qui dolore ea ipsum. Anim ex elit eu consequat. Occaecat duis nulla consectetur velit laboris commodo. Lorem proident non eiusmod pariatur aute elit minim quis. Aliquip magna eiusmod incididunt incididunt commodo.
                        Minim pariatur proident veniam sint cillum incididunt sunt dolore eiusmod quis sunt et duis ut. Magna anim qui reprehenderit reprehenderit cupidatat nulla pariatur. Duis sit cillum mollit duis ullamco deserunt. Cillum sit est adipisicing ut enim elit. Sunt in amet dolor cupidatat deserunt qui ipsum sunt irure velit adipisicing culpa laboris qui. Officia aliquip elit magna anim. Fugiat qui sunt aliqua ex anim irure enim veniam in dolore consequat.
                    </p>
                </div>
                <div className="right">
                    <img src={ModuleBottom} alt="" className="infoImg" />
                </div>
            </div>
            <div className="divider">
                <div className="divLeft">
                    <h1>This programme is designed to priovide a template for you to access skills and techiques and target these on achieving your goal of successding in recruitment situations</h1>
                </div>
                <div className="divRight">
                    <img src={logo} alt="" />
                    <h6>Vince Coogans</h6>
                    <p>Company Director</p>
                </div>
            </div>
            <div className="coreValues">
                <div className="coreContent">
                    <h1>Our Core Values</h1>
                    <div className="coreIcons">
                        <Check />
                        <Arrow />
                        <Gear />
                        <Bulb />
                    </div>
                    <div className="coreIconsText">
                        <p>Simplicity</p>
                        <p>Flexibility</p>
                        <p>Practicality</p>
                        <p>Potential</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Module;


