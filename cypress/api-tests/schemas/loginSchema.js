export const loginSchema = {
    type: 'object',
    properties: {
      token: { type: 'string' },
      userId: { type: 'integer' },
    },
    required: ['token', 'userId'],
  };
  