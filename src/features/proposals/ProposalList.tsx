import { Container, Title, Button, Table, Text, Group, ActionIcon, Menu, Badge, rem, LoadingOverlay, CopyButton, Tooltip } from '@mantine/core';
import { IconDots, IconEdit, IconTrash, IconCopy, IconSend, IconLink } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { fetchProposals, deleteProposal, Proposal } from '../../store/features/proposals/proposalsSlice';

const statusColors: Record<Proposal['status'], string> = {
  draft: 'var(--mantine-color-gray-6)',
  sent: 'var(--mantine-color-blue-6)',
  accepted: 'var(--mantine-color-green-6)',
  rejected: 'var(--mantine-color-red-6)',
};

export default function ProposalList() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { items: proposals, loading, error } = useAppSelector((state) => state.proposals);

  useEffect(() => {
    dispatch(fetchProposals());
  }, [dispatch]);

  const handleDelete = async (id: string) => {
    await dispatch(deleteProposal(id));
  };

  const getPublicUrl = (publicId: string) => {
    return `${window.location.origin}/p/${publicId}`;
  };

  const rows = Object.values(proposals).map((proposal) => (
    <Table.Tr key={proposal.id}>
      <Table.Td>
        <Text size="sm" fw={500}>
          {proposal.title}
        </Text>
        <Text size="xs" style={{ color: 'var(--mantine-color-gray-6)' }}>
          {proposal.client}
        </Text>
      </Table.Td>
      <Table.Td>{proposal.date}</Table.Td>
      <Table.Td>
        <Badge
          variant="light"
          style={{
            backgroundColor: `color-mix(in srgb, ${statusColors[proposal.status]} 10%, transparent)`,
            color: statusColors[proposal.status],
          }}
        >
          {proposal.status}
        </Badge>
      </Table.Td>
      <Table.Td>${proposal.value.toLocaleString()}</Table.Td>
      <Table.Td>
        <Group gap={rem(8)}>
          <CopyButton value={getPublicUrl(proposal.publicId)}>
            {({ copied, copy }) => (
              <Tooltip label={copied ? 'Copied!' : 'Copy public URL'}>
                <ActionIcon
                  variant="subtle"
                  onClick={copy}
                  style={{ color: copied ? 'var(--mantine-color-green-6)' : undefined }}
                >
                  <IconLink style={{ width: rem(16), height: rem(16) }} />
                </ActionIcon>
              </Tooltip>
            )}
          </CopyButton>
          <ActionIcon
            variant="subtle"
            component="a"
            href={getPublicUrl(proposal.publicId)}
            target="_blank"
          >
            <IconSend style={{ width: rem(16), height: rem(16) }} />
          </ActionIcon>
        </Group>
      </Table.Td>
      <Table.Td>
        <Group gap={0} justify="flex-end">
          <ActionIcon
            variant="subtle"
            onClick={() => navigate(`/proposals/${proposal.id}`)}
          >
            <IconEdit style={{ width: rem(16), height: rem(16) }} />
          </ActionIcon>
          <Menu position="bottom-end" withArrow>
            <Menu.Target>
              <ActionIcon variant="subtle">
                <IconDots style={{ width: rem(16), height: rem(16) }} />
              </ActionIcon>
            </Menu.Target>

            <Menu.Dropdown>
              <Menu.Item
                leftSection={<IconCopy style={{ width: rem(16), height: rem(16) }} />}
              >
                Duplicate
              </Menu.Item>
              <Menu.Item
                leftSection={<IconSend style={{ width: rem(16), height: rem(16) }} />}
              >
                Send to Client
              </Menu.Item>
              <Menu.Item
                leftSection={<IconTrash style={{ width: rem(16), height: rem(16) }} />}
                style={{ color: 'var(--mantine-color-red-6)' }}
                onClick={() => handleDelete(proposal.id)}
              >
                Delete
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Group>
      </Table.Td>
    </Table.Tr>
  ));

  if (error) {
    return (
      <Container size="xl" py="xl">
        <Text style={{ color: 'var(--mantine-color-error)' }}>{error}</Text>
      </Container>
    );
  }

  return (
    <Container size="xl" py="xl" pos="relative">
      <LoadingOverlay visible={loading} />
      
      <Group justify="space-between" mb="xl">
        <Title order={2}>Proposals</Title>
        <Button onClick={() => navigate('/proposals/new')}>
          Create New Proposal
        </Button>
      </Group>

      <Table horizontalSpacing="md" verticalSpacing="xs" striped highlightOnHover>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Proposal</Table.Th>
            <Table.Th>Date</Table.Th>
            <Table.Th>Status</Table.Th>
            <Table.Th>Value</Table.Th>
            <Table.Th>Share</Table.Th>
            <Table.Th style={{ width: rem(100) }} />
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
    </Container>
  );
} 