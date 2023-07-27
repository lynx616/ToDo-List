import React ,{ useState, useEffect } from 'react'
import DOlist from './DOlist';


function App() {

    const [item, setitem] = useState('');
    const [dataArr, setdataArr] = useState([]);


    
    useEffect(()=>{
       
    },[item]);

    function Li(val,index){


        const deleted= (id)=>{
            // console.log("deleted");
        setdataArr((oldItems) =>{
            return oldItems.filter((arrElem, index) =>{
                return index !==id;
            });
        }) ;
            
        };
        return(
            <>
                {/* <li>{val}</li> */}
                <DOlist close={deleted}
                    key={index}
                    id={index}
                    text={val}
                />
            </>
        )
    };

    function takingVal(e){
        setitem(e.target.value);
        
    };
    function add(){
        
        setdataArr((oldItems) =>{
            //'...' is helping to get the old values
           return [...oldItems,item];
        });
        //removing the value from type area
        setitem('');
           
    };
    function tap(e){
        if(e.key==='Enter'){
            add();
        }
    };

  return (
    <>
    <div className='box'>
    <div className='list-body'>
        <img src='8515.jpg' />
        <div className='list-header'>
            <h2>ToDo List</h2>
            <input type='text' placeholder='type here' onChange={takingVal} value={item}  onKeyDown={tap}/>
          
            <button onClick={add}>+</button>
        </div>
        <div className='list'>
            <ul>
              
                {dataArr.map(Li)}
            </ul>
        </div>
    </div>
    <div className='credits'>
       <p>Made with by ♡ Rudra Karmakar.</p>
    </div>
    </div>
    </>
  )
}
export default App;