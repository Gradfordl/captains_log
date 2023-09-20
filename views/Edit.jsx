const React = require("react");

class Edit extends React.Component {
  render() {
    const { log } = this.props;
    return (
      <main>
        <h1>Edit Log</h1>
        <form action={`/logs/${log._id}?_method=PUT`} method="POST">
          Title: <input type="text" name="title" defaultValue={log.title} />
          <br />
          Entry:{" "}
          <textarea
            name="entry"
            rows="4"
            cols="30"
            defaultValue={log.entry}
          ></textarea>
          <br />
          <label htmlFor="shipIsBroken">Is Ship Broken?</label>
          {log.shipIsBroken ? (
            <input type="checkbox" name="shipIsBroken" defaultChecked />
          ) : (
            <input type="checkbox" name="shipIsBroken" />
          )}
          <br />
          <input type="submit" value="Submit Edits" />
        </form>
        <a href="/logs">Go Back</a>
      </main>
    );
  }
}

module.exports = Edit;
