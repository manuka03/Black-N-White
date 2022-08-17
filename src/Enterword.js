import { ReactComponent as IconMenu1 } from './head.svg';
import { Link , useNavigate} from "react-router-dom";
import { useState } from 'react';
import $ from 'jquery';

let fword = '';
const Enterword = () => {
  const navigate = useNavigate();
  let check=0;
  
  function check_if_word_exists(word) {
    if(word.indexOf(' ')>=0){
      check = 0;
    }
    else{
    const url = "https://api.wordnik.com/v4/word.json/" + word + "/definitions?limit=200&includeRelated=false&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5";

    $.ajax({
        type: "GET",
        url: url
    }).done(function (result) {
        check = 1
    }).fail(function () {
      check=0
    });}
}


  const [value, setValue] = useState(3);
  let a = ' ';
  let b = a;
  a=''
  for(let j = 0 ; j<value; j++){
    a = a+b;
  }
  const [word , setWord] = useState(a);

  const handleChange = (e) => {

    setValue(e.target.value);
  };

  const handleTextChange = (i) =>{
    const change = (e) =>{
      if(e.target.value.length==2){
        let a = ''
        if(e.target.value.slice(0,1)===' '){
          a = e.target.value.slice(1,2)
        }
        else{
          a= e.target.value.slice(0,1)
        }
        setWord(word.slice(0 ,i)+ a + word.slice(i+1 , word.length));
      }
      else{
        if(e.target.value.length==0){
          setWord(word.slice(0 ,i)+ ' ' + word.slice(i+1 , word.length));
        }
        else{
          document.getElementById(i+1).focus();
        }
      }
    }
    return change;
  }

  function decideval(i){
    return word.slice(i , i+1)
  }

  const Inp = ()=>{
    let list = [];
    for(let i = 0 ; i<value ; i++){
      list = list.concat(<div key={(i+value)} className='letters'><input id={i} value={decideval(i)}  onChange={handleTextChange(i)}  className="letter"/></div>)
    }
    return(
      <div>
        {list}
      </div>
    )
  }
  
    return(
        <div>
          <div>
          <IconMenu1 className = "head"/>
        </div>
        <select className = 'dropdown' onChange={handleChange}>
          <option value={3} className='option'  >No. of letters: 3</option>
          <option value={4} className='option'  >No. of letters: 4</option>
          <option value={5} className='option'  >No. of letters: 5</option>
          <option value={6} className='option'  >No. of letters: 6</option>
          <option value={7} className='option'  >No. of letters: 7</option>
          <option value={10} className='option' >No. of letters: 10 *Maniac edition*</option>
        </select>
        <Inp/>
        <Link to='/Enterword/Match'>
        <button className ="button">
          Confirm
        </button>
        </Link>
        </div>
    );
}
export default Enterword;