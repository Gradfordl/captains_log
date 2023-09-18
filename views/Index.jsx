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
                {log.title}
              </li>
            );
          })}
        </ul>
        </main>
    );
  }
}

module.exports = Index;