import { EntityManager, FindManyOptions, FindOneOptions } from 'typeorm';

export interface RepositoryPort<Entity, M> {
  create(): Entity;
  insert(entity: Entity, manager?: EntityManager): Promise<Entity>;
  update(criteria: FindManyOptions<M>, entity: Entity): Promise<void>;
  findOneById(id: string, options?: FindOneOptions<M>): Promise<Entity>;
  findOneBy(criteria: FindManyOptions<M>): Promise<Entity | null>;
  findAll(options?: FindManyOptions<Entity>): Promise<Entity[]>;
  delete(entity: Entity, manager?: EntityManager): Promise<void>;
}
