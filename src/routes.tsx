import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { LoadingOverlay } from '@mantine/core';
import ErrorBoundary from './components/common/ErrorBoundary';

// Lazy load components
const Dashboard = lazy(() => import('./features/dashboard/Dashboard'));
const ProposalList = lazy(() => import('./features/proposals/ProposalList'));
const ProposalEditor = lazy(() => import('./features/proposals/ProposalEditor'));
const Settings = lazy(() => import('./features/settings/Settings'));
const PublicProposalView = lazy(() => import('./features/proposals/PublicProposalView'));

export default function AppRoutes() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<LoadingOverlay visible />}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/proposals" element={<ProposalList />} />
          <Route path="/proposals/new" element={<ProposalEditor />} />
          <Route path="/proposals/:id" element={<ProposalEditor />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/p/:publicId" element={<PublicProposalView />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
} 