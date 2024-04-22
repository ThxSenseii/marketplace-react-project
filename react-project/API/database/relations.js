const User = require('../api/models/user.model.js')
const Tweet = require('../api/models/tweet.model.js')
const ContactInfo = require('../api/models/contactInfo.model.js')
const Tag = require('../api/models/tag.model.js')

const initializeRelations = () => {
  try {
   

   
    User.hasOne(ContactInfo)
    ContactInfo.belongsTo(User)

   
    User.hasMany(Tweet)
    Tweet.belongsTo(User)


    Tweet.belongsToMany(Tag, { through: 'tweet_tag' })
    Tag.belongsToMany(Tweet, { through: 'tweet_tag' })
    console.log('Relations added to models')
  } catch (error) {
    console.log(error)
  }
}

module.exports = initializeRelations
