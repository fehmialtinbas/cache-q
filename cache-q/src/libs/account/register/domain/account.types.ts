export type AccountProps = {
  id: string;
  userName: string;
  email: string;
  workSpaces?: string[];
  status: AccountStatus;
  role?: AccountRole;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export enum AccountStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  SUSPENDED = 'suspended',
  DELETED = 'deleted',
}

export enum AccountRole {
  USER = 'user',
  ADMIN = 'admin',
  MODERATOR = 'moderator',
  GUEST = 'guest',
}
