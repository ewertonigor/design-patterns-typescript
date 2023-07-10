import { Customer } from '../customer/customer';
import { Vehicle } from '../vehicle/vehicle';

export type CreateVehicleCustomerFactory = {
  createCustomer(customerName: string): Customer;
  createVehicle(vehicleName: string, customerName: string): Vehicle;
};
