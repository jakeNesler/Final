
function increment()
{
    var value = parseInt(document.getElementById('display').value, 10);
    value++;
    document.getElementById('display').value = value;
}

function decrement()
{
    var value = parseInt(document.getElementById('display').value, 10);
    value--;
    document.getElementById('display').value = value;
}

function openPage(pageURL)
{
    window.location.replace(pageURL)
}
function openNewPage(pageURL)
{
    var value = "https://"
    window.open(value + pageURL)
}

function toDiv(pageDiv)
{
    window.location.hash = pageDiv
}
function contact(){
    	
    // Get the data from each element on the form.
    const name = document.getElementById('fname');
    const vehicle = document.getElementById('vehicle');
    const dos = document.getElementById('dos');
    const phoneNumber = document.getElementById('phone');
    const msg = document.getElementById('respond');
    const reason = document.getElementById('vreason');
    const closing1 = "I appreciate your time and look forward to improving your vehicles cleanliness and appearance! ";
    const closing2 = "Please hit send on this Email, After that you may return to the site by hitting the back button on your browser.";
    const closing3 = "This form is constructed to get the information I need quickly but I encourage you to add any other details below this line."
    const closing4 = "--------------------------------------------------------------------------------------------------------------------------------------------------------  "
/*     // This variable stores all the data.
let data = 
        '\r Name: ' + name.value + ' \r\n ' + 
        'Vehicle details: ' + vehicle.value + ' \r\n ' + 
        'Date Requested: ' + dos.value + ' \r\n ' + 
        'Phone Number: ' + phoneNumber.value + ' \r\n ' + 
        'Response request: ' + msg.value + ' \r\n ' + 
        'Message: ' + reason.value;

      
    document.getElementById('emails').value = data;
    console.log(data);
*/
   
    window.location.assign("mailto:jakenesler@gmail.com?Subject=Detail Request&body=%0d%0a"+
                                name.value+"%0d%0a"+vehicle.value+"%0d%0a"+dos.value+"%0d%0a"+phoneNumber.value+"%0d%0a"+msg.value+"%0d%0a"+
                                reason.value+"%0d%0a%0d%0a"+closing1+"%0d%0a"+closing2+"%0d%0a%0d%0a%0d%0a"+closing3+"%0d%0a"+closing4);
}