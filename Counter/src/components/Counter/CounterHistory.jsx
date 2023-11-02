import { useState, Component } from 'react';

import { log } from '../../log.js';

class HistoryItem extends Component {
  constructor() {
    super();
    this.state = {
      selected: false,
    }
  }

  handleClick() {
    this.setState((curState) => {
      return { selected: !curState.selected }
    });
  };

  render() {
    return (
      <li onClick={this.handleClick.bind(this)} className={this.state.selected ? 'selected' : undefined}>
        {this.props.count}
      </li>
    );
  }
}

/* 
function HistoryItem({ count }) {
  log('<HistoryItem /> rendered', 3);

  const [selected, setSelected] = useState(false);

  function handleClick() {
    setSelected((prevSelected) => !prevSelected);
  }

  return (
    <li onClick={handleClick} className={selected ? 'selected' : undefined}>
      {count}
    </li>
  );
}
*/

export default function CounterHistory({ history }) {
  log('<CounterHistory /> rendered', 2);

  return (
    <ol>
      {history.map((count) => (
        <HistoryItem key={count.id} count={count.value} />
      ))}
    </ol>
  );
}
