const axiosRequest = require('axios')

async function getActivity() {
  try {
    const response = await axiosRequest.get('http://www.boredapi.com/api/activity/')
    return response.data.activity
  } catch (error) {
    console.error(`ERROR: ${error}`)
  }
}

async function printThings() {
  var Obj = {}
  Obj.act1 = await getActivity()
  Obj.act2 = await getActivity()
  console.log(Obj)
  console.log("==================\n")
}
printThings();

function thenCatch() {
    axiosRequest
    .get('https://httpstat.us/500')
    .then(response=> {
      console.log(`You could ${response.data.activity}`)
    })
    .catch(error => {
      console.error(`ERROR: ${error}`)
    }) 
  .then(response=> {  
    console.log("==================\n")
  })
}

thenCatch()