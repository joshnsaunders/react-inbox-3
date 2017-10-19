import React, { Component } from 'react';
import './app.css';
import { data } from './data'

class Messages extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
    console.log('this.state', this.state.messages);
  }

  render(){

    const selected = (o) => {
         if (o.selected) {
            return (true) } else
           { return (false) }
       }

      const messageRead = (m) => {
         const cls = ['row', 'message']
         if (m.read) {
           cls.push('read') } else {cls.push('unread') }
         if (m.selected){
           cls.push('selected')
         }
           return cls.join(' ')
       }

   const starClick = data => {
     console.log('starclick');
     if(data.starred){
       data.starred=false
     } else {
       data.starred=true
     }
     this.setState(data)
     }

     const starred = (n) => {
       const stars = ['start', 'fa']
       if (n.starred){
         stars.push('fa-star') } else { stars.push('fa-star-o') }
         return stars.join(' ')
     }

     const selectClick = data => {
       if (data.selected){
         data.selected=false
       } else {
         data.selected=true
       }
       this.setState(data)
     }

     const setLabel = labels =>
       labels.map(labls => <span className="label label-warning">{labls}</span>)

    return(
      <div>
      {data.map((data) => (
      <div key={data.id} className={messageRead(data)}>
        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" onClick={selectClick.bind(this, data)} checked={!!selected(data)}/>
            </div>
            <div className="col-xs-2">
              <i onClick={starClick.bind(this, data)} className={starred(data)}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">
        {setLabel(data.labels)}
          <a href="link">
            {data.subject}
          </a>
        </div>
      </div>
    ))}
    </div>)
  }
}

export default Messages;
