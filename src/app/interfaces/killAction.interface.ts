export interface KillActionInterface {
    id: number;
    name: string;
    description: string;
    possibleKillers: [
        { name: string; primaryWeapon: string; }
    ];

}