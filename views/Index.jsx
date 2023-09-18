const React = require("react");

class Index extends React.Component {
  render() {
    const { logs } = this.props;
    return (
      <main>
        <nav>
          <a href="/logs/new">New Log</a>
        </nav>
        <ul>
          {logs.map((log) => {
            return (
              <li key={log._id}>
                <h3>
                  <a href={`/logs/${log._id}`}> {log.title} </a>
                </h3>
                <form
                  action={`/logs/${log._id}?_method=DELETE`}
                  method="POST"
                >
                  <input type="submit" value="Delete" />
                </form>
              </li>
            );
          })}
        </ul>
      </main>
    );
  }
}

module.exports = Index;
