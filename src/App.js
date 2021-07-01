import './css/style.css'
import Item from './components/Item';

function App() {
  //MOCKUP DATA 
  var array = [
    {
      id:1,
      title:"title 1",
      description:"description 1",
      bottom:"description 1"
    },
    {
      id:2,
      title:"title 2",
      description:"description 2",
      bottom:"description 2"
    },
    {
      id:3,
      title:"title 3",
      description:"description 3",
      bottom:"description 3"
    },
    {
      id:4,
      title:"title 4",
      description:"description 4",
      bottom:"description 4"
    }
]

const mapitems = () => {

  let items = []

//  for(let index = 0; index < array.length; index++){
//      let item = <Item 
//                  id={array[index].id}
//                  title={array[index].title}
//                  description={array[index].description}
//                  bottom={array[index].description}
//                    />
//      items.push(item);
//  }
//
//  for(let index of array) {
//    let item = <Item
//                  id={index.id}
//                  title={index.title}
//                  description={index.description}
//                  bottom={index.bottom}
//              />
//
//         items = [...items,item];
//  }

  items = array.map(element => {
      return <Item
             id={element.id}
             title={element.title}
             description={element.description != "description 2" ? element.description:'esto era description 2'}
             bottom={element.bottom}
                    />
  })
  return items;

}


 


  return (
    <div className='container flex flow-r'>
      {mapitems()}
    </div>
 );
}

export default App;
