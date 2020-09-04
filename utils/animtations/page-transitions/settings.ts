const transitionConfig = {
  left: {
    name: 'left-slide',
    mode: '',
  },
  right: {
    name: 'right-slide',
    mode: '',
  },
};

function getTransitionConfig (to: any, from: any, position: string): string {
  if (!to || !from) {
    return 'none';
  }

  if (!to.name || !from.name) {
    return 'none';
  }

  const fromBaseName = from.name as string;
  const toBaseName = to.name as string;

  if (fromBaseName === toBaseName) {
    return 'none';
  }

  return transitionConfig[position as 'left' | 'right'] as unknown as any;
};

export default getTransitionConfig;
