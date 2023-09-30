const emailContext = ['orders', 'noOrders'] as const;

export type EmailContext = typeof emailContext[number];
