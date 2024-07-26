var colorModeObj = 
    [
        "Dark-Mode",
        "Light-Mode"
    ]
var classes =
{
    "body" : 
        {
        "text": ["",""],
        },
    "color-mode-form": 
        {
        "text": ["Color Mode(change color mode to make the page look like code in your favorite IDE!): ", "color_mode = "],
        },
    "color-mode-select":
        {
        "text" : ["",""],
        },
    "option":
        {
        "text": ["Select Color Mode","Select Color Mode"],
        },
    "name": 
        { 
        "text": ["Brandon Todd", "\"Brandon Todd\""],
        },
    "intro": 
        {
        "text": ["I am a software engineer at Garmin. I graduated magna cum laude from Embry Riddle Aeronautical University in 2023","\"I am a software engineer at Garmin. I graduated magna cum laude from Embry Riddle Aeronautical University in 2023\""],
        },
    "resume":
        {
        "text": ["Check out my: ",""],
        },
    "resume-link":
        {
        "text": ["Resume", "Resume"],
        },
    "year": {},
    "job-title": 
        {
        "text": ["Job Title: Component Lead Misc Data, Software Engineer 2","\"Component Lead Misc Data, Software Engineer 2\""],
        },
    "company":
        {
        "text": ["Company: Garmin","\"Garmin\""],
        },
    "job-duties":
        {
        "text": ["Work on HSI, vertical speed tape, G-meter, checklist items, and testing on the Primary Flight Display.", "\"HSI\",\"vertical speed tape\",\"G-Meter\",\"checklist items\", \"testing\", \"Primary Flight Display\""]
        },
    "company-textron":
        {
        "text": ["Company: Textron Aviation","\"Textron Aviation\""],
        },
    "job-duties-textron":
        {
        "text": ["Worked on technical debt by porting web applications to linux server, Azure Dev Ops CI/CD for web applications, updated existing web pages", "\"Worked on technical debt by porting web applications to linux server\", \"Azure Dev Ops CI/CD for web applications\", \"Updated existing web pages\""]
        },
    "job-title-textron":
        {
        "text": ["Job Title: IT Developer Intern PLM Department", "\"IT Developer Intern PLM Department\""]
        },
    "company-canyon":
        {
        "text": ["Company: Canyon Aeroconnect","\"Canyon Aeroconnect\""],
        },
    "job-title-canyon":
        {
        "text": ["Job Title: Software Developer Intern", "\"Software Developer Intern\""]
        },
    "job-duties-canyon":
        {
        "text": ["Worked on I2C, ADC, DAC, LED peripherals on power supply chip, wrote wear leveling algorithm, wrote bootloader and field loader application, debug with JTag, Analog Discovery, and bench testing", "\"Worked on I2C, ADC, DAC, LED peripherals on power supply chip\",\" wrote wear leveling algorithm\",\"wrote bootloader and field loader application\", \"debug with JTag, Analog Discovery, and bench testing\""]
        },
    "school":
        {
        "text": ["Graduate From School: Embry Riddle Aeronautical University Prescott","\"Embry Riddle Aeronautical University Prescott\""]
        },
    "honors":
        {
        "text": ["Honors: Magne Cum Laude", "\"Magne Cum Laude\""]
        },
}
function isOverflown(element){
    return element.scrollWidth > element.clientWidth;
  }
function colorChange() {
    var colorMode = document.getElementById("color-mode-select")
    var types = document.querySelectorAll("[id='type']")
    var variables = document.querySelectorAll("[id='variable']")
    var operators = document.querySelectorAll("[id='operator']")
    var line_nums = document.querySelectorAll("[id='line-num']")
    var specialchars = document.querySelectorAll("[id='specialchar']")
    var keywords = document.querySelectorAll("[id='keyword']")
    var years = document.querySelectorAll("[id='res-year']")
    var ints = document.querySelectorAll("[id='int']")
    for(var i in types){
        if(colorModeObj[colorMode.value]==undefined){
            types[i].className = "type"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            types[i].className = "type-dark"
        }
        else{
            types[i].className = "type-light"
        }
    }
    for(var i in ints){
        if(colorModeObj[colorMode.value]==undefined){
            ints[i].className = "int"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            ints[i].className = "int-dark"
        }
        else{
            ints[i].className = "int-light"
        }
    }
    for(var i in years){
        if(colorModeObj[colorMode.value]==undefined){
            years[i].className = "res-year"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            years[i].className = "res-year-dark"
        }
        else{
            years[i].className = "res-year-light"
        }
    }
    for(var i in specialchars){
        if(colorModeObj[colorMode.value]==undefined){
            specialchars[i].className = "specialchar"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            specialchars[i].className = "specialchar-dark"
        }
        else{
            specialchars[i].className = "specialchar-light"
        }
    }
    for(var i in keywords){
        if(colorModeObj[colorMode.value]==undefined){
            keywords[i].className = "keyword"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            keywords[i].className = "keyword-dark"
        }
        else{
            keywords[i].className = "keyword-light"
        }
    }
    for(var i in variables){
        if(colorModeObj[colorMode.value]==undefined){
            variables[i].className = "variable"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            variables[i].className = "variable-dark"
        }
        else{
            variables[i].className = "variable-light"
        }
    }
    for(var i in operators){
        if(colorModeObj[colorMode.value]==undefined){
            operators[i].className = "operator"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            operators[i].className = "operator-dark"
        }
        else{
            operators[i].className = "operator-light"
        }
    }
    for(var i in line_nums){
        if(colorModeObj[colorMode.value]==undefined){
            line_nums[i].className = "line-num"
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            line_nums[i].className = "line-num-dark"
        }
        else{
            line_nums[i].className = "line-num-light"
        }
    }
    if(colorModeObj[colorMode.value]!= undefined){
        document.title = colorModeObj[colorMode.value]
    }
    else{
        document.title = "Web Practice"
    }
    for(var x in classes){
        var element = document.getElementById(x)
        if(colorModeObj[colorMode.value]==undefined){
            element.className = x
            if(classes[x]["text"]){
                element.childNodes[0].nodeValue = classes[x]["text"][0]
                if(isOverflown(element)){
                    console.log(element) 
                }
            }
        }
        else if(colorModeObj[colorMode.value]===colorModeObj[0]){
            element.className = x+"-dark"
            if(classes[x]["text"]){
                element.childNodes[0].nodeValue = classes[x]["text"][1]
                if(isOverflown(element)){
                    console.log(element) 
                }
            }
        }
        else{
            element.className = x+"-light"
            if(classes[x]["text"]){
                element.childNodes[0].nodeValue = classes[x]["text"][1]
                if(isOverflown(element)){
                    console.log(element) 
                }
            }
        }
    }
}
window.onload = function() {
    var colorMode = document.getElementById("color-mode-select");
    for (var x in colorModeObj){
        colorMode.options[colorMode.options.length] = new Option(colorModeObj[x],x);
    }
    colorMode.onchange = function() {
        colorChange()
    } 
}
window.addEventListener("pageshow",function(event){
    colorChange();
    for(var x in classes){
        var element = document.getElementById(x);
        if( isOverflown(element)){
            console.log("element")
        }
    }
})
