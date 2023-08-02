import { resolve } from 'path';
import { CustomerDataParserTxt } from './custoemr-data-parser-txt';
import { CustomerDataParserJson } from './custoemr-data-parser-json';

async function run() {
  const filePathJson = resolve(__dirname, 'files', 'customer.json');
  const customerDataParserJson = new CustomerDataParserJson(filePathJson);
  await customerDataParserJson.fixCustomerData();
  console.log(customerDataParserJson.customerData);

  console.log('--');

  const filePathTxt = resolve(__dirname, 'files', 'customer.txt');
  const customerDataParserTxt = new CustomerDataParserTxt(filePathTxt);
  await customerDataParserTxt.fixCustomerData();
  console.log(customerDataParserTxt.customerData);
}

run();
