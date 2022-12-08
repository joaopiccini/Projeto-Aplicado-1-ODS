const inputImage = document.querySelector('.input-image')
const btnAdcImage = document.querySelector('.btnAdcImagens')
const saidaTexto  = document.querySelector('.output-text')
const imagePreview = document.querySelector('.preview')
const barraProgresso = document.querySelector('.barraProgresso')

function controlarProgresso(n){
    barraProgresso.style.width = `${n}%`
}

async function extrairTexto(img){
  const worker = Tesseract.createWorker({
    logger: function(m){
        console.log(m)
        controlarProgresso(m.progress * 100)
    }
  });

  await worker.load()
  await worker.loadLanguage('eng+por')
  await worker.initialize('eng+por')
  const { data: { text } } = await worker.recognize(img, {
    lang: 'eng',
    tessedit_char_whitelist: '0123456789'
  })
  saidaTexto.value = text
  await worker.terminate()

  const textReq = text.replace("\n", "")

  salvarNoBanco(textReq);

}

function salvarNoBanco(textReq){
  var dia;
  if(textReq == 101){
    dia = 25;
  } 
  else if(textReq == 111){
    dia = 27;
  }
  else if(textReq == 123){
    dia = 26;
  }

  var objReq = {
    "data_medicoes": `2022-11-${dia}`,
    "valor_medicoes": `${textReq}`
  }

  fetch('http://164.92.96.22:3000/medicoes', {
      method: "POST",
      body: JSON.stringify(objReq),
      headers: {"Content-type": "application/json; charset=UTF-8"}
  })
  .then(response => response.json()) 
  .then(json => console.log(json))
  .catch(err => console.log(err))
}

btnAdcImage.addEventListener('click' , function(){
    inputImage.click();
})

inputImage.addEventListener('change' , function(){
  let fileImage = inputImage.files[0];

  imagePreview.src = URL.createObjectURL(fileImage)

  try{
    extrairTexto(fileImage)
  }catch(e){
    console.log('erro' , e)
  }

})

module.exports = { extrairTexto }