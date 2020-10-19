export class Team {
    readonly id: number;
    name: string;
    coach: string;
    description: string;

    constructor(id:number, name:string, coach:string, description:string) {
        this.id = id;
        this.name = name;
        this.coach = coach;
        this.description = description;
    }
}
