const express = require('express')
const app = express()
const request = require('request')

app.use(express.static('./html'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.post('/dados', function(req, response){
    imagens = []
    let key = true
    let x = 0
    for(i = 0; i <= 7; i++){
    minyear = 2020
    maxyear = 2023
    let year =  Math.floor(Math.random() * (maxyear - minyear) + minyear) 

    minmonth = 1
    maxmonth = 13
    let month = Math.floor(Math.random() * (maxmonth - minmonth) + minmonth) 
    
    minday = 1
    maxday = 27

    let day = Math.floor(Math.random() * (maxday - minday) + minday)
    request('https://api.nasa.gov/planetary/apod?api_key=AChu7L4mjRnZSpi7CKcSITUst7g7AGOs0qVxTR22&date='+year+'-'+month +'-'+day, {json:true}, (err,res,body) =>{
    if (err) {return console.log(err)}
        imagens[x] = body 
       
        x++
     
    //console.log(body.url)
   //  console.log(body.explanation)
   // console.log(body.date)
      //console.log(body)                
        const data = imagens.map((dados) =>{
            return{
                copyright: dados.copyright,
                date: dados.date,
                explanation: dados.explanation,
                hdurl: dados.hdurl,
                media_type: dados.media_type,
                service_version: dados.service_version,
                title: dados.title,
                url: dados.url
                 }
         
            })
        const json = JSON.stringify(data)

        if(x == 8){
            key = false
            
            response.send(json)


          
        }
        

       
    });

  }

})


app.post('/image_dado', function(req, response){

    imagens = []
    minyear = 2020
    maxyear = 2023
    let year =  Math.floor(Math.random() * (maxyear - minyear) + minyear) 

    minmonth = 1
    maxmonth = 13
    let month = Math.floor(Math.random() * (maxmonth - minmonth) + minmonth) 
    
    minday = 1
    maxday = 27

    let day = Math.floor(Math.random() * (maxday - minday) + minday)
    request('https://api.nasa.gov/planetary/apod?api_key=AChu7L4mjRnZSpi7CKcSITUst7g7AGOs0qVxTR22&date='+year+'-'+month +'-'+day, {json:true}, (err,res,body) =>{
        if (err) {return console.log(err)}
             imagens[0] = body 
               const data = imagens.map((dados) =>{
                    return{
                    copyright: dados.copyright,
                    date: dados.date,
                    explanation: dados.explanation,
                    hdurl: dados.hdurl,
                    media_type: dados.media_type,
                    service_version: dados.service_version,
                    title: dados.title,
                    url: dados.url
                 }
         
            })
                const json = JSON.stringify(data)

                response.send(json)



       

        })
    

})
    






    





/*function getRandomInt() {
  for(i = 0; i < 40; i++){
    minyear = 2019
    maxyear = 2024
    let year =  Math.floor(Math.random() * (maxyear - minyear) + minyear) 

    minmonth = 1
    maxmonth = 13
    let month = Math.floor(Math.random() * (maxmonth - minmonth) + minmonth) 
    
    minday = 1
    maxday = 29

    let day = Math.floor(Math.random() * (maxday - minday) + minday) 
    console.log(year + '-' + month +'-'+ day)



  }
  
}
//getRandomInt()

*/




app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
})