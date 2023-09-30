type PluralizeArgs = {
  count: number;
  singular: string;
  plural?: string;
};

export const pluralize = ({
  count,
  singular,
  plural,
}: PluralizeArgs): string => {
  if (count === 1) {
    return singular;
  }

  return plural ?? `${singular}s`;
};
