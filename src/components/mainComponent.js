import CardComponent from './card/CardComponent';
import { Navbar } from './navbar/NavComponent';
import { SideBar } from './sideBar/SideBarComp';
import "./mainStyles.css"

export const MainPage = () => {
  return (
    <div className='main'>
      <Navbar />
      <div className='banner-page'>
      <SideBar />
      <CardComponent />
      </div> 
    </div>
  );
};
