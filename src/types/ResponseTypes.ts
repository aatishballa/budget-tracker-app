export interface TransactionResponse {
    id: string;
    amount: number;
    description: string;
    date: Date;
    type: string;
    tags?: string[];
}

export interface UserResponse {
    id: string;
    name: string;
    email: string;
    password: string;
}