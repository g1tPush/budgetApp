import { Moment } from "moment"

export type DateType = Moment | null

export interface IExpense {
    id: string | null;
    content: string;
    amount: number;
    date: DateType;
    note: string;
}

export type SortType = 'Date' | 'Amount' 