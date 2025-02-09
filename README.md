# HVAC Proposal Tool

A modern, Apple-inspired React application for creating and managing professional HVAC proposals. This tool helps HVAC companies present their proposals in a sleek, interactive format that enhances client engagement and streamlines the proposal process.

## Features

- 🎨 Modern, Apple-inspired UI/UX design
- 📱 Fully responsive layout for all devices
- 💼 Professional proposal management
- 📊 Interactive cost and savings calculator
- 🔄 Real-time proposal preview
- 📤 Easy sharing and client access
- 💰 Incentives and rebates tracking
- 📝 Digital signature support
- 🔒 Secure proposal storage
- 📈 ROI visualization
- 🌡️ Equipment specifications
- 🏗️ Installation timeline tracking

## Tech Stack

- React 18 with TypeScript
- Vite for fast development and building
- Redux Toolkit for state management
- Mantine UI v7 for components and theming
- Framer Motion for animations
- React Router for navigation
- Vitest for testing

## Getting Started

### Prerequisites

- Node.js 18+ and npm
- Git for version control
- A modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:sustinbebustin-v2/hvac-prop-tool.git
   cd hvac-prop-tool
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Running Tests

```bash
# Run tests in watch mode
npm run test

# Run tests with UI
npm run test:ui

# Run tests with coverage
npm run test:coverage
```

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── common/       # Shared components like ErrorBoundary
│   └── layout/       # Layout components like Navigation
├── features/         # Feature-specific components and logic
│   ├── dashboard/    # Dashboard views and components
│   ├── proposals/    # Proposal management
│   └── settings/     # Application settings
├── store/           # Redux store configuration
│   └── features/    # Redux slices and reducers
├── styles/          # Global styles and theme
├── test/            # Test utilities and setup
├── types/           # TypeScript type definitions
└── utils/           # Helper functions and utilities
```

## Key Features in Detail

### Proposal Management
- Create and edit professional HVAC proposals
- Real-time preview with Apple-inspired design
- Automatic calculations for ROI and savings
- Digital signature integration
- PDF export capability

### Client Portal
- Secure sharing links for proposals
- Interactive cost calculator
- Easy acceptance and digital signing
- Mobile-responsive design

### Installation Tracking
- Step-by-step installation progress
- Timeline visualization
- Status updates and notifications
- Photo documentation support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m '[Cursor] Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Guidelines

- Follow the established code style and conventions
- Write tests for new features
- Update documentation as needed
- Use meaningful commit messages with the [Cursor] prefix
- Keep the UI consistent with Apple's design principles

