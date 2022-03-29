import User from '../models/user'

export const signup = async (request,response)=>{
    const {email,name,password} = request.body
    try {
        const existUser = await User.findOne({email}).exec()
        if(existUser){
            return response.status(400).json({
                message:"User ton tai"
            })
        }
        const user = await User({email,name,password}).save()
        response.json({
            user:{
                _id:user._id,
                email:user.email,
                name:user.name
            }
        })
    } catch (error) {
        console.log(error);
    }
}