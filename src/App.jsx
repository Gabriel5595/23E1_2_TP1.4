import './App.css'

export default function App() {

    const data = {
      link: "https://lerolero.com/",
      text: "Clique para ser redirecionado",
      target: "_blank",
    }
  
    const a = <a href={data.link} target={data.target}>{data.text}</a>

    const mainContainer = <main>
        {a}
    </main>;

    return mainContainer;

}
