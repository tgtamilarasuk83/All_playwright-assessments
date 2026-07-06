import { test ,expect} from "../fixtures/basefixture"
import Searchdata from '../resources/Searchdata.json'

const value = Searchdata[0]
console.log(value)

test("Searching product @smaoke " , async({Searchpagefix,register,productpagefix})=>{
console.log(value)
    await register.loadpage()
    await Searchpagefix.searching(value)
    await productpagefix.productvalidate()
   
  

    

})