export interface Options {
  readonly value: string;
  readonly label: string;
  readonly color: string;
  readonly isFixed?: boolean;
  readonly isDisabled?: boolean;
}

export const Options1: readonly Options[] = [
  { value: 'Option 1', label: 'Option 1', color: '#0052CC' },
  { value: 'Option 2', label: 'Option 2', color: '#FF5630' },
];

export const Options2: readonly Options[] = [
  { value: 'Option A', label: 'Option A', color: '#FF8B00' },
  { value: 'Option B', label: 'Option B', color: '#36B37E' },
];
