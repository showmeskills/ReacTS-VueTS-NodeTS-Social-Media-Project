export interface UsersData{
    id:number;
    profilePicture:any;
    username:string;
}
export interface PostsData{
    id:number;
    desc?:string;
    photo:any;
    date:string;
    userId:number;
    like:number;
    comment:number
}