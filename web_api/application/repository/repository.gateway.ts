export interface Repository<T> {
  get<T>(id: string): T;
  list<T>(): T[];
  insert<T>(): void;
  update<T>(): void;
  delete<T>(id: string): void;
}