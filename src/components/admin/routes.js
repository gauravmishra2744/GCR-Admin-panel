import CustomerManagement from './CustomerManagement';
import Dashboard from './Dashboard-new';
import OrderManagement from './OrderManagement-new';
import ProductManagement from './ProductManagement-complete';
import InventoryManagement from './InventoryManagement';
import Reports from './Reports';
import Settings from './Settings-new';
import Support from './Support-new';
import UserProfile from './UserProfile';

export const adminRoutes = [
  {
    path: '/dashboard',
    component: Dashboard,
    exact: true,
    name: 'Dashboard',
    icon: 'DashboardOutlined'
  },
  {
    path: '/customers',
    component: CustomerManagement,
    exact: true,
    name: 'Customer Management',
    icon: 'UserOutlined'
  },
  {
    path: '/orders',
    component: OrderManagement,
    exact: true,
    name: 'Order Management',
    icon: 'ShoppingCartOutlined'
  },
  {
    path: '/products',
    component: ProductManagement,
    exact: true,
    name: 'Product Management',
    icon: 'AppstoreOutlined'
  },
  {
    path: '/inventory',
    component: InventoryManagement,
    exact: true,
    name: 'Inventory',
    icon: 'InboxOutlined'
  },
  {
    path: '/reports',
    component: Reports,
    exact: true,
    name: 'Reports',
    icon: 'BarChartOutlined'
  },
  {
    path: '/settings',
    component: Settings,
    exact: true,
    name: 'Settings',
    icon: 'SettingOutlined'
  },
  {
    path: '/support',
    component: Support,
    exact: true,
    name: 'Support',
    icon: 'CustomerServiceOutlined'
  },
  {
    path: '/profile',
    component: UserProfile,
    exact: true,
    name: 'Profile',
    icon: 'UserOutlined',
    hidden: true
  }
];