import { Container, Title, Grid, Paper, Text, ThemeIcon, SimpleGrid, Card, rem } from '@mantine/core';
import { IconFileDescription, IconUsers, IconChartBar, IconClock } from '@tabler/icons-react';

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ComponentType<{ size: number; stroke: number }>;
  colorClass: string;
}

const stats: StatCardProps[] = [
  {
    title: 'Active Proposals',
    value: '12',
    icon: IconFileDescription,
    colorClass: 'var(--mantine-color-blue-6)',
  },
  {
    title: 'Clients',
    value: '48',
    icon: IconUsers,
    colorClass: 'var(--mantine-color-green-6)',
  },
  {
    title: 'Conversion Rate',
    value: '64%',
    icon: IconChartBar,
    colorClass: 'var(--mantine-color-violet-6)',
  },
  {
    title: 'Avg. Response Time',
    value: '2.4h',
    icon: IconClock,
    colorClass: 'var(--mantine-color-orange-6)',
  },
];

function StatCard({ title, value, icon: Icon, colorClass }: StatCardProps) {
  return (
    <Card withBorder padding="lg" radius="md">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <Text size="xs" tt="uppercase" fw={700} style={{ color: 'var(--mantine-color-gray-6)' }}>
            {title}
          </Text>
          <Text size="xl" fw={700} mt={rem(8)}>
            {value}
          </Text>
        </div>
        <ThemeIcon
          size={48}
          radius="md"
          variant="light"
          style={{ backgroundColor: `color-mix(in srgb, ${colorClass} 10%, transparent)`, color: colorClass }}
        >
          <Icon size={24} stroke={1.5} />
        </ThemeIcon>
      </div>
    </Card>
  );
}

export default function Dashboard() {
  return (
    <Container size="xl" py="xl">
      <Title order={2} mb="xl">Dashboard</Title>
      
      <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg">
        {stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </SimpleGrid>

      <Grid mt={rem(32)}>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <Paper withBorder p="md" radius="md">
            <Title order={3} size="h4" mb="md">Recent Proposals</Title>
            {/* Add recent proposals list here */}
          </Paper>
        </Grid.Col>
        
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Paper withBorder p="md" radius="md">
            <Title order={3} size="h4" mb="md">Quick Actions</Title>
            {/* Add quick action buttons here */}
          </Paper>
        </Grid.Col>
      </Grid>
    </Container>
  );
} 