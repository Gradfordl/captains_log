const React = require("react");

class Show extends React.Component {
  render() {
    const { log } = this.props;

    return (
      <main>
        <div>
          <h1>{log.title}</h1>
          <br></br>
          <p> {log.entry}</p>
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
