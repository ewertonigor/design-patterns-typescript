import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Igor', age: 20 });
myDatabaseClassic.add({ name: 'Heitor', age: 10 });
myDatabaseClassic.add({ name: 'Emanuela', age: 40 });

export { myDatabaseClassic };
