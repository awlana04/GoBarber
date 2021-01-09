interface IMailConfig {
  driver: 'ethereal' | 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      email: 'cawlana040@gmail.com',
      name: 'Awlana da equipe GoBarber',
    },
  },
} as IMailConfig;
