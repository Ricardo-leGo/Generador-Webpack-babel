import './src/styles/main.scss';
const insertData = () => {

    const img = document.createElement('img');
    img.src="https://www.semana.com/resizer/95mjjiFdJn6zi7MEKgaPHN59NLQ=/1200x675/filters:format(jpg):quality(50)//cloudfront-us-east-1.images.arcpublishing.com/semana/VOD6WSX4R5DMJHATKHHKRP654Q.jpg"
    document.querySelector("body").appendChild(img);

}


insertData();


console.log("js file")