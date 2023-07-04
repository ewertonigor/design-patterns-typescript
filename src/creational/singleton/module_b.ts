import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module_a';

const myDatabaseClassic = MyDatabaseModule;
myDatabaseClassic.add({ name: 'Ewerton', age: 38 });
myDatabaseClassic.add({ name: 'Evellyn', age: 19 });
myDatabaseClassic.add({ name: 'João', age: 5 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromModuleA);
