import { createSlice } from '@reduxjs/toolkit';

interface OnboardingState {
  completed: boolean;
}

const initialState: OnboardingState = {
  completed: false,
};

const onboardingSlice = createSlice({
  name: 'onboarding',
  initialState,
  reducers: {
    completeOnboarding: (state) => {
      state.completed = true;
    },
  },
});

export const { completeOnboarding } = onboardingSlice.actions;
export default onboardingSlice.reducer;
