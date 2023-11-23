
import {
    AssignmentTurnedIn, Diversity3Outlined, Groups, HomeOutlined, LocalShipping,
    MarkUnreadChatAltOutlined, Receipt, Science, Workspaces
  } from "@mui/icons-material";
  
  // import {ReactComponent as MySVG} from '../Icons/invoice-receipt-svgrepo-com.svg'
  

const menuContent = [
    { id: 0, type: "link", label: "Home", link: "/", icon: <HomeOutlined /> },
    {
      id: 1,
      type: "submenu",
      label: "Masters",
      icon: <Receipt/>,
      children: [
        {
          id: 2,
          type: "link",
          label: "Acc Master",
          link: "/accmaster",
          icon: <Receipt />,
        },
        {
          id: 3,
          type: "link",
          label: "Account Group",
          link: "/acccategory",
          icon: <Receipt />,
        },
        {
          id: 4,
          type: "link",
          label: "Item Master",
          link: "/itemmaster",
          icon: <Receipt />,
        },
        {
          id: 5,
          type: "link",
          label: "Item Group",
          link: "/itemcategory",
          icon: <Receipt />,
        },
        {
          id: 6,
          type: "link",
          label: "City Master",
          link: "/citymaster",
          icon: <Receipt />,
        }
      ],
    },
    {
      id: 7,
      type: "submenu",
      label: "Transactions",
      icon:<Receipt />,
      children: [
        {
          id: 8,
          type: "link",
          label: "Sale",
          link: "/Sale",
          icon: <LocalShipping />,
        },
        {
          id: 9,
          type: "link",
          label: "Sale Return",
          link: "/salereturn",
          icon: <AssignmentTurnedIn />,
        },
        // {
        //   id: 8,
        //   type: "link",
        //   label: "PURCHASE RETURN EWAY",
        //   link: "/generatedpreway",
        //   icon: <AssignmentTurnedIn />,
        // },
        {
          id: 10,
          type: "link",
          label: "Purchase",
          link: "/Purchase",
          icon: <AssignmentTurnedIn />,
        },
        {
          id: 11,
          type: "link",
          label: "Purchase Return",
          link: "/purchasereturn",
          icon: <AssignmentTurnedIn />,
        },
      ],
    },
    
    // {
    //   id: 10,
    //   type: "link",
    //   label: "Whatsapp",
    //   link: "/chats",
    //   icon: <MarkUnreadChatAltOutlined />,
    // },
    // { id: 11, type: "text", label: "Data" },
    //  {
    //   id: 12,
    //   type: "link",
    //   label: "Team",
    //   link: "/teams",
    //   icon: <Diversity3Outlined />,
    // },
    // {
    //   id: 13,
    //   type: "link",
    //   label: "Groups",
    //   link: "/groups",
    //   icon: <Groups />,
    // },
    // {
    //   id: 14,
    //   type: "link",
    //   label: "Modules",
    //   link: "/routes",
    //   icon: <Workspaces />,
    // },
    // {
    //   id: 40,
    //   type: "link",
    //   label: "Lab",
    //   link: "/Lab",
    //   icon: <Science sx={{ color: '#a366ff' }}/>,
    // },
  ];
  
  const appConfig = {
    apiPath: {
      basePath: 'http://ttms.turboinfotech.com',
      getUser: 'api/appusers/GetUserVerificationBy',
      login:'api/appusers/authenticateuser'
      // authApiServerUrl,
      // turboApiServerUrl
    },
    menuContent
  };
  
  
  export default appConfig;