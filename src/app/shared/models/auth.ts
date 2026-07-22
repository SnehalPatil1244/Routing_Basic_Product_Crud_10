export interface ILogin {
    email: string;
    password: string;
}

export interface ISingIn {
    email: string;
    password: string;
    userRole: 'buyer ' | 'admin' | 'superAdmin';
}