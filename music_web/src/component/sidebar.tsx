import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Home, MusicNote, BarChart } from '@mui/icons-material';
import styled from '@emotion/styled';


const SideBar = styled.div`
  width: 250px;
  height: 735px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  margin-left: -7px;
  margin-top: -20px;
`;


const Sidebar: React.FC = () => {
  
  return (
    <div>
      <SideBar>
          <Link to="/list" style={{marginTop: "20px"}}>
            <Home />
            Home
          </Link>
          <Link to="/song">
            <MusicNote />
            Song
          </Link>
          <Link to="/statistics">
            <BarChart />
            Statistics
          </Link>
      </SideBar>
    </div>
  );
};

export default Sidebar;
