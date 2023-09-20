const React = require("react");

class New extends React.Component {
  render() {
    return (
      <div>
        <h1>New</h1>
        <form action="/logs" method="POST">
          <label htmlFor="title">Title: </label>{" "}
          <input type="text" name="title" /> <br />
          <label htmlFor="entry">Entry:</label>{" "}
          <textarea name="entry" rows="4" cols="30"></textarea>
          <br />
          <label htmlFor="shipIsBroken">Is Ship Broken?</label>
           <input type="checkbox" name="shipIsBroken" /> <br />
          <input type="submit" />
          <br />
        </form>
        <nav>
          <a href="/logs">Back to Main</a>
        </nav>
      </div>
    );
  }
}

module.exports = New;
