const Voting = require("../models/Voting");

const createVoting = async (req,res) => {
    try {
    
        const newVoting = new Voting({
          title: req.body.title,
          description: req.body.description,
          group: req.body.group
        });
    
        const savedVoting = await newVoting.save();
    
        res.status(201).json(savedVoting);

      } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
      }
}

const getAllVoting = async (req,res) => {
  try {
  
      const votings = await Voting.find({});
  
      res.status(200).json(votings);

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

const voteByUser = async (req,res) => {
  try {
  
      const voting = await Voting.findById(req.params.id);

      console.log(req.body);
      voting.votes.push(req.body.user);

      await voting.save();
  
      res.status(200).json({message: "Users Vote Counted Successfully !!"});

    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
}

module.exports = {
    createVoting,
    getAllVoting,
    voteByUser
}