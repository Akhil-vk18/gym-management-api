import express from 'express';
const router = express.Router();
import members from '../models/Member.js';


// Gets All Members
router.get('/',async(req,res)=>{
   try {
     const allmembers =await members.find();
     res.json(allmembers);
   } catch (error) {
    res.status(500).json({ message: error.message });

   }
});

// Get Single Member By ID
 router.get('/:id',async(req,res)=>{
    try {
        const member = await members.findById(req.params.id);
        if(!member){
            return res.status(404).json({msg:'Member not found'});
        }
        res.json(member);
     } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
}
);

 // Create Member
 router.post('/',async(req,res)=>{
  try {
      const newmember = new members(
          {
              name:req.body.name,
              email:req.body.email,
              phone:req.body.phone,
              membershipType:req.body.membershipType
          }
      );
      const existingmember = await members.findOne({
        email: req.body.email,
      })
        if(existingmember){
            return res.status(400).json({msg:'Member already exists'});
        }

      await newmember.save();
      res.json(newmember);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;
