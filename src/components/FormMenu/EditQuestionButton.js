import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Modal, FormGroup } from 'react-bootstrap';
import { updateQuestion } from '../../actions/winterfellFormBuilderActions';
import FieldGroup from '../InputTypes/FieldGroup';


class updateQuestionButton extends Component {
  static propTypes = {
    updateQuestion: PropTypes.func.isRequired,
    questionSetIndex: PropTypes.number.isRequired,
    questionIndex: PropTypes.number.isRequired,
    question: PropTypes.string.isRequired,
    questionText: PropTypes.string,
    questionType: PropTypes.string.isRequired,
  };

  static defaultProps = {
    questionText: '',
  };

  constructor(props) {
    super(props);
    const { question, questionText, questionType } = props;

    this.state = {
      showModal: false,
      question,
      questionText,
      questionType,
    };

    this.onChange = this.onChange.bind(this);
    this.onFormUpdate = this.onFormUpdate.bind(this);
  }

  onChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  onClose(e) {
    e.preventDefault();
    this.setState({ showModal: true });
  }

  onFormUpdate(e) {
    e.preventDefault();
    this.props.updateQuestion(
      this.props.questionSetIndex,
      this.props.questionIndex,
      this.state.question,
      this.state.questionText,
      this.state.questionType,
    );
    this.setState({ showModal: false });
  }

  render() {
    return (
      <Button
        className="btn"
        onClick={() => {
          this.setState({ showModal: true });
        }}
      >edit
        <Modal show={this.state.showModal}>
          <Modal.Header>
            <Modal.Title>Add a new question to the page</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form>
              <FormGroup>
                <FieldGroup
                  id="question"
                  name="question"
                  label="Enter Question"
                  onChange={this.onChange}
                  placeholder=""
                  value={this.state.question}
                />
              </FormGroup>
              <FormGroup>
                <FieldGroup
                  id="questionText"
                  name="questionText"
                  label="Enter Question Text"
                  onChange={this.onChange}
                  placeholder=""
                  value={this.state.questionText}
                />
              </FormGroup>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              bsStyle="danger"
              onClick={() => { this.setState({ showModal: false }); }}
            >Cancel</Button>
            <Button
              bsStyle="primary"
              onClick={this.onFormUpdate}
            >Save changes</Button>
          </Modal.Footer>
        </Modal>
      </Button>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    question: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions',
      ownProps.questionIndex, 'question']),
    questionText: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions',
      ownProps.questionIndex, 'text']),
    questionType: state.getIn(['form', 'schema', 'questionSets', ownProps.questionSetIndex, 'questions',
      ownProps.questionIndex, 'input', 'type']),
  };
}
export default connect(mapStateToProps, { updateQuestion })(updateQuestionButton);
