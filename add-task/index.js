module.exports = async function (context, req) {
    context.log('Adding a task to the planner');

    if(req.method=="GET"){
        context.res={
            status:200,
            body:myTasks
        }

    } else if(req.method=="POST"){
        const task = req.body;
        myTasks.push(task)
        context.res = {
            status:201
        }

    }

    
};

var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var myTasks = [
    {
        id : 69,
        text:"Implementar BackEnd Proyecto",
        status:"In Progrees",
        dueDate: date,
        responsible:'Cesar Villamil'
    }
];