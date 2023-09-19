const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;

    return (
      <main>
        <h1>Captain's Log:</h1>
        <div>
          <h2>{log.title}</h2>
          <h4> {log.entry}</h4>
          <h6> Ship Status: {log.shipIsBroken ? `The ship needs fixing` : `The ship is fully functional`}</h6>
          <p>Created At: {log.createdAt.toLocaleString()}</p>
          <p>Updated At: {log.updatedAt.toLocaleString()}</p>
        </div>
        <nav>
          <a href="/logs">Go Back</a>
        </nav>
      </main>
    );
  }
}

module.exports = Show;
