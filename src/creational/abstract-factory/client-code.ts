import { EnterpriseCustomerVehicleCustumerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCustomerVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCustomerVehicleCustumerFactory();
const individualFactory = new IndividualCustomerVehicleCustomerFactory();

const car1 = enterpriseFactory.createVehicle('Gol', 'João');
const car2 = individualFactory.createVehicle('Polo', 'Joana');

car1.pickUp();
car2.pickUp();
