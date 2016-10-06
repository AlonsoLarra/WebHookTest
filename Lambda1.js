/**
 * Created by alonsolarra on 9/6/16.
 */

exports.Handler = (function (event,context,callback) {
    var salary;
    if(event.rawSalary> 0 && event.rawSalary <= 7535)
     salary = event.rawSalary * (1-.01);
    else if(event.rawSalary> 7535 && event.rawSalary <= 15482)
        salary = event.rawSalary * (1-.078);
    else if(event.rawSalary> 15482 && event.rawSalary <= 51789)
        salary = event.rawSalary * (1-.367);
    else
        salary = event.rawSalary * (1-.421);

    callback(null, event.name + ", your salary after tax is: " + salary)
});