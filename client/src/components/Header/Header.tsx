import { RadarChartOutlined, ReadOutlined } from "@ant-design/icons";
import { Avatar, Button } from "antd";
import { Link, Outlet, useLocation } from "react-router-dom";
import IIcon from './i_icon.png';

export const Header: React.FC = () => {
  const location = useLocation();
  const selectedStyle = { color: 'white', background: '#62b1d1' };
  const notSelectedStyle = { background: 'white', color: '#62b1d1' };
  return (
    <div>
      <div style={{ height: 40, display: 'flex', justifyContent: "space-between" }}>
        <div>
          <Link to='glossary'>
            <Button
              style={location.pathname === '/glossary' ? selectedStyle : notSelectedStyle}
              type="primary"
              icon={<ReadOutlined />}
              size="large"
            >
              Глоссарий
            </Button>
          </Link>
          <Link to='semantic-graph'>
            <Button
              style={location.pathname === '/semantic-graph' ? { ...selectedStyle, marginLeft: 10 } : { ...notSelectedStyle, marginLeft: 10 }}
              type="primary"
              icon={<RadarChartOutlined />}
              size="large"
            >
              Семантический граф
            </Button>
          </Link>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', color: '#62b1d1', fontWeight: 'bold' }}>
          Мелихова Ксения<Avatar src={IIcon} size="large" style={{ marginLeft: 10 }}>K</Avatar>
        </div>
      </div>
      <Outlet />
    </div >
  )
}