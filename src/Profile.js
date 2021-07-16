import React from 'react';

class Profile extends React.Component {
    
    state={
        person:{Name:'John Doe',Bio:'do nothing',Img:"/John-Doe.jpg",Profession:'unemployed'},
        count: 0
    }

    componentDidMount() {
        setInterval(()=>this.setState({
            count: this.state.count + 1
          }),1000);
      }
    
    render(){
        /*destructuring*/
        const {Name,Bio,Img,Profession}=this.state.person;
       // console.log(this.props.Person.Name);

        return (
        <div style={{justifyContent:'center'}}>
            <h1 style={{color:"blue", fontWeight:'800',textDecoration:"underline"}}>I'm {Name}.</h1>
            <h2 style={{color:'lightblue' ,fontWeight:'500'}}>I {Bio}.</h2>
            <h3 style={{color:"turquoise", fontWeight:'250'}}>I'm {Profession}.</h3>
            <img style={{borderRadius:"50%"}} src={Img} alt="avatar"/>
            <h4>Time passed since the component was mounted is: {this.state.count} seconds.</h4>
          
        </div>)
    }

}
export default Profile;