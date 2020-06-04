import React from 'react';
import { Switch, Router } from 'react-router-dom'



const App = () => {
    return (

        <div id="app-view">

        <header>

        </header>

        <Sidebar />

         {/* to direct which component to display based on url path */}
         <Switch>

{/* navigate to home from either path // pass contacts to render in list on home page and functions to edit/remove */}
<Route exact path={['/', '/books']} render={() => (
  <Home contacts={this.state.contacts} deleteContact={this.removeContact} editInfo={this.editContact} />
)} />

{/* pass function to add new contacts to app state through contact form */}
<Route path='/contacts/new' render={(routerProps) => (
  <ContactForm addNew={this.addContact} history={routerProps.history} />
)} />

{/* pass function to edit contacts in app state through edit form */}
<Route path='/contacts/edit' render={(routerProps) => (
  <EditForm deleteContact={this.removeContact} addNew={this.addContact} contact={this.state.contactToEdit} history={routerProps.history} />
)} />

{/* navigate to contact details by matching number in url path to contact id */}
<Route path='/contacts/:id' render={(routerProps) => (
  <ContactDetail contactId={parseInt(routerProps.match.params.id, 10)} contacts={this.state.contacts} />
)} />
        <BookList />
        <BookDetail />

        </div>

    )

}

export default App;