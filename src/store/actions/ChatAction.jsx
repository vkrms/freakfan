import {
  FETCH_CHAT_USERS_START,
  FETCH_CHAT_USERS_SUCCESS,
  FETCH_CHAT_USERS_FAILURE,
  FETCH_CHAT_MESSAGE_START,
  FETCH_CHAT_MESSAGE_SUCCESS,
  FETCH_CHAT_MESSAGE_FAILURE,
  SAVE_CHAT_USERS_START,
  SAVE_CHAT_USERS_SUCCESS,
  SAVE_CHAT_USERS_FAILURE,
  ADD_MESSAGE_CONTENT,
  ADD_MESSAGE_CONTENT_START,
  ADD_MESSAGE_CONTENT_SUCCESS,
  SEND_BULK_MESSAGE_START,
  SEND_BULK_MESSAGE_SUCCESS,
  SEND_BULK_MESSAGE_FAILURE,
} from "./ActionConstant";

export function fetchChatUsersStart(data) {
  return {
    type: FETCH_CHAT_USERS_START,
    data,
  };
}

export function fetchChatUsersSuccess(data) {
  return {
    type: FETCH_CHAT_USERS_SUCCESS,
    data,
  };
}

export function fetchChatUsersFailure(error) {
  return {
    type: FETCH_CHAT_USERS_FAILURE,
    error,
  };
}

export function fetchChatMessageStart(data) {
  return {
    type: FETCH_CHAT_MESSAGE_START,
    data,
  };
}

export function fetchChatMessageSuccess(data) {
  return {
    type: FETCH_CHAT_MESSAGE_SUCCESS,
    data,
  };
}

export function fetchChatMessageFailure(error) {
  return {
    type: FETCH_CHAT_MESSAGE_FAILURE,
    error,
  };
}

export function addMessageContent(data) {
  return {
    type: ADD_MESSAGE_CONTENT,
    data,
  };
}

export function saveChatUserStart(data) {
  return {
    type: SAVE_CHAT_USERS_START,
    data,
  };
}

export function saveChatUserSuccess(data) {
  return {
    type: SAVE_CHAT_USERS_SUCCESS,
    data,
  };
}

export function saveChatUserFailure(error) {
  return {
    type: SAVE_CHAT_USERS_FAILURE,
    error,
  };
}
export function fetchChatMoreDataStart(data) {
  return {
    type: ADD_MESSAGE_CONTENT_START,
    data,
  };
}

export function fetchChatMoreDataSucess(data) {
  return {
    type: ADD_MESSAGE_CONTENT_SUCCESS,
    data,
  };
}

export function sendBulkMessageStart(data) {
  return {
    type: SEND_BULK_MESSAGE_START,
    data,
  };
}

export function sendBulkMessageSuccess(data) {
  return {
    type: SEND_BULK_MESSAGE_SUCCESS,
    data,
  };
}

export function sendBulkMessageFailure(error) {
  return {
    type: SEND_BULK_MESSAGE_FAILURE,
    error,
  };
}