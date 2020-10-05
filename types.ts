export interface Employee {
  firstName: string;
  lastName: string;
  address: string;
  phone: {
    home: string;
    work: string | null;
  };
}

export interface Band {
    nameLink: string;
    country: string;
    genre: string;
    status: string;
  };


