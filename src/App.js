import React, {useState} from 'react';
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Header from './component/Header';
import Countries from './component/Countries';
import Country from './component/Country';


const GlobalStyle = createGlobalStyle`
body, img{
  background-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(207, 26%, 17%)" : " hsl(0, 0%, 98%)"};
  color: ${(props) =>
    props.theme.mode === "dark" ? " hsl(0, 0%, 98%)" : "hsl(200, 15%, 8%)"};
}
.header, #search, .select, .article-element, .country article .borders ul, .btn{ 
background-color: ${(props) =>
  props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : " hsl(0, 0%, 100%)"};
 
}
body, #search, input::placeholder, .select, .article-element, .btn{
  color: ${(props) =>
    props.theme.mode === "dark" ? " hsl(0, 0%, 100%)" : "hsl(200, 15%, 8%)"};
}
.header{
  border-bottom-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : "#ded9ca"};
}
#search, .select, #search:focus, .select:focus, img{
  border-color: ${(props) =>
    props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : "#dee3e0"};
}
.article-element{
   border-color: ${(props) =>
     props.theme.mode === "dark" ? "hsl(209, 23%, 22%)" : "#dee3e0"};
}
`;

function App() {
  const  [theme, setTheme] = useState({mode: 'dark'})
  
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <div>
            <GlobalStyle />
            <Header
              click={(e) =>
                setTheme(
                  theme.mode === "dark" ? { mode: "light" } : { mode: "dark" }
                )
              }
            />
            <Route exact path="/">
              <Countries />
            </Route>
            <Route exact path="/countries/:name" component={Country}></Route>
          </div>
        </ThemeProvider>
      </Router>
    );

}

export default App;
