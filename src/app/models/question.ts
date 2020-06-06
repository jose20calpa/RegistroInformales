import { Option } from './option';

export interface Question {
    id: number;
    statement: string;
    componentType: string;
    dataType: string;
    required: boolean;
    options: Option[];
}
