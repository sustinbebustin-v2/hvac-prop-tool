import { describe, it, expect, beforeEach } from 'vitest';
import reducer, {
  createProposal,
  updateProposal,
  deleteProposal,
  fetchProposals,
  Proposal,
} from './proposalsSlice';

describe('proposals reducer', () => {
  const initialState = {
    items: {},
    loading: false,
    error: null,
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should handle initial state', () => {
    expect(reducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle fetchProposals.pending', () => {
    const actual = reducer(initialState, fetchProposals.pending(''));
    expect(actual.loading).toBe(true);
    expect(actual.error).toBe(null);
  });

  it('should handle fetchProposals.fulfilled', () => {
    const proposals: Proposal[] = [
      {
        id: '1',
        publicId: 'pub_1',
        title: 'Test Proposal',
        client: 'Test Client',
        description: 'Test Description',
        date: '2024-02-09',
        status: 'draft',
        value: 1000,
        monthlySavings: 100,
        sections: {
          overview: 'Test Overview',
          serviceBreakdown: {
            services: [
              {
                name: 'Test Service',
                description: 'Test Service Description',
                price: 1000,
              },
            ],
          },
          installationProcess: {
            steps: [
              {
                title: 'Test Step',
                description: 'Test Step Description',
                status: 'pending',
              },
            ],
          },
          benefits: [
            {
              title: 'Test Benefit',
              description: 'Test Benefit Description',
            },
          ],
          warranty: {
            coverage: 'Test Coverage',
            duration: '1 year',
            terms: ['Test Term'],
          },
          terms: 'Test Terms',
        },
        incentives: [
          {
            name: 'Test Incentive',
            description: 'Test Incentive Description',
            amount: 100,
            type: 'rebate',
          },
        ],
        signatures: {},
        tracking: {
          lastModified: new Date(),
        },
      },
    ];

    const actual = reducer(
      { ...initialState, loading: true },
      fetchProposals.fulfilled(proposals, '')
    );

    expect(actual.loading).toBe(false);
    expect(actual.items['1']).toEqual(proposals[0]);
    expect(actual.error).toBe(null);
  });

  it('should handle fetchProposals.rejected', () => {
    const error = 'Failed to fetch proposals';
    const actual = reducer(
      { ...initialState, loading: true },
      fetchProposals.rejected(new Error(error), '')
    );

    expect(actual.loading).toBe(false);
    expect(actual.error).toBe(error);
  });

  it('should handle createProposal.fulfilled', () => {
    const newProposal: Proposal = {
      id: '2',
      publicId: 'pub_2',
      title: 'New Proposal',
      client: 'New Client',
      description: 'New Description',
      date: '2024-02-09',
      status: 'draft',
      value: 2000,
      monthlySavings: 200,
      sections: {
        overview: 'New Overview',
        serviceBreakdown: {
          services: [],
        },
        installationProcess: {
          steps: [],
        },
        benefits: [],
        warranty: {
          coverage: 'New Coverage',
          duration: '1 year',
          terms: [],
        },
        terms: 'New Terms',
      },
      incentives: [],
      signatures: {},
      tracking: {
        lastModified: new Date(),
      },
    };

    const actual = reducer(
      initialState,
      createProposal.fulfilled(newProposal, '', {} as any)
    );

    expect(actual.items['2']).toEqual(newProposal);
    expect(actual.loading).toBe(false);
    expect(actual.error).toBe(null);
  });

  it('should handle updateProposal.fulfilled', () => {
    const existingProposal: Proposal = {
      id: '3',
      publicId: 'pub_3',
      title: 'Original Title',
      client: 'Original Client',
      description: 'Original Description',
      date: '2024-02-09',
      status: 'draft',
      value: 3000,
      monthlySavings: 300,
      sections: {
        overview: 'Original Overview',
        serviceBreakdown: {
          services: [],
        },
        installationProcess: {
          steps: [],
        },
        benefits: [],
        warranty: {
          coverage: 'Original Coverage',
          duration: '1 year',
          terms: [],
        },
        terms: 'Original Terms',
      },
      incentives: [],
      signatures: {},
      tracking: {
        lastModified: new Date(),
      },
    };

    const updatedProposal = {
      ...existingProposal,
      title: 'Updated Title',
    };

    const state = {
      ...initialState,
      items: { '3': existingProposal },
    };

    const actual = reducer(
      state,
      updateProposal.fulfilled(updatedProposal, '', updatedProposal)
    );

    expect(actual.items['3'].title).toBe('Updated Title');
    expect(actual.loading).toBe(false);
    expect(actual.error).toBe(null);
  });

  it('should handle deleteProposal.fulfilled', () => {
    const proposalId = '4';
    const state = {
      ...initialState,
      items: {
        '4': {
          id: proposalId,
          title: 'To Be Deleted',
        } as Proposal,
      },
    };

    const actual = reducer(
      state,
      deleteProposal.fulfilled(proposalId, '', proposalId)
    );

    expect(actual.items[proposalId]).toBeUndefined();
    expect(actual.loading).toBe(false);
    expect(actual.error).toBe(null);
  });
}); 