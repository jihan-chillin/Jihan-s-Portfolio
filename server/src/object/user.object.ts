import { Field, ObjectType } from "type-graphql";

@ObjectType()
export class UserObject{
    @Field()
    id : number;

    @Field()
    email: string;

    @Field()
    nickname: string;

    @Field()
    password: string;
}