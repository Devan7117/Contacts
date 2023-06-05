import React from 'react';
import Contact from './Contact.js'

   let contacts =  [
        {
                id:1,
                name: 'Devan',
                phoneNumber: '9400438834',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            },
            {
                id:3,
                name: "Shanu",
                phoneNumber: '9145785469',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            },
            {
                id:4,
                name:"Nandan",
                phoneNumber: '9548324695',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            },
            {
                id:5,
                name:"Kanishka",
                phoneNumber: '9854624832',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            },
            {
                id:6,
                name:"Partha",
                phoneNumber: '7586124385',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            },
            {
                id:7,
                name:"Partha",
                phoneNumber: '8756945632',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            },
            {
                id:8,
                name:"Shanu2",
                phoneNumber: '9145687596',
                image: "https://e7.pngegg.com/pngimages/852/102/png-clipart-dialer-contact-list-contact-manager-android-android-blue-simple.png"
            }
        ]

class ContactList extends React.Component{
    constructor(props){
        super(props);
        this.state={
            displayedContacts:contacts 
        };
    }
    
    handleSearch=(event)=>{
        let searchQuery = event.target.value.toLowerCase();
        let displayedContacts = contacts.filter(function(el){
            let searchValue = el.name.toLowerCase()+el.phoneNumber;
            return searchValue.indexOf(searchQuery) !== -1;
        });
      this.setState({
          displayedContacts : displayedContacts
      });
    }    

    render(){
        
        return(
            <div>
            <input type="text" className="search-field" onChange={this.handleSearch}/>
            <ul>
            {
              this.state.displayedContacts.map(function(el){
                return(
                    <Contact key={el.id} name={el.name} phoneNumber={el.phoneNumber} image={el.image} />
                )
            })
            }
            </ul>
            </div>
        )
    }
}



export default ContactList;