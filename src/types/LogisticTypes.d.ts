import { UUID } from 'crypto'
import { OrderStatus } from './enums';

interface iAdress {
    street: string;
    houseNumber: number;
    zipCode: number;
    city: string;
    country: string;
}

interface iOrder {
    orderID: UUID;
    orderDate: Date;
    userID: UUID;
    orderedItems: Array<iProduct>;
    totalPrice: number;
    status: OrderStatus;
    updatedAt: Date;
    shippingAddress: iAdress;
}