function fun(){
  var db=openDatabase("itemDB","1.0","itemDB",65535);
      db.transaction(function(transaction){
        var sql="CREATE TABLE items"+
        "(id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,"+
        "name VARCHAR(100) NOT NULL,"+
        "email VARCHAR(100) NOT NULL,"+
        "age VARCHAR(100) NOT NULL,"+
        "gender VARCHAR(100) NOT NULL,"+
        "project VARCHAR(100) NOT NULL,"+
        "pos VARCHAR(100) NOT NULL,"+
        "location VARCHAR(100) NOT NULL,"+
        "salary VARCHAR(100) NOT NULL,"+
        "num VARCHAR(100) NOT NULL,"+
        "com VARCHAR(100) NOT NULL)";
        transaction.executeSql(sql,undefined,
          function(){
            alert("Data is created successfully");
          },function(){alert("already exists")});

    });
    var name=document.hello1.name.value;
    var email=document.hello1.email.value;
    var age=document.hello1.age.value;
    var gender=document.hello1.gender.value;
    var project=document.hello1.project.value;
    var pos=document.hello1.pos.value;
    var location=document.hello1.location.value;
    var salary=document.hello1.salary.value;
    var num=document.hello1.num.value;
    var com=document.hello1.com.value;
   db.transaction(function(transaction){
     var sql="INSERT INTO items(name,email,age,gender,project,pos,location,salary,num,com)VALUES(?,?,?,?,?,?,?,?,?,?)";
     transaction.executeSql(sql,[name,email,age,gender,project,pos,location,salary,num,com],function(){
       alert("Items added successfully");
     },function(transaction,err){alert(err.message);
   })
   })

  }
  function fun1(){
    window.location="index89.html";
  }
function nas(){
  window.location="vas1.html";
}
