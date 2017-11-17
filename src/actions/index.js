export const SSR_TEST = 'SSR_TEST';

export function ssrTest(from) {
  return {
    type: SSR_TEST,
    from: from,
  };
}
