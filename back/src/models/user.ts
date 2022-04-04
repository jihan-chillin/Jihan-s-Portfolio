import DataTypes from 'sequelize';

const UserModel= (sequelize, DataTypes)=>{
    const User = sequelize.define('User', {
        email : {
            type : DataTypes.STRING(40),
            allowNull : false, 
            unique : true , 
        }, 
        nickname : {
            type : DataTypes.STRING(30),
            allowNull : false, 
        },
        password : {
            type : DataTypes.STRING(100), 
            allowNull : false, 
        }
    },{
        charset : 'utf8',
        collate : 'utf8_general_ci',
    })
    return User;
}

export default UserModel;