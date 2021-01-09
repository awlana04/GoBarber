import React from 'react';
import { FiPower } from 'react-icons/fi';

import Logo from '../../assets/logo.svg';

import { Container, Header, HeaderContent, Profile } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <HeaderContent>
          <img src={Logo} alt="GoBarber" />

          <Profile>
            <img
              src="https://avatars2.githubusercontent.com/u/65423909?s=88&u=50e58e511e404791c688d4638ac210855aebc05a&v=4"
              alt="Awlana Costa"
            />

            <div>
              <span>Bem-vindo,</span>
              <strong>Awlana Costa</strong>
            </div>
          </Profile>

          <button type="button">
            <FiPower />
          </button>
        </HeaderContent>
      </Header>
    </Container>
  );
};

export default Dashboard;
