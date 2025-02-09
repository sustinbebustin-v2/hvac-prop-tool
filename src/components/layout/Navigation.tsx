import { NavLink, Stack, rem } from '@mantine/core';
import { IconHome, IconFileDescription, IconSettings } from '@tabler/icons-react';
import { useLocation, useNavigate } from 'react-router-dom';

interface NavItem {
  icon: React.ComponentType<{ size: number; stroke: number }>;
  label: string;
  path: string;
}

export default function Navigation() {
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: NavItem[] = [
    { icon: IconHome, label: 'Dashboard', path: '/' },
    { icon: IconFileDescription, label: 'Proposals', path: '/proposals' },
    { icon: IconSettings, label: 'Settings', path: '/settings' },
  ];

  return (
    <Stack gap={rem(8)}>
      {navItems.map(({ icon: Icon, label, path }) => (
        <NavLink
          key={path}
          label={label}
          leftSection={<Icon size={20} stroke={1.5} />}
          active={location.pathname === path}
          onClick={() => navigate(path)}
          styles={{
            root: {
              '&[data-active]': {
                backgroundColor: 'var(--mantine-color-brand-light)',
                color: 'var(--mantine-color-brand-filled)',
              },
            },
          }}
        />
      ))}
    </Stack>
  );
} 