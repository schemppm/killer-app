export interface KillActionInterface {
    id: number;
    name: string;
    description: string;
    imageUrl: string;
    possibleKillers: [
        { name: string; primaryWeapon: string; }
    ];

}