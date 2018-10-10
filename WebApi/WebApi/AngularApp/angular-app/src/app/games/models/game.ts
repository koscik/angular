export class Game {
    id: string;
    name: string;
    grade: number;
    description: string;
    constructor(initialData: Partial<Game>) {
        if (initialData != null) {
            Object.assign(this, initialData);
        }
    }
}
