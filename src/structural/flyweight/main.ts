import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'Ewerton Igor', '155', 'PE-095', 'Caruaru');
deliveryContext(factory, 'Emanuela', '155', 'PE-095', 'Caruaru');
deliveryContext(factory, 'Evellyn', '2048', 'Rua Gonçalves Ledo', 'Caruaru');
deliveryContext(factory, 'João', '501', 'Rua D', 'Caruaru');

console.log();
console.log(factory.getLocations());
