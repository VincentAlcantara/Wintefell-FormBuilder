'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadForm = loadForm;
exports.createForm = createForm;
exports.editFormTitle = editFormTitle;
exports.editPageHeader = editPageHeader;
exports.editPageText = editPageText;
exports.editQuestionSetHeader = editQuestionSetHeader;
exports.editQuestionSetText = editQuestionSetText;
exports.editQuestionId = editQuestionId;
exports.editQuestion = editQuestion;
exports.editQuestionText = editQuestionText;
exports.editQuestionPostText = editQuestionPostText;
exports.addQuestionOption = addQuestionOption;
exports.editQuestionOptionText = editQuestionOptionText;
exports.editQuestionOptionValue = editQuestionOptionValue;
exports.deleteQuestionOption = deleteQuestionOption;
exports.goToPage = goToPage;
exports.updateForm = updateForm;
exports.addPage = addPage;
exports.addQuestion = addQuestion;
exports.changeCurrentEditingField = changeCurrentEditingField;
exports.updateQuestion = updateQuestion;

var _constants = require('../common/constants');

function loadForm(schema) {
  return {
    type: _constants.LOAD_FORM_SUCCESS,
    payload: { schema: schema }
  };
}

function createForm(title) {
  return {
    type: _constants.CREATE_FORM_SUCCESS,
    payload: { title: title }
  };
}

function editFormTitle(title) {
  return {
    type: _constants.EDIT_FORM_TITLE_SUCCESS,
    payload: { title: title }
  };
}

function editPageHeader(questionPanelIndex, header) {
  return {
    type: _constants.EDIT_PAGE_HEADER_SUCCESS,
    payload: { questionPanelIndex: questionPanelIndex, header: header }
  };
}

function editPageText(questionPanelIndex, text) {
  return {
    type: _constants.EDIT_PAGE_TEXT_SUCCESS,
    payload: { questionPanelIndex: questionPanelIndex, text: text }
  };
}

function editQuestionSetHeader(currentQuestionSetIndex, header) {
  return {
    type: _constants.EDIT_QUESTION_SET_HEADER_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, header: header }
  };
}

function editQuestionSetText(currentQuestionSetIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SET_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, text: text }
  };
}

function editQuestionId(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_ID_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestion(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestionText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function editQuestionPostText(currentQuestionSetIndex, currentQuestionIndex, text) {
  return {
    type: _constants.EDIT_QUESTION_POST_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, text: text }
  };
}

function addQuestionOption(currentQuestionSetIndex, currentQuestionIndex, questionOptionText, questionOptionValue) {
  return {
    type: _constants.ADD_QUESTION_OPTION_SUCCESS,
    payload: {
      currentQuestionSetIndex: currentQuestionSetIndex,
      currentQuestionIndex: currentQuestionIndex,
      questionOptionText: questionOptionText,
      questionOptionValue: questionOptionValue
    }
  };
}

function editQuestionOptionText(currentQuestionSetIndex, currentQuestionIndex, optionIndex, option) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_TEXT_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, optionIndex: optionIndex, option: option }
  };
}

function editQuestionOptionValue(currentQuestionSetIndex, currentQuestionIndex, optionIndex, value) {
  return {
    type: _constants.EDIT_QUESTION_OPTION_VALUE_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, optionIndex: optionIndex, value: value }
  };
}

function deleteQuestionOption(currentQuestionSetIndex, currentQuestionIndex, questionOptionIndex) {
  return {
    type: _constants.DELETE_QUESTION_OPTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, questionOptionIndex: questionOptionIndex }
  };
}

function goToPage(panelId) {
  return {
    type: _constants.GOTO_PAGE_SUCCESS,
    payload: { panelId: panelId }
  };
}

function updateForm(schema) {
  return {
    type: _constants.UPDATE_FORM_SUCCESS,
    payload: { schema: schema }
  };
}

function addPage(panelId, panelHeader, panelText) {
  return {
    type: _constants.ADD_PAGE_SUCCESS,
    payload: { panelId: panelId, panelHeader: panelHeader, panelText: panelText }
  };
}

function addQuestion(currentPanelId, questionSetId, questionSetHeader, questionSetText, question, questionText, questionType) {
  return {
    type: _constants.ADD_QUESTION_SUCCESS,
    payload: {
      currentPanelId: currentPanelId,
      questionSetId: questionSetId,
      questionSetHeader: questionSetHeader,
      questionSetText: questionSetText,
      question: question,
      questionText: questionText,
      questionType: questionType }
  };
}

function changeCurrentEditingField(currentEditingField, currentQuestionSetIndex, currentQuestionIndex) {
  return {
    type: _constants.CHANGE_EDITING_FIELD_SUCCESS,
    payload: { currentEditingField: currentEditingField, currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex }
  };
}

function updateQuestion(currentQuestionSetIndex, currentQuestionIndex, question, questionText) {
  return {
    type: _constants.UPDATE_QUESTION_SUCCESS,
    payload: { currentQuestionSetIndex: currentQuestionSetIndex, currentQuestionIndex: currentQuestionIndex, question: question, questionText: questionText }
  };
}