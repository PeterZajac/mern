import { Link } from 'react-router-dom';

import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from '../components';
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className='container page'>
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum nisi
            magni amet, minima incidunt qui! Maxime neque ullam, consequuntur
            eum nam obcaecati! Repudiandae unde magnam voluptate in ea, corrupti
            blanditiis, est ratione repellendus iure,{' '}
          </p>
          <Link to='/register' className='btn register-link'>
            Get Started
          </Link>
          <Link to='/login' className='btn '>
            Login / demo User{' '}
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  );
};

export default Landing;
