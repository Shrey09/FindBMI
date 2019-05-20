/**
 * BmiResponseController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    bmi245:function(req, res){
        //Get height and weight from request body
        var height= parseFloat(req.body.height);
        var weight = parseFloat(req.body.weight);
        //calculate BMI
        var index_value=(weight/(height*height));
        var index_value=index_value.toFixed(3);
        console.log(req.body);
        console.log("BMI:",index_value);
        // send response including BMI value
        res.send({'BMI':index_value,'height':height,'weight':weight});    
    },

};

