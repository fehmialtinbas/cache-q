export abstract class ModelBase {
  constructor(record: ModelBase) {
    Object.assign(this, record);
  }
}
