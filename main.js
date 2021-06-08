
const container =document.createElement("div");
container.classList.add("container")
document.querySelector("body").appendChild(container);
const home = document.querySelector(".home") ;
const news = document.querySelector(".home") ;
const datafordiv = new  Date()
const datetext = document.querySelector(".datetext");
datetext.innerHTML= datafordiv.toDateString()


  let apiData = {
    API_Key : "pM577cq8GZXc5pZL5WlIPNbF4OXtVHlr",
    url:"https://api.nytimes.com/svc/topstories/v2/" ,  
    Home : "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=pM577cq8GZXc5pZL5WlIPNbF4OXtVHlr" ,
  }


function createEl(element){
  const cardmb3 = document.createElement("div");
        news.appendChild(cardmb3);
        cardmb3.className="card mb-3";
        cardmb3.style.width="80%"
        cardmb3.style.margin="auto"
  
          const row =  document.createElement("div");
        row.className="row g-0"
        cardmb3.appendChild(row);
  
  
         const colmd8 = document.createElement("div");
         colmd8.className="col-md-8";
         row.appendChild(colmd8);
  
        const cardbody = document.createElement("div");
        cardbody.className="card-body";
       colmd8.appendChild(cardbody);
        
        const h4section = document.createElement("h4");
        h4section.className="card-title text-uppercase";
        cardbody.appendChild(h4section);
        h4section.innerHTML=element.section;
  
  
        const title = document.createElement("h6");
        title.className="card-title";
        cardbody.appendChild(title);
        title.innerHTML=element.title;
  
  
  
        const carddate = document.createElement("p");
        carddate.className="card-text";
        cardbody.appendChild(carddate)
         carddate.innerHTML=element.created_date
  
  
         const cardabstract = document.createElement("p");
         cardabstract.className="card-text";
         cardbody.appendChild(cardabstract)
         cardabstract.innerHTML=element.abstract
  
         const cardlink = document.createElement("a");
         cardlink.setAttribute('href' ,element.short_url )
         cardlink.innerHTML="Continue Reading"
         cardbody.appendChild(cardlink)
      
           const imagediv = document.createElement("div");
          imagediv.className="col-md-4";
          row.appendChild(imagediv)

  
         const image = document.createElement("img");
         imagediv.appendChild(image);
         image.style.height="100%"
         image.style.width="100%"
         image.setAttribute('src' ,element.multimedia[4].url )
}


function createElnav(element){
  const cardmb3 = document.createElement("div");
         home.appendChild(cardmb3);
        cardmb3.className="card mb-3";
        cardmb3.style.width="80%"
        cardmb3.style.margin="auto"
  
          const row =  document.createElement("div");
        row.className="row g-0"
        cardmb3.appendChild(row);
  
  
         const colmd8 = document.createElement("div");
         colmd8.className="col-md-8";
         row.appendChild(colmd8);
  
  
        const cardbody = document.createElement("div");
        cardbody.className="card-body";
       colmd8.appendChild(cardbody);
        
        const h4section = document.createElement("h4");
        h4section.className="card-title text-uppercase";
        cardbody.appendChild(h4section);
        h4section.innerHTML=element.section;
  
  
        const title = document.createElement("h6");
        title.className="card-title";
        cardbody.appendChild(title);
        title.innerHTML=element.title;
  
  
  
        const carddate = document.createElement("p");
        carddate.className="card-text";
        cardbody.appendChild(carddate)
         carddate.innerHTML=element.created_date
  
  
         const cardabstract = document.createElement("p");
         cardabstract.className="card-text";
         cardbody.appendChild(cardabstract)
         cardabstract.innerHTML=element.abstract
  
         const cardlink = document.createElement("a");
         cardlink.setAttribute('href' ,element.short_url )
         cardlink.innerHTML="Continue Reading"
         cardbody.appendChild(cardlink)
      
           const imagediv = document.createElement("div");
          imagediv.className="col-md-4";
          row.appendChild(imagediv)

  
         const image = document.createElement("img");
         imagediv.appendChild(image);
         image.style.height="100%"
         image.style.width="100%"
         image.setAttribute('src' ,element.multimedia[4].url )
}


 
   const navlink= document.querySelectorAll(".nav-link");
   navlink.forEach((value)=>{
      console.log(value.id);
      value.addEventListener('click' , function(){
        home.innerHTML=" "
        let url = `https://api.nytimes.com/svc/topstories/v2/${value.id}.json?api-key=pM577cq8GZXc5pZL5WlIPNbF4OXtVHlr`
    fetch(url)
    .then((res)=>{
        return (res.json());
    }).then((data)=>{
        console.log(data.results);
        data.results.forEach(element => {
           console.log(element)
           createEl(element)
        });
    })
    .catch((err)=>{
        console.log(err);
    })
  
      })
    })
  
  
 
    fetch(apiData.Home)
    .then((res)=>{
        return (res.json());
    }).then((data)=>{
        console.log(data.results);
        data.results.forEach(element => {
           console.log(element)
           createEl(element)
        });
    })
    .catch((err)=>{
        console.log(err);
    })
 


    
  




 
