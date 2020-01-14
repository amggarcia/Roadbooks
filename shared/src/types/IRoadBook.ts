export interface IRoadBook {
        _id: string;
        Name: string;
        Description: string;
}

export function GetNewRoadBook(): IRoadBook {
        return { _id: '', Name: '', Description: '' } as IRoadBook;
}