import React from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import { Home, MusicNote, BarChart } from '@mui/icons-material';


const sidebarStyles = css`
  width: 200px;
  background-color: #f0f0f0;
  padding: 16px;
`;

const tabStyles = css`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  cursor: pointer;
`;

const background = css`
    background-color: #eee;
`

const Sidebar: React.FC = () => {
  return (
    <div css={sidebarStyles}>
      <Link to="/list" css={tabStyles}>
        <Home />
        Home
      </Link>
      <Link to="/song" css={tabStyles}>
        <MusicNote />
        Song
      </Link>
      <Link to="/statistics" css={tabStyles}>
        <BarChart />
        Statistics
      </Link>
    </div>
  );
};

export default Sidebar;
