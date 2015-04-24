function Create(str)
{
    var getRequest;
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/getAllCategories";
    
    if (str == "")
    {
        document.getElementById("info").innerHTML = "";
        return;
    }
    
    if (window.XMLHttpRequest)
    {
        getRequest = new XMLHttpRequest;
    }
    
    getRequest.onreadystatechange = function()
    
    {
        if (getRequest.readyState == 4 && getRequest.status == 200)
        {
            var output = JSON.parse(getRequest.responseText);
            Generate(output);
        }
    }
    getRequest.open("GET", url, true);
    getRequest.send();
}
function Generate(result)
{
    var count = 0;
    var display = "";
    
        display += ("<center>" + "<table border = '2' style = 'color: white;'>");
        
        display += ('<th>' + 'CID' + '<th>' + 'CName' + '<th>' + 'CDescription' + '<th>');
        
          for (count = 0; count < result.GetAllCategoriesResult.length; count++)
            {
                   display += "<tr>";
                        display += "<td>" + result.GetAllCategoriesResult[count].CID + "</td>";
                        display += "<td>" + result.GetAllCategoriesResult[count].CName + "</td>";
                        display += "<td>" + result.GetAllCategoriesResult[count].CDescription + "</td>";
                        
                   display += "</tr>";
                   
                   
                   
            }
            
             
              document.getElementById("dataa").innerHTML = display;
}
        
        
        
        function CreateCustomer()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/CreateCategory";
    
    var categoryname = document.getElementById("catname").value;
    var categoryription = document.getElementById("catription").value;
    //var customercity = document.getElementById("custcity").value;
    
    var newcustomer = '{"CName":"' + categoryname + '","CDescription":"' + categoryription +'"}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var result = JSON.parse(objRequest.responseText);
            OperationResult(result);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(newcustomer);
}

function OperationResult(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("result").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("result").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}







function  updateOrderAddress()
{
    var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/updateCatDescription";
    
    var categoryid = document.getElementById("catid").value;
    var categorydesc = document.getElementById("catdesc").value;
    
                                        //leave off the quotes for order number because it is not text already took them out
    var updateshipping = '{"CID":' + categoryid + ',"CDescription":"' + categorydesc + '"}';
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var res = JSON.parse(objRequest.responseText);
            OperationResult_2(result);
            
        }
    }
    
    objRequest.open("POST",url,true);
    objRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send(updateshipping);
}

function OperationResult_2(output)
{
    if (output.WasSuccessful == 1)
    {
        document.getElementById("res").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("res").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}





function deleteCustomer()
{
    //var objRequest = new XMLHttpRequest();
    var url = "http://bus-pluto.ad.uab.edu/jsonwebservice/service1.svc/deleteCategory";
    url += document.getElementById("CID").value;
    //var customerid = document.getElementById("custidee").value;
        
    //var byecustomer = '{"CID":' + customerid + '}';
    
    objRequest.onreadystatechange = function()
    {
        if (objRequest.readyState == 4 && objRequest.status == 200)
        {
            var output = JSON.parse(objRequest.responseText);
            OperationResult_3(output);
            
        }
    }
    
    objRequest.open("GET",url,true);
    getRequest.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    objRequest.send();
}

function OperationResult_3(output)
{
    if (result.DeleteCategoryResult.WasSuccessful == 1)
    {
        document.getElementById("rez").innerHTML = "The operation was successful!";
    }
    else
    {
        document.getElementById("rez").innerHTML = "The operation was not sucessful!" + "<br>" + output.Exception;
    }
}

     
        
        
        
        
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
        
 
function MenuChoice()
{
    if (document.getElementById("menu").value == "Display Category list")
    {   
        document.getElementById("section1").style.display = "inline";
        document.getElementById("section1").style.visibility = "visible";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.display = "none";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.display = "none";
        document.getElementById("section5").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "Add New Category")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "inline";
        document.getElementById("section2").style.visibility = "visible";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.display = "none";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.display = "none";
        document.getElementById("section5").style.visibility = "hidden";
    }
    else if (document.getElementById("menu").value == "Update Description")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "inline";
        document.getElementById("section3").style.visibility = "visible";
        document.getElementById("section4").style.display = "none";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.display = "none";
        document.getElementById("section5").style.visibility = "hidden";
        
    }
    else if (document.getElementById("menu").value == "Delete a Category")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.display = "inline";
        document.getElementById("section4").style.visibility = "visible";
        document.getElementById("section5").style.display = "none";
        document.getElementById("section5").style.visibility = "hidden";
    }
    
    else if (document.getElementById("menu").value == "About")
    {
        document.getElementById("section1").style.display = "none";
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.display = "none";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.display = "none";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.display = "none";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.display = "inline";
        document.getElementById("section5").style.visibility = "visible";
    }
    else
    {
        document.getElementById("section1").style.visibility = "hidden";
        document.getElementById("section2").style.visibility = "hidden";
        document.getElementById("section3").style.visibility = "hidden";
        document.getElementById("section4").style.visibility = "hidden";
        document.getElementById("section5").style.visibility = "hidden";
    }
}