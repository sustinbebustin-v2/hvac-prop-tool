import { Container, Title, TextInput, NumberInput, Textarea, Button, Group, Select, Stack, LoadingOverlay, Text, Tabs, rem, Card } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { createProposal, updateProposal, Proposal } from '../../store/features/proposals/proposalsSlice';
import { IconEdit, IconEye } from '@tabler/icons-react';
import ProposalPreview from './ProposalPreview';

type ProposalFormValues = Omit<Proposal, 'id' | 'date' | 'publicId' | 'tracking'>;

const defaultBenefits = [
  { title: 'Energy Efficiency', description: 'Reduce your energy consumption and monthly bills', icon: 'efficiency' },
  { title: 'Comfort', description: 'Maintain consistent temperature throughout your space', icon: 'comfort' },
  { title: 'Air Quality', description: 'Improve indoor air quality for better health', icon: 'quality' },
];

const defaultInstallationSteps = [
  { title: 'Initial Assessment', description: 'Thorough evaluation of your current system and needs', status: 'pending' as const },
  { title: 'System Removal', description: 'Safe removal of existing equipment', status: 'pending' as const },
  { title: 'New System Installation', description: 'Professional installation of your new HVAC system', status: 'pending' as const },
  { title: 'Testing & Calibration', description: 'Comprehensive testing and system optimization', status: 'pending' as const },
];

const defaultWarrantyTerms = [
  '10-year warranty on parts',
  'Labor covered for first 2 years',
  '24/7 emergency support',
  'Annual maintenance included for first year',
];

