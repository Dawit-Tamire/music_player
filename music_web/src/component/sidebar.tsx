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
`;


const Sidebar: React.FC = () => {
  
  return (
    <div>
      <SideBar>
          <Link to="/song" style={{marginTop: "20px"}}>
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
