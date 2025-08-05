 # Questions : 
 ----------------
 # What is Optional Chaning in Javascript with data ??
 # What is Component Composition ??
 # What is Conditional Rendering  ??
 #  Can I do default and named Impo/Expo together ??  
 
 # Notes :
 -----------
  -- While not Providing key to map or filter use index as key 

  -- Remember !! Providing a idx to key is not good its better to use your own id 

  -- React Hooks are normal JS Functions created by facebook Developer 
  -- Mostly two used Hooks :
        - useState()  
                - Superpowerful two State variables
                - Syntax : const [state , setState] = useState();
                - while State is earlier passed it it's syntax
                - useState is used as per the event             
        - useEffect()
                - it gets rendered after the component calls 
                - Syntax : useEffect( arrow function , dependencies array )

  -- Good way of get rendered data on screen :
        - 1st Method  -- ❌
                - Component   -->  API (500 ms )  --> Render ( API stuffs ) 
        - 2nd Method -- ✔️
                - Component   -->  Redner (Shimmer UIs) --> API  --> Render ( API stuffs )
                ---> 2nd method is suggested bcoz it makes a good user experience

        

 -- Whenever a State variable updates React re-render the whole component

 -- Diff Algorithm : 
 -- Reconailiation Algorithm( React Fiber ) : 
        Virtual DOM : is a representaion of actual DOM ( it in the format of objects )
        Actual DOM : it's a representaion real DOM that what we have created one ( it in the format of div nexted div  )

 -- Why react is fast ??
        - Bcoz , React is doing efficient DOM manipulation 
        - it has a virtual DOM 
        - which keeps the track on real DOM 
        - as in react there we have diff Algorithm what does it basically it keeps tracking the diff bewteen the actul DOM
           and the virtual DOM as he gets the changes it instantly updates the UI


 -- Use of Loaders before the data come on screen ??
        - as per the modern technical instead of showing the Loader is not a good way use Shimmer UI
        - Ex. You can checkout the Youtube App





 # Two Types of Defaults : 
 ----------------------------
 1. Default Import\Export 
 --> Syntax :
        {
                export default component_name;
                import component_name from './../Path'
        }
      
 2. Named Import\Export 
 --> Syntax :
        {
                export const component_name;
                import { component_name } from './../Path'
        }      

         // Stopped At 49:17       

  # What you have Upate :
  ----------------------------- 
  1. Filter for Top Rated Dishes 
  2. Reat Star rating not that image    
