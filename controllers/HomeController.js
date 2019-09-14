exports.Index = function(request, response){
    console.log("hi")
    response.render('home/Index',{ duckArray : ['Hewey', 'Louie', 'Dewey'] })
};