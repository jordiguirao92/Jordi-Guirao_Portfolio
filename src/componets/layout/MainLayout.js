import Footer from '../Footer';
import Header from '../Header';
import {WrapperDiv} from '../../styles/ui';

const MainLayout = ({ children }) => {

    //const [isLoading, setIsLoading] = useState(true);
    //if (isLoading) return <Loading />;

  return (
    <>
    <Header/>
    <WrapperDiv>
        {children} 
    </WrapperDiv>
    <Footer/>
     
    </>
  )
}

export default MainLayout;