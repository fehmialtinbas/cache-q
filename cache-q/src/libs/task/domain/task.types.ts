export type TasksProps = {
  id: string;
  name: string;
  description?: string;
  status?: TaskStatus;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
};

export enum TaskStatus {
  TODO = 'TODO',
  IN_PROGRESS = 'IN_PROGRESS',
  DONE = 'DONE',
  CANCELLED = 'CANCELLED',
}
