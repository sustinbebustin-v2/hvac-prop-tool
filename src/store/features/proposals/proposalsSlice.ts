import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

export interface Proposal {
  id: string;
  publicId: string;  // For public sharing
  title: string;
  client: string;
  description: string;
  date: string;
  status: 'draft' | 'sent' | 'accepted' | 'rejected';
  value: number;
  monthlySavings: number;
  companyLogo?: string;
  coverImage?: string;
  sections: {
    overview: string;
    serviceBreakdown: {
      services: Array<{
        name: string;
        description: string;
        price: number;
      }>;
    };
    installationProcess: {
      steps: Array<{
        title: string;
        description: string;
        status: 'pending' | 'in_progress' | 'completed';
      }>;
    };
    benefits: Array<{
      title: string;
      description: string;
      icon?: string;
    }>;
    warranty: {
      coverage: string;
      duration: string;
      terms: string[];
    };
    terms: string;
  };
  incentives: Array<{
    name: string;
    description: string;
    amount: number;
    type: 'rebate' | 'tax_credit' | 'discount';
  }>;
  signatures: {
    client?: {
      name: string;
      date: string;
      signature: string;
    };
    company?: {
      name: string;
      date: string;
      signature: string;
    };
  };
  tracking: {
    viewed?: Date;
    shared?: Date;
    signed?: Date;
    lastModified: Date;
  };
}

interface ProposalsState {
  items: Record<string, Proposal>;
  loading: boolean;
  error: string | null;
}

const initialState: ProposalsState = {
  items: {},
  loading: false,
  error: null,
};

// Helper function to generate a public ID
function generatePublicId(): string {
  return 'prop_' + Math.random().toString(36).substring(2, 15);
}

// Mock API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Async thunks
export const fetchProposals = createAsyncThunk(
  'proposals/fetchProposals',
  async () => {
    await delay(500); // Simulate API call
    const storedProposals = localStorage.getItem('proposals');
    return storedProposals ? JSON.parse(storedProposals) : [];
  }
);

export const createProposal = createAsyncThunk(
  'proposals/createProposal',
  async (proposal: Omit<Proposal, 'id' | 'date' | 'publicId' | 'tracking'>) => {
    await delay(500); // Simulate API call
    const newProposal: Proposal = {
      ...proposal,
      id: Date.now().toString(),
      publicId: generatePublicId(),
      date: new Date().toISOString().split('T')[0],
      tracking: {
        lastModified: new Date(),
      },
    };
    return newProposal;
  }
);

export const updateProposal = createAsyncThunk(
  'proposals/updateProposal',
  async (proposal: Proposal) => {
    await delay(500); // Simulate API call
    return proposal;
  }
);

export const deleteProposal = createAsyncThunk(
  'proposals/deleteProposal',
  async (id: string) => {
    await delay(500); // Simulate API call
    return id;
  }
);

const proposalsSlice = createSlice({
  name: 'proposals',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Fetch proposals
    builder
      .addCase(fetchProposals.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProposals.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload.reduce((acc: Record<string, Proposal>, proposal: Proposal) => {
          acc[proposal.id] = proposal;
          return acc;
        }, {});
        // Save to localStorage
        localStorage.setItem('proposals', JSON.stringify(action.payload));
      })
      .addCase(fetchProposals.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to fetch proposals';
      });

    // Create proposal
    builder
      .addCase(createProposal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createProposal.fulfilled, (state, action) => {
        state.loading = false;
        state.items[action.payload.id] = action.payload;
        // Save to localStorage
        localStorage.setItem('proposals', JSON.stringify(Object.values(state.items)));
      })
      .addCase(createProposal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to create proposal';
      });

    // Update proposal
    builder
      .addCase(updateProposal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProposal.fulfilled, (state, action) => {
        state.loading = false;
        state.items[action.payload.id] = action.payload;
        // Save to localStorage
        localStorage.setItem('proposals', JSON.stringify(Object.values(state.items)));
      })
      .addCase(updateProposal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to update proposal';
      });

    // Delete proposal
    builder
      .addCase(deleteProposal.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteProposal.fulfilled, (state, action) => {
        state.loading = false;
        delete state.items[action.payload];
        // Save to localStorage
        localStorage.setItem('proposals', JSON.stringify(Object.values(state.items)));
      })
      .addCase(deleteProposal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Failed to delete proposal';
      });
  },
});

export default proposalsSlice.reducer; 