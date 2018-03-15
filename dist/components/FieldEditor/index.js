'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactBootstrap = require('react-bootstrap');

var _PageEditor = require('./PageEditor');

var _PageEditor2 = _interopRequireDefault(_PageEditor);

var _QuestionSetEditor = require('./QuestionSetEditor');

var _QuestionSetEditor2 = _interopRequireDefault(_QuestionSetEditor);

var _QuestionEditor = require('./QuestionEditor');

var _QuestionEditor2 = _interopRequireDefault(_QuestionEditor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function FieldEditor(props) {
  var currentEditingField = props.currentEditingField,
      currentPanelIndex = props.currentPanelIndex,
      currentQuestionSetIndex = props.currentQuestionSetIndex,
      currentQuestionIndex = props.currentQuestionIndex;


  return _react2.default.createElement(
    _reactBootstrap.Row,
    null,
    _react2.default.createElement(
      _reactBootstrap.Col,
      { xs: 12 },
      currentEditingField === 'page' && _react2.default.createElement(_PageEditor2.default, {
        currentPanelIndex: currentPanelIndex
      }),
      currentEditingField === 'questionSet' && _react2.default.createElement(_QuestionSetEditor2.default, {
        currentQuestionSetIndex: currentQuestionSetIndex
      }),
      currentEditingField === 'question' && _react2.default.createElement(_QuestionEditor2.default, {
        currentQuestionSetIndex: currentQuestionSetIndex,
        currentQuestionIndex: currentQuestionIndex
      })
    )
  );
}

FieldEditor.propTypes = {
  currentEditingField: _propTypes2.default.string.isRequired,
  currentPanelIndex: _propTypes2.default.number.isRequired,
  currentQuestionSetIndex: _propTypes2.default.number,
  currentQuestionIndex: _propTypes2.default.number
};

FieldEditor.defaultProps = {
  currentQuestionSetIndex: null,
  currentQuestionIndex: null
};

exports.default = FieldEditor;