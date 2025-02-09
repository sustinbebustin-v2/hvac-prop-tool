import { Paper, Title, Text, Stack, Badge, Group, Divider } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import { Proposal } from '../../store/features/proposals/proposalsSlice';

interface ProposalPreviewProps {
  proposal: Proposal;
}

export default function ProposalPreview({ proposal }: ProposalPreviewProps) {
  const statusColors: Record<Proposal['status'], string> = {
    draft: 'var(--mantine-color-gray-6)',
    sent: 'var(--mantine-color-blue-6)',
    accepted: 'var(--mantine-color-green-6)',
    rejected: 'var(--mantine-color-red-6)',
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Stack gap="lg">
            <div>
              <Text size="sm" style={{ color: 'var(--mantine-color-gray-6)' }}>
                Proposal for
              </Text>
              <Title order={2} style={{ color: 'var(--mantine-color-brand-6)' }}>
                {proposal.client}
              </Title>
            </div>

            <Group gap="md">
              <Badge
                variant="light"
                style={{
                  backgroundColor: `color-mix(in srgb, ${statusColors[proposal.status]} 10%, transparent)`,
                  color: statusColors[proposal.status],
                }}
              >
                {proposal.status}
              </Badge>
              <Text size="sm" style={{ color: 'var(--mantine-color-gray-6)' }}>
                {proposal.date}
              </Text>
            </Group>

            <div>
              <Title order={3} size="h4" mb="xs">
                {proposal.title}
              </Title>
              <Text>{proposal.description}</Text>
            </div>

            <Divider />

            <div>
              <Text size="sm" style={{ color: 'var(--mantine-color-gray-6)' }} mb="xs">
                Total Investment
              </Text>
              <Title order={2} style={{ color: 'var(--mantine-color-brand-6)' }}>
                ${proposal.value.toLocaleString()}
              </Title>
            </div>

            <div>
              <Text size="sm" style={{ color: 'var(--mantine-color-gray-6)' }} mb="xs">
                What's Included
              </Text>
              <Stack gap="xs">
                <Text>• Professional installation by certified technicians</Text>
                <Text>• Full system testing and configuration</Text>
                <Text>• 1-year warranty on parts and labor</Text>
                <Text>• 24/7 emergency support</Text>
              </Stack>
            </div>

            <div>
              <Text size="sm" style={{ color: 'var(--mantine-color-gray-6)' }} mb="xs">
                Terms & Conditions
              </Text>
              <Text size="sm">
                This proposal is valid for 30 days from the date of issue. Payment terms: 50% upon acceptance,
                50% upon completion. All work will be performed according to local building codes and regulations.
              </Text>
            </div>
          </Stack>
        </Paper>
      </motion.div>
    </AnimatePresence>
  );
} 