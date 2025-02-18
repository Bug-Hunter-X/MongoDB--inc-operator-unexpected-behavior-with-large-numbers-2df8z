```javascript
// Correct usage of $inc operator for safe integers
db.collection('myCollection').updateOne({"_id":ObjectId("someId")},{$inc:{counter:1}});

// For very large numbers, consider storing as strings and performing operations accordingly
// ...
```