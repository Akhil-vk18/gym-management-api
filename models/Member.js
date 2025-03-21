import mongoose from "mongoose";

const memberSchema = new mongoose.Schema(
    {
        name:{
            type:String,
            required: true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match: [
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, // Updated regex
                "Please enter a valid email address (e.g., user@example.com)"
              ]
        },
        phone:{
            type:String,
            required:true,
            
        },
        membershipType:{
            type:String,
            required:true,
            enum:["Basic","Premium"]
        },
        joinedDate:{
            type:Date,
            required:true,
            default:Date.now
        }
    }
);

const Member = mongoose.model("Member",memberSchema);
export default Member;