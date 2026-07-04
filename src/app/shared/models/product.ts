export interface IProduct {
    pid: string;
    pname: string;
    pprice: number;
    pstatus: 'In-Progress' | 'Dispatched' | 'Delivered';
    canReturn: 0 | 1;
    pdescription: string;
    pimage: string;
}


export interface IRes<T> {
    msg: string;
    data: T
}