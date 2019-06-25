import React from "react";

export default class TodoListItem extends React.Component {
  onClickClose = () => {
    const { index, removeItem } = this.props;
    removeItem(index);
  };
  onClickDone = () => {
    const { index, markTodoDone } = this.props;
    markTodoDone(index);
  };

  render() {
    const { item } = this.props;
    const todoClass = item.done ? "done" : "undone";
    return (
      <tr data-test='todoItem'>
        <td className={todoClass}>
          <span
            data-test="markAsCompleted"
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.onClickDone}
          />
          {item.value}
          <span
            data-test="markAsDeleted"
            className="glyphicon glyphicon-remove-sign close"
            aria-hidden="true"
            onClick={this.onClickClose}
          />
        </td>
      </tr>
    );
  }
}
