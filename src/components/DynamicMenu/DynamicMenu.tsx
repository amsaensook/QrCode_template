import Setting from "../../pages/Setting";
import Menu from "../../pages/Menu";
import Permission from "../../pages/Permission";
import User from "../../pages/User";
import Group from "../../pages/Group";
import Grade from "../../pages/Grade";
import Error404 from "../../pages/Error404";
import JobPacking from "../../pages/JobPacking";
import Reprint from "../../pages/Reprint"; 

const DynamicMenu: React.FC<any> = (props) => {
  const menu: any = {
    Setting: <Setting {...props} />,
    Menu: <Menu {...props} />,
    Permission: <Permission {...props} />,
    User: <User {...props} />,
    Group: <Group {...props} />,
    Material: <Grade {...props} />,
    JobPacking: <JobPacking {...props} />,
    Reprint: <Reprint {...props} />,

  };

  return menu[props.MenuId] || <Error404 />;
};

export default DynamicMenu;

// Note : set menu name to dynamic menu
