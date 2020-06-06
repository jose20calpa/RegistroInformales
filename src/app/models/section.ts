import { Question } from './question';

export interface Section {
    id: number;
    title: string;
    questions: Question[];
}

