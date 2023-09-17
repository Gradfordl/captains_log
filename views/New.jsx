const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>
            New 
        </h1>
        <form action="/logs" method="POST">
           Log Title: <input type="text" name="title" /> <br/>
           Log Entry: <input type="textarea" name="entry" /> <br/>
           Is Ship Broken? <input type="checkbox" name="shipIsBroken"  /> <br/>
           <input type="submit" /><br/>
        </form> 
        <nav>
          <a href="/">Back to Main</a>
        </nav>
      </div>
    )
  }
  }


module.exports = New;
