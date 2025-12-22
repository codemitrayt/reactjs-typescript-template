export interface Avatar {
  url: string;
}

export const UserRoles = {
  SUPER_ADMIN: 'Super Admin',
  ADMIN: 'Admin',
  USER: 'User',
} as const;

export type UserRoles = (typeof UserRoles)[keyof typeof UserRoles];

export const UserLoginType = {
  GOOGLE: 'Google',
  GITHUB: 'GitHub',
  EMAIL_PASSWORD: 'Email Password',
} as const;

export type UserLoginType = (typeof UserLoginType)[keyof typeof UserLoginType];

export const PricingModel = {
  FREE: 'Free',
  PREMIUM: 'Premium',
  ENTERPRISE: 'Enterprise',
} as const;

export type PricingModel = (typeof PricingModel)[keyof typeof PricingModel];

export interface User {
  _id?: string;
  fullName: string;
  email: string;
  avatar: Avatar;
  role: UserRoles;
  loginType: UserLoginType;
}
