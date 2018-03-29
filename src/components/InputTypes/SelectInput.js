import React from 'react';
import PropTypes from 'prop-types';

class SelectInput extends React.Component {
  static propTypes = {
    initialValue: PropTypes.string,
    options: PropTypes.array.isRequired,
    classes: PropTypes.object,
    name: PropTypes.string,
    onSelect: PropTypes.func,
    required: PropTypes.bool,
  };

  static defaultProps = {
    classes: {
      select: 'form-control',
    },
    id: '',
    name: '',
    value: [{ text: '', value: '' }],
    options: [],
    onChange: () => {},
    onSelect: () => {},
    required: false,
    initialValue: '',
  };
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.initialValue,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      value: nextProps.initialValue,
    });
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
    this.props.onSelect(e.target.value);
  }

  render() {
    const options = this.props.options && this.props.options.map((opt, index) =>
      (<option
        key={index}
        value={opt.value}
      >
        {opt.text}
      </option>),
    );
    return (
      <select
        name={this.props.name}
        className={this.props.classes.select}
        value={this.state.value}
        required={this.props.required
          ? 'required'
          : undefined}
        onChange={this.handleChange}
        onSelect={() => this.onSelect}
        autoComplete={this.props.name}
      >
        <option value="">&nbsp;</option>
        {options}
      </select>
    );
  }
}

export default SelectInput;