import { AppShell, rem } from '@mantine/core';
import { ReactNode } from 'react';
import Navigation from './Navigation';

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <AppShell
      padding={rem(16)}
      navbar={{ width: 250, breakpoint: 'sm' }}
      header={{ height: 60 }}
    >
      <AppShell.Navbar p={rem(8)}>
        <Navigation />
      </AppShell.Navbar>

      <AppShell.Header
        p={rem(8)}
        style={{
          background: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid var(--mantine-color-gray-2)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            height: '100%',
            paddingLeft: rem(16),
            fontSize: rem(19),
            fontWeight: 500,
          }}
        >
          HVAC Proposal Tool
        </div>
      </AppShell.Header>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
} 