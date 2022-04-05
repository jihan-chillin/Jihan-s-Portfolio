import {Arg, Query, Mutation, Resolver, Ctx} from 'type-graphql';

const userResolver = {
    Query : {
        users:async () =>{
            try{
                
            }catch(e){
                console.error(e);
            }
        }
    }
}