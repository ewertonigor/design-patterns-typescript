import { Buyer } from './buyer';
import { Mediator } from './mediator';
import { Seller } from './seller';

const mediator = new Mediator();
const seller1 = new Seller();
seller1.addProduct({ id: '1', name: 'Camiseta', price: 39.9 });
seller1.addProduct({ id: '2', name: 'Moletom', price: 99.9 });
const seller2 = new Seller();
seller2.addProduct({ id: '3', name: 'Tênis', price: 259.9 });
seller2.addProduct({ id: '4', name: 'Boné', price: 79.9 });

mediator.addSeller(seller1, seller2);

const buyer = new Buyer(mediator);
buyer.viewProducts();
buyer.buy('2');
buyer.buy('3');
buyer.viewProducts();
