let url = 'https://io.adafruit.com/api/v2/xzhy353923482/feeds/changebutton';
let counter = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
}

function draw() {
    if (counter % 10 == 0) {
        getData();
    }
    counter++;
}

function getData() {
    let data;
    httpGet(url, 'json', function (response) {
        console.log(response);
        data = response.last_value;
        noStroke();
        console.log(data);
        background(255,255,255);
        if(data == 1){
            
            noFill();
		    strokeWeight(60);
		    stroke (250, 40, 100, 250);
		    ellipse (windowWidth/2, windowHeight/2, 150, 150 );
		    
		    noFill();
		    strokeWeight(60);
		    stroke (250, 40, 100, 250);
		    ellipse (windowWidth/2, windowHeight/2, 350, 350 );
		    
		    noFill();
		    strokeWeight(60);
		    stroke (250, 40, 100, 250);
		    ellipse (windowWidth/2, windowHeight/2, 550, 550 );
		
        }else if(data == 2){

            noFill();
		    strokeWeight(60);
		    stroke (250, 220, 70, 250);
		    ellipse (windowWidth/2, windowHeight/2, 200, 200 );
       
		    noFill();
		    strokeWeight(60);
		    stroke (250, 220, 70, 250);
		    ellipse (windowWidth/2, windowHeight/2, 400, 400 );
		    
		    noFill();
		    strokeWeight(60);
		    stroke (250, 220, 70, 250);
		    ellipse (windowWidth/2, windowHeight/2, 600, 600 );
		    
        }else if(data == 3){
            
		    noFill();
		    strokeWeight(60);
		    stroke (50, 250, 60, 250);
		    ellipse (windowWidth/2, windowHeight/2, 250, 250 );

		    noFill();
		    strokeWeight(60);
		    stroke (50, 250, 60, 250);
		    ellipse (windowWidth/2, windowHeight/2, 450, 450 );	
		    
		    noFill();
		    strokeWeight(60);
		    stroke (50, 250, 60, 250);
		    ellipse (windowWidth/2, windowHeight/2, 650, 650 );
		    
	    }else if(data == 4){
	        
		    noFill();
		    strokeWeight(60);
		    stroke (70, 130, 200, 250);
		    ellipse (windowWidth/2, windowHeight/2, 300, 300 );

		    noFill();
		    strokeWeight(60);
		    stroke (70, 130, 200, 250);
		    ellipse (windowWidth/2, windowHeight/2, 500, 500 );	
		    
		    noFill();
		    strokeWeight(60);
		    stroke (70, 130, 200, 250);
		    ellipse (windowWidth/2, windowHeight/2, 700, 700 );
	    }
    });
}
