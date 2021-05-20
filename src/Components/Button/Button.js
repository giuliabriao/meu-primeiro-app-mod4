import React, {useState} from 'react'

const Button = ({children}) => {

    // const click = (event) => {
    //     console.log("Fui clicado!");
    // }

    const [disabled, setDisabled] = useState(false)

    const handleClick = (event) => {
        setDisabled(true)
        setTimeout(() => setDisabled(false), 3000);
    }
    
    React.useEffect(() => {
        console.log("Fui atualizado");
    }, [handleClick]);

    React.useEffect(() => {
        console.log("Montando...");
        return ( () => console.log("Desmontando..."))
    }, [handleClick]);
    
    return(
        <button id="button" disabled={disabled} onClick={handleClick} className="button">{children}</button>
        )
    }
    
export default Button

    // React.useEffect(() => {
    //     console.log("Comportamento padrão! (componentDidMount e componentDidUpdate)");
    //    });
       

    // React.useEffect(() => {
    //     console.log("Efeito apenas na montagem");
    //    }, []); //esses colchetes fazem ser só na montagem

/*export default class Button extends Component {
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.state = {disabled: false}
        console.log("Fui inicializado");
    }

    handleClick(event){
        event.preventDefault();
        console.log("Fui clicado! =D");
        this.setState({disabled:true})
        setTimeout(() => this.setState({disabled:false}), 3000);
    }

    componentDidMount(){
        console.log("Fui montado");
    }

    componentDidUnmount(){
        console.log("Fui desmontado");
    }

    render(){
        console.log("Fui renderizado")
        return(
            <button id="button" onClick = {this.handleClick} disabled = {this.state.disabled} className="button">{this.props.name}</button>
        )
    }
}*/

