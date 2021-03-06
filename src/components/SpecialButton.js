
import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import None from 'material-ui/svg-icons/av/not-interested'; 
import ActionDone from 'material-ui/svg-icons/action/done';
import ActionDoneAll from 'material-ui/svg-icons/action/done-all'; 

class SpecialButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 0};
      }
      handleClickButton(){
          switch(this.state.value){
            case 0:
                this.setState({value:1})
                this.props.callBackHandleClick({"id":this.props.id,"value":1,"type":this.props.type});

                break;
            case 1:
                this.setState({value:2})
                this.props.callBackHandleClick({"id":this.props.id,"value":2,"type":this.props.type});

                break;
            case 2:
                this.setState({value:0})
                this.props.callBackHandleClick({"id":this.props.id,"value":0,"type":this.props.type});
                break;
          }
      }
   componentDidMount(){
    this.setState({value:this.props.defaultValue})
   }
      render() {
        return (
            <div title={this.props.enabled?"":this.props.title}>
                <FlatButton onClick={()=>this.handleClickButton()} icon={this.state.value==0? <None color={this.props.color}/>: this.state.value==1?<ActionDone color={this.props.color}/>: <ActionDoneAll color={this.props.color}/>} disabled={!this.props.enabled} />
            </div>
        )
    }
}
SpecialButton.propTypes = {
    value: React.PropTypes.number,
    color: React.PropTypes.string,
    callBackHandleClick:React.PropTypes.func,
    id: React.PropTypes.string,
    type: React.PropTypes.string,
    enabled:React.PropTypes.bool,
    defaultValue:React.PropTypes.number,
    title:React.PropTypes.string
  };
  
  
  export default SpecialButton