import React,{useState,createContext} from 'react'
import App from '../App'
interface TextContext {
    children: React.ReactNode;
    }
    
    type data = {
        comp: string,
        setComp: React.Dispatch<React.SetStateAction<string>>
    }   

export const MyContext = createContext<data | null>(null);

export function ContextComp (props: TextContext ) {
const [comp , setComp] = useState('Home')
  return (
    <>
    <MyContext.Provider value={{comp, setComp}}>
    {props.children}
    </MyContext.Provider>
    </>
  )
}

function foo(arg) {
  
}

function goo() {
  foo("sdgfdg")
}