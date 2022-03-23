const catchAsync = require('../utils/catchAsync')

exports.test = catchAsync(async (req, res, next) =>
{
   
   
    res.status(200).send(
       {
           message: "test router"
       }
   );
})