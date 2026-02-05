import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Dashboards',
  },
  // {
  //   displayName: 'Dashboard 1',
  //   iconName: 'solar:widget-add-line-duotone',
  //   route: '/dashboards/dashboard1',
  // },
    {
    displayName: 'Dashboard 2',
    iconName: 'solar:widget-add-line-duotone',
    route: '/dashboards/dashboard2',
  },

  {
    divider: true,
    navCap: 'Cloud',
  },
  {
    displayName: 'Server',
    iconName: 'solar:chat-round-line-line-duotone',
    route: 'apps/chat',
  },
  {
    displayName: 'Volumes',
    iconName: 'solar:calendar-mark-line-duotone',
    route: 'apps/calendar',
  },
  {
    displayName: 'Images',
    iconName: 'solar:letter-line-duotone',
    route: 'apps/email/inbox',
  },
  {
    displayName: 'Networking',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: 'apps/kanban',
  },
  {
    displayName: 'Kuberneties',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: 'apps/kanban',
  },
  {
    displayName: 'Object Storage',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: 'apps/kanban',
  },
  {
    displayName: 'Orchastration',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: 'apps/kanban',
  },
  {
    displayName: 'Access',
    iconName: 'solar:clapperboard-edit-line-duotone',
    route: 'apps/kanban',
  },
  {
    divider: true,
    navCap: 'Account',
  },
  {
    displayName: 'Finnace',
    iconName: 'solar:chat-round-line-line-duotone',
    route: 'apps/chat',
  },
  {
    displayName: 'Settings',
    iconName: 'solar:calendar-mark-line-duotone',
    route: 'apps/calendar',
  },
  {
    divider: true,
    navCap: 'Others',
  },
  {
    displayName: 'Docs',
    iconName: 'solar:chat-round-line-line-duotone',
    route: 'apps/chat',
  },
  {
    displayName: 'Support',
    iconName: 'solar:calendar-mark-line-duotone',
    route: 'apps/calendar',
  },
  {
    displayName: 'AI Super cloud',
    iconName: 'solar:calendar-mark-line-duotone',
    route: 'apps/calendar',
  },
];
