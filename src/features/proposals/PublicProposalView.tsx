import { useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
  Tabs,
  Paper,
  Title,
  Text,
  Image,
  Group,
  Badge,
  Stack,
  Card,
  Grid,
  Button,
  Progress,
  NumberInput,
  rem,
} from '@mantine/core';
import {
  IconCalculator,
  IconFileDescription,
  IconTools,
  IconChartBar,
  IconShieldCheck,
  IconSignature,
  IconDownload,
  IconMail,
  IconCreditCard,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { useAppSelector } from '../../store/hooks';

// Create a motion component that accepts Paper props
const MotionPaper = motion(Paper as any);

export default function PublicProposalView() {
  const { publicId } = useParams();
  const [activeTab, setActiveTab] = useState('overview');
  const [monthlyBill, setMonthlyBill] = useState<number>(200);
  const proposals = useAppSelector((state) => state.proposals.items);
  const proposal = Object.values(proposals).find(p => p.publicId === publicId);

  if (!proposal) {
    return (
      <Container size="md" py="xl">
        <Paper p="xl" radius="md" withBorder>
          <Title order={3} ta="center" style={{ color: 'var(--mantine-color-error)' }}>
            Proposal Not Found
          </Title>
        </Paper>
      </Container>
    );
  }

  const calculateSavings = (monthly: number) => {
    const annualSavings = monthly * 12;
    const years = Array.from({ length: 15 }, (_, i) => {
      const yearNumber = i + 1;
      const totalSavings = annualSavings * yearNumber;
      return { year: yearNumber, savings: totalSavings };
    });
    return years;
  };

  const savings = calculateSavings(proposal.monthlySavings);

  return (
    <Container size="xl" py="xl">
      {/* Cover Section */}
      <MotionPaper
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        radius="md"
        p="xl"
        mb="xl"
        withBorder
      >
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            {proposal.companyLogo && (
              <Image
                src={proposal.companyLogo}
                alt="Company Logo"
                style={{ maxWidth: 200 }}
                mb="lg"
              />
            )}
            <Title>{proposal.title}</Title>
            <Text size="lg" style={{ color: 'var(--mantine-color-gray-6)' }} mt="md">
              Prepared for: {proposal.client}
            </Text>
            <Badge size="lg" mt="md">
              {proposal.status}
            </Badge>
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            {proposal.coverImage && (
              <Image
                src={proposal.coverImage}
                alt="Cover"
                radius="md"
              />
            )}
          </Grid.Col>
        </Grid>
      </MotionPaper>

      {/* Navigation Tabs */}
      <Tabs value={activeTab} onChange={(value) => setActiveTab(value as string)} mb="xl">
        <Tabs.List>
          <Tabs.Tab value="overview" leftSection={<IconFileDescription size={16} />}>
            Overview
          </Tabs.Tab>
          <Tabs.Tab value="services" leftSection={<IconTools size={16} />}>
            Services
          </Tabs.Tab>
          <Tabs.Tab value="savings" leftSection={<IconCalculator size={16} />}>
            Savings Calculator
          </Tabs.Tab>
          <Tabs.Tab value="installation" leftSection={<IconChartBar size={16} />}>
            Installation
          </Tabs.Tab>
          <Tabs.Tab value="warranty" leftSection={<IconShieldCheck size={16} />}>
            Warranty
          </Tabs.Tab>
          <Tabs.Tab value="signature" leftSection={<IconSignature size={16} />}>
            Sign & Accept
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="overview">
          <Stack gap="lg">
            <Text>{proposal.sections.overview}</Text>
            
            <Title order={3}>Benefits</Title>
            <Grid>
              {proposal.sections.benefits.map((benefit, index) => (
                <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4 }}>
                  <Card withBorder padding="lg" radius="md">
                    <Stack gap="md">
                      {benefit.icon && <IconCalculator size={24} />}
                      <Title order={4}>{benefit.title}</Title>
                      <Text size="sm">{benefit.description}</Text>
                    </Stack>
                  </Card>
                </Grid.Col>
              ))}
            </Grid>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="services">
          <Stack gap="lg">
            {proposal.sections.serviceBreakdown.services.map((service, index) => (
              <Card key={index} withBorder padding="lg" radius="md">
                <Group justify="space-between" mb="md">
                  <Title order={4}>{service.name}</Title>
                  <Text fw={700}>${service.price.toLocaleString()}</Text>
                </Group>
                <Text>{service.description}</Text>
              </Card>
            ))}

            <Card withBorder padding="lg" radius="md">
              <Title order={3} mb="lg">Available Incentives</Title>
              <Stack gap="md">
                {proposal.incentives.map((incentive, index) => (
                  <Group key={index} justify="space-between">
                    <div>
                      <Text fw={500}>{incentive.name}</Text>
                      <Text size="sm" style={{ color: 'var(--mantine-color-gray-6)' }}>
                        {incentive.description}
                      </Text>
                    </div>
                    <Badge size="lg" variant="light">
                      ${incentive.amount.toLocaleString()}
                    </Badge>
                  </Group>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="savings">
          <Stack gap="lg">
            <Card withBorder padding="lg" radius="md">
              <Title order={3} mb="lg">Savings Calculator</Title>
              <NumberInput
                label="Your Current Monthly Energy Bill"
                value={monthlyBill}
                onChange={(val) => setMonthlyBill(val as number)}
                prefix="$"
                min={0}
                max={10000}
                mb="lg"
              />
              
              <Title order={4} mb="md">Projected Savings Over Time</Title>
              <Stack gap="xs">
                {savings.map((year) => (
                  <div key={year.year}>
                    <Group justify="space-between" mb={4}>
                      <Text size="sm">Year {year.year}</Text>
                      <Text fw={500} style={{ color: 'var(--mantine-color-success)' }}>
                        ${year.savings.toLocaleString()}
                      </Text>
                    </Group>
                    <Progress
                      value={(year.savings / (savings[14].savings)) * 100}
                      size="sm"
                      style={{ '--mantine-color-filled': 'var(--mantine-color-success)' }}
                    />
                  </div>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="installation">
          <Stack gap="lg">
            {proposal.sections.installationProcess.steps.map((step, index) => (
              <Card key={index} withBorder padding="lg" radius="md">
                <Group justify="space-between" mb="md">
                  <Title order={4}>{step.title}</Title>
                  <Badge
                    style={{
                      backgroundColor: step.status === 'completed'
                        ? 'var(--mantine-color-success-light)'
                        : step.status === 'in_progress'
                        ? 'var(--mantine-color-info-light)'
                        : 'var(--mantine-color-gray-light)'
                    }}
                  >
                    {step.status.replace('_', ' ')}
                  </Badge>
                </Group>
                <Text>{step.description}</Text>
              </Card>
            ))}
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="warranty">
          <Stack gap="lg">
            <Card withBorder padding="lg" radius="md">
              <Title order={3} mb="lg">Warranty Coverage</Title>
              <Text mb="md">{proposal.sections.warranty.coverage}</Text>
              <Text fw={500} mb="xs">Duration: {proposal.sections.warranty.duration}</Text>
              
              <Title order={4} mt="lg" mb="md">Terms</Title>
              <Stack gap="xs">
                {proposal.sections.warranty.terms.map((term, index) => (
                  <Text key={index}>• {term}</Text>
                ))}
              </Stack>
            </Card>
          </Stack>
        </Tabs.Panel>

        <Tabs.Panel value="signature">
          <Stack gap="lg">
            <Card withBorder padding="lg" radius="md">
              <Title order={3} mb="lg">Ready to Proceed?</Title>
              <Text mb="xl">
                Review the proposal details above and click the button below to proceed with digital signature and acceptance.
              </Text>
              
              <Group>
                <Button
                  leftSection={<IconSignature size={20} />}
                  size="lg"
                  variant="filled"
                >
                  Sign & Accept Proposal
                </Button>
                <Button
                  leftSection={<IconDownload size={20} />}
                  size="lg"
                  variant="light"
                >
                  Download PDF
                </Button>
              </Group>
            </Card>

            <Grid>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card withBorder padding="lg" radius="md">
                  <Title order={4} mb="lg">Questions?</Title>
                  <Button
                    leftSection={<IconMail size={20} />}
                    variant="light"
                    fullWidth
                  >
                    Contact Sales Representative
                  </Button>
                </Card>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6 }}>
                <Card withBorder padding="lg" radius="md">
                  <Title order={4} mb="lg">Payment Options</Title>
                  <Button
                    leftSection={<IconCreditCard size={20} />}
                    variant="light"
                    fullWidth
                  >
                    View Financing Options
                  </Button>
                </Card>
              </Grid.Col>
            </Grid>
          </Stack>
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
} 