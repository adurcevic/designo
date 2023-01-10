type formItem = {
  label: string;
  type: string;
  id: 'name' | 'email' | 'phone' | 'message';
  as?: string;
};

export const data: formItem[] = [
  {
    label: 'Name',
    type: 'text',
    id: 'name',
  },
  {
    label: 'Email',
    type: 'email',
    id: 'email',
  },
  {
    label: 'Phone',
    type: 'text',
    id: 'phone',
  },
  {
    label: 'Your message',
    type: 'text',
    id: 'message',
    as: 'textarea',
  },
];
