export interface Employee {
    firstName: string;
    lastName: string;
    address: string;
    phone: {
        home: string;
        work: string | null;
    }
}