import {
  EntityManager,
  FindManyOptions,
  FindOneOptions,
  FindOptionsWhere,
  Repository,
} from 'typeorm';
import { RepositoryPort } from './repository.port';

export abstract class RepositoryBase<T> implements RepositoryPort<T, any> {
  protected readonly entity: T;

  constructor(protected readonly repository: Repository<any>) {}

  create(): T {
    return this.repository.create();
  }

  async insert(entity: T, manager?: EntityManager): Promise<T> {
    return this.repository.save(entity);
  }

  async update(criteria: any, entity: Partial<T>): Promise<void> {
    await this.repository.update(criteria, entity);
  }

  async findOneById(
    id: string,
    options?: FindOneOptions<any> | undefined,
  ): Promise<T> {
    return await this.repository.findOne({ where: { id } });
  }

  async findOneBy(criteria: FindManyOptions<any>): Promise<T | null> {
    return await this.repository.findOne(criteria);
  }

  async findAll(options?: FindManyOptions<T>): Promise<T[]> {
    return await this.repository.find(options);
  }

  async delete(entity: T, manager?: EntityManager): Promise<void> {
    await this.repository.remove(entity);
  }

  async deleteBy(
    criteria: FindOptionsWhere<any>,
    manager?: EntityManager,
  ): Promise<void> {
    await this.repository.delete(criteria);
  }
}
