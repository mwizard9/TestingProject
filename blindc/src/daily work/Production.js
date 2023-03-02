import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
export const RouteDataAdmin = [
    // {
    //   id: 1,
    //   name: 'DashBoard',
    //   pathName: '/',
    //   icon: MdDashboard
    // },
    {
      id: 10,
      label: 'Production',
   
      key: 10,
      children: [
        {
          id: 1,
          label: 'Production Entry',
          pathName: '/ProductionEntry',
         
          key: 1,
        },
        {
          id: 2,
          label: 'View Production',
          pathName: '/ProductionTable',
     
          key: 2,
        },
      ],
    },
  ]
  const Sidebar = () => {
    const menu = (
      <Menu>
        {RouteDataAdmin.map(({ label, children }) =>
          children ? (
            <Menu.SubMenu key={label} title={label} >
              {children.map(({ key, label, pathName, icon: Icon }) => (
                <Menu.Item key={key}>
                 
                    <Icon />
                    {label}
              
                </Menu.Item>
              ))}
            </Menu.SubMenu>
          ) : (
            <Menu.Item >
             
            </Menu.Item>
          )
        )}
      </Menu>
    );
  
    return (
      <div className="sidebar">
        <Dropdown overlay={menu}>
          <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
            Production <DownOutlined />
          </a>
        </Dropdown>
      </div>
    );
  };
  export default Sidebar