export default function ProposalEditor() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const { items: proposals, loading, error } = useAppSelector((state) => state.proposals);
  const proposal = id ? proposals[id] : null;
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');

  const form = useForm<ProposalFormValues>({
    initialValues: {
      title: '',
      client: '',
      description: '',
      value: 0,
      monthlySavings: 0,
      status: 'draft',
      companyLogo: '',
      coverImage: '',
      sections: {
        overview: '',
        serviceBreakdown: {
          services: [
            { name: '', description: '', price: 0 },
          ],
        },
        installationProcess: {
          steps: defaultInstallationSteps,
        },
        benefits: defaultBenefits,
        warranty: {
          coverage: 'Comprehensive coverage for your peace of mind',
          duration: '10 years',
          terms: defaultWarrantyTerms,
        },
        terms: 'Standard terms and conditions apply.',
      },
      incentives: [
        {
          name: 'Federal Tax Credit',
          description: 'Available federal incentive for energy-efficient systems',
          amount: 0,
          type: 'tax_credit',
        },
      ],
      signatures: {},
    },
    validate: {
      title: (value: string) => (value.length < 3 ? 'Title must be at least 3 characters long' : null),
      client: (value: string) => (value.length < 2 ? 'Client name must be at least 2 characters long' : null),
      value: (value: number) => (value <= 0 ? 'Value must be greater than 0' : null),
      monthlySavings: (value: number) => (value < 0 ? 'Monthly savings cannot be negative' : null),
      sections: {
        overview: (value: string) => (value.length < 10 ? 'Overview must be at least 10 characters long' : null),
        serviceBreakdown: {
          services: {
            name: (value: string) => (value.length < 3 ? 'Service name must be at least 3 characters long' : null),
            description: (value: string) => (value.length < 10 ? 'Description must be at least 10 characters long' : null),
            price: (value: number) => (value <= 0 ? 'Price must be greater than 0' : null),
          },
        },
      },
    },
  });

  useEffect(() => {
    if (proposal) {
      form.setValues({
        title: proposal.title,
        client: proposal.client,
        description: proposal.description,
        value: proposal.value,
        monthlySavings: proposal.monthlySavings,
        status: proposal.status,
        companyLogo: proposal.companyLogo,
        coverImage: proposal.coverImage,
        sections: proposal.sections,
        incentives: proposal.incentives,
        signatures: proposal.signatures,
      });
    }
  }, [proposal]);

  const handleSubmit = async (values: ProposalFormValues) => {
    try {
      if (id) {
        await dispatch(updateProposal({ ...values, id, date: proposal!.date, publicId: proposal!.publicId, tracking: proposal!.tracking }));
      } else {
        await dispatch(createProposal(values));
      }
      navigate('/proposals');
    } catch (err) {
      console.error('Failed to save proposal:', err);
    }
  };

  const previewProposal: Proposal = {
    id: id || 'preview',
    publicId: id ? proposal?.publicId || 'preview' : 'preview',
    date: new Date().toISOString().split('T')[0],
    tracking: {
      lastModified: new Date(),
    },
    ...form.values,
  };

  return (
    <Container size="xl" py="xl" pos="relative">
      <LoadingOverlay visible={loading} />

      {error && (
        <Text style={{ color: 'var(--mantine-color-error)' }} mb="md">
          {error}
        </Text>
      )}

      <Group justify="space-between" mb="xl">
        <Title order={2}>
          {id ? 'Edit Proposal' : 'Create New Proposal'}
        </Title>
        <Group>
          <Button variant="light" onClick={() => navigate('/proposals')}>
            Cancel
          </Button>
          {activeTab === 'edit' && (
            <Button type="submit" form="proposal-form">
              Save Proposal
            </Button>
          )}
        </Group>
      </Group>

      <Tabs value={activeTab} onChange={(value) => setActiveTab(value as 'edit' | 'preview')}>
        <Tabs.List mb="xl">
          <Tabs.Tab
            value="edit"
            leftSection={<IconEdit style={{ width: rem(16), height: rem(16) }} />}
          >
            Edit
          </Tabs.Tab>
          <Tabs.Tab
            value="preview"
            leftSection={<IconEye style={{ width: rem(16), height: rem(16) }} />}
          >
            Preview
          </Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="edit">
          <form id="proposal-form" onSubmit={form.onSubmit(handleSubmit)}>
            <Stack gap="xl">
              <Card withBorder p="lg">
                <Title order={3} size="h4" mb="lg">Basic Information</Title>
                <Stack gap="md">
                  <TextInput
                    label="Title"
                    placeholder="Enter proposal title"
                    required
                    {...form.getInputProps('title')}
                  />

                  <TextInput
                    label="Client"
                    placeholder="Enter client name"
                    required
                    {...form.getInputProps('client')}
                  />

                  <Textarea
                    label="Description"
                    placeholder="Enter proposal description"
                    minRows={4}
                    {...form.getInputProps('description')}
                  />

                  <NumberInput
                    label="Total Value"
                    placeholder="Enter proposal value"
                    required
                    min={0}
                    prefix="$"
                    decimalScale={2}
                    fixedDecimalScale
                    thousandSeparator=","
                    {...form.getInputProps('value')}
                  />

                  <NumberInput
                    label="Estimated Monthly Savings"
                    placeholder="Enter estimated monthly savings"
                    required
                    min={0}
                    prefix="$"
                    decimalScale={2}
                    fixedDecimalScale
                    thousandSeparator=","
                    {...form.getInputProps('monthlySavings')}
                  />

                  <Select
                    label="Status"
                    data={[
                      { value: 'draft', label: 'Draft' },
                      { value: 'sent', label: 'Sent' },
                      { value: 'accepted', label: 'Accepted' },
                      { value: 'rejected', label: 'Rejected' },
                    ]}
                    {...form.getInputProps('status')}
                  />
                </Stack>
              </Card>

              <Card withBorder p="lg">
                <Title order={3} size="h4" mb="lg">Overview & Benefits</Title>
                <Stack gap="md">
                  <Textarea
                    label="Overview"
                    placeholder="Enter detailed overview of the proposal"
                    minRows={4}
                    required
                    {...form.getInputProps('sections.overview')}
                  />
                </Stack>
              </Card>

              <Card withBorder p="lg">
                <Title order={3} size="h4" mb="lg">Services & Pricing</Title>
                <Stack gap="md">
                  {form.values.sections.serviceBreakdown.services.map((_, index) => (
                    <Group key={index} grow>
                      <TextInput
                        label="Service Name"
                        placeholder="Enter service name"
                        required
                        {...form.getInputProps(`sections.serviceBreakdown.services.${index}.name`)}
                      />
                      <Textarea
                        label="Description"
                        placeholder="Enter service description"
                        required
                        {...form.getInputProps(`sections.serviceBreakdown.services.${index}.description`)}
                      />
                      <NumberInput
                        label="Price"
                        placeholder="Enter price"
                        required
                        min={0}
                        prefix="$"
                        decimalScale={2}
                        fixedDecimalScale
                        thousandSeparator=","
                        {...form.getInputProps(`sections.serviceBreakdown.services.${index}.price`)}
                      />
                    </Group>
                  ))}
                  <Button
                    variant="light"
                    onClick={() => {
                      const services = [...form.values.sections.serviceBreakdown.services];
                      services.push({ name: '', description: '', price: 0 });
                      form.setFieldValue('sections.serviceBreakdown.services', services);
                    }}
                  >
                    Add Service
                  </Button>
                </Stack>
              </Card>

              <Card withBorder p="lg">
                <Title order={3} size="h4" mb="lg">Incentives</Title>
                <Stack gap="md">
                  {form.values.incentives.map((_, index) => (
                    <Group key={index} grow>
                      <TextInput
                        label="Incentive Name"
                        placeholder="Enter incentive name"
                        {...form.getInputProps(`incentives.${index}.name`)}
                      />
                      <Textarea
                        label="Description"
                        placeholder="Enter incentive description"
                        {...form.getInputProps(`incentives.${index}.description`)}
                      />
                      <NumberInput
                        label="Amount"
                        placeholder="Enter amount"
                        min={0}
                        prefix="$"
                        decimalScale={2}
                        fixedDecimalScale
                        thousandSeparator=","
                        {...form.getInputProps(`incentives.${index}.amount`)}
                      />
                      <Select
                        label="Type"
                        data={[
                          { value: 'rebate', label: 'Rebate' },
                          { value: 'tax_credit', label: 'Tax Credit' },
                          { value: 'discount', label: 'Discount' },
                        ]}
                        {...form.getInputProps(`incentives.${index}.type`)}
                      />
                    </Group>
                  ))}
                  <Button
                    variant="light"
                    onClick={() => {
                      const incentives = [...form.values.incentives];
                      incentives.push({
                        name: '',
                        description: '',
                        amount: 0,
                        type: 'rebate',
                      });
                      form.setFieldValue('incentives', incentives);
                    }}
                  >
                    Add Incentive
                  </Button>
                </Stack>
              </Card>
            </Stack>
          </form>
        </Tabs.Panel>

        <Tabs.Panel value="preview">
          <ProposalPreview proposal={previewProposal} />
        </Tabs.Panel>
      </Tabs>
    </Container>
  );
} 