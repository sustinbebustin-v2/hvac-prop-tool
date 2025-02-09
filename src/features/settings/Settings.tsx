import { Container, Title, TextInput, Button, Group, Stack, Switch, ColorInput, Text } from '@mantine/core';
import { useForm } from '@mantine/form';

interface SettingsFormValues {
  companyName: string;
  email: string;
  phone: string;
  address: string;
  primaryColor: string;
  accentColor: string;
  darkMode: boolean;
  notifications: boolean;
}

export default function Settings() {
  const form = useForm<SettingsFormValues>({
    initialValues: {
      companyName: '',
      email: '',
      phone: '',
      address: '',
      primaryColor: '#1971c2',
      accentColor: '#fd7e14',
      darkMode: false,
      notifications: true,
    },
    validate: {
      companyName: (value) => (value.length < 2 ? 'Company name must be at least 2 characters long' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      phone: (value) => (/^\+?[\d\s-()]+$/.test(value) ? null : 'Invalid phone number'),
    },
  });

  const handleSubmit = (values: SettingsFormValues) => {
    // TODO: Implement settings update
    console.log(values);
  };

  return (
    <Container size="md" py="xl">
      <Title order={2} mb="xl">
        Settings
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <Title order={3} size="h4">
            Company Information
          </Title>

          <TextInput
            label="Company Name"
            placeholder="Enter company name"
            required
            {...form.getInputProps('companyName')}
          />

          <TextInput
            label="Email"
            placeholder="Enter email address"
            required
            {...form.getInputProps('email')}
          />

          <TextInput
            label="Phone"
            placeholder="Enter phone number"
            required
            {...form.getInputProps('phone')}
          />

          <TextInput
            label="Address"
            placeholder="Enter company address"
            {...form.getInputProps('address')}
          />

          <Title order={3} size="h4" mt="xl">
            Appearance
          </Title>

          <ColorInput
            label="Primary Color"
            format="hex"
            swatches={[
              '#1971c2',
              '#2f9e44',
              '#e8590c',
              '#9c36b5',
              '#e03131',
              '#f08c00',
              '#0c8599',
              '#495057',
            ]}
            {...form.getInputProps('primaryColor')}
          />

          <ColorInput
            label="Accent Color"
            format="hex"
            swatches={[
              '#fd7e14',
              '#40c057',
              '#ff922b',
              '#be4bdb',
              '#fa5252',
              '#fcc419',
              '#15aabf',
              '#868e96',
            ]}
            {...form.getInputProps('accentColor')}
          />

          <Switch
            label={<Text size="sm">Dark Mode</Text>}
            {...form.getInputProps('darkMode', { type: 'checkbox' })}
          />

          <Title order={3} size="h4" mt="xl">
            Notifications
          </Title>

          <Switch
            label={<Text size="sm">Enable Email Notifications</Text>}
            description="Receive notifications about proposal updates and client responses"
            {...form.getInputProps('notifications', { type: 'checkbox' })}
          />

          <Group justify="flex-end" mt="xl">
            <Button type="submit">Save Settings</Button>
          </Group>
        </Stack>
      </form>
    </Container>
  );
} 