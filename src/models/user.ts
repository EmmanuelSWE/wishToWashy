class User{
    id:string;
    username:string;
    email:string;
    createdAt:Date;

    constructor(email,username,id){
        this.id=id;
        this.email=email;
        this.username=username;
        this.createdAt=new Date();
    }
}

export default User;